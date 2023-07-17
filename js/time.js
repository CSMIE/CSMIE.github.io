setInterval(function(){
    var curtime=new Date();
    var curyear=curtime.getFullYear();
    var curmonth=curtime.getMonth()+1;
    var curday=curtime.getDate();
    var curhour=checkTime(curtime.getHours());
    var curminite=checkTime(curtime.getMinutes());
    var cursecond=checkTime(curtime.getSeconds());
    function checkTime(k){
      if(k < 10) return "0" + k;
      return k;
    }
    var box=document.getElementById("curtime");
    box.innerHTML="现在是"+curyear+"年"+curmonth+"月"+curday+"日  "+curhour+":"+curminite+":"+cursecond;		  
},1000);