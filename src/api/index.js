const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const response = await fetch(url)
            .then(response => response.json())
            .then((data) => setData(data))
            .catch(err => {
                console.log(err);
            });

        function setData(data) {
            return { confirmed: data.confirmed, recovered: data.recovered, deaths: data.deaths, lastUpdate: data.lastUpdate }
        } 
        return response;
    } catch (error) {
    }
}

export const fetchDailyData = async () =>{
    try {
        const response = await fetch(url + "/daily")
        const result = await response.json();
        console.log("response:" + response)
        console.log("result:" +result);
    } catch (error) {
        
    }
}