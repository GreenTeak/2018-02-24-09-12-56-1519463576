'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce((x,y) => {
    if(x > y) return y;
    return x;
  })
}

module.exports = collect_min_number;

