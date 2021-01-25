import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { searchMovies } from '../../api/data';
import Searchbox from '../../components/Searchbox';
import getQueryParams from '../../utils/getQueryParam';
import styled from 'styled-components';

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
        text-decoration: none;
        border-radius: 5px;
        color: rgb(149, 149, 149);
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    a:hover {
        transform: scale(1.02);
    }
`;
export default class Shows extends Component {
    state = {
        movies: [],
        error: null,
        isLoading: false,
    };
    componentDidMount() {
        const { query } = getQueryParams(this.props.location.search);

        if (query) {
            searchMovies(query).then(movies => this.setState({ movies }));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const { query: prevQuery } = getQueryParams(prevProps.location.search);
        const { query: nextQuery } = getQueryParams(this.props.location.search);

        if (prevQuery !== nextQuery) {
            searchMovies(nextQuery).then(movies => this.setState({ movies }));
        }
    }
    handleSearchQuery = query => {
        console.log('this.props.location', this.props.location);
        this.props.history.push({
            // pathname: this.props.location.pathname,
            ...this.props.location,
            search: `query=${query}`,
        });
    };

    render() {
        const { movies } = this.state;
        console.log('searchMovies>', movies);
        return (
            <Div>
                <h2>Search Movies</h2>

                <Searchbox onSubmit={this.handleSearchQuery} />

                {movies.length > 0 && (
                    <ul>
                        {movies.map(movie => (
                            <li key={movie.id}>
                                <Link
                                    to={{
                                        pathname: `${this.props.match.url}/${movie.id}`,
                                        state: { from: this.props.location },
                                    }}
                                >
                                    <h3>
                                        {movie.name ? movie.name : movie.title}
                                    </h3>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                        alt={movie.alt}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </Div>
        );
    }
}
