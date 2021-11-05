export const fetchCategories = () => {
    return $.ajax({
        url: "/api/categories",
        method: "GET"
    });
};

export const createCategory = (category) => {
    return $.ajax({
        url: "/api/categories",
        method: "POST",
        date: { category }
    });
};