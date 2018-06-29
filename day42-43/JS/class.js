//创建Restaurant类并定义属性
function Restaurant({cash, seats, staff}) {    
    this.cash = cash;
    this.seats = seats;
    this.staff = staff;
}

//创建Restaurant类hire方法
Restaurant.prototype.hire = function (newStaff) {    
    this.staff.push(newStaff);
}

//创建Restaurant类fire方法,通过循环数组找到id并用splice()进行删除
Restaurant.prototype.fire = function (who) {    
    for (var i=0; i<this.staff.length; i++) {
        if (this.staff[i].id===who.id) {
            this.staff.splice(i, 1);     
        }
    }
}

//创建Staff类并定义属性
function Staff(id, name, salary) {    
    this.id = id;
    this.name = name;
    this.salary = salary;
}

//创建Staff类doWork方法
Staff.prototype.doWork = function (work) {    
    
}

//通过继承Staff类创建Waiter类
function Waiter(id, name, salary) {    
    Staff.call(this, id, name, salary);    
}

Waiter.prototype = Object.create(Staff.prototype);
Waiter.prototype.constructor = Waiter;

//修改Waiter类的doWork方法，判断参数是否数组，是则点菜，否则上菜
Waiter.prototype.doWork = function (work) {
    if (work instanceof Array) {
        //记菜
    }
    else {
        //上菜
    }
}

//通过继承Staff类创建Cook类
function Cook(id, name, salary) {
    Staff.call(this, id, name, salary);
}

Cook.prototype = Object.create(Staff.prototype);
Cook.prototype.constructor = Cook;

//修改Waiter类的doWork方法
Cook.prototype.doWork = function (orderList) {
    //煮菜
}

//创建Client类并定义方法
function Client() {

}

//创建Client类toOrder方法,toEat方法
Client.prototype.toOrder = function (menu) {
    //点菜
}
Client.prototype.toEat = function () {
    //吃菜
}

//创建Dish类并定义属性
function Dish(name, cost, price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
}