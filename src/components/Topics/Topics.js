import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
   
    return (
        <div className='container d-flex gap-5'>
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