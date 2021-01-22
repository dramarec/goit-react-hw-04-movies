import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';

// import Home from '../views/Home';
// import Shows from '../views/Shows';
// import ShowDetails from '../views/ShowDetails';
import Header from './Header';
import HomePage from '../pages/homePage/HomePage';
import MoviesPage from '../pages/moviesPage/MoviesPage';
import MovieDetailsPage from '../pages/movieDetailsPage/MovieDetailsPage';
import NotFound from './NotFound';
import routes from '../routes';

function App() {
    return (
        <>
            <Header />
            <hr />
            <Layout>
                <Switch>
                    <Route path={routes.home} exact component={HomePage} />
                    <Route
                        path={routes.movieDetalis}
                        component={MovieDetailsPage}
                    />
                    <Route path={routes.movies} component={MoviesPage} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </>
    );
}

export default App;
