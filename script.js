const c=document.getElementById('c'),x=c.getContext('2d');
const pts=[[45,460],[80,390],[45,310],[110,250],[80,170],[160,120],[240,160],[290,250],[250,330],[310,420]];
let n=0,down=false,path=[];
function draw(){x.clearRect(0,0,360,520);x.strokeStyle='#ffd84d';x.lineWidth=5;x.beginPath();path.forEach((p,i)=>i?x.lineTo(...p):x.moveTo(...p));x.stroke();pts.forEach((p,i)=>{x.fillStyle=i<n?'#7dff7d':'#7b5cff';x.beginPath();x.arc(...p,22,0,7);x.fill();x.fillStyle='white';x.font='18px Arial';x.textAlign='center';x.fillText(i+1,p[0],p[1]+6)});}
draw();
function move(e){if(!down)return;let r=c.getBoundingClientRect(),a=e.touches?e.touches[0]:e;let mx=a.clientX-r.left,my=a.clientY-r.top;if(n<pts.length&&Math.hypot(mx-pts[n][0],my-pts[n][1])<35){path.push(pts[n]);n++;draw();if(n===pts.length){setTimeout(()=>{c.style.display='none';document.getElementById('done').style.display='block'},500)}}}
c.onmousedown=()=>down=true;c.onmouseup=()=>down=false;c.onmousemove=move;c.ontouchstart=()=>down=true;c.ontouchend=()=>down=false;c.ontouchmove=move;
