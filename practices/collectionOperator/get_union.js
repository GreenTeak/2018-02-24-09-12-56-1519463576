'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  
  let collection_c=collection_a;
  let index=collection_a.length;
  for(let i = 0;i < collection_b.length; i++){
    if(collection_a.indexOf(collection_b[i])==-1){
      collection_c[index++]=collection_b[i];
    }
  }
  return collection_c;
}

module.exports = get_union;

