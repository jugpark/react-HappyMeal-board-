import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/products'>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/register'>Register</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
