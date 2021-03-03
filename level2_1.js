// 利用递归实现数组的扁平化处理
let arr = [1, [2, [3, [4, 5]]], 6];
function even(arr) {
    let newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]))// 先判断arr[i]是为一个数组
        {
            newarr = newarr.concat(even(arr[i]));// 是一个数组则需要进行递归，直到找到非数组的元素
        }
        else// arr[i]不是一个数组
        {
            newarr.push(arr[i]);// 不是一个数组则直接加入到newarr
        }
    }
    return newarr;
}
console.log(even(arr));//[1,2,3,4,5,6]