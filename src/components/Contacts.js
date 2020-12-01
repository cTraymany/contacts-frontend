import React from 'react'

const Contacts = (props) => {
    // console.log(props)

    return(
        <div>
            {props.contacts && props.contacts.map(contact => {
                return <h3 key={contact.id}>{contact.attributes.name}</h3>
            })}
        </div>
    )
}

export default Contacts

// CHANGE TO RENDER CONTACT COMPONENT