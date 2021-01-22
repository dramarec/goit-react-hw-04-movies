import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        exact
                        to={routes.home}
                        className="link"
                        activeClassName="active-link"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={routes.movies}
                        className="link"
                        activeClassName="active-link"
                    >
                        Movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
