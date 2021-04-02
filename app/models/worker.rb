class Worker < ApplicationRecord
  has_many :services, dependent: :destroy

  validates :specialty, presence: true, length: {
    minimum: 2
  }

end
