import React from 'react';
import './Topics.css'
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import Home from '../Home/Home';

const Topics = () => {
    const topics = useLoaderData();

    return (
        <div>
            <Home></Home>
            <div className='container mt-5 topics-container'>

                {
                    topics.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;