function textCheck() {
    
    if(Number(table.querySelector("input").value)>=0) { }
    else {
        alert("请输入0及以上的数字");
        createTable();
        
    }
}
