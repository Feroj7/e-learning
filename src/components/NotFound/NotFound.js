import React from 'react';
import image from '../../images/404.png';

const NotFound = () => {

    return (
        <div>
            <img src={image} alt="page not found" />
        </div>
    );
};

export default NotFound;