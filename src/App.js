import React from 'react'
import GroupsContainer from './containers/GroupsContainer'
import NavBar from './containers/NavBar'

class App extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <GroupsContainer />
      </>
    );
  }
}

export default App;
