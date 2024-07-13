var state = false
var points = 0
var button = document.getElementById("#button")

function switchState(){
    state = !state
};
function spin(element){
    if (state){
        element.style.transform = "rotate(180deg)"
    }else{
        element.style.transform = "rotate(0deg)"
    }
};
function point(){
    points++;
    document.getElementById("#pointtext").innerHTML = "Clicks: "+points;
};
button.onclick = () =>{
    alert(ok);
};