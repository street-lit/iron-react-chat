json.array!(@chatrooms) do |chatroom|
  json.extract! chatroom, :id, :name, :topic, :message_id
  json.url chatroom_url(chatroom, format: :json)
end
