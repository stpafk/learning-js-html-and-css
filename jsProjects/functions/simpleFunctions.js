function celsiusConverter(f) {
    return (f - 32) * 0.55555555555 
}

function checkifMultiples(listA, listB){

    for (var i = 0; i<10; i++)

        for (var j = 0; j<10; j++){
            if (listA[i] === listB[j]) {
                return listA[i]
            }
        }
    
    return undefined
}

console.log(checkifMultiples([1, 3, 5, 6, 7], [0, 2, 4, 9, 7]));

