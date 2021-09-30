import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';


function NavBar({onSearch}) {
  return (
    <nav className="nav">
      <NavLink to='/recipes' className='navcomponent'>
        <span className="titulo">
          <div className="henryTitle">Henry</div>
          <div className="foodTitle">Food</div>
        </span>
      </NavLink>
      <SearchBar
        />
        
    </nav>
  );
};

export default NavBar;
