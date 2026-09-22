import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Parse from '../services/parse'

export default function PrivateRoute() {
    const currentUser = Parse.User.current();
    return currentUser ? <Outlet /> : <Navigate to="/login" />
}
