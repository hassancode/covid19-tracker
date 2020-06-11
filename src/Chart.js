// import React, { useState, useEffect } from 'react';


// function Chart({ title, data, color }) {

//     const [ref, setRef] = useState(React.createRef());
//     var myChart;
//     //useEffect(() => {
//         myChart = new Chart(ref.current, {
//             type: 'line',
//             options: {
//                 maintainAspectRatio: false,
//                 scales: {
//                     xAxes: [
//                         {
//                             type: 'time',
//                             time: {
//                                 unit: 'week'
//                             }
//                         }
//                     ],
//                     yAxes: [
//                         {
//                             ticks: {
//                                 min: 0
//                             }
//                         }
//                     ]
//                 }
//             },
//             data: {
//                 labels: data.map(d => d.time),
//                 datasets: [{
//                     label: title,
//                     data: data.map(d => d.value),
//                     fill: 'none',
//                     backgroundColor: color,
//                     pointRadius: 2,
//                     borderColor: color,
//                     borderWidth: 1,
//                     lineTension: 0
//                 }]
//             }
//         });

//         myChart.data.labels = data.map(d => d.time);
//         myChart.data.datasets[0].data = data.map(d => d.value);
//         myChart.update();
//     //});

//     return (
//         <canvas id="myChart" width="400" height="400" ref={ref}></canvas>
//     )
// }

// export default Chart;