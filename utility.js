let countinuePlay=()=>{
    let alpha=randomNumber();
    let ID=document.getElementById("Alphabhet");
    ID.innerText=alpha;
    setBackgroundColor(alpha);

}

function Play(){
    setHiddenById('home');
    getDisplayById("playground")
    countinuePlay()
}