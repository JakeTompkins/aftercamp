class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def try_save
    if self.save
        render_data self
    else
        self.errors.each {|attribute, message| p "#{attribute}: #{message}"}
        render_error "#{self.class} could not be saved"
    end
  end

  def try_update parameters
    if self.update(parameters)
        render_data self
    else
        self.errors.each {|attribute, message| p "#{attribute}: #{message}"}
        render_error "#{self.class} could not be updated"
    end
  end

  def try_destroy
    if self.destroy
        render_data
    else
        self.errors.each {|attribute, message| p "#{attribute}: #{message}"}
        render_error "#{self.class} could not be destroyed"
    end
  end
end
