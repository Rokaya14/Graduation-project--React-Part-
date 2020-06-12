import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
import '../../Stylesheets/Graphs.css'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Doughnut extends React.Component {
    render() {
        const options = {
            animationEnabled: true,
            theme: "dark2",
            title: {
                text: "Toxic / Clean"
            },
            data: [{
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{label}: {y}%",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    { y: 20, label: "Toxic" },
                    { y: 24, label: "Severe Toxic" },
                    { y: 20, label: "Clean" },
                    { y: 14, label: "Obscene" },
                    { y: 12, label: "Identity hate" }
                ]
            }]
        }

        return (
            <div className="Pie">
                <CanvasJSChart options={options}
                />
             </div>
        );
    }
}

export default Doughnut;