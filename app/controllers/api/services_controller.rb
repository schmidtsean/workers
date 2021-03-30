class Api::ServicesController < ApplicationController
  before_action :set_worker
  before_action :set_service, except: [:index, :create]
  def index
    render json: @worker.services
  end

  def show
    render json: @service
  end

  def create
    @service = @worker.services.new(service_params)
    if @service.save
      render json: @service
    else
      render json: { errors: @service.errors },
      status: :unprocessable_entity
    end
  end

  def update
    if @service.update(service_params)
      render json: @service
    else
      render json: {errors: @service.errors },
      status: :unprocessable_entity
    end
  end

  def destroy
    @service.destroy
    render json: { message: 'Service Deleted' }
  end

  private
    def service_params
      params.require(:service).permit(:title, :body)
    end

    def set_worker
      @worker = Worker.find(params[:id])
    end

    def set_service
      @service = @worker.services.find(params[:id])
    end

end
