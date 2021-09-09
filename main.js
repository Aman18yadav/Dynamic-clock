var clock=setInterval(clocktiming, 1000);  
function clocktiming(){
var d=new Date();
var x=d.toLocaleTimeString();
document.getElementById("demo").innerHTML=x;
}