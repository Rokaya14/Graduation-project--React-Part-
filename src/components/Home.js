import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import '../Stylesheets/Home.css'
import home from '../Stylesheets/home1.png';
class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="bg" className="image">
          <Navbar />  
          
          <img src={home} alt="" />
          <h2>Welcome To Our Website</h2>
        </div>
      </div>
    );
  }
}
export default Home;

