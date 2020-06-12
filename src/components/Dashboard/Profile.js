import React from 'react';
import '../../Stylesheets/Dashboardstyle.css';
import SidebarD from './SidebarD';

class Profile extends React.Component {
    constructor(props){  
        super(props);
        this.state= {login:"",password:"",newpassword:"",company:"",account:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this); 
        

    }
    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.setState({login:"",password:"",newpassword:"",company:"",account:""

         });
    
    }   
  
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
                        <form  onSubmit={this.handleUpdate}>

                            <input
                                type="text"
                                id="login"
                                className="fadeIn first"
                                name="login" 
                                placeholder="User Name" /* data from datat base */
                                value={this.state.login}
                                onChange={this.handleChange}
                            /> 
                            <input
                                className="fadeIn first"
                                id='company'
                                name='company' 
                                type='text'required
                                placeholder='company name...' /* data from datat base */
                                value={this.state.company}
                                onChange={this.handleChange}
                            />
                            <input
                                className="fadeIn second"
                                name='account' 
                                type='email'required
                                placeholder='User Account' /* data from datat base */
                                value={this.state.account}
                                id='account'
                                onChange={this.handleChange}
                            />
                            <input 
                                type="password"
                                id="password"
                                className="fadeIn second"
                                name="password"
                                placeholder="Old password" /* data from datat base */
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <input 
                                type="password"
                                id="newpassword"
                                className="fadeIn third"
                                name="newpassword"
                                placeholder="New password"
                                value={this.state.newpassword}
                                onChange={this.handleChange}
                            />
                
                            <input
                            
                            type="submit"
                            className="fadeIn fourth  " 
                            value="Update Profile"
                            
                            />
                            
                        </form>
                    </div>    
                </div>
        
               
        
        </div>

           
    
    );  
  }
}  

  export default Profile;
  
  
  