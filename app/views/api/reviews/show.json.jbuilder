json.extract! @review, :ranking, :body, :author_id, :id, :pet_id, :created_at
json.partial! "api/reviews/review", review: @review