'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  if(collection_a.length!=collection_b.length) 
     return false;
  if(collection_a.sort().toString() === collection_b.sort.toString())
    return false;
  return true;
}

module.exports = compare_collections;


