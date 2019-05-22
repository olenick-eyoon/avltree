function addToLog(logTitle, logText) {
  $("body").append("<p><b>" + logTitle + "</b><br/>" + logText + "</p>");
}

function filter(func, array) {
  if (typeof func !== "function") {
    return "Not a function";
  }

  if (!Array.isArray(array)) {
    return "Not an array";
  }

  let filtered = [];

  for (var index = 0; index <= array.length; index++) {
    if (func(array[index])) {
      filtered.push(array[index]);
    }
  }

  return filtered;
}

function positives(value) {
  return value >= 0;
}

function negatives(value) {
  return value < 0;
}

function even(value) {
  return (value % 2) === 0;
}

let array = [9, 3, -1, 7, 8, -6, -2, 4, 0, 5];

addToLog("filter 1 - positives", filter(positives, array));
addToLog("filter 2 - negatives", filter(negatives, array));
addToLog("filter 3 - even", filter(even, array));
