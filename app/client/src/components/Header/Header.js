import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
    return (
        <Fragment>
        <header className={classes.header}>
            <nav>
                <h1>MyOwnWinery</h1>
                <ul>
                    <li>
                        <NavLink to='/' className={(isActive) => !isActive.isActive ? "" : classes.active}>Winery</NavLink>
                    </li>
                    <li>
                        <NavLink to='/products' className={(isActive) => !isActive.isActive ? "" : classes.active}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' className={(isActive) => !isActive.isActive ? "" : classes.active}>Sign In</NavLink>
                    </li>
                    <li>
                        <NavLink to='/register' className={(isActive) => !isActive.isActive ? "" : classes.active}>Register</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </Fragment>
    )
}

export default Header
