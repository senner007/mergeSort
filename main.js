function merge(bina, binb) {
    var newArr = []
    var count1 = 0;
    var count2 = 0;

    while (newArr.length < (bina.length + binb.length)) {

        while (bina[count1] <= binb[count2] || count2 === binb.length) {
            if (count1 === bina.length) break;
            beaunewArr.push(bina[count1])
            count1++;
        }
        while (bina[count1] > binb[count2] || count1 === bina.length) {
            if (count2 === binb.length) break;
            newArr.push(binb[count2])
            count2++;
        }
    }
    return newArr;
}

function mergeSort(arr) {
    if (arr.length < 3) {
        if (arr.length > 1) {
            if (arr[0] > arr[1]) {
                return [arr[1], arr[0]]
            } else {
                return [arr[0], arr[1]]
            }
        } else {
            return arr
        }
    } else {
        var half_length = Math.ceil(arr.length / 2);
        var leftSide = arr.splice(0, half_length);
        var rightside = arr
        return merge(
            mergeSort(leftSide),
            mergeSort(rightside)
        )
    }
}


var arr = Array.from({
    length: 20
}, () => Math.floor(Math.random() * 100));
console.log(arr)

//var arr = [8, 25, 12, 7, 6, 3, 13, 10, 2, 14];
var sorted = arr.slice(0).sort(function (a, b) {
    return a - b
});
var newArr = mergeSort(
    arr
);

console.log(sorted)
console.log(newArr)
console.log(sorted.join('') === newArr.join(''))