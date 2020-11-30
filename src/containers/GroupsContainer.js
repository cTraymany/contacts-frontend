import React from 'react'
import GroupInput from './../components/GroupInput'
import Groups from './../components/Groups'
import {connect} from 'react-redux'

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

export default connect()(GroupsContainer)