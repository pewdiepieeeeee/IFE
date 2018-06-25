function createTable() {
    var regionlist=document.getElementById('region-radio-wrapper').querySelectorAll('input');
    var productlist=document.getElementById('product-radio-wrapper').querySelectorAll('input');
    var table=document.createElement('table');
    table.border=1;
    var storage=JSON.parse(localStorage.getItem("dataArr1"));
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
                    td.title='编辑';
                    var add=true;
                    if(storage) {
                        for(var stra=0;stra<storage.length;stra++) {
                        if((storage[stra][0]===proArr[zz] && storage[stra][1]===regArr[w]) || (storage[stra][1]===proArr[zz] && storage[stra][0]===regArr[w])) {
                            td.innerHTML=storage[stra][l];
                            add=false;
                        }
                    }
                    }
                    // for(var stra=0;stra<storage.length;stra++) {
                    //     if((storage[stra][0]===proArr[zz] && storage[stra][1]===regArr[w]) || (storage[stra][1]===proArr[zz] && storage[stra][0]===regArr[w])) {
                    //         td.innerHTML=storage[stra][l];
                    //         add=false;
                    //     }
                    // }
                    if(add) {
                       td.innerHTML=getSale(proArr[zz],regArr[w],l); 
                    }
                    // td.innerHTML=getSale(proArr[zz],regArr[w],l);
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
                    td.title='编辑';
                    var add=true;
                    if(storage) {
                        for(var stra=0;stra<storage.length;stra++) {
                        if((storage[stra][0]===proArr[ww] && storage[stra][1]===regArr[0]) || (storage[stra][1]===proArr[ww] && storage[stra][0]===regArr[0])) {
                            td.innerHTML=storage[stra][ll];
                            add=false;
                        }
                    }
                    }
                    // for(var stra=0;stra<storage.length;stra++) {
                    //     if((storage[stra][0]===proArr[ww] && storage[stra][1]===regArr[0]) || (storage[stra][1]===proArr[ww] && storage[stra][0]===regArr[0])) {
                    //         td.innerHTML=storage[stra][ll];
                    //         add=false;
                    //     }
                    // }
                    if(add) {
                        td.innerHTML=getSale(proArr[ww],regArr[0],ll);
                    }
                    // td.innerHTML=getSale(proArr[ww],regArr[0],ll);
                    tr.appendChild(td);
                }
            }
            table.appendChild(tr);
        }
    }

}