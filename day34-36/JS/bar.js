function createColumn(list) {
    var columnCon=document.getElementById("columnCon");
    columnCon.innerHTML="";
    var columnRect=[];
    for(var i=2;i<list.length;i++) {
        columnRect[i]=document.createElementNS("http://www.w3.org/2000/svg","rect");
        columnRect[i].setAttribute("class","column");
        columnRect[i].setAttribute("x",50*(i-1));
        columnRect[i].setAttribute("y",400-list[i].innerHTML);
        columnRect[i].setAttribute("width",25);
        columnRect[i].setAttribute("height",list[i].innerHTML);
        columnRect[i].setAttribute("style","fill:blue;stroke-width:2;opacity:0.3;");
        columnCon.appendChild(columnRect[i]);
    }
    var month=[];
    for(var j=0;j<12;j++) {
        month[j]=document.createElementNS("http://www.w3.org/2000/svg","text");
        month[j].setAttribute("x",50+50*j);
        month[j].setAttribute("y",420);
        month[j].innerHTML=Number(j)+1+"月";
        month[j].setAttribute("style","fill:black;stroke-width:2;opacity:0.7;");
        columnCon.appendChild(month[j]);
    }
    var title=document.createElementNS("http://www.w3.org/2000/svg","text");
    title.setAttribute("x",50);
    title.setAttribute("y",50);
    title.innerHTML=list[0].innerHTML+"-"+list[1].innerHTML+"-"+"柱状销售图";
    title.setAttribute("style","fill:black;stroke-width:2;opacity:0.7;font-size:20px;");
    columnCon.appendChild(title);
}