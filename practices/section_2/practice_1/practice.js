function count_same_elements(collection) {
  //在这里写入代码
  //return collection.reduce((p,k) => (p[k.key].count++ || (p[k.key].count = 1),p.key),{}); 
  let collection_b=[];
  for(let i = 0;i < collection.length; i++){
    const b = collection_b.find((b) => b.key === collection[i])
     if(b){
        b.count ++;
      } 
    else{
       collection_b.push({key: collection[i],count: 1})
     } 
  }
  return collection_b;
}

module.exports = count_same_elements;
