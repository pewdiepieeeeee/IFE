var table=document.getElementById("table-wrapper");
var data;
// var inputs=table.querySelectorAll("input");
table.addEventListener("mouseover",function(e) {
    var td=e.target || e.srcElement;
    if(td.nodeName.toLowerCase()==="td") {
     data=td.parentNode.querySelectorAll("td");
     if(data.length<14) {
        for(var x in sourceData) {
            if(sourceData[x].sale[0]==data[1].innerHTML && sourceData[x].sale[1]==data[2].innerHTML) {
                if(sourceData[x].Product===data[0].innerHTML) {
                    var newtd=document.createElement("td");
                    newtd.innerHTML=sourceData[x].region;
                    data=Array.prototype.slice.call(data);
                    data.unshift(newtd);
                }
                else {
                    var newtd=document.createElement("td");
                    newtd.innerHTML=sourceData[x].Product;
                    data=Array.prototype.slice.call(data);
                    data.unshift(newtd);
                }
            }
        }
     }
    }
    createColumn(data);
    createline(data);
});

table.addEventListener("click",function(e) {
    var td=e.target || e.srcElement;
    if(td.nodeName.toLowerCase()==="td") {
        createInput();
    }
    var inputs=table.querySelectorAll("input");
    for(var ei=0;ei<inputs.length;ei++) {
        inputs[ei].onblur=function() {
            createInput();
        }
    }
});

table.addEventListener("keydown",function(e) {
    var td1=e.target || e.srcElement;
    var x=e.keyCode || e.which;
    if(td1.nodeName.toLowerCase()==="input") {
        if(x === 27) {
            createInput();
        }
        if(x === 13) {
            td1.onblur=null;
            td1.onchange=textCheck;
            td1.blur();
            keepData();
            createTable();
        }
    }
});
