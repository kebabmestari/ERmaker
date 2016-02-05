// Load canvas
canvas = document.getElementsByTagName("canvas")[0];
ctx    = canvas.getContext("2d");

var bgColor = "#FFFFFF";
var textColor = "#000";

ctx.fillStyle = bgColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = textColor;
ctx.textAlign = "center";
ctx.fillText("Canvas ready", canvas.width/2, canvas.height/2);