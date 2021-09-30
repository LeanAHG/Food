import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css";

function LandingPage() {
    return (
        <div className="landing">
            <div className="acomodar">
                <div className="intro">
                    <div className="henrymain">Henry</div>
                    <div className="foodmain">Food</div>
                    <div className="Sub"></div>
                </div>
                <NavLink to="/recipes">
                    <button className="activo">
                        Recipes
                    </button>
                </NavLink>
            </div>
            <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80" alt="Panqueques" className="panqueques" />
        </div>
    )
}

export default LandingPage