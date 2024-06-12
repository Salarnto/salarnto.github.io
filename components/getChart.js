import {getLineFormula} from "./getLineFormula.js"
import {inputsClassifier} from "./inputsClassifier.js"
import {getLineRegression} from "./getLineRegression.js"

//const myChart = document.getElementById('myChart')

export function getChart(inputs, ...weights){
    new Chart('myChart', {
        type: "scatter",
        data: {
            datasets: [{
                label: "Class One",
                backgroundColor: 'rgb(0, 255, 0)',
                pointRadius: 3,
                pointBackgroundColor: 'rgb(0, 255, 0)',
                data: inputsClassifier(inputs)[0]
            },{
                label: "Class Two",
                backgroundColor: 'rgb(0, 0, 255)',
                pointRadius: 3,
                pointBackgroundColor: 'rgb(0, 0, 255)',
                data: inputsClassifier(inputs)[1]
            },{
                type: 'line',
                fill: false,
                pointRadius: 1,
                label: getLineFormula(...weights),
                borderColor: 'rgba(255, 0, 0, 0.5)',
                data: getLineRegression(...weights)
            }]
        },
        options: {
            legend: {display: true},
            scales: {
                xAxes: [{
                    ticks: {
                        min: -5,
                        max: 5
                    }
                }],
                yAxes: [{
                    ticks: {
                        min: -5,
                        max: 5
                    }
                }]
            }
        }
    });
}