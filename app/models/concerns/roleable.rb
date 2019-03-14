module Roleable 
    extend ActiveSupport::Concern
    included do
        has_one :user
    end
end