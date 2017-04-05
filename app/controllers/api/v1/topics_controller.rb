class Api::V1::TopicsController < Api::V1::BaseController
  def create
    respond_with :api, :v1, Topic.create(topic_params)
  end

  def destroy
    respond_with Topic.destroy(params[:id])
  end

  def update
    topic = Topic.find(params["id"])
    topic.update_attributes(topic_params)
    respond_with topic, json: topic
  end

  private

  def topic_params
    params.require(:topic).require(:title, :description)
  end
end
