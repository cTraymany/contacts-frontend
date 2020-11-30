import React from 'react'
import {connect} from 'react-redux'
import GroupsContainer from './containers/GroupsContainer'
// import {fetchGroups} from './actions/fetchGroups'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <GroupsContainer />
      </div>
    );
  }
}

export default connect()(App);
