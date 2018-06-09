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
function createCheckbox(id,data) {
    var form=document.createElement('form');
    var checkAll=document.createElement('input');
    checkAll.type='checkbox';
    var str='';
    var reOrPro;
    (id==='region-radio-wrapper')?reOrPro='region':reOrPro='Product';
    checkAll.value='全选';
    var label=document.createElement('label');
    label.innerHTML='全选';
    label.appendChild(checkAll);
    form.appendChild(label);
    for(x in data) {
        if(str.indexOf(data[x][reOrPro])===-1 || str==='') {
            var checkbox=document.createElement('input');
            checkbox.type='checkbox';
            checkbox.value=data[x][reOrPro];
            var labelradio=document.createElement('label');
            labelradio.innerHTML=data[x][reOrPro];
            labelradio.appendChild(checkbox);
            form.appendChild(labelradio);
            str=str+data[x][reOrPro];
        }  
    }
    document.getElementById(id).appendChild(form);
    document.getElementById(id).onclick=function(ev) {
        var inputlist=document.getElementById(id).querySelectorAll('input');
        var e=ev || window.event;
        e= e.target || srcElement;
        if(e.nodeName.toLowerCase()==='input') {
            if(e.value === '全选') {
                var y=0;
                for(var j=0;j<inputlist.length;j++) {
                    if(inputlist[j].value!=='全选' && inputlist[j].checked!==true) {
                        y=1;
                        break;
                    }
                }
                if(y && e.checked===true) {
                    for(i=0;i<inputlist.length;i++) {
                        inputlist[i].checked=true;
                    }
                }
                else if(y===0 && e.checked===true){
                    ev.preventDefault();
                }
            }
            else {
                var m=0,n=0;
                for(var k=0;k<inputlist.length;k++) {
                    if(inputlist[k].value!=='全选' && inputlist[k].checked!==true) {
                        m++;
                    }
                    else if(inputlist[k].checked===true) {
                        n++;
                    }
                }
                if(m===1 && e.checked===false) {
                    document.getElementById(id).querySelector('input[value="全选"]').checked=false;
                }
                else if(m===0 && e.value!=='全选') {
                    document.getElementById(id).querySelector('input[value="全选"]').checked=true;
                }
                else if(n===0 && e.checked===false) {
                    ev.preventDefault();
                }
            }
        }
    }
}
createCheckbox('region-radio-wrapper',sourceData);
createCheckbox('product-radio-wrapper',sourceData);
function getSale(pro,reg,a) {
    for(var i=0;i<sourceData.length;i++) {
        if(sourceData[i].Product===pro && sourceData[i].region===reg) {
            var y=sourceData[i].sale[a-2];
            return y;
        }
    }
}
function createTable() {
    var regionlist=document.getElementById('region-radio-wrapper').querySelectorAll('input');
    var productlist=document.getElementById('product-radio-wrapper').querySelectorAll('input');
    var table=document.createElement('table');
    table.border=1;
    document.getElementById('table-wrapper').innerHTML='';
    document.getElementById('table-wrapper').appendChild(table);
    var p=0,r=0,z=0,zz=0,w=-1,ww=-1;regArr=[],proArr=[];
    for(var i=0,ii=0;i<regionlist.length;i++) {
        if(regionlist[i].value!=='全选' && regionlist[i].checked===true) {
            regArr[ii]=regionlist[i].value;
            r++;
            ii++;
        }
    }
    for(var j=0,jj=0;j<productlist.length;j++) {
        if(productlist[j].value!=='全选' && productlist[j].checked===true) {
            proArr[jj]=productlist[j].value;
            p++;
            jj++;
        }
    }
    for(var k=0;k<p*r;k++) {
        if(z<r) {
            z++;
        }
        else {
            z=1;
            zz++;
        }
        if(w<r-1) {
            w++;
        }
        else {
            w=0;
        }
        if(ww<p) {
            ww++;
        }
        if((r>1 && p>1) || (p===1)) {
            var tr=document.createElement('tr');
            for(var l=0;l<14;l++) {
                if(l===0) {
                    if(z===1) {
                        var td=document.createElement('td');
                        td.innerHTML=proArr[zz];
                        td.rowSpan=r;
                        tr.appendChild(td);  
                    }              
                }
                else if(l===1) {
                    var td=document.createElement('td');
                    td.innerHTML=regArr[w];
                    tr.appendChild(td);
                }
                else {
                    var td=document.createElement('td');
                    td.innerHTML=getSale(proArr[zz],regArr[w],l);
                    tr.appendChild(td);
                }
            }
            table.appendChild(tr);   
        }
        else {
            var tr=document.createElement('tr');
            for(var ll=0;ll<14;ll++) {
                if(ll===0) {
                    if(ww===0) {
                        var td=document.createElement('td');
                        td.innerHTML=regArr[0];
                        td.rowSpan=p;
                        tr.appendChild(td);   
                    }
                }
                else if(ll===1) {
                    var td=document.createElement('td');
                    td.innerHTML=proArr[ww];
                    tr.appendChild(td);
                }
                else {
                    var td=document.createElement('td');
                    td.innerHTML=getSale(proArr[ww],regArr[0],ll);
                    tr.appendChild(td);
                }
            }
            table.appendChild(tr);
        }
    }

}
document.getElementById('region-radio-wrapper').onchange=createTable;
document.getElementById('product-radio-wrapper').onchange=createTable;