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
end
