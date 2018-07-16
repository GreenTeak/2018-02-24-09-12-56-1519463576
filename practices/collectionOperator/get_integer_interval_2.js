'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码

  let collection=[];
  if(number_a % 2 && number_b % 2) return collection;

  let high = Math.max( number_a, number_b);
  let low = Math.min( number_a, number_b);
  let index = 0;
  collection[index]=high;
  while(high > low + 1){
    high = high-2;
    collection[index + 1]=high;
    index = index + 1;
  }
  return number_a >= number_b ? collection : collection.reverse();
}

module.exports = get_integer_interval_2;
