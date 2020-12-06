import React from 'react'
import {connect} from 'react-redux'
import {addGroup} from '../actions/addGroup'

class GroupInput extends React.Component {

    state = {
        name: ""
    }

    onChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onSubmit = (event) => {
       event.preventDefault()
       this.props.addGroup(this.state)
       this.setState({
           name: ""
       })
       this.props.history.push("/groups")
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <label>Create a Group: </label>
                <input onChange={this.onChange} type="text" placeholder="Group Name" value={this.state.name} required ></input>
                <input type="submit"></input>
            </form>
        )
    }
}

export default connect(null, {addGroup})(GroupInput)