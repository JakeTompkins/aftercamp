class JobsController < ApplicationController
    before_action :authenticate_user, only: [:create, :update, :delete]
    before_action :get_job, only: [:update, :delete]
    before_action :confirm_user_is_employer, only:[:create]
    before_action :confirm_user_is_owner, only:[:update, :delete]

  def index
    @jobs = Job.all
    render_data @jobs.as_json
  end

  def create
    @job = Job.new(job_params)
    @job.employer = current_user.roleable
    if @job.save
        render_data @job.as_json
    else
        render_error "Job could not be created"
    end
  end

  def show
    render_data @job
  end

  def update
    if @job.update(job_params)
        render_data @job.as_json
    else
        render_error "Job could not be updated"
    end
  end

  def destroy
    if @job.destroy
        render_data "Job destroyed"
    else
        render_error "Job could not be destroyed"
    end
  end

  private

  def confirm_user_is_employer
    render_error "Current user is not an employer" if !current_user.is_employer?
  end

  def confirm_user_is_owner
    render_error "Current user does not own this job" if !current_user.roleable == @job.employer
  end

  def get_job
    @job = Job.find(params[:id])
  end

  def job_params
    params.require(:job).permit(:role, :description, :salary_range, :location)
  end
end
