import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
createBrowserRouter,
createRoutesFromElements,
Route,
RouterProvider
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from './screens/LoginScreen';


const router = createBrowserRouter(
  createRoutesFromElements(
    // "/" is a parent for our entire app
    //inside is where we creat our "homeScreen, crat screen"
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path='/login' element={<LoginScreen/>} />
    </Route>
    //index={true} makes it so i does not show mutlp screen at once
  )
);

//==Router Provider==//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
