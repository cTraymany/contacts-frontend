import React from 'react'

const Groups = (props) => {

    return(
        <div>
            {props.groups.map(group => <h2 key={group.id}>{group.name}</h2>)}
        </div>
    )
}

export default Groups