'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码

  let collection=[];
  let high = Math.max( number_a, number_b);
  let low = Math.min( number_a, number_b);
  let index = 0;
  collection[index]=high;
  while(high > low){
    high = high-1;
    collection[index + 1]=high;
    index = index + 1;
  }
  return number_a >= number_b ? collection : collection.reverse();
}

module.exports = get_integer_interval;

