import React, {useRef, useState} from 'react';
import FontawesomeArrow from "./FontawesomeArrow";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addNewRecipe} from "../features/redux";

const CreateRecipeComp = () => {
    const redux = useSelector(state => state.redux.value.newRecipe)
    const dispatch = useDispatch()
    const nav = useNavigate()
    const currentID = redux.length

    // Use states
    const [getRecipePicture, setRecipePicture] = useState([])
    const [getPhotoTrigger, setPhotoTrigger] = useState(false)
    const [getIngredient, setIngredient] = useState([])
    const [getPreparationSteps, setPreparationSteps] = useState([])
    // Use refs
    const pic1 = useRef()
    const pic2 = useRef()
    const title = useRef()
    const ingredient = useRef()
    const time = useRef()
    const steps = useRef()

    // Functions
    function addPhoto1() {
        if (getRecipePicture.length < 1) {
            setRecipePicture([...getRecipePicture, pic1.current.value])
            setPhotoTrigger(!getPhotoTrigger)
            alert('Provide second picture!')
        } else alert('Photo link missing!')
    }

    function addPhoto2() {
        if (getRecipePicture.length === 1) {
            setRecipePicture([...getRecipePicture, pic2.current.value])
            alert('Photos provided!')
        } else alert('Photo 2 link missing or picture is already provided')
    }

    function addIngredient() {
        setIngredient([...getIngredient, ingredient.current.value])
        ingredient.current.value = ''
    }

    function addPreparationStep() {
        setPreparationSteps([...getPreparationSteps, steps.current.value])
        steps.current.value = ''
    }

    function dispatchNewRecipe() {
        const newObj = {
            photo: getRecipePicture,
            title: title.current.value,
            ingredient: getIngredient,
            time: time.current.value,
            steps: getPreparationSteps,
            id: currentID + 1,
            review: [],
            rating: []
        }
        dispatch(addNewRecipe(newObj))
        alert('Recipe successfully created!')
    }


    return (
        <div className='createRecipeWrap col p-20'>
            <div className='d-flex breadCrumb'>
                <FontawesomeArrow/>
                <p><Link to='/'>Main page</Link></p>
            </div>
            <div className='d-flex-center formWrap p-20'>
                <div className='formInner d-flex col p-20'>
                    <p>Create your own unique recipe!</p>

                    {/*Pictures 1*/}
                    <div className='inputWrap' style={{opacity: getPhotoTrigger ? 0.33 : 1}}>
                        <label htmlFor="photo">Photo:</label>
                        <input type="text" name='photo' ref={pic1}/>
                        <button onClick={addPhoto1}>Add</button>
                    </div>


                    {/*Pictures 2*/}
                    <div className='inputWrap' style={{
                        display: getPhotoTrigger ? 'flex' : 'none',
                        opacity: getRecipePicture.length === 2 ? 0.33 : 1
                    }}>
                        <label htmlFor="photo">Photo 2:</label>
                        <input type="text" name='photo' ref={pic2}/>
                        <button onClick={addPhoto2}>Add</button>
                    </div>

                    {/*Title*/}
                    <div className="inputWrap">
                        <label htmlFor="title">Title:</label>
                        <input type="text" name='title' ref={title}/>
                    </div>


                    {/*Ingredients*/}
                    <div className="inputWrap">
                        <label htmlFor="ingredients">Ingredients:</label>
                        <input type="text" name='ingredients' ref={ingredient}/>
                        <button onClick={addIngredient}>Add</button>
                    </div>

                    {/*Ingredient list*/}
                    <div className="createIngredientStyleWrap"
                         style={{display: getIngredient.length > 0 ? 'flex' : 'none'}}>
                        {getIngredient.map((x, i) =>
                            <div className='createIngredientStyle' key={i}>
                                <p>{x}</p>
                            </div>
                        )}
                    </div>


                    {/*Prep time*/}
                    <div className="inputWrap">
                        <label htmlFor="time">Preparation time (in mins):</label>
                        <input type="number" name='time' ref={time}/>
                    </div>


                    {/*Prep steps*/}
                    <div className="inputWrap">
                        <label htmlFor="steps">Preparation steps:</label>
                        <input type="text" name='steps' ref={steps}/>
                        <button onClick={addPreparationStep}>Add</button>
                    </div>

                    <div className="createIngredientStyleWrap"
                         style={{display: getPreparationSteps.length > 0 ? 'flex' : 'none'}}>
                        {getPreparationSteps.map((x, i) =>
                            <div className='createIngredientStyle' key={i}>
                                <p>{x}</p>
                            </div>
                        )}
                    </div>


                    <button onClick={() => {
                        dispatchNewRecipe();
                        nav('/')
                    }}>Submit recipe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateRecipeComp;