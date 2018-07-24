'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  return collection.filter(c => c % 2 === 0).map(c => String.fromCharCode(96 + c));
}

module.exports = even_to_letter;
