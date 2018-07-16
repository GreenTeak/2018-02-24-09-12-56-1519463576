'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let collection=[];
  let high = Math.max( number_a, number_b);
  let low = Math.min( number_a, number_b);
  let index = 0;
  collection[index]=String.fromCharCode(high+97-1);
  while(high > low){
    high = high-1;
    //collection[index + 1]=high+'a'-1;
    collection[index + 1]=String.fromCharCode(high+97-1);
    index = index + 1;
  }
  return number_a >= number_b ? collection : collection.reverse();
}

module.exports = get_letter_interval;
