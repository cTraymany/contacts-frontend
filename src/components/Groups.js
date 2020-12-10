import React from 'react'
import {Link} from 'react-router-dom'

const Groups = (props) => {
    return(
        <>
            {props.groups.data && props.groups.data.map(group =>
                <h5 key={group.id}>
                    <Link to={`/groups/${group.attributes && group.attributes.name.toLowerCase()}`}>{group.attributes && group.attributes.name}</Link>
                </h5>)}
        </>
    )
}

export default Groups