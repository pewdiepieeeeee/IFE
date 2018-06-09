let sourceData = [{
    Product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    Product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    Product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    Product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    Product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    Product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    Product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    Product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    Product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}];
// region-select的change事件 = function() {
//     渲染新的表格(根据select选项获取数据)
// }
document.getElementById('region-select').onchange = function() {
    document.getElementById('table-wrapper').innerHTML='';
    createTable(getSelect());
}
document.getElementById('product-select').onchange = function() {
    document.getElementById('table-wrapper').innerHTML='';
    createTable(getSelect());
}
function getSelect() {
    var theRegion=document.querySelector('#region-select option:checked');
    var j=0;
    var inforArr=[];
    for(var i=0;i<sourceData.length;i++) {
        if(sourceData[i].region === theRegion.value) {
            inforArr[j]=[];
            inforArr[j][0]=sourceData[i].Product;
            inforArr[j][1]=sourceData[i].region;
            for(var k=0;k<sourceData[i].sale.length;k++) {
                inforArr[j][k+2]=sourceData[i].sale[k];
            }
            j++;
        }
    }
    return inforArr;
}
function createTable(data) {
    var table=document.createElement('table');
    var tdtr=document.createElement('tr');
    var theProduct=document.querySelector('#product-select option:checked');
    for(var i=0;i<14;i++) {
        var th=document.createElement('th');
        if(i<2) {
            (i===0)?th.innerHTML='商品' : th.innerHTML='地区';
        }
        else {
            th.innerHTML=i-1+'月';
        }
        tdtr.appendChild(th);
    }
    table.appendChild(tdtr);
    for(var j=0;j<data.length;j++) {
        if(data[j][0] === theProduct.value) {
            var tr=document.createElement('tr');
            for(var k=0;k<data[j].length;k++) {
                var td=document.createElement('td');
                td.innerHTML=data[j][k];
                tr.appendChild(td);
            }
            table.appendChild(tr);   
        }        
    }
    document.getElementById('table-wrapper').appendChild(table);
}
createTable(getSelect());