import React from 'react';
import './Form.css'

export default function Form(props){
return(
        <div className="formulario">
                <p className="redSub">(*) Please fill in the required field</p>
                <form onSubmit={(e) => props.onSubmit(e)} className="form1">
                    <div className="columnasForm">
                        <div className="tamañoInput">
                            <label>Title (*) </label>
                            <input type="text" name="title"
                                onChange={props.handleInputChange} value={props.input.title} required="required" className="caja" />
                            {
                                props.errors.title && (
                                    <p className="red">{props.errors.title}</p>
                                )
                            }
                        </div>
                        <div className="tamañoInput">
                            <label>Summary (*) </label>
                            <textarea name="summary"
                                onChange={props.handleInputChange} value={props.input.summary} rows="10" cols="50" required="required" className="caja" />
                            {
                                props.errors.summary && (
                                    <p className="red">{props.errors.summary}</p>
                                )
                            }
                        </div>
                        <div className="tamañoInput">
                            <label>Score (*)</label>
                            <input type="number" name="spoonacularScore" min="0" max="100"
                                onChange={props.handleInputChange} value={props.input.spoonacularScore} required="required" className="caja" />
                            {
                                props.errors.spoonacularScore && (
                                    <p className="red">{props.errors.spoonacularScore}</p>
                                )
                            }
                        </div>
                        <div className="tamañoInput">
                            <label>Health Score (*)</label>
                            <input type="number" name="healthScore" min="0" max="100"
                                onChange={props.handleInputChange} value={props.input.healthScore} required="required" className="caja" />
                            {
                                props.errors.healthScore && (
                                    <p className="red">{props.errors.healthScore}</p>
                                )
                            }
                        </div>
                    </div>
                    <div className="columnasForm">
                        <div className="tamañoInput">
                            <label>Steps </label>
                            <textarea name="instructions"
                                onChange={props.handleInputChange} value={props.input.instructions} rows="10" cols="60" className="caja" />
                        </div>
                        <div className="tamañoInput">
                            <label>Select the types of diets</label>
                            {/* {props.dietaTypes && props.dietaTypes.length !== 0 ? (<div className="cajitas"> {props.dietaTypes.map((e) => (
                                <div className="spaciar">
                                    <div key={e.id} className="checkboxs">
                                        <input onChange={props.handleSelect} type="checkbox" value={e.id} /> {e.category}
                                    </div></div>
                            ))}</div>) : " Loading"} */}
                            {props.diets && props.diets.length !== 0 ? (<div className="cajitas"> {props.diets.map((e) => (
                                <div className="spaciar">
                                    <div key={e.id} className="checkboxs">
                                        <input onChange={props.handleSelect} type="checkbox" value={e.id} /> {e.category}
                                    </div></div>
                            ))}</div>) : " Loading"}</div>
                    </div>
                    <div className="columnasForm">
                        <div className="ultimoInput">
                            <label>Image </label>
                            <input type="url" name="image"
                                onChange={props.handleInputChange} value={props.input.image} className="caja" />
                        </div>
                        <input type="submit" value="Add Recipe" className="botonAgregar" />
                    </div>
                </form>
            </div>
)}
