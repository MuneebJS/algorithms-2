//find the highest no. in an array
var arr1 = [15, 33, 12, 8, 0, 89, 29300, 3, 2902, 102, 100, 4, 22, 89, 34, 9, 892, 0, 82, 34];
function highestNo(array) {
    var highest = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > highest) {
            highest = array[i];
        }
    }
    return highest;
}
console.log(highestNo(arr1));

//sort out the array
var arr2 = [15, 33, 12, 8,892, 902, -2, 0, 3, 102, 100, 4, 22, 89, 34, 9, 3, 82, 34, 88];
var sortedArr = [];
function sortOut_the_array() {
    for (var i = 0; i < arr2.length; i++) {
        sortedArr.unshift(highestNo(arr2));
        arr2.splice(arr2.indexOf(highestNo(arr2)), 1);
        console.log(i);
        i--;
    }
}
sortOut_the_array();
console.log(arr2);
console.log(sortedArr);