import React from 'react';
import '../../Stylesheets/Dashboardstyle.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarD from './SidebarD';
class Addpoints extends React.Component {
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
                <div className="styleform">
                    <section className="pricing py-5">  
                        <div className="container">
                        <div className="row">
                        
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                            <div className="border border-info card-body ">
                                <h5 className="card-title text-muted text-uppercase text-center"><strong>Free</strong></h5>
                                <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                                <hr></hr>
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>10 Points</strong></li>
                                </ul>
                                <a href="/" className="btn btn-outline-info text-uppercase">BUY Now !</a>
                            </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                            <div className="border border-info  card-body">
                                <h5 className="card-title text-muted text-uppercase text-center"><strong>Plus</strong></h5>
                                <h6 className="card-price text-center">$100<span className="period">/month</span></h6>
                                <hr></hr>
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>1000 Points</strong></li>
                                </ul>
                                <a href="/" className="btn btn-outline-info text-uppercase">BUY Now !</a>
                            </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="card">
                            <div className="border border-info card-body">
                                <h5 className="card-title text-muted text-uppercase text-center"><strong>Pro</strong></h5>
                                <h6 className="card-price text-center">$200<span className="period">/month</span></h6>
                                <hr></hr>
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>2500 Points</strong></li> 
                                </ul>
                                <a href="/" className="btn btn-outline-info text-uppercase">BUY Now !</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        </div>
       
    
    );  
  }
}  
export default Addpoints;
