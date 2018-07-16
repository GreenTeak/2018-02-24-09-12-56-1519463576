'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return collection.toString().split(',').map(function(item){
    return +item;
})
}

module.exports = double_to_one;
