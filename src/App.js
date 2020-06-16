import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Route, Switch} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Dashboard/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import Comments from './components/Dashboard/Comments';
import Aboutus from './components/Dashboard/Aboutus';
import Addpoints from './components/Dashboard/Addpoints';



class App extends React.Component {
  render(){ 
    return (
      <div className="App" >
        
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/Signup' component={Signup} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Profile' component={Profile} />
          <Route exact path='/Dashboard' component={Dashboard} />
          <Route exact path='/Comments' component={Comments} />
          <Route exact path='/Aboutus' component={Aboutus} />
          <Route exact path='/Addpoints' component={Addpoints} />
        </Switch>
        
       
      </div>
    );  
  }
}  
export default App;


