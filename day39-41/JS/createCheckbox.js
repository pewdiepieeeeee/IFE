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