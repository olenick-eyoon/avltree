function addToLog(logTitle, logText) {
  $("body").append("<p><b>" + logTitle + "</b><br/>" + logText + "</p>");
}

function integral(func, lowerBound, upperBound, step) {
  if (typeof func !== "function") {
    return "No function provided";
  }

  if (step > upperBound - lowerBound) {
    return "Step bigger than segment <lowerBound-upperBound>";
  }

  let area = 0;

  for (var x = lowerBound; x < upperBound; x += step) {
    area += func(x) * step;
  }

  return area;
}

function funcConst(x) {
  return 3;
}

function funcQuadratic(x) {
  return Math.pow(x, 2);
}

function funcSin(x) {
  return Math.sin(x, 2);
}

function toRoundVolume(x){
	return Math.pow(x, 2) * 3.14;
}

function funcConstVolume(x) {
  return toRoundVolume(funcConst(x));
}

function funcQuadraticVolume(x) {
  return toRoundVolume(funcQuadratic(x));
}

function funcSinVolume(x) {
  return toRoundVolume(funcSin(x));
}

addToLog("Const", integral(funcConst, 0, 10, 0.1));
addToLog("Quadratic", integral(funcQuadratic, -10, 10, 0.1));
addToLog("Sin", integral(funcSin, -10, 10, 0.1));

addToLog("ConstVolume", integral(funcConstVolume, 0, 10, 0.1));
addToLog("QuadraticVolume", integral(funcQuadraticVolume, -10, 10, 0.1));
addToLog("SinVolume", integral(funcSinVolume, -10, 10, 0.1));
