class Chatroom < ActiveRecord::Base
  has_many :messages, dependent: :destroy
  has_many :users, through: :messages
end
