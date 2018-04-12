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
              yAxisID: 'A',
              backgroundColor: ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a']
          }/*,{
            label: 'Average Hold Duration (ms)',
            data: data.map(value => value.duration/value.count),
            yAxisID: 'B',
            backgroundColor: '#eee'
        }*/]
      },
      options: {
          legend: {
              display: false,
            position: 'right'
          },
          title: {
            display: true,
            text: 'Top 10 Keys by Count (with avg hold duration)'
          },
          scales: {
            yAxes: [{
                scaleLabel: {
                    labelString: 'Key Presses',
                    display: true
                },
                gridLines: {
                    display: false
                },
                
                ticks: {
                    beginAtZero: true
                },
                id: 'A',
                type: 'linear',
                position: 'left',
            }/*, {
                
                scaleLabel: {
                    labelString: 'Avg. Hold Duration (ms)',
                    display: true
                },
                gridLines: {
                    display: false
                },
            id: 'B',
            type: 'linear',
            position: 'right',
            ticks: {
                beginAtZero: true
            }
            }*/],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
      }
  });
}

function drawChart2(ref, data) {
    console.log(data)
    Chart.defaults.global.legend.labels.usePointStyle = true;

    let library = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a']
    let colors = []
    let topCount = ref.map(value => value.key)
    let taps = data.map(value => value.key)

    for(let i = 0; i < topCount.length; i++) {
        if(topCount.indexOf(taps[i]) >= 0) {
            colors[i] = library[topCount.indexOf(taps[i])];
        } else {
            colors[i] = '#eee'
        }
    }
  
    var ctx = document.getElementById("myChart2");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(value => value.key),
            datasets: [{
                label: 'Short Taps Occurance',
                data: data.map(value => value.taps),
                backgroundColor: colors
            }]
        },
        options: {
            legend: {
                display: false,
              position: 'right'
            },
            title: {
              display: true,
              text: 'Top 10 Keys by Short Taps (<60ms)'
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        labelString: '# of Short Taps (<60ms)',
                        display: true
                    },
                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    });
}

function drawChart3(data) {
    console.log(data)
  Chart.defaults.global.legend.labels.usePointStyle = true;

  var ctx = document.getElementById("myChart3");
  var myChart = new Chart(ctx, {
      type: 'radar',
      data: {
          labels: data.map(value => value.key),
          datasets: [{
              label: 'Characater Count Occurance',
              data: data.map(value => value.count),
              backgroundColor: '#e31a1c77'
          },{
            label: 'Character Duration (hundredths of ms)',
            data: data.map(value => value.duration / 100),
            backgroundColor: '#a6cee9bb'
          }]
      },
      options: {
          legend: {
              display: false,
            position: 'right'
          },
          title: {
            display: true,
            text: 'Top 10 Keys by Count v. Duration'
          }
          
      }
  });
}

function drawChart4(ref, data) {
    console.log(data)
    Chart.defaults.global.legend.labels.usePointStyle = true;

    let library = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a']
    let colors = []
    let topCount = ref.map(value => value.key)
    let taps = data.map(value => value.key)

    for(let i = 0; i < topCount.length; i++) {
        if(topCount.indexOf(taps[i]) >= 0) {
            colors[i] = library[topCount.indexOf(taps[i])];
        } else {
            colors[i] = '#eee'
        }
    }
  
    var ctx = document.getElementById("myChart4");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(value => value.key),
            datasets: [{
                label: 'Long Holds Occurance',
                data: data.map(value => value.holds),
                backgroundColor: colors
            }]
        },
        options: {
            legend: {
                display: false,
              position: 'right'
            },
            title: {
              display: true,
              text: 'Top 10 Keys by Long Holds (>240ms)'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }