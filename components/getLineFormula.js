import {getFloat} from "./getFloat.js"

export function getLineFormula(...weights){

    const w1 = weights[0];
    let w2 = weights[1];
    const w0 = weights[2];

    if(w2 > 0 || w2 < 0){
        w2 = -w2;
    }

    let m = getFloat(w1 / w2);
    let b = getFloat(w0 / w2);

    const formula = ` ${m} * x + ${b} `;

    return formula;
}