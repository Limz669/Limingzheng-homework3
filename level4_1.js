// 利用递归实现深拷贝
var data = {
    age: 18,
    name: "liuruchao",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    likesFood: new Set(["fish", "banana"]),
    friends: [
        { name: "summer", sex: "woman" },
        { name: "daWen", sex: "woman" },
        { name: "yang", sex: "man" }],
    work: {
        time: "2019",
        project: { name: "test", obtain: ["css", "html", "js"] }
    },
    play: function () { console.log("玩滑板"); }
}
function deepCopy(newobj, oldobj) {
    for (var key in oldobj) {
        const value = oldobj[key];
        if (typeof value === "object")// 判断当前的子元素的数据类型是否为对象
        {
            newobj[key] = value;// 直接将value放入到newobj中
        }
        else if (Array.isArray(value))// 判断当前的子元素的数据类型是都为数组
        {
            newobj[key] = [];
            deepCopy(newobj[key], value);//递归实现深拷贝
        }
        else if (value instanceof Set)// 判断当前子元素的数据类型是否为集合
        {
            newobj[key] = new Set([...value]);// 则建立一个新的Set类型存放value里面的元素
        }
        else {// 其他数据类型
            newobj[key] = oldobj[key];
        }
    }
    return newobj;
}
let newdata = {};
newdata = deepCopy(newdata, data);
console.log(newdata);