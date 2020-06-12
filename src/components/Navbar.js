import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import '../Stylesheets/Dashboardstyle.css';
import home from '../Stylesheets/home1.png';
class Navbar extends React.Component {
    render(){ 
      return (
        <nav className= " navbar navbar-expand-lg navbar-info bg-info" >
          <div className="container-fluid">                           
                  {/* <i className="fas fa-align-left"></i> */}
            <a id="sidebarCollapse" className="navbar-brand" href="/">
              ||<i className="fas fa-home"></i>||
              {/*<img src={home} width="0" height="30" alt=""></img>*/}
               <strong>Home</strong> 
            </a>                            
            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-align-justify"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">                                    
                    <li className="nav-item">
                        <a className="navbar-brand" href="/Login">Log in </a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="/Signup">Sign up</a>
                    </li>                        
                </ul>               
            </div>
          </div>
      </nav>

          
      );  
    }
  }  
  export default Navbar;
  