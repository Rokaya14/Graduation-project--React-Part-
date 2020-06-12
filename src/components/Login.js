import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Stylesheets/Log.css'
import Navbar from './Navbar' ;


class Login extends React.Component {
    
    constructor(props){  
        super(props);
        this.state= {login:"",password:""};
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
        this.setState({login:"",password:""});
        
    }
    validateForm() {
        return this.state.login.length > 0 && this.state.password.length > 0;
    } 

    render(){ 

        return (
            
            <div className="Body" >
                <Navbar/>
                <div className="wrapperr fadeInDown">
                    
                    <div id="formContent">
                        <form  onSubmit={this.handleSubmit}>
                            <input
                            type="email"
                            id="login"
                            className="fadeIn second mt-2"
                            name="login" 
                            placeholder="Email"
                            value={this.state.login}
                            onChange={this.handleChange}
                            /> 
                            <input 
                            type="password"
                            id="password"
                            className="fadeIn third mt-2"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                            <input 
                            type="submit"
                            className="fadeIn fourth mt-3" 
                            value="Log In"
                            disabled={!this.validateForm}
                            />
                            
                        </form>
        
                        
                        <div >
                                New To Us ? <a href="/Signup" className="alert-link">Sign up </a>
                        </div>
                    </div>
                </div>

            </div> 
               
                

           
        );
    }
}
export default Login;