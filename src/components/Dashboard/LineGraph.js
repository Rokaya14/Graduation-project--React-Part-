import React, { Component }  from 'react';
import CanvasJSReact from '../../canvasjs.react';
import '../../Stylesheets/Graphs.css'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Linegraph extends Component {	
	render() {
	  	const options = {
			animationEnabled: true,
			theme: "dark2",
			title: {
				
			text: "comments / Date"
			},
			data: [{				
				type: "column",
				
				dataPoints: [
					{ label: "12/6",  y: 10  },
					{ label: "13/6", y: 15  },
					{ label: "14/6", y: 25  },
					{ label: "15/6",  y: 30  },
					{ label: "16/6",  y: 28  }
				]
			}]
		}
		  
		return (
			<div className="Pie">
			<CanvasJSChart options = {options} />
			</div>
		);
	}
  }

  export default Linegraph;