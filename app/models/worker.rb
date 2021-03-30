class Worker < ApplicationRecord
  has_many :services, dependent: :destroy
end
