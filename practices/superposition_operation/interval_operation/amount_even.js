'use strict';

function amount_even(collection) {
  //在这里写入代码
  return collection.filter(c => c % 2 == 0).reduce((x, y) => x+y);
}

module.exports = amount_even;
