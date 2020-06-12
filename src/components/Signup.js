import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar' ;
import '../Stylesheets/Log.css'
class Signup extends React.Component {
    constructor(props){  
        super(props);
        this.state= {login:"",password:"",company:"",account:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.validateForm = this.validateForm.bind(this); 

    }
    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({login:"",password:"",company:"",account:""

         });
    
    } 
    validateForm() {
        return this.state.login.length > 0 && this.state.password.length > 0  && this.state.company.length > 0 && this.state.account.length > 0;
    }

    render(){ 
        return (
            
            <div className="Body">
                <Navbar/>

                <div className="wrapperr fadeInDown">
                    
                    <div id="formContent">
                        <form  onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                id="login"
                                className="fadeIn first"
                                name="login" 
                                placeholder="username"
                                value={this.state.login}
                                onChange={this.handleChange}
                            /> 
                            <input
                                className="fadeIn second"
                                id='company'
                                name='company' 
                                type='text'required
                                placeholder='company name...'
                                value={this.state.company}
                                onChange={this.handleChange}
                            />
                            <input
                                className="fadeIn third"
                                name='account' 
                                type='email'required
                                placeholder='user-account...'
                                value={this.state.account}
                                id='account'
                                onChange={this.handleChange}
                            />

                            
                            <input 
                                type="password"
                                id="password"
                                className="fadeIn third"
                                name="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                           
                           
                            <input
                            type="submit"
                            className="fadeIn fourth mt-3" 
                            value="signup"
                            disabled={!this.validateForm}
                            />
                            
                        </form>
        
                        
                        <div >
                                Already have account? <a href="/login" class="alert-link">Login </a>
                        </div>
                    </div>
                </div>

            </div>     
             

            
          
        );
        
    }
} 

export default Signup;