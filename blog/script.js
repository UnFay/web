var isLike = null


function day(){
    document.querySelector("body").style.color= "black";
    document.querySelector("body").style.backgroundColor= "white";
    document.querySelector("body").style.borderColor= "black";
}
function night(){
    document.querySelector("body").style.color= "white";
    document.querySelector("body").style.backgroundColor= "black";
}
// function like(){
//     likes++
//     console.log(likes)
// }

// function dislike(){
//     dislikes++
//     console.log(dislikes)
// }

function like(){
    if (isLike != true){
        isLike = true;
        document.querySelector("#red").style.color = "grey";
        document.querySelector("#green").style.color = "green";
    }
}

function dislike(){
    if (isLike != false){
        isLike = false;
        document.querySelector("#red").style.color = "red";
        document.querySelector("#green").style.color = "grey";
    }
}

function changeenter(element){
    element.setAttribute("src","assets/purepng.com-cookiescookiessnacksbaked-snacksflour-cookieschocolate-cookies-1411527249039ulhcg-2507637474.png")
}
function changeleave(element){
    element.setAttribute("src","assets/ar.png")
}
function sevenE(element){
    console.log("ok")
    element.innerHTML= "seven";
}
function sevenL(element){
    element.innerHTML= '<i class="fa-solid fa-star"></i>';
}
var close = document.querySelectorAll('.close');
for (let i = 0; i < close.length; i++){
    close[i].addEventListener('click',function(e){
        e.target.parentElement.style.display='none';
        e.preventDefault()
    });
};

var searchList = document.getElementsByTagName("li");
var i;
for (i = 0; i < searchList.length; i++){
    var span = document.createElement("span");
    span.innerHTML="x";
    searchList[i].appendChild(span).setAttribute("class","close");
    console.log(searchList[i])
}

function newElement(){
    var li = document.createElement("li");
    var inputValue=document.getElementById("search-input").value;
    if(inputValue === '' || inputValue === ' '){
        alert("You just put in nothing in there buddy");
    }else{
        document.getElementById("searchUL").appendChild(li);
        li.innerHTML=inputValue;
    }

    document.getElementById("search-input").value="";
    var span=document.createElement("span");
    span.innerHTML="x";
    li.appendChild(span).setAttribute("class", "close");

    for (i = 0; i < close.length; i++){
        close[i].onclick=function(){
            var div = this.parentElement;
            div.style.display = "none"
        }
    }
}