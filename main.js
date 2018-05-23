function merge(bina, binb) {
    var newArr = []
    var count1 = 0;
    var count2 = 0;
    var binaLength = bina.length;
    var binbLength = binb.length;

    while (newArr.length < (binaLength + binbLength)) {

        while (bina[count1] <= binb[count2] || count2 === binbLength) {
            if (count1 === binaLength) break;
            newArr.push(bina[count1])
            count1++;
        }
        while (bina[count1] > binb[count2] || count1 === binaLength) {
            if (count2 === binbLength) break;
            newArr.push(binb[count2])
            count2++;
        }

    }
    return newArr;
}

function mergeSort(arr) {
    var arrLength = arr.length;
    if (arrLength < 3) {
        if (arrLength > 1) {
            if (arr[0] > arr[1]) {
                return [arr[1], arr[0]]
            } else {
                return arr
            }
        } else {
            return arr
        }
    } else {
        var half_length = Math.ceil(arrLength / 2);
        var leftSide = arr.slice(0, half_length);
        var rightside = arr.slice(half_length, arrLength);
        return merge(
            mergeSort(leftSide),
            mergeSort(rightside)
        )
    }
}


var arr = Array.from({
    length: 2000000
}, () => Math.floor(Math.random() * 100));
//console.log(arr)

//var arr = [8, 25, 12, 7, 6, 3, 13, 10, 2, 14];
console.time("f")
var sorted = arr.slice(0).sort(function (a, b) {
    return a - b
});
console.timeEnd("f")
console.time("f2")
var newArr = mergeSort(
    arr
);
console.timeEnd("f2")
// console.log(sorted)
// console.log(newArr)
console.log(sorted.join('') === newArr.join(''))