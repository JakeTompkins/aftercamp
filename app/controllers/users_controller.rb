class UsersController < ApplicationController
    before_action :authenticate_user, only: [:update, :destroy]
  def register
    @user = User.new(user_params)

    case
        when params[:grad]
            grad = Grad.new(grad_params)
            @user.roleable = grad
        when params[:employer] === 1
            employer = Employer.new(employer_params)
            @user.roleable = employer
    end

    if @user.save
        render json: {status: 200, message: "User saved"}
    else
        @user.errors.each {|attribute, message| p "#{attribute}: #{message}"}
        render json: {error: "User could not be created"}
    end
  end

  def update
  end

  def destroy
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
