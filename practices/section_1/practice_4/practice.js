function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let collection_c = collection_a.filter((x) => {
    if(object_b.value.indexOf(x.key) > -1) 
       return true;
    return false;
  })

  var collection_d=[];
  for(let i = 0;i < collection_c.length; i++){
      collection_d.push(collection_c[i].key)
  }
  return collection_d;
}

module.exports = collect_same_elements;
