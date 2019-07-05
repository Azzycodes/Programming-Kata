const repeatNumbers = function(input) {
  let result = "";

  input.forEach(function(num, index) {
    for (let i = 0; i < num[1]; i++) {
      result += num[0];
    }
    if (index < (input.length - 1)) {
      result += ", ";
    }
  });
 
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));