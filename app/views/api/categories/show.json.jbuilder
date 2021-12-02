json.extract! @category, :id, :title, :photo
json.partial! "api/categories/category", category: @category