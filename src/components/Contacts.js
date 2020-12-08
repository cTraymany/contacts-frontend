import React from 'react'
import {connect} from 'react-redux'
import {deleteContact} from '../actions/deleteContact'
import {Link} from 'react-router-dom'

const Contacts = (props) => {

    const deleteContact = (contact) => {
        props.deleteContact(contact.attributes.group_id, parseInt(contact.id))
    }

    return(
        <>
            {props.contacts && props.contacts.map(contact => (
                <div key={contact.id} className="contact" >
                    <h3>{contact.attributes && contact.attributes.name} <button onClick={() => deleteContact(contact)}>X</button></h3>
                    <p>{contact.attributes && contact.attributes.phoneNumber}</p>
                    <p>{contact.attributes && contact.attributes.birthday}</p>
                </div>
            ))}
            <Link to={`/groups/${props.match.params.name}/new`}><button>Add Contact</button></Link>
        </>
    )
}

export default connect(null, {deleteContact})(Contacts)