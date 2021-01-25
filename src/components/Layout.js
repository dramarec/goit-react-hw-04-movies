import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { mainRoutes, secondRoutes } from '../routes/mainRoutes';

import Header from './Header';
import NotFound from './NotFound';
import Main from './Main';
import Spinner from './Spinner';

const Layout = () => {
    return (
        <>
            <Header />
            <hr />
            <Main>
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        {secondRoutes.map(({ path, exact, component }) => (
                            <Route
                                key={path}
                                path={path}
                                exact={exact}
                                component={component}
                            />
                        ))}

                        {mainRoutes.map(({ path, exact, component }) => (
                            <Route
                                key={path}
                                path={path}
                                exact={exact}
                                component={component}
                            />
                        ))}

                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </Main>
        </>
    );
};

export default Layout;
