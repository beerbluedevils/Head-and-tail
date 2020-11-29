//head or tail
function headOrTail(){
    const sides = [ "Head!" , "Tail!" ];
    const randomIdx = Math.floor(Math.random() * sides.length);
    const randomCoin = sides[randomIdx];
    return `You've got : ${randomCoin}`;
}

function throwCoin( times ){
   for(let i = 0; i < times; i++){
        console.log(headOrTail())
    }
}

throwCoin(100);

