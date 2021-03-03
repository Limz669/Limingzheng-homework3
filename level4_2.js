// 利用Object.assign方法实现深拷贝
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
var newData = Object.assign({}, data)// 使用Object.assign的方法实现深拷贝
console.log(newData)  