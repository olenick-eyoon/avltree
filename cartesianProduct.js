function addToLog(logTitle, logText) {
  $("body").append("<p><b>" + logTitle + "</b><br/>" + logText + "</p>");
}

function render(product) {
  if (Array.isArray(product)) {
    return product.reduce(function(text, pair) {
      return text + "{ " + pair.join(" , ") + " }" + "<br/>";
    }, "");
  }
}

function cartesianProduct(sets) {
  const [first, ...rest] = sets;

  if (!rest.length) {
    return first.map(function(element) {
      return [element];
    });
  }

  var product = cartesianProduct(rest);

  return first.reduce(function(productBuild, element) {
    return [...productBuild, ...product.map(function(productElement) {
      return [element, ...productElement];
    })];
  }, []);
}

function getCartesianProduct() {
  let sets = [];

  if (arguments.length < 2) {
    return "At least two sets are required";
  }

  for (var setIndex = 0; setIndex < arguments.length; setIndex++) {
    if (!Array.isArray(arguments[setIndex])) {
      return "At least one parameter is not an array";
    }

    if (arguments[setIndex].length === 0) {
      return "Empty Cartesian Product";
    }

    sets.push(arguments[setIndex]);
  }

  return cartesianProduct(sets);
}

let set1 = [9, 3, 1, 7, 8];
let set2 = [6, 2, 4, 0, 5];
let set3 = [1, 23];

let cp = getCartesianProduct(set1, set2, set3);

addToLog("Cartesian Product", render(cp));
