import React from 'react'
import ContactInput from '../components/ContactInput'
import Contacts from '../components/Contacts'


export default class ContactsContainer extends React.Component {

    render() {
        return(
            <div>
                <ContactInput />
                <Contacts />
            </div>
        )
    }
}