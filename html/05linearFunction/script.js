const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A,B,C,D,background,l,E,F,G,H,m;

background = new GraphBackGround();

A = new Point(200, 200, 20, 'red', true)
B = new Point(300, 300, 20, 'blue', true)

C = new Point(10,10,15,'white',false)
D = new Point(30,10,15,'white',false)

E = new Point(100,200,20,'yellow',true)
F = new Point(300,100,20,'orange',true)

G = new Point(10,20,15,'white',false)
H = new Point(30,20,15,'white',false)

l = new LinearFunction(2,10)
m = new LinearFunction(2,10)

// for (let x = 0; x < 500; x++){
//     let p = new Point(x,l.f(x),2,"green")
//     p.draw()
// }

animate()

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height)
    background.draw()
    A.draw()
    B.draw()

    l.slope = (A.y - B.y)/(A.x - B.x)
    if (A.x - B.x == 0){
        l.slope = (A.y - B.y)/0.1
    }
    l.intercept = A.y - l.slope * A.x;

    C.x = 0
    C.y = l.y(0)
    D.x = width
    D.y = l.y(width)

    context.beginPath()
    context.moveTo(C.x,C.y)
    context.lineTo(D.x,D.y)
    context.closePath()
    context.stroke()

    C.draw()
    D.draw()

//------------------------------------------------------------------------------------------------

    E.draw()
    F.draw()

    m.slope = (E.y - F.y)/(E.x - F.x)
    if (E.x - F.x == 0){
        m.slope = (E.y - F.y)/0.1
    }
    m.intercept = E.y - m.slope * E.x
    
    G.x = 0
    G.y = m.y(0)
    H.x = width
    H.y = m.y(width)

    context.beginPath()
    context.moveTo(G.x,G.y)
    context.lineTo(H.x,H.y)
    context.closePath()
    context.stroke()

    G.draw()
    H.draw()
}