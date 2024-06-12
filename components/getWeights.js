import {getFloat} from "./getFloat.js";

export function getWeights(inputsParam, weightsParam, kParam){
    
    const inputs = inputsParam;
    let weights = weightsParam;
    let k = kParam;
    let passInRow = 0;
    let steps = 0;

    for(let j = 0; j < 100; j++){
        for(let i = 0; i < inputs.length; i++){
            if(passInRow == inputs.length){
                break;
            }else{
                let result = getFloat(weights[0] * inputs[i].x 
                    + weights[1] * inputs[i].y 
                    + weights[2] * 1)
                ;

                if(result <= 0 && inputs[i].class == "1"){
                    weights[0] += k * inputs[i].x;
                    weights[1] += k * inputs[i].y;
                    weights[2] += k * 1;

                    weights = [getFloat(weights[0]), getFloat(weights[1]), getFloat(weights[2])];
                    steps++;
                    console.log(result, '  Updated! New weights:', weights);
                    passInRow = 0;

                }else if(result >= 0 && inputs[i].class == "2"){
                    weights[0] -= k * inputs[i].x;
                    weights[1] -= k * inputs[i].y;
                    weights[2] -= k * 1;

                    weights = [getFloat(weights[0]), getFloat(weights[1]), getFloat(weights[2])];
                    steps++;
                    console.log(result, '  Updated! New weights:', weights);
                    passInRow = 0;

                }else{
                    steps++;
                    console.log(result, "  Passed.");
                    passInRow++;
                }
            }  
        }
    }

    return weights
}