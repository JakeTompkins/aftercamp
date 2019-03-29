class UsersController < ApplicationController
  before_action :authenticate_user, only: [:update, :return_current_user]

  def return_current_user
    @user = current_user
    if @user
      p "----------------------User verified!!"
      render_data @user.as_json_extended
    else
      p "--------------------------User not verified!!!!"
      render_error "User not logged in"
    end
  end

  def register
    @user = User.new(user_params)
    if @user.save
      render_data @user.as_json
    else
      @user.errors.each { |error, message| p "#{error}: #{message}" }
      render_error "User could not be saved"
    end
  end

  def update
    @user = current_user
    if @user
      @user.update(user_params)
      if @user.is_grad?
        @user.roleable.update(grad_params)
      elsif @user.is_employer?
        @user.roleable.update(employer_params)
      end

      if !@user.role
        case
        when params[:grad]
          g = Grad.new(grad_params)
          @user.roleable = g
          @user.save
        when params[:employer]
          e = Employer.new(employer_params)
          @user.roleable = e
          @user.save
        end
      end
    end

    render_data "User updated successfully"
  end

  def index_grads
    @grads = User.where(roleable_type: Grad)
    render_data @grads.as_json
  end

  def show_grad
    @grad = User.find(params[:id])
    if @grad.is_grad?
      render_data @grad.as_json
    else
      render_error "Selected user is not a graduate"
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :name)
  end

  def grad_params
    params.require(:grad).permit(:camp, :github, :target_salary, :stack, :graduation_date, :cv)
  end

  def employer_params
    params.require(:employer).permit(:industy, :company_name)
  end
end
