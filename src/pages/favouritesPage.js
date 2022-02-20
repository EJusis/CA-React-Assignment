import React from 'react';
import {useSelector} from "react-redux";
import FontawesomeArrow from "../components/FontawesomeArrow";
import {Link} from "react-router-dom";
import FavouriteMap from "../components/FavouriteMap";

const FavouritesPage = () => {
    const redux = useSelector(state => state.redux.value.favRecipe)
    return (
        <div className='favouritesPageWrap col'>
            <div className='d-flex breadCrumb'>
                <FontawesomeArrow/>
                <p><Link to='/'>Main page</Link></p>
            </div>
            <h1>Favourite Recipes</h1>

            <div className="recipeListCardWrap">
                {redux.map((x, i) =>
                    <FavouriteMap x={x} i={i} key={i}/>
                )}

            </div>

        </div>
    );
};

export default FavouritesPage;