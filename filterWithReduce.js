function addToLog(logTitle, logText) {
  $("body").append("<p><b>" + logTitle + "</b><br/>" + logText + "</p>");
}

function filterWithReduce(func, array) {
  if (typeof func !== "function") {
    return "Not a function";
  }

  if (!Array.isArray(array)) {
    return "Not an array";
  }

  let filtered = array.reduce(function(total, value) {
    if (func(value)) {
      total.push(value);
    }

    return total;
  }, []);

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

addToLog("filterWithReduce 1 - positives", filterWithReduce(positives, array));
addToLog("filterWithReduce 2 - negatives", filterWithReduce(negatives, array));
addToLog("filterWithReduce 3 - even", filterWithReduce(even, array));
