import { optionRoutes } from '../../routes/optionRoutes';

import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const DetailsNav = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {optionRoutes.map(({ path, component, exact }) => (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        component={component}
                    />
                ))}
            </Switch>
        </Suspense>
    );
};

export default DetailsNav;
