class JobsController < ApplicationController
    before_action :authenticate_user, only: [:create, :update, :delete]
    before_action :get_job, only: [:show, :update, :delete]
  def index
    @jobs = Job.all
    render_data @jobs.as_json
  end

  def new
    @job = Job.new
  end

  def create
    @job = Job.new(job_params)
    try_save @job
  end

  def show
    render_data @job
  end

  def update
    @job.update(job_params)
    try_save @job
  end

  def destroy
    try_destroy @job
  end

  private

  def get_job
    @job = Job.find(params[:id])
  end

  def job_params
    params.require(:job).permit(:role, :description, :salary_range, :location)
  end
end
