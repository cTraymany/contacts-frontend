import React from 'react'
import Contacts from '../components/Contacts'


export default class ContactsContainer extends React.Component {
    render() {
        return(
            <Contacts contacts={this.props.group && this.props.group.attributes.contacts} />
        )
    }
}