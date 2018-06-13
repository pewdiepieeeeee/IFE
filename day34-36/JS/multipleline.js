var trs=document.getElementsByTagName("tr");
function createlines(list,lists) {
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
    for(var u=0;u<lists.length;u++) {
        var line1=line.getContext("2d");
        line1.beginPath();
        // line1.strokeStyle="rgba(parseInt(Math.floor(255*Math.random())),parseInt(Math.floor(255*Math.random())),parseInt(Math.floor(255*Math.random())),0.8)";
        var c1=parseInt(Math.floor(255*Math.random())),c2=parseInt(Math.floor(255*Math.random())),c3=parseInt(Math.floor(255*Math.random()))
        line1.strokeStyle="rgba("+c1+","+c2+","+c3+","+0.8+")";
        var arr=Array.prototype.slice.call(lists[u].childNodes);
        if(arr.length<14) {
            for(var i=1;i<arr.length;i++) {
                  line1.lineTo(50*i,400-arr[i].innerHTML); 
                  // line1.strokeStyle="rgba(100,55,45,0.5)";
                  line1.lineWidth=2;
                  line1.stroke();
            }
            for(var j=1;j<arr.length;j++) {
                var circle=line.getContext("2d");
                circle.beginPath();
                circle.arc(50*j,400-arr[j].innerHTML, 2.5, 0, 2 * Math.PI);
                circle.fillStyle="rgb(22,80,226)";
                circle.fill();
            }
        }
        if(arr.length===14) {
            for(var i=2;i<arr.length;i++) {
                  line1.lineTo(50*(i-1),400-arr[i].innerHTML); 
                  // line1.strokeStyle="rgba(parseInt(Math.floor(255*Math.random())),parseInt(Math.floor(255*Math.random())),parseInt(Math.floor(255*Math.random())),0.8)";
                  line1.lineWidth=2;
                  line1.stroke();

            }
            for(var j=2;j<arr.length;j++) {
                var circle=line.getContext("2d");
                circle.beginPath();
                circle.arc(50*(j-1),400-arr[j].innerHTML, 2.5, 0, 2 * Math.PI);
                circle.fillStyle="rgb(22,80,226)";
                circle.fill();
            }
        }
        // line1.strokeStyle="rgba(25*u,25*u,25*u,0.8)";
        // line1.lineWidth=2;
        // line1.stroke();

    }
    // var line1=line.getContext("2d");
    // line1.beginPath();
    // for(var i=2;i<list.length;i++) {
    //     line1.lineTo(50*(i-1),400-list[i].innerHTML);
    // }
    // line1.strokeStyle="rgba(25*index,25*index,25*index,0.8)";
    // line1.lineWidth=2;
    // line1.stroke();
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
    // for(var j=2;j<list.length;j++) {
    //     var circle=line.getContext("2d");
    //     circle.beginPath();
    //     circle.arc(50*(j-1),400-list[j].innerHTML, 2.5, 0, 2 * Math.PI);
    //     circle.fillStyle="rgb(22,80,226)";
    //     circle.fill();
    // }
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
    title.strokeText("产品折线销售图",50,50);
    title.font = "20px serif";
    title.strokeStyle="rgba(135,255,99,0.8)";
    title.stroke();
}
// function loop() {
//     var trs=document.getElementById("table-wrapper").querySelectorAll("tr");
//     for(var i=0;i<trs.length;i++) {
//       if(trs[i].length<14) {
//         for(var x in sourceData) {
//             if(sourceData[x].sale[0]==trs[i][1].innerHTML && sourceData[x].sale[1]==trs[i][2].innerHTML) {
//                 if(sourceData[x].Product===trs[i][0].innerHTML) {
//                     var newtd=document.createElement("td");
//                     newtd.innerHTML=sourceData[x].region;
//                     trs[i]=Array.prototype.slice.call(trs[i]);
//                     trs[i].unshift(newtd);
//                 }
//                 else {
//                     var newtd=document.createElement("td");
//                     newtd.innerHTML=sourceData[x].Product;
//                     trs[i]=Array.prototype.slice.call(trs[i]);
//                     trs[i].unshift(newtd);
//                 }
//             }
//         }
//      }
//       createlines(trs[i],i);
//     }
// }
document.getElementById("con").addEventListener("mouseover",function() {createlines(trs[0],trs)});

