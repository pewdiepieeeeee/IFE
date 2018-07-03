// 创建餐厅实例
var myRestaurant = new Restaurant({
    cash: 10000,
    seats: 1,
    staffList: []
});

// 创建dish实例并加入到menu;
var gongbaoChicken = new Dish('宫保鸡丁', 100);
var mapoTofu = new Dish('麻婆豆腐', 50);
var beijingDuck = new Dish('北京烤鸭', 150);
var dumpings = new Dish('饺子', 75);
var hotPot = new Dish('火锅', 250);

myRestaurant.menu.push(gongbaoChicken);
myRestaurant.menu.push(mapoTofu);
myRestaurant.menu.push(beijingDuck);
myRestaurant.menu.push(dumpings);
myRestaurant.menu.push(hotPot);

// 创建一个厨师和一个服务员单例，并添加到staffList
var newCook = singleCook.getInstance(1, 'Monica', 1000);
var newWaiter = singleWaiter.getInstance(2, 'Rachel', 1000);

myRestaurant.hire(newCook);
myRestaurant.hire(newWaiter);

// 定义一个变量来判断服务流程是否开始
var flag = false;

document.getElementById('run').addEventListener('click', runReastaurant);