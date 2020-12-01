import React from 'react'
import ContactsContainer from '../containers/ContactsContainer'

const Group = (props) => {
    const groupArray = props.groups.data.filter(group => {
        return group.attributes.name.toLowerCase() === props.match.params.name.toLowerCase()
    })

    const group = groupArray[0]
    return (
        <div>
            <h2>{group && group.attributes.name}</h2>
            <ContactsContainer group={group}/>
        </div>
    )
}

export default Group