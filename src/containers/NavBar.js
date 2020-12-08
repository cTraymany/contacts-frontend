import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(props) {

  return (
    <div className="navBar">
      <Link to="/groups">All Groups </Link>
      <Link to="/groups/new">New Group </Link>
    </div>
  )

}