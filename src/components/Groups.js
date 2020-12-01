import React from 'react'
// import Group from './Group'
import {Link} from 'react-router-dom'

const Groups = (props) => {
    return(
        <div>
            {props.groups.data.map(group =>
                <h3 key={group.id}>
                    <Link to={`/groups/${group.attributes.name.toLowerCase()}`}>{group.attributes.name}</Link>
                </h3>)}
        </div>
    )
}

export default Groups