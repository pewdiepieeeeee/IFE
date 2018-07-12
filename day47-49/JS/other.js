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
    // 判断clientList的长度来添加顾客头像
    if (myRestaurant.clientList.length > 1 && myRestaurant.clientList.length < 9) {
        var img = document.createElement('img');
        img.src = 'IMAGES/huangbo.jpg';
        que.appendChild(img);
    }
    // 用flag来判断餐厅流程是否已经开始，如果否就开始，是则什么也不做
    if (!flag) {
        flag = true;
        (function process() {
            dishes = '';
            dishBill = 0;
            howManyDish = 0;
            var conP = document.createElement('p');
            conversation.appendChild(conP);
            conP.innerHTML = '(顾客入座)';
            console.log('(顾客入座)');
            // 饭厅插入顾客图片
            var img = document.createElement('img');
            img.src = 'IMAGES/huangbo.jpg';
            img.id = 'huangbo';
            dining.appendChild(img);

            newWaiter.doWork(myRestaurant.menu)
                     .then(newWaiter.tellCook)
                     .then(newCook.doWork)
                     .then(newCook.tellWaiter)
                     .then(function sameTime(orderList) {
                        var dish = orderList[0];
                        new Promise(function (resolve, reject) {
                            newWaiter.doWork(dish);
                            resolve(dish);
                        }).then(newClient.toEat)
                          .then(newClient.toPay)
                          .then(function () {
                            if (!howManyDish) {
                                var conP = document.createElement('p');
                                conversation.appendChild(conP);
                                conP.innerHTML = '(顾客离开)';
                                console.log('(顾客离开)');
                                
                                // 顾客离开，clientList删除第一个数组项
                                myRestaurant.clientList.shift();
                                if (myRestaurant.clientList.length) {
                                    var deleteImg = que.querySelector('img');
                                    deleteImg.parentNode.removeChild(deleteImg);
                                    process();
                                }
                                else {
                                    // 当顾客队伍为0时，改变flag值为false。表示餐厅流程未开始。
                                    flag = false;
                                }
                            }
                          });

                        new Promise(function (resolve, reject) {
                            orderList.shift();
                            if (orderList.length) {
                                resolve(orderList);
                            }
                        }).then(newCook.doWork)
                          .then(newCook.tellWaiter)
                          .then(sameTime);
                     });
        })();
    }
}
// 让滚动条随内容下滑
var interval = setInterval(function(){
    conversation.scrollTop = conversation.scrollHeight;
}, 100);