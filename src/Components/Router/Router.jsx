import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Error from "../Error/Error";
import About from "../About/About";
import Services from "../Services/Services";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      
      children:[
        {
        path:'/',
        element:<Home></Home>,   
      },
      {
        path:'/about',
        element:<About></About>,
      },

      {
        path:'/services',
        element:<Services></Services>,
      },

      {
        path:'/products',
        element:<Services></Services>,
      },

      {
        path:'/blog',
        element:<Blog></Blog>,
      },

      {
        path:'/contact',
        element:<Contact></Contact>
      },
    
    ]
    },
  ]);

  export default router;