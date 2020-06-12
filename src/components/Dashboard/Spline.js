import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
import '../../Stylesheets/Graphs.css'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Spline extends React.Component {
	render() {
		const options = {
            theme: "dark2",
			animationEnabled: true,
			title:{
				text: "Monthly Filter "
			},
			axisX: {
                title: "Month",
				valueFormatString: "MMM"
			},
			axisY: {
				title: "Num of comments",
				includeZero: false
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 25 },
					{ x: new Date(2017, 1), y: 27 },
					{ x: new Date(2017, 2), y: 42 },
					{ x: new Date(2017, 3), y: 32 },
					{ x: new Date(2017, 4), y: 35 },
					{ x: new Date(2017, 5), y: 33 },
					{ x: new Date(2017, 6), y: 40 },
					{ x: new Date(2017, 7), y: 52 },
					{ x: new Date(2017, 8), y: 32},
					{ x: new Date(2017, 9), y: 42 },
					{ x: new Date(2017, 10), y: 37 },
					{ x: new Date(2017, 11), y: 38}
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
export default Spline ;