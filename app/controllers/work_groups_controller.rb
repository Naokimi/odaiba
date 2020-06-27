class WorkGroupsController < ApplicationController

  def index
    @classroom = Classroom.find(params[:classroom_id])
    @work_groups = WorkGroup.all
  end

  def show
    @work_group = WorkGroup.find(params[:id])
    # authorize @work_group
  end


  def new
    @classroom = Classroom.find(params[:classroom_id])
    @work_group = WorkGroup.new
    # authorize @work_group
  end

  def create
    @classroom = Classroom.find(params[:classroom_id])
    @work_group = WorkGroup.new(work_group_params)
    @work_group.classroom = @classroom
    if @work_group.save
      # redirect_to TO DEFINE
    else
      # render json
    end
  end


   private

  def work_group_params
    params.require(:work_group).permit(:name, :video_call_code, :classroom_id)
  end

end
