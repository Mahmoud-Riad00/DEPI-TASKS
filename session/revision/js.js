var nav =document.querySelector('nav')
var btn =document.querySelector('.uppBtn')
window.addEventListener('scroll',function(){
    if(window.scrollY > 150){
        nav.classList.remove('NavDefault')
        nav.classList.add('navAfter')
           btn.style.display= 'block'
    }
    else{
        nav.classList.add('NavDefault')
        nav.classList.remove('navAfter')
        btn.style.display= 'none'
    }
})
btn.addEventListener ('click' ,function(){
    window.scrollTo('',0)
})↑