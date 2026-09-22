import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Parse from '../services/parse';

export default function MyNavbar() {
  
    const location = useLocation();
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState(null);

      // OnStart:
      useEffect(() => {
        const user = Parse.User.current();
        setCurrentUser(user);
      }, [])


      async function handleLogout() {
        try {
            await Parse.User.logOut();
            navigate('/login')
        } catch (err) {
            console.error(err);
            alert('Помилка виходу: ' + err.message);
        }
    }


    
    return (
    <Navbar bg='dark' variant='dark' expand='lg' className='shadow-sm'>
        <Container>
            <Navbar.Brand as={Link} to='/' className='fw-bold fs-4' style={{
                color: 'bisque', fontFamily: 'Trebuchet MS'
            }}>
                HR-App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link as={Link} to='/' active={location.pathname === '/'}>
                    Головна
                </Nav.Link>
                <Nav.Link as={Link} to='/employees' active={location.pathname === '/employees'}>
                    Співробітники
                </Nav.Link>
                <Nav.Link as={Link} to='/departments' active={location.pathname === '/departments'}>
                    Депортаменти
                </Nav.Link>
                <Nav.Link as={Link} to='/reports' active={location.pathname === '/reports'}>
                    Звіти
                </Nav.Link>
              </Nav>
              <Nav className='d-flex align-item-center gep-3'>
                {currentUser && (
                   <div className='text-light d-flex align-items-center gap-2'>
                    {currentUser.get('username') || currentUser.get('email')}
                    <Badge bg='secondary' className='ms-2'>HR</Badge>
                   </div>

                )}
                <Button variant='outline-light' size='sm' onClick={handleLogout}>
                  вийти
                </Button>
              </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

}
