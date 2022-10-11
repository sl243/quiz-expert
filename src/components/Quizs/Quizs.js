import React, { useState } from 'react';
import './Quizs.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quizs = ({ quiz, handleToAns }) => {
    const { question, options, correctAnswer, id } = quiz;

    const [ans, setAns] = useState();

    if (correctAnswer === ans) {
        console.log('right')
    }
    else {
        console.log('wrong')
    }

    const notify = () => toast(correctAnswer);

    return (
        <div className='container border rounded-3 mb-5 shadow'>

            <div className='d-flex justify-content-around align-items-center'>
                <h4 className='mt-5'>Quiz:-{quiz.length} {question}</h4>
                <div onClick={notify}>
                    <EyeIcon className="eye-icon mt-5"></EyeIcon>
                </div>
            </div>
            <div className='quiz-option-container'>



                <button className='w-75 border border-0 rounded-3 m-3 p-3'>

                    <input onClick={notify} type="radio" name={id} value={options[0]} onChange={e => setAns(e.target.value)} />
                    {options[0]}
                </button>

                <button className='w-75 border border-0 rounded-3 m-3 p-3 '>
                    <input type="radio" name={id} value={options[1]} onChange={e => setAns(e.target.value)} />
                    {options[1]}
                </button>

                <button className='w-75 border border-0 rounded-3 m-3 p-3'>
                    <input type="radio" name={id} value={options[2]} onChange={e => setAns(e.target.value)} />
                    {options[2]}
                </button>

                <button className='w-75 border border-0 rounded-3 m-3 p-3'>
                    <input type="radio" name={id} value={options[3]} onChange={e => setAns(e.target.value)} />
                    {options[3]}
                </button>

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </div>
    );
};

export default Quizs;