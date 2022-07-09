//set center of the canvas
var centerX = 100;
var centerY = 100;

//draw the circle in the middle of the canvas
var c = document.getElementById("monteCarlo");
var ctx = c.getContext("2d");
var canvasWidth = c.width;
var canvasHeight = c.height;
ctx.beginPath();
ctx.arc(100, 100, 100, 0, 2 * Math.PI);
ctx.stroke();
var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

//draws the pixel at location and color
function drawPixel (x, y, r, g, b, a) {
    var index = (x + y * canvasWidth) * 4;
    
    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}
        
function updateCanvas() {
    ctx.putImageData(canvasData, 0, 0);
}

function generateThrows(n){
    for(var i = 0; i < n; i++){
        randX = Math.floor(Math.random() * 201);
        randY = Math.floor(Math.random() * 201);
        var a = randX - centerX;
        var b = randX - centerY;
        var c = Math.sqrt(a*a + b*b);
        if(c > 100){
            drawPixel(randX, randY, 0, 255, 0, 255);
        }
        else{
            drawPixel(randX, randY, 255, 0, 0, 255);
        }

    }
}

drawPixel(100,100,0,0,255,255);
generateThrows(20);
updateCanvas();