import React from 'react'
import GroupInput from './../components/GroupInput'
import Groups from './../components/Groups'

class GroupsContainer extends React.Component {

    render() {
        return (
            <div>
                <GroupInput />
                <Groups />
            </div>
        )
    }
}

export default GroupsContainer