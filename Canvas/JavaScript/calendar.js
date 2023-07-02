
		layui.use('laydate', function(){
		var laydate = layui.laydate;
		laydate.render({
			elem: '#test-n2'
			,position: 'static'
			,lang: 'en'
			,theme: '#393D49' 
			,btns: ['clear', 'confirm']
		});
		});
