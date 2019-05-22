function addToLog(logTitle, logText) {
  $("body").append("<p><b>" + logTitle + "</b><br/>" + logText + "</p>");
}

function find(func, array) {
  if (typeof func !== "function") {
    return "Not a function";
  }

  if (!Array.isArray(array)) {
    return "Not an array";
  }

  for (var i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return array[i];
    }
  }

  return undefined;
}

function biggerThan10(value) {
  return value > 10;
}

function fourLetters(value) {
  return value.toString().length === 6;
}

let array = [9, 3, -1, 7, 80, -6, -2, 4, 0, 5];
let array2 = ["naranja", "PERA", "sanDIA"];

addToLog("find 1 - biggerThan10", find(biggerThan10, array));
addToLog("find 2 - fourLetters", find(fourLetters, array2));
