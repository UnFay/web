function changeimg(element){
    element.setAttribute("src","assets/img-header2.png")
}
function changebackimg(element){
    element.setAttribute("src","assets/img-header1.png")
}

function like(){
        document.querySelector("#like").style.color = "green"
        document.querySelector("#dislike").style.color = "black"

}
function dislike(){
        document.querySelector("#like").style.color = "black"
        document.querySelector("#dislike").style.color = "red"

}