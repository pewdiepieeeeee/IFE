createCheckbox('region-radio-wrapper',sourceData);
createCheckbox('product-radio-wrapper',sourceData);
document.getElementById('region-radio-wrapper').onchange=createTable;
document.getElementById('product-radio-wrapper').onchange=createTable;
if(history.state) {
    setCheckedBox();
}
createTable();
window.onpopstate=setCheckedBox;
