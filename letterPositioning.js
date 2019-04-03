let input = process.argv[2];

function letterPositioning(inputString){
    let countObj = {};

    let noSpace = inputString.toLowerCase().split(" ").join("");

    for (let i = 0; i < noSpace.length; i++){
        if(!countObj[noSpace[i]]){
        countObj[noSpace[i]] = [i];
        } else {
            countObj[noSpace[i]].push(i);
        }
    }
    return countObj;
}

// console.log(letterPositioning("lighthouse in the house"));