
    document.addEventListener('keyup',(ele)=>{
        let key=ele.key
        if(key==="Escape"){
            console.log("QUIT");
            gameOver()
        }
        let get=document.getElementById("Alphabhet");
        let l=get.innerText;
        let letter=l.toLowerCase();
        console.log(key,letter)
        if(key===letter){
            console.log("you won.you get a point ");
            removeBackgroundColor(letter)
            // update score
            let score=setScoreId("current-score")
             let new_score=score+1;
             textId("current-score",new_score)
            //  play again
             countinuePlay(); 
            //  final score shown
            FinalScore("last_score",new_score)
            }
           else{
               console.log('you lose.you lost a life');
               // update life
               let life_number=setScoreId('score_Life')
               let newLifeScore=life_number-1;
               textId('score_Life',newLifeScore)
               if(newLifeScore===0){
                gameOver()
               }
           }

    })



let countinuePlay=()=>{
    let alpha=randomNumber();
    let ID=document.getElementById("Alphabhet");
    ID.innerText=alpha;
    setBackgroundColor(alpha);

}

function Play(){
    setHiddenById('home');
    setHiddenById("final_score")
    getDisplayById("playground")
    textId("score_Life",7);
    textId("current-score",0)
    countinuePlay()
}
function gameOver(){
    setHiddenById("playground");
    getDisplayById("final_score")
}