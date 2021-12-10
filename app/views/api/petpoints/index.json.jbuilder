@petpoints.each do |petpoint|
    json.set! petpoint.id do
        json.partial! 'petpoint', petpoint: petpoint
    end
end