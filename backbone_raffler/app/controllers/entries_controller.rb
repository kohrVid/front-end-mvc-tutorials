class EntriesController < ApplicationController

  def index
    respond_to do |format|
      format.json { render json: Entry.all }
    end
  end

  def show
    respond_to do |format|
      format.json { render json: Entry.find(params[:id]) }
    end
  end

  def create
    respond_to do |format|
      format.json { Entry.create(entry_params) }
    end
  end

  def update
    respond_to do |format|
      format.json { Entry.update(params[:id], entry_params) }
    end
  end

  def destroy
    respond_to do |format|
      format.json { Entry.destroy(params[:id]) }
    end
  end

  private
    def entry_params
      params.require(:entry).permit(:name, :winner)
    end
end
