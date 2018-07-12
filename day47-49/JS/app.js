// 创建餐厅实例
var myRestaurant = new Restaurant({
    cash: 10000,
    seats: 1,
    staffList: []
});

// 创建dish实例并加入到menu;
var gongbaoChicken = new Dish('宫保鸡丁', 100, 6);
var mapoTofu = new Dish('麻婆豆腐', 50, 5);
var beijingDuck = new Dish('北京烤鸭', 150, 5);
var dumpings = new Dish('饺子', 75, 4);
var hotPot = new Dish('火锅', 250, 6);

myRestaurant.menu.push(gongbaoChicken);
myRestaurant.menu.push(mapoTofu);
myRestaurant.menu.push(beijingDuck);
myRestaurant.menu.push(dumpings);
myRestaurant.menu.push(hotPot);

// 创建一个厨师和一个服务员单例，并添加到staffList
var newCook = singleCook.getInstance(1, '厨神黄磊', 1000);
var newWaiter = singleWaiter.getInstance(2, '你大爷', 1000);

myRestaurant.hire(newCook);
myRestaurant.hire(newWaiter);

// 定义一个变量来判断服务流程是否开始
var flag = false;
// 定义一个变量用来保存顾客点的菜名，一个变量用来保存顾客待付的账单，一个变量记录多少个菜以及多个节点变量
var dishes = '';
var dishBill = 0;
var howManyDish = 0;
var dining = document.getElementById('dining');
var state = document.getElementById('state');
var que = document.getElementById('que');
var cookstate = document.getElementById('cookstate');
var cookPara = document.createElement('p');
cookPara.innerHTML = '状态：空闲中';
cookstate.appendChild(cookPara);
var conversation = document.getElementById('conversation');
document.getElementById('run').addEventListener('click', runReastaurant);