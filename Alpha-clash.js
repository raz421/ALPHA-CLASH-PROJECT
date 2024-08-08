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
    console.log(random);
    let alphabhet=arr[random];
    return alphabhet
}
 function setBackgroundColor(ele){
    let ID=document.getElementById(ele);
    ID.classList.add("bg-yellow-600")
    

 }