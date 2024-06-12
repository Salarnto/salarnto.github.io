import {getWeights} from './components/getWeights.js'
import {getChart} from "./components/getChart.js"

// entries
const inputs = [
    {
        x: 1,
        y: 0,
        class: "1"
    },
    {
        x: 1,
        y: 1,
        class: "1"
    },
    {
        x: 2,
        y: 2,
        class: "1"
    },
    {
        x: 1,
        y: 3,
        class: "2"
    },
    {
        x: 2,
        y: 3,
        class: "2"
    },
    {
        x: 3,
        y: 3,
        class: "2"
    },
    {
        x: 4,
        y: 2,
        class: "2"
    },
];

let weights = [ 0, 0, 0 ];
const k = 1;

// to get final weights
weights = getWeights(inputs, weights, k);

// to generate chart
getChart(inputs, ...weights)
