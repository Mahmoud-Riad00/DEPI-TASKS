var data=[1,0]
function problemOne(x){
console.log(data[x])
}
problemOne()
// -------------------------------------------------------------------------------------------------------------------------------------------
var sum =[]
function problemtwo(y){
    w=y/100
    z=Math.round(w)
    a= y % 100
sum.push(z)
c=Math.round(a / 10)
sum.push(c)
v=(a %10) 
sum.push(v)
console.log(sum)

console.log('sum=' + (c + v + z))

}
problemtwo()

// ----------------------------------------------------------------------------------------------------------------------------------------------------


var numbers = [];
var strings =[];

function filterArray(array) 
{


    for( var i =0 ;i < array.length;i++ )
        {
      
                if(typeof array[i] ==='string')
                    {
                    strings.push(array[i]);
                    }
                    else{
                    numbers.push(array[i]);
                    }
        }
}
var array=[1, 2, "a", "b"]
filterArray(array)
console.log('numbers=' +numbers)
console.log('string=' + strings)

console.log(array)
// --------------------------------------------------------------------------------------------------------------------------------------------------------------
var animals =[]
function animallegs(animals)

{
    var chicken = animals[0];
    var cows = animals[1];
    var pigs =animals[2];
sum = (chicken * 2) + (cows *4) +(pigs *4)
}

animals=[2,3,5]
animallegs(animals)

console.log('sum=' + sum)



















