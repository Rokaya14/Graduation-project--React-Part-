import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../Stylesheets/Dashboardstyle.css';
import SidebarD from './SidebarD';
import LineGraph from './LineGraph' ;
import Spline from './Spline'
class Components extends React.Component {
  render(){ 
    return (
        <div className="wrapper">
        <SidebarD/>

        <div id="content" >  
            <nav className= " navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <button type="button" id="sidebarCollapse" className="btn btn-info">
                        <i className="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="navbar-brand" href="/Dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Profile">UserName</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Login">Logout</a>
                            </li>                        
                        </ul>
                        
                    </div>
                </div>
            </nav>

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
        </div>
    </div>
      
    );  
  }
}  
export default Components;
