import React from 'react'
import {connect} from 'react-redux'
import {deleteContact} from '../actions/deleteContact'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Contact from './contact'
// The above should be capital "Contact" but errors occur if so

const Contacts = (props) => {
    return(
        <>
            {props.contacts && props.contacts.map(contact => (
                <Contact contact={contact} deleteContact={(groupId, contactId) => props.deleteContact(groupId, contactId)}/>
            ))}
            <Link to={`/groups/${props.match.params.name}/new`}><Button>Add Contact</Button></Link>
        </>
    )
}

export default connect(null, {deleteContact})(Contacts)