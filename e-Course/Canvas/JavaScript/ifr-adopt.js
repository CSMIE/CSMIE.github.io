// To Do List 页面自适应
  //根据ID获取iframe对象
  /*var org = $("#form-iframe")
  org.onload = function () {
      //解决打开高度太高的页面后再打开高度较小页面滚动条不收缩
      org.style.height = '0px';
      var iDoc = org.contentDocument || org.document
      var height = calcPageHeight(iDoc)
      if (height < 850) {
          height = 850;
      }
      org.style(height, height + 'px')
  }*/
  try {
    var timer;
    $("#form-iframe").load(function () {
        if (timer) {
            clearInterval(timer);
        }
        //pre_height用于记录上次检查时body的高度
        //mainheight用于获取本次检查时body的高度，并赋予iframe的高度
        var mainheight, pre_height;
        var frame = $(this);
        timer = setInterval(function () {
            mainheight = $(document.body).height() + 10;
            if (mainheight != pre_height) {
                pre_height = mainheight;
                frame.height(Math.max(mainheight, 350));
            }
        }, 500);//每0.5秒检查一次
    });
} catch (e) {
}


