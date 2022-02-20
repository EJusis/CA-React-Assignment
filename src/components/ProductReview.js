import React, {useEffect, useRef, useState} from 'react';
import ReactStars from "react-rating-stars-component";
import {useDispatch, useSelector} from "react-redux";
import {addRating, newReview} from "../features/redux";

const ProductReview = ({realID}) => {
    const dispatch = useDispatch()
    const redux = useSelector(state => state.redux.value.newRecipe)
    const [getRating, setRating] = useState(0)
    const review = useRef()
    const ratingChanged = (newRating) => {
        setRating(newRating)
    };


    function createReview() {
        const newObj = {
            rating: Number(getRating),
            comment: review.current.value
        }
        dispatch(newReview({newObj,realID}))
        dispatch(addRating({getRating, realID}))
        setRating(0)
        review.current.value = ''
    }



    return (
        <div className='d-flex col'>
            <div className="createReview">
                <div className='d-flex'>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={40}
                        activeColor="#ffd700"
                        value={getRating}
                    />
                    <h2>({getRating})</h2>
                </div>
                <div className="reviewInput">
                    <input type="text" placeholder='Leave a review!' ref={review}/>
                    <button onClick={() => createReview()}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;