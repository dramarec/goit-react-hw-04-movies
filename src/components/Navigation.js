import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { mainRoutes } from '../routes/mainRoutes';

const Nav = styled.nav`
    ul {
        display: flex;
    }
    li {
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
    li:hover {
        transform: scale(1.1);
    }
`;

const Navigation = () => {
    return (
        <Nav>
            <ul>
                {mainRoutes.map(({ path, name, exact }) => (
                    <li key={path}>
                        <NavLink
                            exact={exact}
                            to={path}
                            className="link"
                            activeClassName="active-link"
                        >
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </Nav>
    );
};

export default Navigation;
