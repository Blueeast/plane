require(["config"],function(){
	require(["jquery","tools","header","footer"],function($,tools,header){
		//同步加载
		new Promise(function(resolve,reject){
			tools.ajax("GET","/html/component/header.html",null,function(data){
				tools.$("header")[0].innerHTML = data;
				resolve();
			},false);
		}).then(function(){
			header.nav();
		}).then(function(){
			alert("header交互执行完成之后的代码");
		})
	})
})