import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='container d-flex mt-5 header-section'>
                <div className='header-image mt-4'>
                    <img src='https://i.ibb.co/G2Y2LPN/PYS-Hazelwood-Jaf-0013.jpg' alt=''></img>
                </div>
                <div className='p-3 m-0'>
                    <h4>
                        Quiz A contest in which participants test what they know by answering questions on one or more topics.
                    </h4>
                    <p className='fs-4 m-0'>
                        1. Quizzes are fun
                    </p>
                    <p className='fs-4 m-0'>
                        2. Quizzes raise confidence
                    </p>
                    <p className='fs-4 m-0'>
                        3. Quizzes for children can aid planning and identify progress
                    </p>
                    <p className='fs-4 m-0'>
                        4. Quizzes can support individualised learning
                    </p>
                    <p className='fs-4 m-0'>
                        5. Quizzes are great for plenaries
                    </p>
                    <p className='fs-4 m-0'>
                        6. Quizzes are great for end of topic assessments
                    </p>
                    <p className='fs-4 m-0'>
                        7. Quizzes are good for revision
                    </p>
                    <p className='fs-4 m-0'>
                        8. Quizzes can help tracking
                    </p>
                    <p className='fs-4 m-0'>
                        9. Quizzes encourage pupils’ self awareness of progress and self assessment
                    </p>
                </div>
            </div >
        </div>

    );
};

export default Home;