const app = function () {
  const url = "https://restcountries.eu/rest/v2/all";
  // makeRequest(url, requestComplete);

  const request = new XMLHttpRequest();
  request.open('GET', url);

  request.addEventListener('load', function () {
    const jsonString = this.responseText;
    const countries = JSON.parse(jsonString);
    const northEurope = countries.filter(function (country) {
      return country.subregion === "Northern Europe";
    })

    getCountryChart(northEurope);
  });

    request.send();


  // const container = document.querySelector('#column-chart');
  // const title = "Our Programming Languages";
  // const series = [{
  //   name: "Cohort 7",
  //   data: [8, 12, 3 ,1],
  //   color: "salmon"
  // },
  // {
  //   name: "Cohort 18",
  //   data: [10, 11, 1 ,1],
  //   color: "#375"
  // }];
  // const categories = ["Javascript", "Java", "Ruby", "Algol"];
  //
  //
  // new PieChart();
  // new ColumnChart(container, title, series, categories);
}



const getCountryChart = function (countries) {

  const container = document.querySelector('#country-chart');

  const title = "Country Areas";

  const data = countries.map(function (country) {
    return country.area;
  });

  const series = [{
    name: "Countries",
    data: data
  }];

  const categories = countries.map(function (country) {
    return country.name;
  });


  new ColumnChart(container, title, series, categories);
}





// const makeRequest = function (url, callback) {
//   const request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.addEventListener("load", callback);
//   request.send();
// }
//
// const requestComplete = function () {
//   if(this.status !== 200) return;
//   const jsonString = this.responseText;
//   const countries = JSON.parse(jsonString);
//   console.log(countries);
  // populateList(countries);
// }

document.addEventListener("DOMContentLoaded", app);
