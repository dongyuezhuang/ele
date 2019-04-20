//获取当前时间的函数
module.exports.getNowTime=function(){
	var date=new Date();
	return date.getFullYear()+"-"
        +(date.getMonth()+1).toString().padStart(2,"0")+"-"
        +date.getDate().toString().padStart(2,"0")
        +" "+date.getHours().toString().padStart(2,"0")
        +":"+date.getMinutes().toString().padStart(2,"0")
        +":"+date.getSeconds().toString().padStart(2,"0");
};
//获取随机数的函数
module.exports.getRanodm=function(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}