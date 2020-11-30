import React from 'react'
import GroupInput from './../components/GroupInput'
import Groups from './../components/Groups'
import {connect} from 'react-redux'
import {fetchGroups} from '../actions/fetchGroups'

class GroupsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchGroups()
    }

    render() {
        return (
            <div>
                <GroupInput />
                <Groups groups={this.props.groups} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        groups: state.groups
    }
}

export default connect(mapStateToProps, {fetchGroups})(GroupsContainer)