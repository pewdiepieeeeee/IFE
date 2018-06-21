createCheckbox('region-radio-wrapper',sourceData);
createCheckbox('product-radio-wrapper',sourceData);
document.getElementById('region-radio-wrapper').onchange=createTable;
document.getElementById('product-radio-wrapper').onchange=createTable;
var arry=[];
arry=[];
localStorage.setItem("dataArr1",JSON.stringify(arry));
