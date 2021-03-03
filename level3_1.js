// 利用非拷贝继承
function Animal() {
    this.species = "动物";
}
function Cat(name, color) {
    this.name = name;
    this.color = color;
    //方法一利用apply： Animal.apply(this,arguments);
    Animal.call(this);// 方法二利用call
}
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物