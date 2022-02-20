import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";
import ReactStars from "react-rating-stars-component";
import {addFavRecipe} from "../features/redux";
import ProductReview from "../components/ProductReview";
import ProductReviewComment from "../components/ProductReviewComment";

const SingleRecipePage = () => {
    let {id} = useParams()
    const dispatch = useDispatch()
    const redux = useSelector(state => state.redux.value.newRecipe)
    const reduxFav = useSelector(state => state.redux.value.favRecipe)
    const realID = id - 1
    function addFavourite () {
        const added = reduxFav.find(item => item === redux[realID])
        if (!added) {
            dispatch(addFavRecipe(redux[realID]))
    }}

    const images = [
        {url: `${redux[realID].photo[0]}`},
        {url: `${redux[realID].photo[1]}`}
    ]

    const rating = redux[realID].review.length ? (redux[realID].review.reduce((a, b)=>a + b.rating, 0)/redux[realID].review.length).toFixed(1) : 'Not rated';





    return (
        <div className='singleRecipePageWrap col'>
            <div className="productPart">
                <div className="slider grow1">
                    <SimpleImageSlider width={500} height={400} images={images} showNavs={true} showBullets={true}/>
                </div>
                <div className="productInfo grow1 col">
                    <div className='d-flex'>
                        <h1>Rating:</h1>
                        <ReactStars
                            count={5}
                            onChange={rating}
                            size={40}
                            activeColor="#ffd700"
                            value={rating}
                        />
                        <h1>({rating})</h1>
                    </div>
                    <h2>{redux[realID].title}</h2>
                    <div className='d-flex col ingredientsInner'>
                        <h3>For this recipe you will need:</h3>
                        {redux[realID].ingredient.map((x, i) =>
                            <ul>
                                <li key={i}>{x}</li>
                            </ul>)}
                    </div>
                    <div className="stepsInner d-flex col">
                        <h3>Preparation steps:</h3>
                        {redux[realID].steps.map((x, i) =>
                            <ul>
                                <li key={i}>{x}</li>
                            </ul>)}
                    </div>
                    <h4>Preparation time: {redux[realID].time} minutes</h4>
                    <button onClick={() => addFavourite()}>Add to favourites</button>




                </div>
            </div>
            <ProductReview realID={realID}/>
            <ProductReviewComment realID={realID}/>
        </div>
    );
};

export default SingleRecipePage;