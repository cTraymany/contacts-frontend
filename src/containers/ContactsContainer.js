import React from 'react'
import ContactInput from '../components/ContactInput'
import Contacts from '../components/Contacts'


export default class ContactsContainer extends React.Component {
    render() {
        // console.log(this.props)
        return(
            <div>
                <ContactInput />
                <Contacts contacts={this.props.group && this.props.group.attributes.contacts} />
            </div>
        )
    }
}