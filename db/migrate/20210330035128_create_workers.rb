class CreateWorkers < ActiveRecord::Migration[6.1]
  def change
    create_table :workers do |t|
      t.string :title
      t.string :specialty

      t.timestamps
    end
  end
end
