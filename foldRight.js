function addToLog(logTitle, logText) {
  $("body").append("<p><b>" + logTitle + "</b><br/>" + logText + "</p>");
}

function foldRight(func, array, initial = null) {
  if (typeof func !== "function") {
    return "Not a function";
  }

  if (!Array.isArray(array)) {
    return "Not an array";
  }

  let acc, startIndex, lastIndex = array.length - 1;

  if (initial == null) {
    startIndex = lastIndex - 1;
    acc = array[lastIndex];
  } else {
    startIndex = lastIndex;
    acc = initial;
  }

  for (var index = startIndex; index >= 0; index--) {
    acc = func(acc, array[index], index, array);
  }

  return acc;
}

function max(acc, value, index, array) {
  return value > acc ? value : acc;
}

function sum(acc, value, index, array) {
  return value + acc;
}

function string(acc, value, index, array) {
  return acc += (acc.length ? "," : "") + value.toString();
}

let array = [9, 3, 1, 7, 8, 6, 2, 4, 0, 5];

addToLog("foldRight 1 - max", foldRight(max, array));
addToLog("foldRight 2 - sum", foldRight(sum, array));
addToLog("foldRight 3 - string", foldRight(string, array, ""));
