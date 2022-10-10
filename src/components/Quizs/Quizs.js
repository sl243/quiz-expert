import React from 'react';
import './Quizs.css'
import { EyeIcon } from '@heroicons/react/24/solid'

const Quizs = ({ quiz }) => {
    const { question, options, correctAnswer, id } = quiz;

    const handleToAns = () => {
        console.log('ans')
    }
    return (
        <div className='container border rounded-3 mb-5 shadow'>
            <div className='d-flex justify-content-around align-items-center'>
                <h4 className='mt-5'>{question}</h4>
                <EyeIcon onClick={() => handleToAns()} className="eye-icon"></EyeIcon>
            </div>
            <div className='quiz-option-container'>
                <button className='w-75 border border-0 rounded-3 m-3 p-3'>
                    <p>{options[0]}</p>
                </button>
                <button className='w-75 border border-0 rounded-3 m-3 p-3 '>
                    <p>{options[1]}</p>
                </button>
                <button className='w-75 border border-0 rounded-3 m-3 p-3'>
                    <p>{options[2]}</p>
                </button>
                <button className='w-75 border border-0 rounded-3 m-3 p-3'>
                    <p>{options[3]}</p>
                </button>
        
            </div>
        </div>
    );
};

export default Quizs;