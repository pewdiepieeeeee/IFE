var table=document.getElementById("table-wrapper");
var data;
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
})
