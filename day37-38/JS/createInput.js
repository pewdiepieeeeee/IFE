function createInput() {
    var regionlist=document.getElementById('region-radio-wrapper').querySelectorAll('input');
    var productlist=document.getElementById('product-radio-wrapper').querySelectorAll('input');
    var form=document.createElement('form');
    var storage=JSON.parse(localStorage.getItem("dataArr1"));
    document.getElementById('table-wrapper').innerHTML='';
    document.getElementById('table-wrapper').appendChild(form);
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
            var div=document.createElement('div');
            for(var l=0;l<14;l++) {
                if(l===0) {
                    var inp=document.createElement('input');
                    inp.readOnly="readonly"
                    inp.value=proArr[zz];
                    div.appendChild(inp);  
                }
                else if(l===1) {
                    var inp=document.createElement('input');
                    inp.readOnly="readonly"
                    inp.value=regArr[w];
                    div.appendChild(inp);
                }
                else {
                    var inp=document.createElement('input');
                    var add=true;
                    for(var stra=0;stra<storage.length;stra++) {
                        if((storage[stra][0]===proArr[zz] && storage[stra][1]===regArr[w]) || (storage[stra][1]===proArr[zz] && storage[stra][0]===regArr[w])) {
                            inp.value=storage[stra][l];
                            add=false;
                        }
                    }
                    if(add) {
                        inp.value=getSale(proArr[zz],regArr[w],l);
                    }
                    // inp.value=getSale(proArr[zz],regArr[w],l);
                    inp.onchange=textCheck;
                    div.appendChild(inp);
                    
                }
            }
            form.appendChild(div); 
        }
        else {
            var div=document.createElement('div');
            for(var ll=0;ll<14;ll++) {
                if(ll===0) {
                    var inp=document.createElement('input');
                    inp.readOnly="readonly"
                    inp.value=regArr[0];
                    div.appendChild(inp);   
                }
                else if(ll===1) {
                    var inp=document.createElement('input');
                    inp.readOnly="readonly"
                    inp.value=proArr[ww];
                    div.appendChild(inp);
                }
                else {
                    var inp=document.createElement('input');
                    var add=true;
                    for(var stra=0;stra<storage.length;stra++) {
                        if((storage[stra][0]===proArr[ww] && storage[stra][1]===regArr[0]) || (storage[stra][1]===proArr[ww] && storage[stra][0]===regArr[0])) {
                            inp.value=storage[stra][ll];
                        }
                    }
                    if(add) {
                       inp.value=getSale(proArr[ww],regArr[0],ll); 
                    }
                    // inp.value=getSale(proArr[ww],regArr[0],ll);
                    inp.onchange=textCheck;
                    div.appendChild(inp);
                }
            }
            form.appendChild(div); 
        }
    }

}