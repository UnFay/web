window.addEventListener('scroll', reveal);
function reveal(){
    var subs = document.querySelectorAll('.sub')
    subs.forEach(reveal=>{
        var windowHeight=window.innerHeight;
        var revealTop = reveal.getBoundingClientRect.top;
        var revealPoint = 40;
        if(revealTop < windowHeight - revealPoint){
            reveal.classList.add('active')
        }else{
            reveal.classList.remove('active')
        }
    })
};
