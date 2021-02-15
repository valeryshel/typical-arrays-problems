
exports.min = function min (array) {
    if (!array || !array.length) {
        return 0;
    }
    let minVal = array[0];
    for (let i = 0; i<array.length; i++) {
        if(array[i] < minVal){
            minVal = array[i];
        }

    }
  return minVal;
}

exports.max = function max (array) {
    if (!array || !array.length) {
        return 0;
    }
    let maxVal = array[0];
    for (let i = 0; i<array.length; i++) {
        if(array[i] > maxVal){
            maxVal = array[i];
        }
    }
  return maxVal;
}

exports.avg = function avg (array) {
    if (!array || !array.length) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < array.length; i++ ) {
        total = total + array[i];
    }
    let average = total/array.length;
  return average;
}
