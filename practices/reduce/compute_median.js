'use strict';

function compute_median(collection) {
  //在这里写入代码
  let len = collection.length;
  let medain = 0;
  collection.sort( (x,y) => x-y);
  if(len % 2 === 1) return collection[ parseInt(len / 2) ];
  return parseFloat(collection[parseInt(len / 2)]+collection[parseInt(len / 2) - 1]) / 2;
}

module.exports = compute_median;


