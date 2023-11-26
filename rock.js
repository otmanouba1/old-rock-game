const rock = document.querySelector('.rock')
const siser = document.querySelector('.siser')
const paper = document.querySelector('.paper')
const startOver = document.querySelector('.start-over')
const divAdd=document.querySelector('.add')
let you=0
let computer=0
let hin=''

function rockFunction(){
    rockPaperSiser('rock')
}

function paperFinction(){
    rockPaperSiser('paper')
}
function siserFunction(){
    rockPaperSiser('siser')
}

function rockPaperSiser(hh){
    const chois = ['rock','paper','siser'] 
    let random= Math.floor(Math.random()*chois.length)
    hin = 'you: '+hh+" and computer: "+chois[random]
    if (chois[random]==hh) {
        addToHtnl(you,computer)
    }
    else if (random==0 && hh=='paper' || random==1 && hh=='siser' || random==2 && hh=='rock'){
        you+=1
        addToHtnl(you,computer)
    }
    else{
       computer+=1
       addToHtnl(you,computer)
    }
    hin = 'you: '+hh+"and computer:"+chois[random]
   
}


function addToHtnl(b,c){
    let tag=`<p class='younew'> ${hin}
     <br><br>you: ${you} , and computer: ${computer}</p>`
   divAdd.innerHTML =tag
}
function setToZero(){
    divAdd.innerHTML =''
    you=0
    computer=0
}