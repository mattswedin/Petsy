export const fetchCategories = () => {
    return $.ajax({
        url: "/api/categories",
        method: "GET"
    });
};

export const fetchCategory = (categoryId) => {
    return $.ajax({
        url: `/api/categories/${categoryId}`,
        method: "GET"
    });
};

export const createCategory = (category) => {
    return $.ajax({
        url: "/api/categories",
        method: "POST",
        data: { category }
    });
};