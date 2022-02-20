import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFavRecipe, addRecipeID} from "../features/redux";
import {useNavigate} from "react-router-dom";

const AllRecipeMap = ({x, i}) => {
    const redux = useSelector(state => state.redux.value.favRecipe)
    const reduxID = useSelector(state => state.redux.value.newRecipe)
    const dispatch = useDispatch()
    const nav = useNavigate()

    function addFavourite () {
        const added = redux.find(item => item === x)
        if (!added) {
            dispatch(addFavRecipe(x))
        }

    }
    const singePageLink = () => {
        const singleLink = x.title.replace(' ', '-').toLowerCase()
        nav(`/recipe/${singleLink}/${reduxID[i].id}`)

    }
    const rating = reduxID[i].review.length ? (reduxID[i].review.reduce((a, b)=>a + b.rating, 0)/reduxID[i].review.length).toFixed(1) : 'Not rated';
    console.log(rating)

    return (
        <div className='recipeListCard' key={i}>
            <img src={x.photo[0]} alt=""/>
            <h1>{x.title}</h1>
            <h3>Ingredients: {x.ingredient.length}</h3>
            <h3>Preparation time: {x.time} min</h3>
            <h3>Steps: {x.steps.length}</h3>
            <h3>Rating: {rating}</h3>
            <button onClick={addFavourite}>Add to favourites</button>
            <button onClick={singePageLink}>More about the Recipe</button>
        </div>
    );
};

export default AllRecipeMap;