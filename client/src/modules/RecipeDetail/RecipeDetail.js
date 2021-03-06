import React from 'react'
import { useEffect } from "react";
import { connect, useDispatch } from 'react-redux';
import { getDetail } from '../../store/actions/RecipesActions';
import "./RecipeDetail.css"
import { NavLink } from 'react-router-dom';

function RecipeDetail(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [])

    return (
        <div>
            {props.recipeId.length !== 0 ?
                <div className="detail">
                    <div>
                        <h2 className="nombre">
                            {props.recipeId.title}
                        </h2>
                    </div>
                    <div className="dietsPhotoSummary">
                        <div className="dietsPhoto">
                            <img src={props.recipeId.image} alt={"img"} className="fotito" />
                            {props.recipeId.diets && <p className="dietsDetail">Types of Diet: {props.recipeId.diets.length !== 0 ? typeof props.recipeId.diets[0] === "object" ?
                                props.recipeId.diets.map(diet => Object.values(diet)).join(", ") : props.recipeId.diets.map(diet => diet.charAt(0).toUpperCase() + diet.substr(1)).join(", ") : "Not available"}</p>
                            }
                            {props.recipeId.dietaTypes && <p className="dietsDetail">Types of Diet: {props.recipeId.dietaTypes.length !== 0 ? typeof props.recipeId.dietaTypes[0] === "object" ?
                                props.recipeId.dietaTypes.map(diet => Object.values(diet)).join(", ") : props.recipeId.dietaTypes.map(diet => diet.charAt(0).toUpperCase() + diet.substr(1)).join(", ") : "Not available"}</p>
                            }
                        </div>
                        <div className="summary">
                            <p className="summaryTitle">Summary: </p><div dangerouslySetInnerHTML={{ __html: props.recipeId.summary }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="scoresDetail">
                            <p>Score: {props.recipeId.spoonacularScore}</p>
                            <p>Health Score: {props.recipeId.healthScore}</p>
                        </div>
                        <div className="stepsInstructions">
                            <p class="stepsLabel">Steps: </p><div className="stepsInstructions" dangerouslySetInnerHTML={{ __html: props.recipeId.instructions ? props.recipeId.instructions : "Not available" }}></div>
                        </div>
                    </div>
                </div>
                : <img className='loading' src="https://media.giphy.com/media/C8Vomoiu8j0FzOw4Hv/giphy.gif?cid=ecf05e4756h6ebsdmxy4ue0w7i8iqfluxaq0x6n5ozkgdmho&rid=giphy.gif&ct=s"/>
            }
            <NavLink to='/recipes'>
                <button className="botonBackDetail">Back</button>
            </NavLink>
        </div>
    );
}


function mapStateToProps(state) {
    return {
        recipeId: state.recipeDetail
    }
}

export default connect(mapStateToProps, { getDetail })(RecipeDetail);
