let gameSeqn=[];
let userseqn=[];

let btncolor=["red","yellow","green","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 250);

}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);

}
function levelUp(){

    userseqn=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randomcolor=  btncolor [randIdx];
    let randmbtn=document.querySelector(`.${randomcolor}`);
    gameSeqn.push(randomcolor);
    console.log(gameSeqn);
    gameFlash( randmbtn);

}

function checkAns(idx){
// console.log("current level",level);

if(userseqn[idx]===gameSeqn[idx]){
    if(userseqn.length==gameSeqn.length){
        setTimeout(levelUp,1000);
    }
}else{
    h2.innerHTML=`Game Over!!<b>your score is ${level} </b><br>press any key to started.`;
    document. querySelector("body").style.backgroundColor="red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor="white";
    }, 250);
    reset();
}
}

function btnPress(){
    console.log(this);
    let btn= this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    userseqn.push(usercolor);

    checkAns(userseqn.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btns of allBtns){
    btns.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    userseqn=[];
    gameSeqn=[];
    level=0;
}