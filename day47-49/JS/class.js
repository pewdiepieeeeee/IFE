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
        // 点菜
        if (target instanceof Array) {
            var conP = document.createElement('p');
            conversation.appendChild(conP);
            conP.innerHTML = this.name + '：您好,你需要吃点什么？';
            console.log(this.name + '：您好,你需要吃点什么？')
            var orderList = Client.prototype.toOrder(target);
            return orderList;
        }
        else {
            // 上菜

            setTimeout(function () {
                document.getElementById('dining').querySelector('img').style.right = '500px';
            }, 500);
            var conP = document.createElement('p');
            conversation.appendChild(conP);
            conP.innerHTML = this.name + '：您好，这是您点的'+ target.name + ',请享用。';
            console.log(this.name + '：您好，这是您点的'+ target.name + ',请享用。');
            if (howManyDish > 1) {
                setTimeout(function () {
                    document.getElementById('dining').querySelector('img').style.right = '260px';
                }, 1000);
            }

        }
    };
    Waiter.prototype.tellCook = function (orderList) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                document.getElementById('dining').querySelector('img').style.right = '260px';
                var conP = document.createElement('p');
                conversation.appendChild(conP);
                conP.innerHTML = newWaiter.name + '：上帝点了一份'+ dishes + ',请快点哦。';
                console.log(newWaiter.name + '：上帝点了一份'+ dishes + ',请快点哦。');
                resolve(orderList);
            }, 500);
        });
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

// 修改Cook类的doWork方法    
    Cook.prototype.doWork = function (orderList) {
        // 煮菜
        // 判断ol是否存在，如果有就删除。用于清空厨师的待烹饪列表。
        if (cookstate.querySelector('ol')) {
            var thisNode = cookstate.querySelector('ol');
            thisNode.parentNode.removeChild(thisNode);
        }
        var time = orderList[0].cookTime;
        var countCookTime = time;
        var dishname = orderList[0].name;
        cookPara.innerHTML = '状态：正在烹饪' + dishname + '，' + '还需要' + orderList[0].cookTime + '秒' + '。';
        if (orderList.length > 1) {           
            var ol = document.createElement('ol');
            ol.innerHTML = "待烹饪：";
            cookstate.appendChild(ol);
            for (var i = 1; i < orderList.length; i++) {
                var li = document.createElement('li');
                li.innerHTML = orderList[i].name;
                ol.appendChild(li);
            }
        }
        return new Promise(function (resolve, reject) {     
          // 更新厨师状态信息
            var int = setInterval(function () {
                countCookTime--;
                cookPara.innerHTML = '状态：正在烹饪' + dishname + '，' + '还需要' + countCookTime + '秒' + '。';
                if (!countCookTime) {
                    window.clearInterval(int);
                }
            }, 1000);
            var conP = document.createElement('p');
            conversation.appendChild(conP);
            conP.innerHTML = newCook.name + '：正在制作' + orderList[0].name + '，' + '还需要' + time + '秒' + '。';
            console.log(newCook.name + '：正在制作' + orderList[0].name + '，' + '还需要' + time + '秒' + '。');
            setTimeout(function () {
                resolve(orderList);
                if (howManyDish === 1) {
                    cookPara.innerHTML = '状态：空闲中';
                }
            },time * 1000);
        });
    };
    Cook.prototype.tellWaiter = function (orderList) {
        return new Promise(function (resolve, reject) {
            var conP = document.createElement('p');
            conversation.appendChild(conP);
            conP.innerHTML = newCook.name + '：已经做好了' + orderList[0].name + '，' + '可以上菜了' + '。';
            console.log(newCook.name + '：已经做好了' + orderList[0].name + '，' + '可以上菜了' + '。');
            resolve(orderList);
        });
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
    // 通过random（）和for循环随机数进行点菜，从而实现顾客随机点菜
    var orderList = [];
    var timeNum = random() + 1;
    for (var i = 0; i < timeNum; i++) {
        var num = random();
        var theDish = menu[num];
        orderList.push(theDish);
    }

    howManyDish = orderList.length;
    var conP = document.createElement('p');
    conversation.appendChild(conP);
    conP.innerHTML = '上帝：容我花三秒来思考吃什么..';
    console.log('上帝：容我花三秒来思考吃什么..');
    var para = document.createElement('p');
    para.innerHTML = '状态：点菜中，请等待3秒.';
    var orderTime = 3;
    state.appendChild(para);

    // 通过自调函数和setTimeout实现状态更新
    (function countTime() {
        --orderTime;
        setTimeout(function () {
            para.innerHTML = '状态：点菜中，请等待' + orderTime + '秒.';
            if (orderTime) {
            countTime();
            }
            else {
                para.innerHTML = '状态：等菜中.';
            }
        }, 1000);
    })();

    return new Promise(function (resolve, reject) {
        // 通过for循环传入的orderList参数来设定订单列表LI信息和计算点菜账单以备后用
        setTimeout(function () {
        var array = [];
        var oList = document.createElement('ol');
        oList.innerHTML = '订单：';
        state.appendChild(oList);
        for (var i = 0; i < orderList.length; i++) {
            array.push(orderList[i].name);
            dishBill += orderList[i].price;
            var li = document.createElement('li');
            li.innerHTML = orderList[i].name;
            oList.appendChild(li);
        }

        dishes = array.join(',');
        var conP = document.createElement('p');
        conversation.appendChild(conP);
        conP.innerHTML = '上帝：我想要吃' + dishes + '。';
        console.log('上帝：我想要吃' + dishes + '。');
        resolve(orderList);
    },3000);
    });
};

Client.prototype.toEat = function (dish) {
    setTimeout(function () {
        document.getElementById('state').querySelector('p').innerHTML = '状态：吃菜中.';
    }, 600);
    console.log('上帝：' + '正在吃' + dish.name + '。');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
        var conP = document.createElement('p');
        conversation.appendChild(conP);
        conP.innerHTML = '上帝：' + dish.name + '这道菜有种初恋的感觉。';
        console.log('上帝：' + dish.name + '这道菜有种初恋的感觉。');
        resolve(dish);
        }, 3000);
    });
};
Client.prototype.toPay = function (dish) {
    // howManyDish--这个变量和操作用于结合if来判断是否最后一道菜
    howManyDish--;
    if (!howManyDish) {
        document.getElementById('state').innerHTML = '';
        var img = document.getElementById('huangbo');
        img.parentNode.removeChild(img);
        var conP = document.createElement('p');
        conversation.appendChild(conP);
        conP.innerHTML = '客户吃完并支付了' + dishBill + '元。';
        console.log('客户吃完并支付了' + dishBill + '元。');
        myRestaurant.cash += dishBill;
        document.getElementById('money').querySelector('p').innerHTML = 'Cash:' + myRestaurant.cash;
    }
    return new Promise(function (resolve, reject) {
        resolve(dish);
    })
};

// 创建Dish类并定义属性
function Dish(name, price, cookTime) {
    this.name = name;
    this.price = price;
    this.cookTime = cookTime;
}