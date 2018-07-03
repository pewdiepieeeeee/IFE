// 创建Restaurant类并定义属性
function Restaurant(newRestaurant) {    
    this.cash = newRestaurant.cash;
    this.seats = newRestaurant.seats;
    this.staffList = newRestaurant.staffList;
    this.clientList = [];
    this.menu = [];
}

// 创建Restaurant类hire方法
Restaurant.prototype.hire = function (newStaff) {    
    this.staffList.push(newStaff);
}

// 创建Restaurant类fire方法,通过循环数组找到id并用splice()进行删除
Restaurant.prototype.fire = function (who) {    
    for (var i=0; i<this.staffList.length; i++) {
        if (this.staffList[i].id===who.id) {
            this.staffList.splice(i, 1);     
        }
    }
}

// 创建Restaurant类addClientToQueue方法
Restaurant.prototype.addClientToQueue = function (newclient) {
    var client = newclient;
    this.clientList.push(client);
}

// 创建Staff类并定义属性
function Staff(id, name, salary) {    
    this.id = id;
    this.name = name;
    this.salary = salary;
}

// 创建Staff类doWork方法
Staff.prototype.doWork = function (work) {    
    
}

// 通过继承Staff类创建Waiter类并设计成单例模式
var singleWaiter = function (id, name, salary) {
    var instance = null;

    function Waiter(id, name, salary) {
        Staff.call(this,id, name, salary);
    }
    
    Waiter.prototype = Object.create(Staff.prototype);
    Waiter.prototype.constuctor = Waiter;

// 修改Waiter类的doWork方法，判断参数是否数组，是则点菜，否则上菜
    Waiter.prototype.doWork = function (target) {
        if (target instanceof Array) {
            console.log(this.name + '：您好,你需要吃点什么？')
            var orderList = Client.prototype.toOrder(target);
            console.log(this.name + '：您点的是'+ orderList[0] + ',请稍等片刻。');
            var waiterName = this.name;

            // 创建调用tellCook方法
            (function tellCook() {
                console.log(waiterName + '：顾客点了一份'+ orderList[0] + ',请快点哦。');
                
            })();
            return orderList;
        }
        else {
            // 上菜
            console.log(this.name + '：您好，这是您点的'+ target + ',请享用。');
            return target;
        }
    };

// 返回类名和获取单例的方法
    return {
        name: 'Waiter',
        getInstance: function (id, name, salary) {
            if (!instance) {
                instance = new Waiter(id, name, salary);
                return instance;
            }
            return instance;
        }
    };
}();

// 通过继承Staff类创建Cook类并设计成单例模式
var singleCook = function (id, name, salary) {
    var instance = null;

    function Cook(id, name, salary) {
        Staff.call(this, id, name, salary);
    }

    Cook.prototype = Object.create(Staff.prototype);
    Cook.prototype.constructor = Cook;

// 修改Waiter类的doWork方法    
    Cook.prototype.doWork = function (orderList) {
        // 煮菜
        console.log(this.name + '：好的，正在制作' + orderList[0] + '。');
        var cookName = this.name;

        // 创建调用tellWaiter方法
        (function tellWaiter() {
            console.log(cookName + '：' + orderList[0] + '已经制作好了。')
        })();
        return orderList[0];
    };

// 返回类名和获取单例的方法
    return {
        name: 'Cook',
        getInstance: function(id, name, salary) {
            if (!instance) {
                instance = new Cook(id, name, salary);
                return instance;
            }
            else {
                return instance;
            }
        }
    };
}();

// 创建Client类并定义方法
function Client() {

}

// 创建Client类toOrder方法,toEat方法
Client.prototype.toOrder = function (menu) {
    var orderList = [];
    var num = random();
    var theDish = menu[num].name;
    orderList.push(theDish);
    console.log('顾客:我想要' + theDish + '。');
    return orderList;
};
Client.prototype.toEat = function (dish) {
    console.log('顾客：' + dish + '这道菜有种初恋的感觉。');
};

// 创建Dish类并定义属性
function Dish(name, price) {
    this.name = name;
    this.price = price;
}