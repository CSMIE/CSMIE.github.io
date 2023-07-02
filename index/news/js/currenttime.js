setInterval(function(){
    var time=new Date();
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var day=time.getDate();
    var hour=checkTime(time.getHours());
    var minite=checkTime(time.getMinutes());
    var second=checkTime(time.getSeconds());
    function checkTime(i){
      if(i<10) return "0"+i;
      return i;
    }
    var box=document.getElementById("time");
    box.innerHTML="当前时间："+year+"年"+month+"月"+day+"日  "+hour+":"+minite+":"+second;		  
},1000);