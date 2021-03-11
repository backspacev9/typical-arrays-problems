
exports.min = function min (array) {
  var minimum = 0;
  if (array !== undefined){
    for (let i=0;i<array.length; i++){
      if (array[i] < minimum) {
        minimum = array[i];
      }
    }
    return minimum;
  } else return 0;
}

exports.max = function max (array) {
  var maximum = 0;
  if (array !== undefined){
    for (let i=0;i<array.length; i++){
      if (array[i] > maximum) {
        maximum = array[i];
      }
    }
    return maximum;
  } else return 0;
}

exports.avg = function avg (array) {
  var avr = 0;
  var sum = 0;
  if (array !== undefined){
    for (let i=0;i<array.length; i++){
        sum = sum + array[i];
        avr = sum/array.length;
    }
    return avr;
  } else return 0;
}


