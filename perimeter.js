function addToLog(logTitle, logText) {
  $("body").append("<p><b>" + logTitle + "</b><br/>" + logText + "</p>");
}

function perimeter(points) {
  if (points.length < 3) {
    return "Not a polygon";
  }

  points.push(points[0]);

  let perimeter = 0;

  for (var i = 0; i < points.length - 1; i++) {
    let x1 = Math.abs(points[i][0]);
    let x2 = Math.abs(points[i + 1][0]);
    let x = Math.abs(x1 - x2);

    let y1 = Math.abs(points[i][1]);
    let y2 = Math.abs(points[i + 1][1]);
    let y = Math.abs(y1 - y2);

    perimeter += Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }

  return perimeter;
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

addToLog("Polygon 1 perimeter", perimeter(polygon1));
addToLog("Polygon 2 perimeter", perimeter(polygon2));
addToLog("Polygon 3 perimeter", perimeter(polygon3));
