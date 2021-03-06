import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import ErrorReport from '../Pages/Error/ErrorReport';
import EventPage from '../Pages/Event/EventPage';
import MyConnections from '../Pages/Connections/MyConnections';
import NewPage from '../Pages/NewPage/NewPage';

class Sidebar extends Component {
render(){
  return(
    <Switch>
      <Route exact path="/ErrorReport" component={ErrorReport}/>
      <Route exact path="/EventPage" component={EventPage}/>
      <Route exact path="/MyConnections" component={MyConnections}/>
      <Route exact path="/NewPage" component={NewPage}/>
    </Switch>
  )

}
}

export default Sidebar;
