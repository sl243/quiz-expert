import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';

const TopicDetails = () => {
    const topic = useLoaderData();

    return (
        <div>
            <h1 className='mt-5'>Quiz For {topic.data.name}</h1>
            {
                topic.data.questions.map(quiz => <Quizs
                    key={quiz.id}
                    quiz = {quiz}
                ></Quizs>)
            }
        </div>
    );
};

export default TopicDetails;