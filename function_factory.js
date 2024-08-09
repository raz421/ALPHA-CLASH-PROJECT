let setHiddenId=(ele)=>{
    let ID=document.getElementById(ele);
    ID.classList.add("hidden")
}
let setDisplayID=(ele)=>{
    let ID=document.getElementById(ele);
    ID.classList.remove("hidden")
}
let randomNumber=()=>{
    let str="abcdefghijklmnopqrstuvwxyz";
    let arr=str.split("");
    let random=Math.round(Math.random()*25)
    return arr[random];
}
let setAlphabhet=(ele,char)=>{
    let ID= document.getElementById(ele);
    ID.innerText=char

}
let setBAckgroundColor=(ele)=>{
    let ID=document.getElementById(ele);
    ID.classList.add("bg-yellow-600")

}
let removeBackgroundColor=(ele)=>{
    let ID=document.getElementById(ele);
    ID.classList.remove("bg-yellow-600")

}
let getScore=(ele)=>{
    let ID=document.getElementById(ele);
    let text=ID.innerText;
    let num=parseInt(text);
   return num

}
let updateScore=(ele,num)=>{
    let ID=document.getElementById(ele);
    ID.innerText=num
}