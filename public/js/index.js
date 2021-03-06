yLabels = [];
xLabels = []
let timeSeriesJSON = JSON.parse(timeSeries);
for (let i = 0; i < timeSeriesJSON.length; i++) {
    yLabels.push(timeSeriesJSON[i]['y']);
    xLabels.push(timeSeriesJSON[i]['x']);
}

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: xLabels,
        datasets: [{
            label: 'My First dataset',
            borderColor: 'rgb(107, 127, 215)',
            data: yLabels
        }]
    },

    // Configuration options go here
    options: {}
});
