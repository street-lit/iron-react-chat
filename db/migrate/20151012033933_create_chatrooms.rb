class CreateChatrooms < ActiveRecord::Migration
  def change
    create_table :chatrooms do |t|
      t.string :name, null: false
      t.string :topic, default: "No Topic Chosen"

      t.timestamps null: false
    end
  end
end
