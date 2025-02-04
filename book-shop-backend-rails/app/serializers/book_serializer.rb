class BookSerializer < ActiveModel::Serializer
  # attributes :id
  include Rails.application.routes.url_helpers

  attributes :id, :name, :description, :author, :image

  def image
    return unless object.image.attached?

    object.image.blob.attributes
          .slice('filename', 'byte_size')
          .merge(url: image_url)
          .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end

  def image_url
    url_for(object.image)
  end
end
