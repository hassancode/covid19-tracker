
function apis() {
    return {
        fetchDataByCountry,
        fetchAllCountries,
        fetchTotalReport
    }
}

async function fetchDataByCountry(countryName) {
    var url = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=" + countryName;
    var options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "dbf67c03a6mshcdf93c761d0bd26p1079a3jsn825caf63e790"
        }
    };

    var fetchResult = await fetch(url, options);
    var json = await fetchResult.json();
    return json.data;
}


async function fetchAllCountries() {
    var url = "https://covid-193.p.rapidapi.com/countries";
    var options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "dbf67c03a6mshcdf93c761d0bd26p1079a3jsn825caf63e790"
        }
    };

    var fetchResult = await fetch(url, options);
    var json = await fetchResult.json();
    return json.response;
}

async function fetchTotalReport(date) {
    var url = "https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-06-07";
    var options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
            "x-rapidapi-key": "dbf67c03a6mshcdf93c761d0bd26p1079a3jsn825caf63e790"
        }
    };

    var fetchResult = await fetch(url, options);
    var json = await fetchResult.json();
    return json.data;
}
export {apis};
