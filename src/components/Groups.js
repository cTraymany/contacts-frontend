import React from 'react'
import Group from './Group'

const Groups = (props) => {

    return(
        <div>
            {props.groups.map(group => <h2 key={group.id}><Group group={group}/></h2>)}
        </div>
    )
}

export default Groups