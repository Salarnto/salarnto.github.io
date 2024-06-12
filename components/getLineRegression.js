import {getLineFormula} from "./getLineFormula.js";

const lineRegression = [];

export function getLineRegression(...weights){

    const lineFormula = getLineFormula(...weights);

    for(let x = -5; x <= 5; x++){

        lineRegression.push({
            x: x,
            y: eval(lineFormula)
        })
    }

    return lineRegression
}