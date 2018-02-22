
const ColumnChart = function(container, title, series, categories){

  const chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container
    },
    title: {
      text: title
    },
    series: series,
    xAxis: {
      categories: categories
    }
  })
}
