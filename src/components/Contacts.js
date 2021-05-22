import React from 'react'
import {connect} from 'react-redux'
import {deleteContact} from '../actions/deleteContact'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Contact from './Contact'

const Contacts = (props) => {
    return(
        <>
            {props.contacts && props.contacts.map(contact => (
                <Contact contact={contact}/>
            ))}
            <Link to={`/groups/${props.match.params.name}/new`}><Button>Add Contact</Button></Link>
        </>
    )
}

export default connect(null, {deleteContact})(Contacts)