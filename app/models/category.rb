class Category < ApplicationRecord
  has_many :topics, dependent: :destroy
  validates :title, presence: true
  validates :description, presence: true
end
