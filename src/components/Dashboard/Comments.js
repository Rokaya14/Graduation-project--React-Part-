import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../Stylesheets/Dashboardstyle.css';
import SidebarD from './SidebarD';
import LineGraph from './LineGraph' ;
import Spline from './Spline';
import Tablecomments from './Tablecomments';
import NavebarD from './NavebarD';
class Components extends React.Component {
  render(){ 
    return (
        <div className="wrapper">
            <SidebarD/>
            <div id="content" >  
                <NavebarD/>
                <div class="container">
                    <div class="row">
                        <div class="col">
                        <LineGraph/>
                        </div>
                        <div class="col">
                        <Spline/>
                        </div>                     
                    </div>
                </div>
                <Tablecomments/>
            </div>
        </div>
      
    );  
  }
}  
export default Components;
