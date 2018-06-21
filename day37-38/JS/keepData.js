function keepData() {
    if(localStorage.dataArr1===undefined) {
        var arry=[];
        arry=[];
        localStorage.setItem("dataArr1",JSON.stringify(arry));
    }
    var dataArr=JSON.parse(localStorage.getItem("dataArr1"));
    var divs=document.getElementById("table-wrapper").querySelectorAll("div");
    for(var i=0;i<divs.length;i++) {
        var add=true;
        for(var j=0;j<dataArr.length;j++) {
            if((dataArr[j][0]===divs[i].childNodes[0].value && dataArr[j][1]===divs[i].childNodes[1].value) || (dataArr[j][0]===divs[i].childNodes[1].value && dataArr[j][1]===divs[i].childNodes[0].value)) {
                for(var k=2;k<14;k++) {
                    dataArr[j][k]=divs[i].childNodes[k].value;
                }
                add=false;
            }
        }
        if(add) {
            var newArr=[];
            for(var l=0;l<14;l++) {
                newArr.push(divs[i].childNodes[l].value);
            }
            dataArr.push(newArr);
        }
    }
    localStorage.setItem("dataArr1",JSON.stringify(dataArr));
    // createTable();
}
function keepData1() {
    if(localStorage.dataArr1===undefined) {
        var arry=[];
        arry=[];
        localStorage.setItem("dataArr1",JSON.stringify(arry));
    }
    var dataArr=JSON.parse(localStorage.getItem("dataArr1"));
    var divs=document.getElementById("table-wrapper").querySelectorAll("tr");
    for(var i=0;i<divs.length;i++) {
        var add=true;
        for(var j=0;j<dataArr.length;j++) {
            if((dataArr[j][0]===divs[i].childNodes[0].innerHTML && dataArr[j][1]===divs[i].childNodes[1].innerHTML) || (dataArr[j][0]===divs[i].childNodes[1].innerHTML && dataArr[j][1]===divs[i].childNodes[0].innerHTML)) {
                for(var k=2;k<14;k++) {
                    dataArr[j][k]=divs[i].childNodes[k].innerHTML;
                }
                add=false;
            }
        }
        if(add) {
            var newArr=[];
            for(var l=0;l<14;l++) {
                newArr.push(divs[i].childNodes[l].innerHTML);
            }
            dataArr.push(newArr);
        }
    }
    localStorage.setItem("dataArr1",JSON.stringify(dataArr));
    // createTable();
}