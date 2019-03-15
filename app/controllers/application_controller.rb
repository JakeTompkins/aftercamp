class ApplicationController < ActionController::Base
#   protect_from_forgery with: :exception
  include Knock::Authenticable

  def render_error message
    render json: {error: message}
  end

  def render_data(data, status=200)
    render json: {status: status, data: data}
  end

  def try_save entity
    if entity.save
        render_data entity
    else
        entity.errors.each {|attribute, message| p "#{attribute}: #{message}"}
        render_error "#{entity.class} could not be created"
    end
  end

  def try_destroy entity
    if entity.destroy
        render_data
    else
        entity.errors.each {|attribute, message| p "#{attribute}: #{message}"}
        render_error "#{entity.class} could not be destroyed"
    end
  end
end
