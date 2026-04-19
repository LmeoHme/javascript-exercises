const convertToCelsius = function(FDegree) {
  let CDegree = (FDegree - 32) / (9 / 5);
  return Math.round((CDegree + Number.EPSILON) * 10) / 10;
};

const convertToFahrenheit = function(CDegree) {
  let FDegree = CDegree * (9 / 5) + 32;
  return Math.round((FDegree + Number.EPSILON) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
