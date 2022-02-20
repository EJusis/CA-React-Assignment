import React, {useRef, useState} from 'react';
import {useSelector} from "react-redux";
import AllRecipeMap from "./AllRecipeMap";

const MainpageComp = () => {

    const redux = useSelector(state => state.redux.value.newRecipe)
    const [getByIngredient, setByIngredient] = useState('')
    const [getByAmount, setByAmount] = useState('')
    const [getByReview, setByReview] = useState('')
    const [getByTime, setByTime] = useState('')
    const [getByRating, setByRating] = useState('')



    const byIngredient = useRef()
    const byAmount = useRef()
    const byReview = useRef()
    const byTimes = useState()
    const byRating = useState()



    return (
        <div className='mainPageMapWrap'>
            <div className='filterWrap'>
                <input type="text" ref={byIngredient} placeholder='Search by ingredient'
                       onChange={() => setByIngredient(byIngredient.current.value)}/>
                <input type="number" ref={byAmount} placeholder='Amount of ingredients'
                       onChange={() => setByAmount(byAmount.current.value)}/>
                <input type="number" ref={byReview} placeholder='Number of reviews'
                       onChange={() => setByReview(byReview.current.value)}/>
                <input type="number" ref={byTimes} placeholder='Preparation time (mins)'
                       onChange={() => setByTime(byTimes.current.value)}/>
                <div className='d-flex col'>
                    <label htmlFor="rating">Average rating(0-5):</label>
                    <input ref={byRating} type="range" id='rating' placeholder='Average rating' defaultValue='0'
                           min='0'
                           max='5' onChange={() => setByRating(byRating.current.value)}/>
                </div>


            </div>
            <h1>Main page (recipe list)</h1>

            <div className='recipeListCardWrap'>

                {redux.filter((passedFilter) => {
                    if (getByIngredient === '') {
                        return passedFilter
                    }
                    if (passedFilter.ingredient.includes(getByIngredient.toLowerCase())) {
                        return passedFilter
                    }
                }).filter((passedFilter) => {
                    if (getByAmount === '') {
                        return passedFilter
                    }
                    if (passedFilter.ingredient.length === Number(getByAmount)) {
                        return passedFilter
                    }
                }).filter(((passedFilter) => {
                    if (getByReview === '') {
                        return passedFilter
                    }
                    if (passedFilter.review.length === Number(getByReview)) {
                        return passedFilter
                    }
                })).filter((passedFilter) => {
                    if (getByTime === '') {
                        return passedFilter
                    }
                    if (passedFilter.time === getByTime) {
                        return passedFilter
                    }
                }).filter((passedFilter) => {
                    if (getByRating === '') {
                        return passedFilter
                    }
                    if (Math.round(passedFilter.rating.reduce((a, b) => a + b, 0) / passedFilter.rating.length) === Number(getByRating)) {
                        return passedFilter
                    }
                }).map((x, i) =>
                    <AllRecipeMap x={x} i={i} key={i}/>)}

            </div>
        </div>
    );
};

export default MainpageComp;
