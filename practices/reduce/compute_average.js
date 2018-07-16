'use strict';

function compute_average(collection) {
  //在这里写入代码
  return parseFloat(collection.reduce((x,y) => x+y)) / collection.length;
}

module.exports = compute_average;

