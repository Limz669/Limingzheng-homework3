// 利用非递归的方法实现数组的扁平化处理
var arr = [1, [2, [3, [4, 5]]], 6];
function even(arr) {
    // 第一步首先是将数组转换为字符串，可以消除arr中的“[”和“]”
    arr = arr.toString();//"1,2,3,4,5,6"
    // 第二步是利用split方法将arr分割成每一个小的字符
    arr = arr.split(",");//"1","2","3","4","5","6"
    // 第三步是利用map的方法遍历arr中的每一个字符，将每一个字符都转换为Number类型
    arr = arr.map(function (str) {
        return Number(str);
    })
    console.log(arr);
}
even(arr);