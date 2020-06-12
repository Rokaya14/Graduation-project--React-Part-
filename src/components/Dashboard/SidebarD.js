import React from 'react';
import '../../Stylesheets/Dashboardstyle.css';
import $ from 'jquery';

class SidebarD extends React.Component {
     
    constructor(props){  
        super(props);
        this.state= {};
        this.componentDidMount = this.componentDidMount.bind(this);
        
 
    }
    componentDidMount() {
        
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    }
    render(){ 
      return (
        <nav id="sidebar">
        <div className="sidebar-header">
            <h3>Toxic Filtering</h3>
            <strong>TF</strong>
        </div>

        <ul className="list-unstyled components">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
            </button>
            <li className="liborder" >
                <a href="/Dashboard" >
                    <i className="fas fa-home"></i>
                    dashboard
                </a>
                
            </li>
            <br></br>
            <li>
                <a href="/Aboutus">
                    <i className="fas fa-briefcase"></i>
                    About
                </a>
                
            </li>
            <br></br>
            <li>
                <a href="/Profile">
                    <i className="fas fa-image"></i>
                    User Profile
                </a>
            </li>
            <br></br>
            <li>
                <a href="/Comments">
                    <i className="fa fa-comments" aria-hidden="true"></i>
                    comments
                </a>
            </li>
            <br></br>
            <li>
                <a href="/Addpoints">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    Add Points
                </a>
            </li>
        </ul>


    </nav>
        
        

      );
    }
}

export default SidebarD ;