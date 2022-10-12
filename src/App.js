import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import TopicDetails from './components/TopicDetails/TopicDetails';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        
        {
          path:'/',
          loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics></Topics>
        },
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/topic/:topicId',
          loader: async({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element:<TopicDetails></TopicDetails>
        },
        {
          path:'statistics',
          loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ]
    },
    {
      path:'*',
      element: <div className='container text-center mt-5 border rounded-3 shadow p-5'>
        <h1>Your Route is not Found</h1>
        <h3>404</h3>
      </div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
