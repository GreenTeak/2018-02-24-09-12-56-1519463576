'use strict';

function average_uneven(collection) {

  //在这里写入代码
  const unevens = collection.filter(c => c % 2 !== 0);
  return unevens.reduce((a, b) => a + b) / unevens.length;
}

module.exports = average_uneven;
