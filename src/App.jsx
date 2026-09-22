import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import MyNavbar from './components/MyNavbar'

import Login from './pages/Login'
import Reports from './pages/Reports'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Departments from './pages/Departments'

export default function App() {
    //JSX:
    return (
        <Router>
            <div className="app">
                <header>
                    <MyNavbar />
                    <h2 className="mt-3" style={{ color: 'teal' }}>Відділ кадрів</h2>
                    <h5 style={{ color: 'gray' }}>Система управління відділом кадрів компанії</h5>
                </header>
                <main className="container mt-4" style={{ minHeight: '68vh' }}>
                    <hr />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route element={<PrivateRoute />}>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/reports" element={<Reports />} />
                            <Route path="/employees" element={<Employees />} />
                            <Route path="/departments" element={<Departments />} />                            
                        </Route>
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                </main>
                <footer className="container" style={{ color: 'gray' }}>
                    <hr />
                    <h6 style={{ fontSize: '0.9rem' }}>Copyright&copy; MyCompany&trade; Kyiv 2026</h6>
                </footer>
            </div>
        </Router>
    )
}
