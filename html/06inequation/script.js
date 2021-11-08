const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A,B,dx,dy,line,points

let bg = new GraphBackGround()

line = new LinearFunction(0,0)

A = new Point(200, 200, 20, 'red', true)
B = new Point(300, 300, 20, 'blue', true)

C = new Point(200, 200, 20, 'white', false)
D = new Point(300, 300, 20, 'white', false)

//E = new Point(200, 300, 10, 'black', true)

points = []
for(let i = 0; i < 100; i++){
    let e = new Point(Math.random()*width, Math.random()*height, 10, 'black', false)
    points.push(e)
}

animate()

function animate(){
    requestAnimationFrame(animate)
    context.clearRect(0,0,width,height)
    bg.draw()
    A.draw()
    B.draw()

    dx = B.x - A.x
    dy = B.y - A.y

    line.slope = dy/dx
    line.intercept = A.y - line.slope * A.x

    C.x = 0
    C.y = line.y(0)
    C.draw()

    D.x = width
    D.y = line.y(width)
    D.draw()

    /*if (E.y > line.slope* E.x + line.intercept){
        E.color = "green"
    } else {
        E.color = "red"
    }
    E.draw()*/

    points.map((p)=>{
        if (p.y > line.slope * p.x + line.intercept){
            p.color = 'green'
        }else{
            p.color = 'red'
        }
        p.draw();
    })

    context.beginPath()
    context.moveTo(C.x,C.y)
    context.lineTo(D.x,D.y)
    context.closePath()
    context.stroke()
}