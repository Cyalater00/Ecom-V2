import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
createBrowserRouter,
createRoutesFromElements,
Route,
RouterProvider
} from 'react-router-dom';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from "./screens/ProductScreen";


const router = createBrowserRouter(
  createRoutesFromElements(
    // "/" is a parent for our entire app
    //inside is where we creat our "homeScreen, crat screen"
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
    </Route>
    //index={true} makes it so i does not show mutlp screen at once
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
