
exports.min = function min (array) {
    let minVal = array[0];
    for (let i = 0; i<array.length; i++) {
        if(array[i] < minVal){
            minVal = array[i];
        }
    }
  return minVal;
}

exports.max = function max (array) {
    let maxVal = array[0];
    for (let i = 0; i<array.length; i++) {
        if(array[i] > maxVal){
            maxVal = array[i];
        }
    }
  return maxVal;
}

exports.avg = function avg (array) {
    let average = 0;
    for (let i = 0; i < array.length; i++ ) {
        average = (average + array[i])/array.length;
    }
  return average;
}
