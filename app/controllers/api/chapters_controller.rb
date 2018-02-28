class Api::ChaptersController < ApplicationController
    def index
        @chapters = Adventure.find(params[:adventure_id]).chapters
        
        render json: @chapters
        end
    
        def create
            actual_real_params = chapter_params
            actual_real_params[:adventure_id] = params[:adventure_id]
            @chapter = Chapter.create!(actual_real_params)
        
        render json: @chapter
        end
    
        def update
        @chapter = Chapter.find(params[:id])
        @chapter.update!(chapter_params)
    
        render json: @chapter
        end
    
        def destroy
        @chapter = Chapter.find(params[:id]).destroy
        render status: :ok
        end
    
        private
        def chapter_params
            params[:chapter][:descriptions] ||=[]
            params.require(:chapter).permit(:title, :intro,  :map, instructions:  [:title, :description], descriptions: [])
        end
end
