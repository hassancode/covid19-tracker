import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import CaseBox from './CaseBox.js'
//import Chart from './Chart.js';

function App() {
  const [data, setData] = useState("");
  const [chartData, setChartData] = useState({
    title: 'Visits',
    data: getRandomDateArray(150)
  });

  useEffect(() => {
      loadData();
      // var cData ={
      //   title: 'Visits',
      //   data: getRandomDateArray(150)
      // };
      // setChartData(cData);
  }, []);

  const d = chartData;

  const loadData = async () => {
    fetch("https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-06-07", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
        "x-rapidapi-key": "dbf67c03a6mshcdf93c761d0bd26p1079a3jsn825caf63e790"
      }
    })
      .then(response => response.json())
      .then(receivedData => setData(receivedData.data))
      .catch(err => {
        console.log(err);
      });
  };

  function getRandomArray(numItems) {
    // Create random array of objects
    let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let data = [];
    for(var i = 0; i < numItems; i++) {
      data.push({
        label: names[i],
        value: Math.round(20 + 80 * Math.random())
      });
    }
    return data;
  }
  
  function getRandomDateArray(numItems) {
    // Create random array of objects (with date)
    let data = [];
    let baseTime = new Date('2018-05-01T00:00:00').getTime();
    let dayMs = 24 * 60 * 60 * 1000;
    for(var i = 0; i < numItems; i++) {
      data.push({
        time: new Date(baseTime + i * dayMs),
        value: Math.round(20 + 80 * Math.random())
      });
    }
    return data;
  }
  
  function getData() {
    let data = [];
  
    data.push({
      title: 'Visits',
      data: getRandomDateArray(150)
    });
  
    data.push({
      title: 'Categories',
      data: getRandomArray(20)
    });
  
    data.push({
      title: 'Categories',
      data: getRandomArray(10)
    });
  
    data.push({
      title: 'Data 4',
      data: getRandomArray(6)
    });
  
    return data;
  }

  return (
    <div>
      <CaseBox label={"Total Confirmed"} value={data.confirmed}></CaseBox>
      <CaseBox label={"Global Deaths"} value={data.deaths}></CaseBox>
      <CaseBox label={"Total Recovered"} value={data.recovered}></CaseBox>
      <CaseBox label={"Active"} value={data.active}></CaseBox>

      {/* <Chart
            title={chartData.title}
            data={chartData.data}
            color={"#3E517A"}
          /> */}
    </div>
);
}

export default App;
