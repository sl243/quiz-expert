import React, { useEffect, useState } from 'react';
import './Quizs.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quizs = ({ quiz }) => {
    const { question, options, correctAnswer, id } = quiz;

    const [ans, setAns] = useState();

    const [toastView, setToastView] = useState(false);

    useEffect(() => {
        if (ans !== undefined) {
            if (correctAnswer === ans) {
                setToastView(true)
                notify1()
            }
            else {
                setToastView(false)
                notify2()
            }
        }

    }, [ans])

    const notify = () => toast(correctAnswer);
    const notify1 = () => toast('Your ans is Correct');
    const notify2 = () => toast('Your ans is Wrong');

    return (
        <div className='container border rounded-3 mb-5 shadow'>

            <div className='d-flex justify-content-around align-items-center'>
                <h4 className='mt-5'>{question}</h4>
                <div onClick={notify}>
                    <EyeIcon className="eye-icon mt-5"></EyeIcon>
                </div>
            </div>

            <div className='quiz-option-container'>

                <button className='w-75 border border-0 rounded-3 m-3 p-3'>
                    <input
                        type="radio" name={id} value={options[0]} onChange={e => setAns(e.target.value)} />
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