import * as CatApiUtil from '../util/category_api_util';
export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES"
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY"

const receiveCategories = categories => ({
    type: RECEIVE_ALL_CATEGORIES,
    categories
})

const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
})

export const fetchCategories = () => dispatch => {
    return CatApiUtil.fetchCategories()
        .then(categories => dispatch(receiveCategories(categories)))
}

export const createCategory = category => dispatch => {
    return CatApiUtil.createCategory(category)
        .then(category => dispatch(receiveCategory(category)))
}