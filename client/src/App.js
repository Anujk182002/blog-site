
import './App.css';
import Register from './pages/Register' 
import Login from './pages/Login'
import Home from './pages/Home' 
import Single from './pages/Single' 
import Write from './pages/Write'  
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <div>
    <Navbar/>
    <Home/>
    <Footer/>
    </div>
  },

  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/Single",
    element: <Single/>,
  },
  {
    path: "/Write",
    element: <Write/>,
  },
]);

function App() {
  return (
    <div >
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
