class Comment < ApplicationRecord
  belongs_to :service

  validates :rating, numericality: {
    less_than_or_equal_to: 5,
    message: "must be 5 or under"
  }
  validates :rating, numericality: {
    greater_than_or_equal_to: 1,
    message: "must be 1 or more"
  }
  
end
