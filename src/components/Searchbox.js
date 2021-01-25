import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: inline-block;
    margin: 0 0 10px 50px;
    input {
        /* width: 100%; */
        padding: 10px 20px;
        margin-left: auto;
        margin-right: auto;
        border: none;
        border-radius: 5px;
        background-color: #ccc;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    input:hover {
        transform: scale(1.05);
    }
    input:focus {
        outline: none;
        background-color: rgba(0, 170, 255, 0.586);
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
        color: white;
    }
    input:focus::placeholder {
        color: white;
    }
    button {
        margin: 10px 0 0 10px;
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
export default class Searchbox extends Component {
    state = {
        value: '',
    };
    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Search Movie"
                />
                <button type="submit">Search</button>
            </Form>
        );
    }
}
