'use strict';
var choose_even = require("../../practices/filter/choose_even.js");
function find_last_even(collection) {
  //在这里写入代码
  let even=choose_even(collection);
   return even[even.length-1];
}

module.exports = find_last_even;
