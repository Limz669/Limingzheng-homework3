// 利用拷贝的方法实现构造函数的继承
function Animal() {
    // this.species = "动物";
}
Animal.prototype.species="动物";// 将Animal里面的对象属性都放在prototype中
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
function extend(parent,child) {
    let p=parent.prototype;
    let c=child.prototype;
    for(var i in p)
    {
        c[i]=p[i];
    }
}
extend(Animal,Cat);
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物