const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new Point(100,100,30,'purple',1);

animate()

function animate(){
    requestAnimationFrame(animate)
    context.clearRect(0,0,width,height)
    point.y += point.speed
    point.draw();
    if (point.y > height+20)
        point.y = -50
        point.speed += 1
}