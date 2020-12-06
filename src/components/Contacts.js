import React from 'react'
import {connect} from 'react-redux'
import {deleteContact} from '../actions/deleteContact'

const Contacts = (props) => {

    const deleteContact = (contact) => {
        props.deleteContact(contact.attributes.group_id, parseInt(contact.id))
    }

    return(
        <div>
            {props.contacts && props.contacts.map(contact => {
                return(
                    <div>
                        {/* <Link to create new contact /> */}
                        <div key={contact.id}>
                            <h3>{contact.attributes && contact.attributes.name} <button onClick={() => deleteContact(contact)}>X</button></h3>
                            <p>{contact.attributes && contact.attributes.phoneNumber}</p>
                            <p>{contact.attributes && contact.attributes.birthday}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default connect(null, {deleteContact})(Contacts)