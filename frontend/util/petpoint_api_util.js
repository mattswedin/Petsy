export const fetchPetpoints = () => {
    return $.ajax({
        url: "/api/petpoints",
        method: "GET"
    });
};

export const createPetpoint = ( petpoint ) => {
    return $.ajax({
        url: "/api/petpoints",
        method: "POST",
        data: { petpoint }
    });
};