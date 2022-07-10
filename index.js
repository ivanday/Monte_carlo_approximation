
//initialize counts
var outsideCount = 0;
var insideCount = 0;

//draw the circle in the middle of the canvas
var c = document.getElementById("monteCarlo");
var ctx = c.getContext("2d");
var canvasWidth = c.width;
var canvasHeight = c.height;
var centerX = canvasWidth / 2;
var centerY = canvasHeight / 2;
var radius = c.width / 2;
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.stroke();
var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

//draws the pixel at location and color
function drawPoint (x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

//populates the dart board and returns the counts of inside and outside the circle
function generateThrows(n){
    for(var i = 0; i < n; i++){
        var randX = Math.floor(Math.random() * (canvasWidth+1));
        var randY = Math.floor(Math.random() * (canvasHeight+1));
        var a = randX - centerX;
        var b = randY - centerY;
        var distance = Math.sqrt(a*a + b*b);
        console.log(distance);
        if(distance > radius){
            drawPoint(randX, randY, "green");
            outsideCount = outsideCount + 1;
        }
        else{
            drawPoint(randX, randY, "red");
            insideCount = insideCount + 1;
        }

    }
    //console.log(outsideCount + " " + insideCount);
    return [insideCount, outsideCount];
}

drawPoint(centerX, centerY, "blue");
var count = generateThrows(100);
console.log(count[0] + " " + count[1]);