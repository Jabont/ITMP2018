var btt = 0;

function addChild(){
    
    if(btt<10)
    {
    parent = document.querySelector('.battery');
    bat = document.createElement('div');
    parent.appendChild(bat);
    btt++

    if(btt < 3){
        parent.classList.add("red");
    }
    if(btt >= 3){
        parent.classList.add("orange");
    }
    if(btt > 5){
        parent.classList.add("green");
    }
}else{
    alert("Full!!");
}


}