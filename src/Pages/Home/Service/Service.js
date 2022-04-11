import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img src={img} className='img-fluid' alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <Button>Book: {name}</Button>
        </div>
    );
};

export default Service;