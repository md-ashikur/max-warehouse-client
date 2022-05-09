import React from 'react';
import Loading from '../Loading/Loading';
import "./Notfound.css";

const Notfound = () => {
    return (
        <div className='not-found'>
            <Loading></Loading>
            <h2>404 not found</h2>
        </div>
    );
};

export default Notfound;