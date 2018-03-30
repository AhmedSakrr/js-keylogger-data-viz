function drawChart(data) {
  console.log(data)
  Chart.defaults.global.legend.labels.usePointStyle = true;

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: data.map(value => value.key),
          datasets: [{
              label: 'Characater Count Occurance',
              data: data.map(value => value.count),
              backgroundColor: ["#084081", "#0868ac", "#2b8cbe", "#4eb3d3", "#7bccc4", "#a8ddb5", "#ccebc5", "#e0f3db", "#f7fcf0"]
          }]
      },
      options: {
          legend: {
              display: false,
            position: 'right'
          },
          title: {
            display: true,
            text: 'Top 9 Keys by Count'
          }
      }
  });
}