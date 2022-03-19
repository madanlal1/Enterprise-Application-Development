import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

const Categories = () => {
    return (
        <>
            <h1>Categories Below:</h1>
            <ul>
                <li><NavLink activeClassName="active" to="kids">Kids</NavLink></li>
                <li><NavLink activeClassName="active" to="mother">Mother</NavLink></li>
            </ul>
            <Outlet/>
        </>
    )
}
export default Categories;