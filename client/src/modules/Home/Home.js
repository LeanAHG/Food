import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { getRecipes } from '../../store/actions/RecipesActions';
import "./Home.css";
import { NavLink } from 'react-router-dom';
import Filter from '../Filter/Filter';

const renderData = (recipes) => {
    return (<div className="contenedor2">
        {recipes && recipes.length !== 0 ?
            recipes.map((recipe) => {
                return <div key={recipe.id} className="card">
                    <NavLink to={`/recipes/${recipe.id}`}>
                        <img src={recipe.image} alt="Foto de la receta" className="Foto"></img> 
                        <p className="recipeName">{recipe.title}</p></NavLink>
                    {recipes.diets && <p>Types of Diet: {recipe.diets.length !== 0? recipe.diets.map(diet => Object.values(diet)).join(", ").toLowerCase(): "Not available"}</p>}
                    {recipes.dietaTypes && <p>Types of Diet: {recipe.dietaTypes.length !== 0? recipe.dietaTypes.map(diet => Object.values(diet)).join(", ").toLowerCase(): "Not available"}</p>}
                </div>
            }) : <img className='loading' src="https://media.giphy.com/media/C8Vomoiu8j0FzOw4Hv/giphy.gif?cid=ecf05e4756h6ebsdmxy4ue0w7i8iqfluxaq0x6n5ozkgdmho&rid=giphy.gif&ct=s"/>}</div>)
}

function PaginationComponent({ recipes, getRecipes }) {
    function getRecipesFunction() {
        getRecipes()
    }
    useEffect(() => {
        getRecipesFunction()
    }, [])
    
    const [render, setRender] = useState(recipes)

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(9);

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(recipes.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = recipes.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    return !currentItems? null : (
        
        <div><Filter />
            <br />
            {renderData(currentItems)}
            <ul className="pageNumbers">
                <li>
                    <button
                        onClick={handlePrevbtn}
                        disabled={currentPage === pages[0] ? true : false}
                    >
                        Prev
                    </button>
                </li>
                {renderPageNumbers}
                <li>
                    <button
                        onClick={handleNextbtn}
                        disabled={currentPage === pages[pages.length - 1] ? true : false}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getRecipes: recipes => {
            dispatch(getRecipes(recipes))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent)