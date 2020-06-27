class WorkGroupsController < ApplicationController

  def index
    @classroom = Classroom.find(params[:classroom_id])
    @work_groups = WorkGroup.all
    respond_to do |format|
      # FYI - Test on local host with: http://localhost:3000/classrooms/1/work_groups.json
      format.json { render json: @work_groups.to_json }
    end
  end

  def show
    @work_group = WorkGroup.find(params[:id])
    # authorize @work_group
    respond_to do |format|
      # FYI - Test on local host with: http://localhost:3000/classrooms/1/work_groups/1.json
      format.json { render json: @work_group.to_json }
    end
  end


  def new
    @classroom = Classroom.find(params[:classroom_id])
    @work_group = WorkGroup.new
    # authorize @work_group
    respond_to do |format|
      # FYI - Test on local host with: http://localhost:3000/classrooms/1/work_groups/new.json
      format.json { render json: @work_group.to_json }
    end
  end

  def create
    @classroom = Classroom.find(params[:classroom_id])
    @work_group = WorkGroup.new(work_group_params)
    @work_group.classroom = @classroom
    if @work_group.save
      # redirect to the index of work_groups - choice made by Julien - please feel free to change where it redirects
      respond_to do |format|
        format.json { render json: @work_groups.to_json }
      end
    else
      render :new
    end
  end


   private

  def work_group_params
    params.require(:work_group).permit(:name, :video_call_code, :classroom_id)
  end

end
