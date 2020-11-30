import React from 'react'
import GroupInput from './../components/GroupInput'
import Groups from './../components/Groups'
import {connect} from 'react-redux'

class GroupsContainer extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <GroupInput />
                <Groups />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        groups: state.groups
    }
}

export default connect()(GroupsContainer)