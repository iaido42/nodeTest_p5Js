var socket;
var diameter = 10;
function setup() {
  createCanvas(600, 600);
  background(51);
  // Verbindung zum Server
  socket = io.connect("http://localhost:3000");
  // wenn vom Server ein "mouse" empfangen wird, wird die Funktion newDrawing aufgerufen
  socket.on("mouse", newDrawing);
}
// wird vom Server aufgerufen
function newDrawing(data) {
  noStroke();
  fill(255, 0, 100);
  ellipse(data.x, data.y, diameter, diameter);
}
// wird vom Client aufgerufen
function mouseDragged() {
  console.log("Sending...." + mouseX + " " + mouseY);
  var data = {
    x: mouseX,
    y: mouseY,
  };
  // sendet an den Server
  socket.emit("mouse", data);
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, diameter, diameter);
}

function draw() {}
