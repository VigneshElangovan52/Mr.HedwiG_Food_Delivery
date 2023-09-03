import React, { lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppLayout from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//import About from './components/About';
import Error from './components/Error';
import Contact from './components/contact';
import Cart from './components/Cart';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
//import Instamart from './components/Instamart';

const Instamart = lazy(()=>import ('./components/Instamart'));
const About = lazy(()=>import ('./components/About'));

const Routes = createBrowserRouter ([
  {
    path: "/",
    element: <AppLayout />,
    children: [{
        path: "/#top",
        element: <Body />,
    },
    {
      path: "/",
      element: <Body />,
  },
  {
      path: "/about",
      element: <Suspense fallback = {<Shimmer/>} ><About /></Suspense>
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/instamart",
      element: <Suspense fallback = {<Shimmer />}><Instamart /></Suspense>
    },
    {
      path: "/restaurant/:restaurantid",
      element: <RestaurantMenu />
    }
 ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
