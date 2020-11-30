import React from 'react'
import {connect} from 'react-redux'
import {fetchGroups} from './actions/fetchGroups'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default connect(null, {fetchGroups})(App);
