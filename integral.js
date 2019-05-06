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
    //$("body").append(x + " -> " + area + "<br/>");
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

function toRoundVolume(f){
	return (x) => Math.pow(f(x), 2) * Math.PI;
}

addToLog("Const", integral(funcConst, 0, 10, 0.1));
addToLog("Quadratic", integral(funcQuadratic, 0, 10, 0.1));
addToLog("Sin", integral(funcSin, -10, 10, 0.1));

addToLog("ConstVolume", integral(toRoundVolume(funcConst), 0, 10, 0.1));
addToLog("QuadraticVolume", integral(toRoundVolume(funcQuadratic), -10, 10, 0.1));
addToLog("SinVolume", integral(toRoundVolume(funcSin), -10, 10, 0.1));
