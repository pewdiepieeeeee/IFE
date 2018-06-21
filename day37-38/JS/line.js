function createline(list) {
    var canvasdiv=document.getElementById("canvas");
    canvasdiv.innerHTML="";
    var line=document.createElement("canvas");
    line.id="line";
    line.width=650;
    line.height=430;
    canvasdiv.appendChild(line);
    var ctx=line.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(30, 0);
    ctx.lineTo(30, 400);
    ctx.lineTo(650, 400);
    ctx.lineWidth=2;
    ctx.strokeStyle="rgba(0,0,0,0.5)";
    ctx.stroke();
    var line1=line.getContext("2d");
    line1.beginPath();
    for(var i=2;i<list.length;i++) {
        line1.lineTo(50*(i-1),400-list[i].innerHTML);
    }
    line1.strokeStyle="rgba(0,0,0,0.8)";
    line1.lineWidth=2;
    line1.stroke();
    var line2=line.getContext("2d");
    line2.beginPath();
    line2.strokeStyle ="rgb(200,200,200,0.8)";
    line2.moveTo(30,100);
    line2.lineTo(650,100);
    line2.stroke();
    line2.beginPath();
    line2.moveTo(30,200);
    line2.lineTo(650,200);
    line2.stroke();
    line2.beginPath();
    line2.moveTo(30,300);
    line2.lineTo(650,300);
    line2.stroke();
    for(var j=2;j<list.length;j++) {
        var circle=line.getContext("2d");
        circle.beginPath();
        circle.arc(50*(j-1),400-list[j].innerHTML, 2.5, 0, 2 * Math.PI);
        circle.fillStyle="rgb(22,80,226)";
        circle.fill();
    }
    var text=line.getContext("2d");
    text.strokeStyle="rgb(22,80,226,0.7)";
    text.font = "16px serif";
    text.beginPath();
    for(var k=0;k<12;k++) {
        text.strokeText(Number(k)+1+"月",50+50*k,420);
        text.stroke();
    }
    text.beginPath();
    text.strokeText(300,0,100);
    text.strokeText(200,0,200);
    text.strokeText(100,0,300);
    var title=line.getContext("2d");
    title.strokeText(list[0].innerHTML+"-"+list[1].innerHTML+"-"+"折线销售图",50,50);
    title.font = "20px serif";
    title.strokeStyle="rgba(135,255,99,0.8)";
    title.stroke();
}
