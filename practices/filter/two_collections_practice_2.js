'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter( (x) => {
    if(collection_b.indexOf(x) > -1) return false;
    return true;
  })
}

module.exports = choose_no_common_elements;
