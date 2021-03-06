import React from 'react'
import ContactsContainer from '../containers/ContactsContainer'

const Group = (props) => {
   const group = props.groups.data.filter(group => {
        return group.attributes.name.toLowerCase() === props.match.params.name.toLowerCase()
    })

    return (
        <>
            <h2>{group && group[0] && group[0].attributes.name}</h2>
            <ContactsContainer match={props.match} group={group[0]}/>
        </>
    )
}

export default Group