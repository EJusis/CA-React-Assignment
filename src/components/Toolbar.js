import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Toolbar = () => {
    const redux = useSelector(state => state.redux.value.favRecipe)
    const nav = useNavigate()
    return (
        <div className='toolbarWrap d-flex'>
            <img onClick={() => nav('/')} src="https://www.freeiconspng.com/thumbs/restaurant-icon-png/food-fork-knife-lunch-restaurant-icon--22.png" alt=""/>
            <h3 className='breadCrumb'><Link to='/create-recipe'>Create recipe</Link></h3>
            <div className='d-flex'>
                {redux.length >= 1 &&
                <div className='toolbarFavLength'>
                    <p>{redux.length}</p>
                </div> }
                <h3 className='breadCrumb'><Link to='/favourites'>My Favourites</Link></h3>
            </div>

        </div>
    );
};

export default Toolbar;