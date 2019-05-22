function addToLog(logTitle, logText) {
  $("body").append("<p><b>" + logTitle + "</b><br/>" + logText + "</p>");
}

function indexOf(value, array) {
  if (!Array.isArray(array)) {
    return "Not an array";
  }

  for (var i = 0; i < array.length; i++) {
    if (value.toString().toLowerCase() === array[i].toString().toLowerCase()) {
      return i;
    }
  }
  
  return -1;
}

let array = [9, 3, -1, 7, 8, -6, -2, 4, 0, 5];
let array2 = ["naranja", "PERA", "sanDIA"];

addToLog("indexOf 1", indexOf(7, array));
addToLog("indexOf 2", indexOf("SANdia", array2));
