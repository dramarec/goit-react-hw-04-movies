import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { movieInfo } from '../../api/data';
import Spinner from '../../components/Spinner';
import { optionRoutes } from '../../routes/optionRoutes';
import DetailsNav from './DetailsNav';

const Div = styled.div`
    display: flex;
    margin-bottom: 20px;
    h2 {
        margin: 25px;
    }
    p {
        max-width: 700px;
        margin: 25px;
    }
`;

const Wrap = styled.div`
    h2 {
        text-align: center;
    }
    button {
        margin: 10px 0;
        padding: 10px;
        border: none;
        cursor: pointer;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 5px;
    }
    button:hover {
        border: none;
        color: #fff;

        transform: scale(1.1);
        background-color: rgba(0, 170, 255, 0.586);
    }
`;

const InfoWrapper = styled.div`
    ul {
        display: flex;
    }
    li {
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    li:hover {
        transform: scale(1.1);
    }
`;
export default class ShowDetails extends Component {
    state = {
        movie: null,
        error: null,
        isLoading: false,
        id: '',
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        movieInfo(this.props.match.params.movieId)
            .then(response => response.data)
            .then(movie =>
                this.setState({ movie, id: this.props.match.params.movieId }),
            )
            .catch(error => this.setState({ error: error }))
            .finally(() => this.setState({ isLoading: false }));
    }
    handleGoBack = () => {
        if (this.props.location.state && this.props.location.state.from) {
            // console.log(this.props.location.state.from);
            return this.props.history.push(this.props.location.state.from);
        }
        this.props.history.push('/');
    };

    render() {
        const { movie, isLoading } = this.state;

        return (
            <>
                <div>
                    <Wrap>
                        <h2>Show Details</h2>
                        <button type="button" onClick={this.handleGoBack}>
                            &lsaquo; back
                        </button>
                    </Wrap>
                    {isLoading && <Spinner />}

                    {this.state.movie && (
                        <Div>
                            <div>
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
                        </Div>
                    )}
                </div>

                <hr />

                <InfoWrapper>
                    <p>Additional information</p>
                    <ul>
                        {optionRoutes.map(({ exact, name, url }) => (
                            <li key={url}>
                                <NavLink
                                    exact={exact}
                                    className="link"
                                    activeClassName="active-link"
                                    to={{
                                        pathname: `${this.props.match.url}${url}`,
                                        state: {
                                            from: this.props.location.state
                                                .from,
                                            id: this.state.id,
                                        },
                                    }}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </InfoWrapper>
                <hr />
                <DetailsNav />
            </>
        );
    }
}
