/*hash方式*/
// function setHash() {
//     var checkedboxes=document.querySelectorAll("input[type=checkbox]");
    
//     var str="";
//     for(var i=0;i<checkedboxes.length;i++) {
//         if(checkedboxes[i].checked===true)
//         str += checkedboxes[i].value;
//     }
//     str=str.replace(/全选/g,"");
//     str=str.replace(/华东/,1);
//     str=str.replace(/华北/,2);
//     str=str.replace(/华南/,3);
//     str=str.replace(/手机/,"a");
//     str=str.replace(/笔记本/,"b");
//     str=str.replace(/智能音箱/,"c");
//     window.location.hash="#"+str;
// }
// function getHash() {
//     return window.location.hash.slice(1);
// }
// function setCheckedBox() {
//     var theHash=getHash();
//     for(var k=0;k<theHash.length;k++) {
//         switch(theHash[k]) {
//             case "1":
//             document.querySelector("input[value=华东]").checked=true;
//             break;
//             case "2":
//             document.querySelector("input[value=华北]").checked=true;
//             break;
//             case "3":
//             document.querySelector("input[value=华南]").checked=true;
//             break;
//             case "a":
//             document.querySelector("input[value=手机]").checked=true;
//             break;
//             case "b":
//             document.querySelector("input[value=笔记本]").checked=true;
//             break;
//             case "c":
//             document.querySelector("input[value=智能音箱]").checked=true;
//             break;
//         }
//     }
// }

/*pushstate*/
function pushstate() {
    var checkedboxes=document.querySelectorAll("input[type=checkbox]");
    
    var str="";
    for(var i=0;i<checkedboxes.length;i++) {
        if(checkedboxes[i].checked===true)
        str += checkedboxes[i].value;
    }
    str=str.replace(/全选/g,"");
    str=str.replace(/华东/,1);
    str=str.replace(/华北/,2);
    str=str.replace(/华南/,3);
    str=str.replace(/手机/,"a");
    str=str.replace(/笔记本/,"b");
    str=str.replace(/智能音箱/,"c");
    history.pushState(str,null,"file:///C:/Users/troublemaker/Desktop/IFE%E4%BB%BB%E5%8A%A1/day39-41/code2.html?"+str);
}
function setCheckedBox() {
    var checkedboxes=document.querySelectorAll("input[type=checkbox]");
    var thestate=history.state;
    for(var i=0;i<checkedboxes.length;i++) {
        checkedboxes[i].checked=false;
    }
    for(var k=0;k<thestate.length;k++) {
        switch(thestate[k]) {
            case "1":
            document.querySelector("input[value=华东]").checked=true;
            break;
            case "2":
            document.querySelector("input[value=华北]").checked=true;
            break;
            case "3":
            document.querySelector("input[value=华南]").checked=true;
            break;
            case "a":
            document.querySelector("input[value=手机]").checked=true;
            break;
            case "b":
            document.querySelector("input[value=笔记本]").checked=true;
            break;
            case "c":
            document.querySelector("input[value=智能音箱]").checked=true;
            break;
        }
    }
    createTable();
}