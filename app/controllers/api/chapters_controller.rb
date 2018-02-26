class Api::ChaptersController < ApplicationController
    def index
        @chapters = Adventure.find(params[:adventure_id]).chapters
        
        render json: @chapters
        end
    
        def create
        @chapter = Chapter.create!(chapter_params)
    
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
            params.require(:chapter).permit(:title, :intro, :instructions, :descriptions, :map)
        end
end
