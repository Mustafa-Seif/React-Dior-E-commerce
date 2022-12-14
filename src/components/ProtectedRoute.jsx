import React from 'react'
import {  useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';
import Home from './Home';

function ProtectedRoute() {
    const login = useSelector((state) => state.login);

  return login ? <Outlet/> : <Home/>
}

export default ProtectedRoute