import React from 'react';
import {useSelector} from "react-redux";

const ProductReviewComment = ({ realID }) => {
    const redux = useSelector(state => state.redux.value.newRecipe[realID].review)
    return (
        <div className='d-flex col'>
            <div className='reviewCommentWrap'>
            {redux.map((x, i) =>
                    <div className='mb-10' key={i}>
                        <h1>Rating: {x.rating}</h1>
                        <div className="textArea d-flex">
                            <p>{x.comment}</p>
                        </div>
                    </div>
            )}
        </div>
        </div>
    );
};

export default ProductReviewComment;