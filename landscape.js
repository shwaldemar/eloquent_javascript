let landscape = function() {
  let result = "";

  let flat = function(size) {
    for (let count = 0; count < size; count ++)
    result += "_"
  };

  let mountain = function(size) {
    result += "/";
    for (let count = 0; count < size; count ++)
    result += "'";
    result += "\\";
  }

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
}
console.log(landscape())
