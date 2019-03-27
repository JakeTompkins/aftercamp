class UsersController < ApplicationController
  before_action :authenticate_user, only: [:update]

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
    if current_user
      current_user.update(user_params)
      if current_user.is_grad?
        current_user.roleable.update(grad_params)
      elsif current_user.is_employer?
        current_user.roleable.update(employer_params)
      end

      if !current_user.role
        case
        when params[:grad]
          g = Grad.new(grad_params)
          current_user.roleable = g
          current_user.save
        when params[:employer]
          e = Employer.new(employer_params)
          current_user.roleable = e
          current_user.save
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
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  def grad_params
    params.require(:grad).permit(:camp, :github, :target_salary, :stack, :graduation_date, :cv)
  end

  def employer_params
    params.require(:employer).permit(:industy, :company_name)
  end
end
