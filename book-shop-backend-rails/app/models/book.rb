class Book < ApplicationRecord
  has_one_attached :image

  # def attributes
  #   {
  #     'image_url' => nil
  #   }
  # end

  # def image_url
  #   Rails.application.routes.url_helpers.rails_representation_url(
  #     image.variant(resize_to_limit: [200, 200]).processed, only_path: true
  #   )
  # end
end
