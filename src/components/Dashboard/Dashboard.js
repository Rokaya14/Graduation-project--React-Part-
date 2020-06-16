import React from 'react';
import '../../Stylesheets/Dashboardstyle.css';
import SidebarD from './SidebarD';
import LineGraph from './LineGraph' ;
import Doughnut from './Doughnutchart' ;
import Spline from './Spline';
import NavebarD from './NavebarD';
class Dashboard extends React.Component {
       
  
    render(){ 
      return (
        

            <div className="wrapper">
                <SidebarD/>       
                <div id="content" >  
                    <NavebarD/>
                    <p ><strong>Welcome ##</strong></p>
                    <h1 className="mt-4"><strong>Comment Statistics</strong> </h1>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <Doughnut/>
                            </div>
                            <div className="col">
                            <LineGraph/>
                            </div>
                            <div className="col">
                            <Spline/>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                                      
                    
                    
                </div>
            </div>

           
    
    );  
  }
}  

export default Dashboard;

