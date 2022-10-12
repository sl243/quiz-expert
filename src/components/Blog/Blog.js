import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <div className='border rounded-3 p-3'>
                <h2 className='text-center mt-3'>Whis is the Purpose of React Route?</h2>
                <p className='fs-4'>
                    Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                </p>
                <p className='fs-4'>
                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                </p>
                <p className='fs-4'>
                    React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
                </p>
            </div>
            <div className='border rounded-3 p-3 mt-3'>
                <h2 className='text-center mt-3'>
                    How does Context API works?
                </h2>
                <p className='fs-4'>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
                <p className='fs-4'>
                    Context API is a new feature added in version 16.3 of React that allows one to share state across the entire app lightly and with ease.
                </p>
                <p className='fs-4'>
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </p>
            </div>
            <div className='border rounded-3 p-3 mt-3'>
                <h2 className='text-center mt-3'>
                    What is useRef hook?
                </h2>
                <p className='fs-4'>
                    A hook is a special function which enables one use state and other React features without writing ES6 class components which are generally considered difficult to understand, use and master.
                    useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined.
                </p>
                <h2 className='text-center mt-3'>
                    What purpose does useRef hook serve?
                </h2>
                <p className='fs-4'>
                    Some of the use cases of useRef hook are: <br></br>
                    1. To access DOM elements <br></br>
                    2. To persist values in successive renders
                </p>

            </div>
        </div>
    );
};

export default Blog;