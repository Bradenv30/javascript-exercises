const leapYears = function (year) {
  //if year meets all the requirments, return true. If not, return false
  //if year is divisible by 4, and both 100 and 400, return true
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};
//If a leap year, return true, if not return false
// Do not edit below this line
module.exports = leapYears;
