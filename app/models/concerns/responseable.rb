module Responseable 
    extend ActiveSupport::Concern
    included do
        has_one :response
    end
end