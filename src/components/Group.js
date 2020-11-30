import React from 'react'
import ContactsContainer from '../containers/ContactsContainer'

const Group = (props) => {
    const group = props.groups.find(group => {
        return group.name === props.match.params.name
    })
    return (
        <div>
            <h2>{group && group.name}</h2>
            <ContactsContainer />
        </div>
    )
}

export default Group