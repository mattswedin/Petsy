json.extract! category, :id, :title, :photo

if category.photo.attached? 
    json.photo url_for(category.photo)
else 
    json.photo 'https://petsy-categories.s3.amazonaws.com/bay_cat.jpeg'
end