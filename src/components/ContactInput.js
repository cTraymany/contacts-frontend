import React from 'react'
import {connect} from 'react-redux'
import {addContact} from '../actions/addContact'

class ContactInput extends React.Component {

    state = {
        name: "",
        phoneNumber: "",
        birthday: ""
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addContact(this.state, this.props.id)
        this.setState({
            name: "",
            phoneNumber: "",
            birthday: ""
        })
    }

    render() {
        console.log(Date.now())
        return(
            <form onSubmit={this.onSubmit}>
                <label>Name: </label><br />
                <input
                    type="text"
                    required
                    value={this.state.name}
                    name="name"
                    onChange={this.onChange}></input><br /><br />
                <label>Telephone: </label><br />
                <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-4567-8900"
                    value={this.state.phoneNumber}
                    name="phoneNumber"
                    onChange={this.onChange}></input><br /><br />
                <label>Birthday: </label><br />
                <input
                    type="date"
                    value={this.state.birthday}
                    name="birthday"
                    max={Date.now()}
                    onChange={this.onChange}></input><br /><br />
                <input type="submit"></input>
            </form>
        )
    }
}

export default connect(null, {addContact})(ContactInput)