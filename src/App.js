import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Cards, CountryPicker, Chart } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: ""
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

 handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const {data, country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data}></Cards>
        <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
        <Chart data={this.state.data} country={country}></Chart>
      </div>
    );
  }
}

export default App;

//import Chart from './Chart.js';

// function App() {
//   const [data, setData] = useState("");

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     fetch("https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-06-07", {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
//         "x-rapidapi-key": "dbf67c03a6mshcdf93c761d0bd26p1079a3jsn825caf63e790"
//       }
//     })
//       .then(response => response.json())
//       .then(receivedData => setData(receivedData.data))
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className={styles.container}>
//       <CaseBox label={"Total Confirmed"} value={data.confirmed}></CaseBox>
//       <CaseBox label={"Global Deaths"} value={data.deaths}></CaseBox>
//       <CaseBox label={"Total Recovered"} value={data.recovered}></CaseBox>
//       <CaseBox label={"Active"} value={data.active}></CaseBox>
//     </div>
//   );
// }


