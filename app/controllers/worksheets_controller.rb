class WorksheetsController < ApplicationController

  def show
    @worksheet = Worksheet.find(params[:id])
    # authorize @worksheet
    respond_to do |format|
      # FYI - Test on local host with: http://localhost:3000/classrooms/1/work_groups/1/worksheets/1.json
      format.json { render json: @worksheet.to_json }
    end
  end

  def edit
    @classroom = Classroom.find(params[:classroom_id])
    @work_group = WorkGroup.find(params[:work_group_id])
    @worksheet = Worksheet.find(params[:id])
    respond_to do |format|
       # FYI - Test on local host with: http://localhost:3000/classrooms/1/work_groups/1/worksheets/1/edit.json
      format.json { render json: @worksheet.to_json }
    end
  end


  def update
    @classroom = Classroom.find(params[:classroom_id])
    @work_group = WorkGroup.find(params[:work_group])
    @worksheet = Worksheet.find(params[:id])
    if @worksheet.update(worksheet_params)
      # redirect to the worksheet show page - please feel free to change where it redirects (Julien)
      respond_to do |format|
        format.json { render json: @worksheet.to_json }
      end
    else
      render :edit
    end
  end

  private

  def worksheet_params
    params.require(:worksheet).permit(:work_group_id)
  end

end
