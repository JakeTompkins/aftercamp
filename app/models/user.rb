class User < ApplicationRecord
  belongs_to :roleable, polymorphic: true
  has_secure_password
  validates :email, presence: true

  def to_token_payload
    {
        sub: id,
        email: email
    }
  end

    def try_save
        if self.save
            render json: {status: 200, message: "User saved"}
        else
            self.errors.each {|attribute, message| p "#{attribute}: #{message}"}
            render_error "User could not be created"
        end
    end

    def is_grad?
        self.roleable.class == Grad
    end

    def is_employer?
        self.roleable == Employer
    end
end
