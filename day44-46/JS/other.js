// 创建一个产生0-4随机数字的函数，用于顾客随机点菜
function random() {
    var num = Math.floor(Math.random()*5);
    return num;
}

// 创建餐厅启动函数
function runReastaurant() {
    // 创建新顾客并push到clientList
    var newClient = new Client();
    myRestaurant.addClientToQueue(newClient);
    // 用flag来判断餐厅流程是否已经开始，如果否就开始，是则什么也不做
    if (!flag) {
        flag = true;
        (function process() {
            var orderList = newWaiter.doWork(myRestaurant.menu);
            var theDish = newCook.doWork(orderList);
            var theSameDish = newWaiter.doWork(theDish);
            Client.prototype.toEat(theSameDish);
            myRestaurant.clientList.shift();
            if (myRestaurant.clientList.length) {
                process();
            }
            else {
                // 当顾客队伍为0时，改变flag值为false。表示餐厅流程未开始。
                flag = false;
            }
        })();
    }
}