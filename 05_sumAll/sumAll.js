const sumAll = function (a, b) {
  const max = Math.max(a, b);
  const min = Math.min(a, b);

  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  } else {
    //Formula for the sum of n, reference wikipedia 1+2+3+4...
    return (max * (max + 1)) / 2 - ((min - 1) * min) / 2;
  }
};

// Do not edit below this line
module.exports = sumAll;
