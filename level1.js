const user = {
    name: "John",
    years: 30
};
// 以下语句为利用解构赋值中对象解构的方法进行操作
const { name, years, isAdmin } = user;
console.log(name);
console.log(years);
console.log(isAdmin);