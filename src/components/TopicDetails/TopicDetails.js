import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';

const TopicDetails = () => {
    const topic = useLoaderData();
    // console.log(topic)
    // const [qans, setQans] = useState();

    // const handleToAns = (id) => {
    //     console.log(id.target.innerText)
    // }

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