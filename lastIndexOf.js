function addToLog(logTitle, logText) {
  $("body").append("<p><b>" + logTitle + "</b><br/>" + logText + "</p>");
}

function lastIndexOf(value, array) {
  if (!Array.isArray(array)) {
    return "Not an array";
  }

  for (var i = array.length - 1; i >= 0; i--) {
    if (value.toString().toLowerCase() === array[i].toString().toLowerCase()) {
      return i;
    }
  }
  
  return -1;
}

let array = [9, 3, -1, 7, 8, -6, -2, 4, 3, 0, 5];
let array2 = ["naranja", "PERA", "sanDIA"];

addToLog("lastIndexOf 1", lastIndexOf(3, array));
addToLog("lastIndexOf 2", lastIndexOf("SANdia", array2));
