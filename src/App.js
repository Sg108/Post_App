

import {useState,useEffect} from 'react'
import Layout from './components/Auth/Layout.jsx';
import Posts from './components/Posts/Posts.jsx'
import PrivateRoute from './PrivateRoute';
//import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'\
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  const [isAuthenticated, setAuthenticated] =  useState(localStorage.getItem('token') || '');

  console.log(isAuthenticated)
  useEffect(() => {
    localStorage.setItem('token', isAuthenticated);
  }, [isAuthenticated]);
 
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Layout setAuthenticated={setAuthenticated}/>} />
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
          <Route element={<Posts accessToken={isAuthenticated}/>} path="/posts"/>
        </Route>
        
        
      </Routes>
    </Router>
  );
}

export default App;
