import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar(props) {

  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Contact Book</Navbar.Brand>
        <Link to="/groups">All Groups</Link><br />
        <Link to="/groups/new">New Group</Link>
    </Navbar>
  )

}