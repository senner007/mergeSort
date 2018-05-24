function merge(bina, binb) {
    var binaLength = bina.length;
    var binbLength = binb.length;
    var newArr = new Array(binaLength + binbLength)
    var count1 = 0;
    var count2 = 0;
    
   
    while (count1 + count2 < (binaLength + binbLength)) {

        while (bina[count1] <= binb[count2] || count2 === binbLength) {
            if (count1 === binaLength) break;
            newArr[count1 + count2] = bina[count1]
            count1++;
        }
        while (bina[count1] > binb[count2] || count1 === binaLength) {
            if (count2 === binbLength) break;
            newArr[count1 + count2] = binb[count2];
            count2++;
        }

    }
    return newArr;
}

function mergeSort(arr, side) {
    
    var arrLength = arr.length;
    if (arrLength < 3) {
     //   console.log("(" + (i++) + ")" + "mSort (sort): " + arr + " -- " + side);
        if (arrLength > 1 && arr[0] > arr[1]) {
            return [arr[1], arr[0]]
        } else {
            return arr
        }
    } else {
    //    console.log("(" + (i++) + ")" + "mSort (call self): " + arr + " -- " + side);
        var half_length = Math.ceil(arrLength / 2);
        var left = arr.slice(0, half_length);
        var right = arr.slice(half_length, arrLength);
        return merge(
            mergeSort(left, "left"),
            mergeSort(right, "right")
        )
    }
}


var i = 1;
// var arr = [1, 6, 4, 5, 3, 2 ];


// var newArr = mergeSort(arr, "");


// (1)mSort(call self): 1, 6, 4, 5, 3, 2 --
// (2)mSort(call self): 1, 6, 4 -- left
// (3)mSort(sorting): 1, 6 -- left
// (4)mSort(sorting): 4 -- right
// (5)MERGE: bina: 1, 6 binb: 4 into: 1, 4, 6
// (6)mSort(call self): 5, 3, 2 -- right
// (7)mSort(sorting): 5, 3 -- left
// (8)mSort(sorting): 2 -- right
// (9)MERGE: bina: 3, 5 binb: 2 into: 2, 3, 5
// (10)MERGE: bina: 1, 4, 6 binb: 2, 3, 5 into: 1, 2, 3, 4, 5, 6


arr = Array.from({
    length: 1000000
}, () => Math.floor(Math.random() * 2000));

console.time("1")
var sorted = arr.slice(0).sort((a, b) => a - b);
console.timeEnd("1")

console.time("2")
var newArr = mergeSort(arr, "");
console.timeEnd("2")

console.log(sorted.join('') == newArr.join(''))
