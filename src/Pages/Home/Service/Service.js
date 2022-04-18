import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    };
    return (
        <div className='service'>
            <img src={img} className='img-fluid' alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <Button onClick={() => navigateToServiceDetail(id)}>Book: {name}</Button>
        </div>
    );
};

export default Service;