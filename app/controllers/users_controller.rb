class UsersController < ApplicationController
    before_action :authenticate_user, only: [:update]
  def register
    @user = User.new(user_params)

    case
        when params[:grad]
            grad = Grad.new(grad_params)
            @user.roleable = grad
        when params[:employer]
            employer = Employer.new(employer_params)
            @user.roleable = employer
        else
            render_error "User must have a type"
    end

    try_save @user
  end

  def update
    if current_user
        current_user.update(user_params)
        if current_user.is_grad?
            current_user.roleable.update(grad_params)
        else
            current_user.roleable.update(employer_params)
        end
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
