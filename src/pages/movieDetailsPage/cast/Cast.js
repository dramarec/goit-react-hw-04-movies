import { actorsInfo } from '../../../api/data';
import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    h2 {
        margin: 15px 0 0 25px;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    li {
        width: 160px;
    }
`;
export default class Cast extends Component {
    state = {
        casts: [],
    };
    componentDidMount() {
        this.setState({ isLoading: true });
        actorsInfo(this.props.location.state.id)
            .then(response => response.data.cast)
            .then(casts => this.setState({ casts }));
    }
    render() {
        // console.log('casts >', this.state.casts);

        return (
            <Div>
                <h2>Cast</h2>
                <ul>
                    {this.state.casts.map(cast => (
                        <li key={cast.id}>
                            <h3>{cast.original_name}</h3>

                            <img
                                src={
                                    cast.profile_path
                                        ? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
                                        : `https://image.freepik.com/free-vector/glitch-error-404-page-background_23-2148086227.jpg`
                                }
                                alt={cast.original_name}
                            />
                        </li>
                    ))}
                </ul>
            </Div>
        );
    }
}

//  poster_path
// ? `https://image.tmdb.org/t/p/w300${poster_path}`
// : `https://image.freepik.com/free-vector/glitch-error-404-page-background_23-2148086227.jpg`
