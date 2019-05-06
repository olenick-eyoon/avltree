function addToLog(logTitle, logText) {
  $("body").append("<p><b>" + logTitle + "</b><br/>" + logText + "</p>");
}

function area(points) {
  if (points.length < 3) {
    return "Not a polygon";
  }

  points.push(points[0]);

  let acc = 0;

  for (var i = 0; i < points.length - 1; i++) {
    acc += points[i][0] * points[i + 1][1] - points[i][1] * points[i + 1][0];
  }

  return Math.abs(acc) / 2;
}

let polygon1 = [
  [0, 0],
  [0, 1],
  [1, 1],
  [1, 0]
];

let polygon2 = [
  [3, 4],
  [5, 11],
  [12, 8],
  [9, 5],
  [5, 6]
];

let polygon3 = [
  [2, 4],
  [3, -8],
  [1, 2]
];

addToLog("Polygon 1 area", area(polygon1));
addToLog("Polygon 2 area", area(polygon2));
addToLog("Polygon 3 area", area(polygon3));
