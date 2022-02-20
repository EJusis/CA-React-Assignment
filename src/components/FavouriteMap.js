import React from 'react';
import {useDispatch} from "react-redux";
import {removeFavRecipe} from "../features/redux";

const FavouriteMap = ({x, i}) => {
    const dispatch = useDispatch()

    function removeFromList (index) {
        dispatch(removeFavRecipe({index}))
    }

    return (
        <div className='recipeListCard' key={i}>
            <img src={x.photo[0]} alt=""/>
            <h1>{x.title}</h1>
            <h3>Ingredients: {x.ingredient.length}</h3>
            <h3>Preparation time: {x.time} min</h3>
            <h3>Steps: {x.steps.length}</h3>
            <h3>Rating:</h3>
            <button onClick={() => removeFromList(i)}>Remove</button>
        </div>
    );
};

export default FavouriteMap;