// to separate inputs
let classifiedInputs = [[],[]]

export function inputsClassifier(inputs){
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].class === '1'){
            classifiedInputs[0].push(inputs[i]);
        }else{
            classifiedInputs[1].push(inputs[i]);
        }
    }

    return classifiedInputs
}