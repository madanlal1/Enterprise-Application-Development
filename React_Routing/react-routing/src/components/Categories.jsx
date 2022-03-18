import React from 'react';
import {NavLink} from 'react-router-dom';

const Categories = () => {
    return (
        <>
            <h1>Categories Below:</h1>
            <ul>
                <li><NavLink to="kids">Kids</NavLink></li>
                <li><NavLink to="mother">Mother</NavLink></li>
            </ul>
        </>
    )
}
export default Categories;