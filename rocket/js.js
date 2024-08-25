var chickenDIV = document.querySelector('.chickens')
function creatChicken(){
    var chicken =document.createElement('img')
    chickenDIV.append(chicken)
    chicken.setAttribute('src','./Images/Chicken.png')
}

for(var x = 0 ; x<60 ; x++){
    creatChicken()
}

var rock= document.querySelector('.rocket')

var Xmove =0
var Ymove=0

window.addEventListener('keydown',function moving(s){
    if(s.code === 'ArrowUp'){
        Ymove += 10
        rock.style.bottom = Ymove + 'px'
    }

     if(s.code === 'ArrowDown'){
        Ymove -= 10
        rock.style.bottom = Ymove + 'px'
    }if(s.code === 'ArrowRight'){
        Xmove += 10
        rock.style.left = Xmove + 'px'
    } if(s.code === 'ArrowLeft'){
        Xmove -= 10
        rock.style.left = Xmove + 'px'
    }
    if(s.code === 'Space'){
        var bullet = document.createElement('img')
                rock.append(bullet)
                bullet.setAttribute('class','bullet')
                bullet.src='./Images/Bullet.png'
                var y=0
                var moveBullet = setInterval(() => {
                        y += 10
                        bullet.style.bottom= y+ 'px'
                },10);
    }

})

