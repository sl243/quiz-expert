import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav></Nav>,
      children: [
        {
          path: '/',
          element: <Header></Header>
        },
        {
          path: 'home',
          element: <Home></Home>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
