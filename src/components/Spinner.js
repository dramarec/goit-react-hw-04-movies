import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
`;

const Spinner = () => {
    return (
        <Div>
            <Loader type="Bars" color="#00BFFF" height={100} width={100} />
        </Div>
    );
};
export default Spinner;
