//创建Restaurant类并定义属性,hire方法fire方法
class Restaurant {
    constructor(newRestaurant) {
        this.cash = newRestaurant.cash;
        this.seats = newRestaurant.seats;
        this.staffList = newRestaurant.staff;
    }
    hire(newStaff) {
        this.staffList.push(newStaff);
    }
    fire(who) {
        for (var i=0; i<this.staffList.length; i++) {
            if (this.staffList[i].id===who.id) {
                this.staffList.splice(i, 1);     
            }
        }
    }
}

//创建Staff类并定义属性,doWork方法

class Staff {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    doWork() {
        //完成一次工作
    }
}

//通过继承Staff类创建Waiter类,doWork方法
class Waiter extends Staff {
    constructor(id, name, salary) {
        super(id, name, salary);
    }
    doWork(work) {
        if (work instanceof Array) {
            //记菜
        }
        else {
            //上菜
        }
    }
}


//通过继承Staff类创建Cook类,doWork方法
class Cook extends Staff {
    constructor(id, name, salary) {
        super(id, name, salary);
    }
    doWork(orderList) {
        //煮菜
    }
}

//创建Client类并定义toOrder方法,toEat方法
class Client {
    toOrder(menu) {
        //点菜
    }
    toEat() {
        //吃菜
    }
}

//创建Dish类并定义属性
class Dish {
    constructor(name, cost, price) {
        this.name = name;
        this.cost = cost;
        this.price = price;
    }
}
