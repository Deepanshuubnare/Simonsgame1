let gameseq=[];
let userseq=[];
let brr=[];
let level=0;
let started=false;
document.querySelector("body").style.backgroundColor="#0A1F44";
let h2=document.querySelector("h2");
let arr=["yellow","red","purple","green"];
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game had started!");
    started=true;
    levelup();
   }
})
function btnfl(btnnn){
    btnnn.classList.add("flash");
    setTimeout(() => {
        btnnn.classList.remove("flash");
    }, 500);
}
function btnfl1(btnnn){
    btnnn.classList.add("userflash");
    setTimeout(() => {
        btnnn.classList.remove("userflash");
    }, 500);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    // chose random button
    let v=Math.floor(Math.random()*4);
    let rac=arr[v];
    let racc=document.querySelector(`#${rac}`);
    gameseq.push(rac); 
    console.log(gameseq);
btnfl(racc);
}
function check(idx){
    // console.log(level);
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
          setTimeout(levelup,1000);
        }
    }
    else{
        brr.push(level);
       let q=Math.max(...brr);
       console.log(`Your current best score was ${q}.`)
        h2.innerHTML=`Game Over! your score was <b> ${level} </b> <br> press a key to start! your current best score was ${q}.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#0A1F44";
        },500);
        reset();
    }

}
function btnpress(){
    let btn=this;
    btnfl1(btn);
    let u=btn.getAttribute("id");
    // console.log(u);
    userseq.push(u);
    check(userseq.length-1);
}
let bt=document.querySelectorAll(".btn");
for(b of bt){
b.addEventListener("click",btnpress);
}
function reset(){
    level=0;
    started=false;
    gameseq=[];
    userseq=[];
}