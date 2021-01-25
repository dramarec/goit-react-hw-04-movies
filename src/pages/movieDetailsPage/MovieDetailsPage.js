import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { movieInfo } from '../../api/data';
import { optionRoutes } from '../../routes/optionRoutes';
import DetailsNav from './DetailsNav';

const Li = styled.li``;
export default class ShowDetails extends Component {
    state = {
        movie: null,
        error: null,
        isLoding: false,
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        movieInfo(this.props.match.params.movieId)
            .then(response => response.data)
            .then(movie => this.setState({ movie }))
            .catch(error => this.setState({ error: error }))
            .finally(() => this.setState({ isLoading: false }));
    }
    handleGoBack = () => {
        // console.log('go back');

        if (this.props.location.state && this.props.location.state.from) {
            // console.log(this.props.location.state.from);
            return this.props.history.push(this.props.location.state.from);
        }
        this.props.history.push('/');
    };

    render() {
        const { movie } = this.state;
        // console.log('movieInfo>', movie);
        return (
            <>
                <div>
                    <button type="button" onClick={this.handleGoBack}>
                        &lsaquo;
                    </button>

                    {this.state.movie && (
                        <>
                            <div>
                                <h2>Show Details</h2>
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                    alt={movie.alt}
                                />

                                {/* <h2>{this.props.match.params.movieId}</h2> */}
                            </div>
                            <div>
                                <h2>{movie.name ? movie.name : movie.title}</h2>
                                <p>User score: {movie.vote_average * 10}% </p>
                                <p>Overwiew:</p>
                                <p>{movie.overview}</p>
                                <p>Genres:</p>
                                <ul>
                                    {movie.genres.map(genre => (
                                        <li key={genre.id}>{genre.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>

                <hr />

                <div>
                    <p>Additional information</p>
                    <ul>
                        {optionRoutes.map(({ path, exact, name, url }) => (
                            <Li key={url}>
                                <NavLink
                                    exact={exact}
                                    className="link"
                                    activeClassName="active-link"
                                    to={{
                                        pathname: `${this.props.match.url}${url} `,
                                        state: {
                                            from: this.props.location.state
                                                .from,
                                        },
                                    }}
                                >
                                    {name}
                                </NavLink>
                            </Li>
                        ))}

                        {/* <Li>
                            <NavLink
                                // exact
                                className="link"
                                activeClassName="active-link"
                                to={{
                                    pathname: `${this.props.match.url}/cast `,
                                    state: {
                                        from: this.props.location.state.from,
                                    },
                                }}
                            >
                                Cast
                            </NavLink>
                        </Li>
                        <Li>
                            <NavLink
                                // exact
                                className="link"
                                activeClassName="active-link"
                                to={{
                                    pathname: `${this.props.match.url}/reviews `,
                                    state: {
                                        from: this.props.location.state.from,
                                    },
                                }}
                            >
                                Reviews
                            </NavLink>
                        </Li> */}
                    </ul>
                </div>
                <hr />
                <DetailsNav />
            </>
        );
    }
}
