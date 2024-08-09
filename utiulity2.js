document.addEventListener("keyup",(ele)=>{
    let value=ele.key;
    if(value==="Escape"){
        console.log("QUIT");
        gameOver()
    }
    
    let letter=document.getElementById('Alphabhet')
    let char=letter.innerText;
    char=char.toLowerCase()
    if(char===value){
        console.log("congratulation! you get a point");
        removeBackgroundColor(char);
        // update score
        let num=getScore("current-score")
         num+=1;
        updateScore("current-score" ,num)
        updateScore("last_score",num)
        countinuePlay();
    }
    else{
        console.log("Sorry!you lost a life")
        let num=getScore("score_Life");
        num-=1;
        updateScore( "score_Life",num)
        if(num===0){
            gameOver();

        }
    }
})


let countinuePlay=()=>{
    let alpha=randomNumber();
    setAlphabhet("Alphabhet",alpha)
    setBAckgroundColor(alpha);    
}


function Play(){

    setHiddenId("home");
    setHiddenId("final_score")
    setDisplayID("playground")
    updateScore("score_Life",7);
    updateScore("current-score",0)
    
    
    countinuePlay();
   
}
function gameOver(){
    setHiddenId("playground")
    setDisplayID("final_score")
    let ID=document.getElementById("Alphabhet");
    let text=ID.innerText;
    removeBackgroundColor(text);
}