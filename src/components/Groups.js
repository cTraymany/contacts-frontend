import React from 'react'
// import Group from './Group'
import {Link} from 'react-router-dom'

const Groups = (props) => {
    return(
        <div>
            {props.groups.map(group =>
                <h3 key={group.id}>
                    <Link to={`/groups/${group.name}`}>{group.name}</Link>
                </h3>)}
        </div>
    )
}

export default Groups