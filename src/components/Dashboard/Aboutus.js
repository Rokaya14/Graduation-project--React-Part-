import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../Stylesheets/Dashboardstyle.css';
import SidebarD from './SidebarD';
import NavebarD from './NavebarD';
class Aboutus extends React.Component {
  render(){ 
    return (
        <div className="wrapper">
        <SidebarD/>

        <div id="content" >  
            <NavebarD/>
            <h1>About Us </h1>
        </div>
    </div>
    );  
  }
}  
export default Aboutus;
