import React from 'react'
import {connect} from 'react-redux'
import {addGroup} from '../actions/addGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

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
            <Form onSubmit={this.onSubmit}>
                <label>Name: </label><br />
                <input onChange={this.onChange} type="text" placeholder="Group Name" value={this.state.name} required ></input><br /><br />
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}

export default connect(null, {addGroup})(GroupInput)