import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Home from "./modules/Home/Home";
import LandingPage from "./modules/LandingPage/LandingPage";
import FormContainer from './modules/FormContainer/FormContainer';
import RecipeDetail from './modules/RecipeDetail/RecipeDetail';
import NavBar from './modules/NavBar/NavBar';

function App() {
  return (
    <React.Fragment>
    <Route path ='/recipes' component={NavBar} />
    <Route path ='/recipe' component={NavBar} />
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/recipes" component={Home} />
    <Route exact path="/recipes/:id" component={RecipeDetail} />
    <Route exact path="/recipe" component={FormContainer} />
    </React.Fragment>
  );
}

export default App;
