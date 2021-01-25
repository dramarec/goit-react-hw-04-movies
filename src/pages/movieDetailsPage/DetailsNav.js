import { optionRoutes } from '../../routes/optionRoutes';
import { withRouter } from 'react-router-dom';

import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spinner from '../../components/Spinner';

const DetailsNav = ({ match, ...props }) => {
    return (
        <Suspense fallback={<Spinner />}>
            <Switch>
                {optionRoutes.map(({ path, component, exact, url }) => (
                    <Route
                        key={path}
                        path={`${match.url}${url}`}
                        exact={exact}
                        component={component}
                    />
                ))}
            </Switch>
        </Suspense>
    );
};

export default withRouter(DetailsNav);
