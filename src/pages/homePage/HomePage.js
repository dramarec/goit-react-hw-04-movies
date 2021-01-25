import React, { Component } from 'react';
import { trendingMovies } from '../../api/data';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../components/Spinner';

const Div = styled.div`
    h2 {
        text-align: center;
        margin: 10px;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    li {
        display: flex;
        justify-content: center;
        text-align: center;
    }
    a {
        border-radius: 5px;
        text-decoration: none;
        color: rgb(149, 149, 149);
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
    a:hover {
        transform: scale(1.02);
    }
`;
export default class HomePage extends Component {
    state = {
        shows: [],
        error: null,
        isLoading: false,
    };

    componentDidMount() {
        this.setState({ loading: true });

        trendingMovies()
            .then(response => response.data.results)
            .then(shows => this.setState({ shows }))
            .catch(error => this.setState({ error: error }))
            .finally(() => this.setState({ isLoading: false }));
    }

    render() {
        const { shows, isLoading } = this.state;
        // console.log('trendingMovies>', shows);
        return (
            <Div>
                <h2>Trending Movies</h2>

                {isLoading && <Spinner />}

                <ul>
                    {shows.map(show => (
                        <li key={show.id}>
                            <Link
                                to={{
                                    pathname: `/movies/${show.id}`,
                                    state: { from: this.props.location },
                                }}
                            >
                                <h3>{show.name ? show.name : show.title}</h3>
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
                                    alt={show.alt}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </Div>
        );
    }
}
