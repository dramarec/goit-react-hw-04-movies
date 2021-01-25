import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import routes from '../routes/routes';
import { mainRoutes, secondRoutes } from '../routes/mainRoutes';
// import { optionRoutes } from '../routes/optionRoutes';

import Header from './Header';
// import HomePage from '../pages/homePage/HomePage';
// import MoviesPage from '../pages/moviesPage/MoviesPage';
// import MovieDetailsPage from '../pages/movieDetailsPage/MovieDetailsPage';
// import Cast from '../pages/movieDetailsPage/cast/Cast';
// import Reviews from '../pages/movieDetailsPage/reviews/Reviews';
import NotFound from './NotFound';
import Main from './Main';

const Layout = () => {
    return (
        <>
            <Header />
            <hr />
            <Main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {mainRoutes.map(({ path, exact, component }) => (
                            <Route
                                key={path}
                                path={path}
                                exact={exact}
                                component={component}
                                // render={name}
                            />
                        ))}
                        {/* <Route
                            path={mainRotes.movieDetalis}
                            component={MovieDetailsPage}
                        />
                        <Route path={mainRotes.movies} component={MoviesPage} />
                        <Route component={NotFound} /> */}

                        {secondRoutes.map(({ path, exact, component }) => (
                            <Route
                                key={path}
                                path={path}
                                exact={exact}
                                component={component}
                            />
                        ))}
                        {/* <Route path={optionRotes.reviews} component={Reviews} /> */}
                        <Route component={NotFound} />

                        {/* <Switch>
                        {optionRoutes.map(({ path, component, exact }) => (
                            <Route
                                key={path}
                                path={path}
                                exact={exact}
                                component={component}
                            />
                        ))}
                    </Switch> */}

                        {/* {optionRoutes.map(({ path, component, exact }) => (
                            <Route
                                key={path}
                                path={path}
                                exact={exact}
                                component={component}
                            />
                        ))} */}
                    </Switch>
                </Suspense>
            </Main>
        </>
    );
};

export default Layout;
