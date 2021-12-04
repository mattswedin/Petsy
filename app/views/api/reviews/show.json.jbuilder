json.extract! @review, :ranking, :body, :author_id, :id, :pet_id
json.partial! "api/reviews/review", review: @review