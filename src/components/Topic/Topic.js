import React from 'react';
import './Topic.css';
import Button from 'react-bootstrap/Button';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <div className='border rounded-3 shadow p-3 mb-5 bg-body'>
            <div className='container topic-container'>
                <img src={logo} alt=''></img>
            </div>
            <div className='d-flex gap-4 mt-5'>
                <h5>{name}</h5>
                <p>{total}</p>
                <Button variant="primary">Strat Practic</Button>
            </div>
        </div>
    );
};

export default Topic;