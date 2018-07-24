'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  const min = Math.min(number_a, number_b);
  const max = Math.max(number_a, number_b);
  const result = [];

  for (let i = min; i <= max; i++) {

    result.push(String.fromCharCode(96 + i));
  }

  return number_a > number_b ? result.reverse() : result;
}

module.exports = get_letter_interval;
