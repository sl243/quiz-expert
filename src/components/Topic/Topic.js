import React from 'react';
import './Topic.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'


const Topic = ({ topic }) => {
    const {id, name, logo, total } = topic;
    return (
        <div className='border rounded-3 shadow p-3 mb-5 bg-body'>
            <div className='container topic-container bg-primary border rounded'>
                <img src={logo} alt=''></img>
            </div>
            <div className='d-flex gap-3 mt-5'>
                <h5>{name}</h5>
                <h5>{total}</h5>
                <Link to={`/topic/${id}`}><Button variant="primary">Strat Practic
                <ArrowRightIcon className="eye-icon ps-1"></ArrowRightIcon>
                </Button></Link>
            </div>
        </div>
    );
};

export default Topic;