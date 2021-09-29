import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { getTypes } from '../../store/actions/RecipesActions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "./FormContainer.css"
import Form from '../Form/Form';

const initialForm = {
    title: '',
    summary: '',
    spoonacularScore: 0,
    aggregateLikes: 0,
    healthScore: 0,
    instructions: '',
    diets: [],
    image: ''
}

export function validate(input) {
    let errors = {};
    if (!input.title) {
        errors.title = 'Title is required';
    }
    if (!input.summary) {
        errors.summary = 'Summary is required';
    }
    if (!/^[1-9][0-9]?$|^100$/g.test(input.spoonacularScore)) {
        errors.spoonacularScore = 'Score is required and must be in a range from 1 - 100';
    }
    if (!/^[1-9][0-9]?$|^100$/g.test(input.healthScore)) {
        errors.healthScore = 'Health Score is required and must be in a range from 1 - 100';
    }
    return errors;
};

function FormContainer(props) {
    function getTypesFunction() {
        props.getTypes()
    }
    useEffect(() => {
        getTypesFunction()
    }, [])



    const [input, setInput] = React.useState(initialForm);

    const [errors, setErrors] = React.useState({});

    const handleInputChange = function (e) {
        setInput(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));

        let objError = validate({
            ...input, [e.target.name]: e.target.value
        });
        setErrors(objError);
    };

    function handleSelect(e) {
        if (e.target.checked) {
            setInput((prev) => ({ ...prev, diets: [...prev.diets, e.target.value] }));
        } else {
            setInput((prev) => ({ ...prev, diets: [...prev.diets].filter((typeDiet) => e.target.value !== typeDiet) }));
        }
    };

    const onSubmit = async function (e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/recipe", JSON.stringify(input), {
                headers: { "Content-Type": "application/json" },
            });
            setInput(initialForm)
            alert('Recipe created successfully!');
        } catch (error) {
            console.log(error)
            alert('We could not create recipe. Please try again.');
        }
    }

    return (
        <div>
            <h1 className="create">Create a Recipe</h1>
            <NavLink to='/recipes'>
                <button className="botonBack">Back</button>
            </NavLink>
            <Form
            handleInputChange={handleInputChange}
            input={input}
            onSubmit={onSubmit}
            errors={errors}
            diets={props.diets}
            handleSelect={handleSelect}/>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        diets: state.diets
    }
}


export default connect(mapStateToProps, { getTypes })(FormContainer)