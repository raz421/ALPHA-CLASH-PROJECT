let  setHiddenById=(ele)=>{
    let ID=document.getElementById(ele);
    ID.classList.add("hidden")

}
let getDisplayById=(ele)=>{
    let ID=document.getElementById(ele);
    ID.classList.remove("hidden")
}
let randomNumber=()=>{
    let str="abcdefghijklmnopqrstuvwxyz";
    let arr=str.split('');
    let random=Math.round(Math.random()*25)
    // console.log(random);
    let alphabhet=arr[random];
    console.log(`the random alphabhet is ${alphabhet}`)
    return alphabhet
}
 function setBackgroundColor(ele){
    let ID=document.getElementById(ele);
    ID.classList.add("bg-yellow-600")
    

 }
 function removeBackgroundColor(ele){
    let ID=document.getElementById(ele);
    ID.classList.remove("bg-yellow-600")
    

 }
 let setScoreId=(ele)=>{
    let ID=document.getElementById(ele);
    let score=ID.innerText;
    score=parseInt(score);
    return score;
 }
 let textId=(ele,num)=>{
    let Id=document.getElementById(ele);
    Id.innerText=num;
 }
    
let FinalScore=(ele,score)=>{
    let ID=document.getElementById(ele);
    ID.innerText=score;
}