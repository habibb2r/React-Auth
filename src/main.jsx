import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Main from './Components/Main/Main.jsx';
import Blog from './Components/Home/Blog/Blog.jsx';
import Signin from './Components/Home/Signin/Signin.jsx';
import Signup from './Components/Signup/Signup.jsx';
import Authprovider from './Components/Provider/Authprovider.jsx';
import Viewdetails from './Components/Home/Details/Viewdetails.jsx';
import Privateroute from './Components/Privateroute/Privateroute.jsx';
import Error from './Components/Style/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element: <Privateroute>
          <Blog></Blog>
        </Privateroute>
      },
    {
      path:'/signin',
      element:<Signin></Signin>
    },
   {
      path:'/signup',
      element:<Signup></Signup>
   },
   {
      path: '*',
      element:<Error></Error>
   },
  {
    path:'/viewdetails/:id',
    element: 
    <Privateroute>
        <Viewdetails></Viewdetails>
    </Privateroute>,
    loader: ({params}) => fetch(`https://assignment10-server-habibb2r.vercel.app/home/${params.id}`)
  }
  ]
  }
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
