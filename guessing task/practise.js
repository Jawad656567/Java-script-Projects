let hafeez="hafeez";
let jawad="jawad";
let ishraq="ishraq";
function guess(){

let guesses=document.getElementById("guess").value;
let result=document.querySelector(".result");

if(guesses==zohaib){
result.innerHTML="Congratulation! yes the Hafeez Are my classmate ";

}else if(guesses==jawad){
    result.innerHTML="yes dawood are my classmate";
    
    } else if(guesses==ishraq){
        result.innerHTML="no this is not my classmate";
        
        }else{
    result.innerHTML="else"; 
}

}