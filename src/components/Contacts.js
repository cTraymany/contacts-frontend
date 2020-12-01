import React from 'react'

const Contacts = (props) => {
    console.log(props)
    return(
        <div>
            {props.contacts && props.contacts.map(contact => {
                return(
                    <div>
                        <h3 key={contact.id}>{contact.attributes.name}</h3>
                        <p>{contact.attributes.phoneNumber}</p>
                        <p>{contact.attributes.birthday}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Contacts

// CHANGE TO RENDER CONTACT COMPONENT