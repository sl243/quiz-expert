import React from 'react';
import './Topics.css'
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
   
    return (
        <div className='container mt-5 topics-container'>
            {
                topics.data.map(topic => <Topic
                    key={topic.id}
                    topic = {topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;