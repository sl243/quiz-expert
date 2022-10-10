import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';

const TopicDetails = () => {
    const topic = useLoaderData();
    console.log(topic)
    return (
        <div>
            <h1>Quiz For {topic.data.name}</h1>
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