function getSale(pro,reg,a) {
    for(var i=0;i<sourceData.length;i++) {
        if(sourceData[i].Product===pro && sourceData[i].region===reg) {
            var y=sourceData[i].sale[a-2];
            return y;
        }
    }
}