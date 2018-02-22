const PieChart = function () {

  const container = document.querySelector('#pie-chart');

  const chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },
    title: {
      text: "Pokemon Types I've Caught"
    },
    series: [{
      name: "Type",
      data: [
        {
          name: "Fire",
          y: 74,
          color: "#ffac33",
          sliced: true
        },
        {
          name: "Water",
          y: 25,
          color: "#73b7ff",
          sliced: true
        },
        {
          name: "Grass",
          y: 1,
          color: "#00ba2f",
          sliced: true
        },
        {
          name: "Air",
          y: 12,
          color: "salmon"
        }
      ]
    }]
  });
}
