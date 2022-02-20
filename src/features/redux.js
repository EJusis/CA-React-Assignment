import {createSlice} from "@reduxjs/toolkit";

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        value: {
            newRecipe: [],
            favRecipe: [],
            avgRating: []
        }
    },
    reducers: {
        addNewRecipe: (state, action) => {
            state.value.newRecipe.push(action.payload)
        },
        addFavRecipe: (state, action) => {
            state.value.favRecipe = [...state.value.favRecipe, action.payload]
        },
        removeFavRecipe: (state, action) => {
            const {index} = action.payload
            state.value.favRecipe = state.value.favRecipe.filter((x, i) => i !== index)
        },
        newReview: (state, action) => {
            const {newObj, realID} = action.payload
            state.value.newRecipe[realID].review.push(newObj)
        },
        addRating: (state, action) => {
            const {getRating, realID} = action.payload
            state.value.newRecipe[realID].rating.push(getRating)
        }
    }
})

export const {addNewRecipe, addFavRecipe, removeFavRecipe, newReview, addRating} = reduxSlice.actions

export default reduxSlice.reducer