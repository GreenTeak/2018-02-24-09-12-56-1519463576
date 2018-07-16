'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce((x,y) => {
    if(x > y) return x;
    return y;
  })
}

module.exports = collect_max_number;
