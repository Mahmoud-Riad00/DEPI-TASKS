// Window this for brouser window
// document this for HTML document
// console.log(1+1)
// console.error('their is an error')
// console.warn('warning')
// window.alert('hey')
// document.write('<h1>hellooo</h>')


// var userdata=[ ]
// console.log(userdata)
// userdata.push(5)
// console.log(userdata)
// var userdata=[6]
// console.log(userdata)
// var x = null
// function problemOne(x , y , z ){
//     if(x > 0)
//         {
//         console.log(Math.max(x , y , z))
//         console.log(Math.min(x , y , z))
//     }
//     else{
//         console.log('negative')
//     }
// }
// problemOne(7 , 5 , 6)
// function problemone(x){
//     if(x % 2 === 0){
//         console.log('even')
//     }else{
//         console.log('odd')
//     }
// }
// problemone(12)
// var x , y , z = String
// function problemone(x){
//     if(x === ( 'a' || 'e' || 'i' || 'o' || 'u')){
//         console.log('vowel')
//     }else{
//         console.log('odd')
//     }
// }
// problemone("y") 

//  function problemOne(x){
//     for(var y = 1; y <= x ;y++ ){
//         console.log(y)
//     }

//  }
//  problemOne(5)

// function problemOne(x) {
//     if(x==1){
//         console.log('31')
//     }else if(x==2){
//         console.log('28 & 29 in leap year')
//     }else if(x==3){
//         console.log('31')
//     }else if(x==4){
//         console.log('30')
//     }else if(x==5){
//         console.log('31')
//     }else if(x==6){
//         console.log('30')
//     }else if(x==7){
//         console.log('31')
//     }else if(x==8){
//         console.log('31')
//     }else if(x==9){
//         console.log('30')
//     }else if(x==10){
//       console.log('31')
//     }else if(x==11){
//         console.log('30')
//     }else if(x==12){
//         console.log('31')
//     }
// }
// problemOne(2)  
// function problemOne(x , y){
    // for(var z=1 ; z <= y ; y = y + 1){

// problemOne(15)


// var SORA = document.querySelector('img') 
// var nxt =document.querySelector('.nxt')
// var prev=document.querySelector('.prev')
// var x=0
// swrArray =['https://mytrainingmap.com/images/destinations/311/bdb65b6e-7ae1-46b9-a578-73831bc8807e.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKIXqpMIzNtUuDYqa00P3qwFKhqzG9jc1dzWkDvW0cwAzRbTpDVnbmafFcpRRzf2Dfww&usqp=CAU','https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik']
// console.log(x)

// nxt.addEventListener('click',function(){
//     x++
//     if(x>2){
//         x=0
//     }
//     SORA.src= swrArray[x]
//     console.log(x)
// })
// prev.addEventListener('click',function(){
//     x--
//     if(x == -1){
//         x=2;
//     }
//     SORA.src= swrArray[x]
//     console.log(x)
// })
// console.log(x)

var smallImgs =document.querySelectorAll(".small_img img")
var big =document.querySelector(".large_image img")
console.log(big)
smallImgs.forEach(
    
        function(x){
          x.addEventListener('click',function(){
           big.src=x.src
          })
        }
    
);