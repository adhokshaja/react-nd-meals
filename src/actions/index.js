export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

//Use constatnts because strings could have spelling mistakes.

//Action creators

export const addRecipe = ({ day, recipe, meal }) => {
    return {
        type: ADD_RECIPE,
        day,
        meal,
        recipe
    }
}

export const removeFromCalendar = ({ day, meal }) => {
    return {
        type: REMOVE_FROM_CALENDAR,
        day,
        meal
    }
}