import React from 'react'
import {connect} from 'react-redux'
import {deleteContact} from '../actions/deleteContact'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Contacts = (props) => {

    const deleteContact = (contact) => {
        props.deleteContact(contact.attributes.group_id, parseInt(contact.id))
    }

    const showBirthday = (birthday) => {
        let newBirthday = birthday.split('-')
        let dateToFormat = new Date(newBirthday[0], newBirthday[1], newBirthday[2])
        let month = dateToFormat.toLocaleString('en-us', { month: 'short' })

        if (birthday) {
            return (
                `Birthday: ${month} ${newBirthday[1]}, ${newBirthday[0]}`
            )
        }
        
    }

    const showNumber = (number) => {
        if (number) {
            let parseNum = number.split('-')
            return (
                `Phone: (${parseNum[0]}) ${parseNum[1]}-${parseNum[2]}`
            )
        }
    }

    return(
        <>
            {props.contacts && props.contacts.map(contact => (
                <div key={contact.id} className="contact" >
                    <h5>{contact.attributes && contact.attributes.name} <small onClick={() => deleteContact(contact)}>☒</small></h5>
                    <p>{contact.attributes && showNumber(contact.attributes.phoneNumber)}</p>showNumber
                    <p>{contact.attributes && showBirthday(contact.attributes.birthday)}</p><br/>
                </div>
            ))}
            <Link to={`/groups/${props.match.params.name}/new`}><Button>Add Contact</Button></Link>
        </>
    )
}

export default connect(null, {deleteContact})(Contacts)