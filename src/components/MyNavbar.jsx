import React, { UseState, useEffcet } from 'react'
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Parse from '../services/parse'

export default function MyNavbar() {

  return (
    <div className="navbar">
      <Navbar>
        <Container>
          Navbar
        </Container>
      </Navbar>
    </div>
  )
}
