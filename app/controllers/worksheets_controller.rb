class WorksheetsController < ApplicationController

  def show
    @worksheet = Worksheet.find(params[:id])
     # authorize @worksheet
  end

  def edit
    @classroom = Classroom.find(params[:classroom_id])
    @work_group = WorkGroup.find(params[:work_group])
    @worksheet = Worksheet.find(params[:id])
  end


  def update
    @classroom = Classroom.find(params[:classroom_id])
    @work_group = WorkGroup.find(params[:work_group])
    @worksheet = Worksheet.find(params[:id])
    if @worksheet.update(worksheet_params)
      # TODO redirect using JSON ?
    else
      render :edit
    end
  end

  private

  def worksheet_params
    params.require(:worksheet).permit(:work_group_id)
  end

end
