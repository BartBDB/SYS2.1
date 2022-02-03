const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A,B,C,graph,ab,ac,bc,mAB,mAC,mBC,aMbc,bMac,cMab,S

graph = new GraphBackGround();

A = new Point(200,200,"15","red",true)
B = new Point(300,300,"15","green",true)
C = new Point(400,400,"15","blue",true)

mAB = new Point(0,0,"15","white",false) 
mAC = new Point(0,0,"15","white",false) 
mBC = new Point(0,0,"15","white",false) 

S = new Point(0,0,"15","black",false) 

ab = new LinearFunction(0,0)
ac = new LinearFunction(0,0)
bc = new LinearFunction(0,0)

aMbc = new LinearFunction(0,0)
bMac = new LinearFunction(0,0)
cMab = new LinearFunction(0,0)

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    graph.draw();

    ab.lineThroughTwoPoints(A,B);
    bc.lineThroughTwoPoints(B,C);
    ac.lineThroughTwoPoints(A,C);
    ab.draw("red")
    ac.draw("green")
    bc.draw("blue")
 
    mAB.x = (A.x + B.x)/2;
    mAB.y = (A.y + B.y)/2;
    mAC.x = (A.x + C.x)/2;
    mAC.y = (A.y + C.y)/2;
    mBC.x = (B.x + C.x)/2;
    mBC.y = (B.y + C.y)/2;

    aMbc.lineThroughTwoPoints(A,mBC);
    bMac.lineThroughTwoPoints(B,mAC);
    cMab.lineThroughTwoPoints(C,mAB);

    S.x = aMbc.intersection(bMac).x;
    S.y = aMbc.intersection(bMac).y;

    A.draw()
    B.draw()
    C.draw()
    mAB.draw();
    mAC.draw();
    mBC.draw();
    aMbc.draw('gray');
    bMac.draw('gray');
    cMab.draw('gray');
    S.draw();
}