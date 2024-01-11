
import './App.css';
import Register from './pages/Register' ;
import Login from './pages/Login';
import Home from './pages/Home' ;
import Single from './pages/Single'; 
import Write from './pages/Write' ; 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import "./styles.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Layout =() => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path: "/Single",
        element: <Single/>,
      },
      {
        path: "/Write",
        element: <Write/>,
      },
      {
        path: "/Home",
        element: <Home/>,
      },

    ]
  },

  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  
]);

function App() {
  return (
    
    <div className ="app">
    <div className ="container">
    <RouterProvider router={router} />
    </div>

    </div>
  );
}

export default App;
