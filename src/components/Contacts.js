import React from 'react'
import {connect} from 'react-redux'
import {deleteContact} from '../actions/deleteContact'

const Contacts = (props) => {
    // console.log(props)

    const deleteContact = (contact) => {
        // debugger
        props.deleteContact(contact.attributes.group_id, parseInt(contact.id))
    }

    return(
        <div>
            {props.contacts && props.contacts.map(contact => {
                // debugger
                return(
                    <div>
                        <h3 key={contact.id}>{contact.attributes && contact.attributes.name} <button onClick={() => deleteContact(contact)}>X</button></h3>
                        <p>{contact.attributes && contact.attributes.phoneNumber}</p>
                        <p>{contact.attributes && contact.attributes.birthday}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default connect(null, {deleteContact})(Contacts)

// CHANGE TO RENDER CONTACT COMPONENT