
const c=document.getElementById("game");
const ctx=c.getContext("2d");

const points=[
[40,470],[70,420],[50,350],[110,300],
[90,230],[160,180],[220,220],
[290,170],[250,280],[310,340],
[260,410],[180,450]
];

let current=0;
let drawing=false;

function draw(){
ctx.clearRect(0,0,c.width,c.height);
ctx.strokeStyle="#f7d77b";
ctx.lineWidth=5;
ctx.beginPath();
for(let i=0;i<=current;i++){
let p=points[i];
i?ctx.lineTo(...p):ctx.moveTo(...p);
}
ctx.stroke();

points.forEach((p,i)=>{
ctx.fillStyle=i<=current?"#ffd700":"#777";
ctx.beginPath();
ctx.arc(...p,10,0,Math.PI*2);
ctx.fill();
});
}
draw();

function move(e){
if(!drawing)return;
let r=c.getBoundingClientRect();
let x=(e.touches?e.touches[0].clientX:e.clientX)-r.left;
let y=(e.touches?e.touches[0].clientY:e.clientY)-r.top;
let p=points[current+1];
if(p && Math.hypot(x-p[0],y-p[1])<35){
current++;
draw();
if(current===points.length-1){
setTimeout(()=>{
c.style.display="none";
document.getElementById("done").style.display="block";
},500);
}
}
}

c.onmousedown=()=>drawing=true;
c.onmouseup=()=>drawing=false;
c.onmousemove=move;
c.ontouchstart=()=>drawing=true;
c.ontouchend=()=>drawing=false;
c.ontouchmove=move;
