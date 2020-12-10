import React from 'react'
import GroupsContainer from './containers/GroupsContainer'
import NavBar from './containers/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

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
