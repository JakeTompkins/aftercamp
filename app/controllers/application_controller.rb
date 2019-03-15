class ApplicationController < ActionController::Base
#   protect_from_forgery with: :exception
  include Knock::Authenticable
  def render_error message
    render json: {error: message}
  end

  def render_data(data, status=200)
    render json: {status: status, data: data}
  end
end
