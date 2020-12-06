import React from 'react'
import GroupInput from './../components/GroupInput'
import Groups from './../components/Groups'
import Group from './../components/Group'
import {connect} from 'react-redux'
import {fetchGroups} from '../actions/fetchGroups'
import {Route, Switch} from 'react-router-dom'
import ContactInput from '../components/ContactInput'

class GroupsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchGroups()
    }

    render() {
        return (
            <div>
                <h1>Contact Book</h1>
                <Switch>
                    <Route path='/groups/new' component={GroupInput} />
                    <Route exact path='/groups/:name/new' render={(routerProps) => <ContactInput {...routerProps} groups={this.props.groups} />} />
                    <Route exact path='/groups/:name' render={(routerProps) => <Group {...routerProps} groups={this.props.groups}/>} />
                    <Route exact path='/groups' render={(routerProps) => <Groups {...routerProps} groups={this.props.groups} />} />
                </Switch>
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