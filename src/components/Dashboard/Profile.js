import React from 'react';
import '../../Stylesheets/Dashboardstyle.css';
import SidebarD from './SidebarD';
import NavebarD from './NavebarD';

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
                    <NavebarD/>
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
  
  
  