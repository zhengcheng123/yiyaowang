//JQ楼层的轮播图代码
//第一层
$(document).ready(function(){
	    var container=$('#banner_'+2);
	    var list=$('#list_'+2);
	    var buttons=$('#button_'+2+' span');
   	
    var index=1;
    var len=3;//需要显示的图的片的数量
    var interval=1000;
    var timer;
//  进行切换
    function animate (offset){
        var left=parseInt(list.css('left'))+offset;
        if (offset>0){
            offset='+='+offset;
        }
        else {
            offset='-='+Math.abs(offset);
        }
        //console.log(offset);
        list.animate({'left': offset},300,function(){
            if(left<=(-605*len)){
                list.css('left',0);
            }
        });
    }
//  按钮切换
    function showButton(){
        buttons.eq(index-1).addClass('on').siblings().removeClass('on');//序号&颜色变化
    }
// 开始动画效果
    function play(){
        timer = setTimeout(function (){
           	next();
            play();
        }, interval);
    }
//  赞停动画效果
    function stop(){
        clearTimeout(timer);
    }
//  切换下一张
	function next(){
	    if (list.is(':animated')) {
	        return;
	    }
		//切换到最后一张的时候，跳转到第一张，无限滚动
	    if (index==3){
	        index=1;
	    }
	    else{
	        index+=1;
	    }
	    animate(-605);
	    showButton();
    }
//  按钮代码 
    buttons.each(function(){
         $(this).bind('mouseenter', function(){
             if(list.is(':animated')||$(this).attr('class')=='on'){
                 return;
             }
             var myIndex=parseInt($(this).attr('index'));//每个按钮span的索引值
             var offset=-605*(myIndex-index);
             animate(offset);
             index = myIndex;
             showButton();
         });
    });
	container.hover(stop,play);
    play();
});
//二楼
$(document).ready(function(){
	    var container=$('#banner_'+3);
	    var list=$('#list_'+3);
	    var buttons=$('#button_'+3+' span');
   	
    var index=1;
    var len=3;//需要显示的图的片的数量
    var interval=1000;
    var timer;
//  进行切换
    function animate (offset){
        var left=parseInt(list.css('left'))+offset;
        if (offset>0){
            offset='+='+offset;
        }
        else {
            offset='-='+Math.abs(offset);
        }
        //console.log(offset);
        list.animate({'left': offset},300,function(){
            if(left<=(-605*len)){
                list.css('left',0);
            }
        });
    }
//  按钮切换
    function showButton(){
        buttons.eq(index-1).addClass('on').siblings().removeClass('on');//序号&颜色变化
    }
// 开始动画效果
    function play(){
        timer = setTimeout(function (){
           	next();
            play();
        }, interval);
    }
//  赞停动画效果
    function stop(){
        clearTimeout(timer);
    }
//  切换下一张
	function next(){
	    if (list.is(':animated')) {
	        return;
	    }
		//切换到最后一张的时候，跳转到第一张，无限滚动
	    if (index==3){
	        index=1;
	    }
	    else{
	        index+=1;
	    }
	    animate(-605);
	    showButton();
    }
//  按钮代码 
    buttons.each(function(){
         $(this).bind('mouseenter', function(){
             if(list.is(':animated')||$(this).attr('class')=='on'){
                 return;
             }
             var myIndex=parseInt($(this).attr('index'));//每个按钮span的索引值
             var offset=-605*(myIndex-index);
             animate(offset);
             index = myIndex;
             showButton();
         });
    });
	container.hover(stop,play);
    play();
});
//三楼
$(document).ready(function(){
	    var container=$('#banner_'+4);
	    var list=$('#list_'+4);
	    var buttons=$('#button_'+4+' span');
   	
    var index=1;
    var len=3;//需要显示的图的片的数量
    var interval=1000;
    var timer;
//  进行切换
    function animate (offset){
        var left=parseInt(list.css('left'))+offset;
        if (offset>0){
            offset='+='+offset;
        }
        else {
            offset='-='+Math.abs(offset);
        }
        //console.log(offset);
        list.animate({'left': offset},300,function(){
            if(left<=(-605*len)){
                list.css('left',0);
            }
        });
    }
//  按钮切换
    function showButton(){
        buttons.eq(index-1).addClass('on').siblings().removeClass('on');//序号&颜色变化
    }
// 开始动画效果
    function play(){
        timer = setTimeout(function (){
           	next();
            play();
        }, interval);
    }
//  赞停动画效果
    function stop(){
        clearTimeout(timer);
    }
//  切换下一张
	function next(){
	    if (list.is(':animated')) {
	        return;
	    }
		//切换到最后一张的时候，跳转到第一张，无限滚动
	    if (index==3){
	        index=1;
	    }
	    else{
	        index+=1;
	    }
	    animate(-605);
	    showButton();
    }
//  按钮代码 
    buttons.each(function(){
         $(this).bind('mouseenter', function(){
             if(list.is(':animated')||$(this).attr('class')=='on'){
                 return;
             }
             var myIndex=parseInt($(this).attr('index'));//每个按钮span的索引值
             var offset=-605*(myIndex-index);
             animate(offset);
             index = myIndex;
             showButton();
         });
    });
	container.hover(stop,play);
    play();
});
//四楼
$(document).ready(function(){
	    var container=$('#banner_'+5);
	    var list=$('#list_'+5);
	    var buttons=$('#button_'+5+' span');
   	
    var index=1;
    var len=3;//需要显示的图的片的数量
    var interval=1000;
    var timer;
//  进行切换
    function animate (offset){
        var left=parseInt(list.css('left'))+offset;
        if (offset>0){
            offset='+='+offset;
        }
        else {
            offset='-='+Math.abs(offset);
        }
        //console.log(offset);
        list.animate({'left': offset},300,function(){
            if(left<=(-605*len)){
                list.css('left',0);
            }
        });
    }
//  按钮切换
    function showButton(){
        buttons.eq(index-1).addClass('on').siblings().removeClass('on');//序号&颜色变化
    }
// 开始动画效果
    function play(){
        timer = setTimeout(function (){
           	next();
            play();
        }, interval);
    }
//  赞停动画效果
    function stop(){
        clearTimeout(timer);
    }
//  切换下一张
	function next(){
	    if (list.is(':animated')) {
	        return;
	    }
		//切换到最后一张的时候，跳转到第一张，无限滚动
	    if (index==3){
	        index=1;
	    }
	    else{
	        index+=1;
	    }
	    animate(-605);
	    showButton();
    }
//  按钮代码 
    buttons.each(function(){
         $(this).bind('mouseenter', function(){
             if(list.is(':animated')||$(this).attr('class')=='on'){
                 return;
             }
             var myIndex=parseInt($(this).attr('index'));//每个按钮span的索引值
             var offset=-605*(myIndex-index);
             animate(offset);
             index = myIndex;
             showButton();
         });
    });
	container.hover(stop,play);
    play();
});
//五楼
$(document).ready(function(){
	    var container=$('#banner_'+6);
	    var list=$('#list_'+6);
	    var buttons=$('#button_'+6+' span');
   	
    var index=1;
    var len=3;//需要显示的图的片的数量
    var interval=1000;
    var timer;
//  进行切换
    function animate (offset){
        var left=parseInt(list.css('left'))+offset;
        if (offset>0){
            offset='+='+offset;
        }
        else {
            offset='-='+Math.abs(offset);
        }
        //console.log(offset);
        list.animate({'left': offset},300,function(){
            if(left<=(-605*len)){
                list.css('left',0);
            }
        });
    }
//  按钮切换
    function showButton(){
        buttons.eq(index-1).addClass('on').siblings().removeClass('on');//序号&颜色变化
    }
// 开始动画效果
    function play(){
        timer = setTimeout(function (){
           	next();
            play();
        }, interval);
    }
//  赞停动画效果
    function stop(){
        clearTimeout(timer);
    }
//  切换下一张
	function next(){
	    if (list.is(':animated')) {
	        return;
	    }
		//切换到最后一张的时候，跳转到第一张，无限滚动
	    if (index==3){
	        index=1;
	    }
	    else{
	        index+=1;
	    }
	    animate(-605);
	    showButton();
    }
//  按钮代码 
    buttons.each(function(){
         $(this).bind('mouseenter', function(){
             if(list.is(':animated')||$(this).attr('class')=='on'){
                 return;
             }
             var myIndex=parseInt($(this).attr('index'));//每个按钮span的索引值
             var offset=-605*(myIndex-index);
             animate(offset);
             index = myIndex;
             showButton();
         });
    });
	container.hover(stop,play);
    play();
});
//六楼
$(document).ready(function(){
	    var container=$('#banner_'+7);
	    var list=$('#list_'+7);
	    var buttons=$('#button_'+7+' span');
   	
    var index=1;
    var len=3;//需要显示的图的片的数量
    var interval=1000;
    var timer;
//  进行切换
    function animate (offset){
        var left=parseInt(list.css('left'))+offset;
        if (offset>0){
            offset='+='+offset;
        }
        else {
            offset='-='+Math.abs(offset);
        }
        //console.log(offset);
        list.animate({'left': offset},300,function(){
            if(left<=(-605*len)){
                list.css('left',0);
            }
        });
    }
//  按钮切换
    function showButton(){
        buttons.eq(index-1).addClass('on').siblings().removeClass('on');//序号&颜色变化
    }
// 开始动画效果
    function play(){
        timer = setTimeout(function (){
           	next();
            play();
        }, interval);
    }
//  赞停动画效果
    function stop(){
        clearTimeout(timer);
    }
//  切换下一张
	function next(){
	    if (list.is(':animated')) {
	        return;
	    }
		//切换到最后一张的时候，跳转到第一张，无限滚动
	    if (index==3){
	        index=1;
	    }
	    else{
	        index+=1;
	    }
	    animate(-605);
	    showButton();
    }
//  按钮代码 
    buttons.each(function(){
         $(this).bind('mouseenter', function(){
             if(list.is(':animated')||$(this).attr('class')=='on'){
                 return;
             }
             var myIndex=parseInt($(this).attr('index'));//每个按钮span的索引值
             var offset=-605*(myIndex-index);
             animate(offset);
             index = myIndex;
             showButton();
         });
    });
	container.hover(stop,play);
    play();
});
//七楼
$(document).ready(function(){
	    var container=$('#banner_'+8);
	    var list=$('#list_'+8);
	    var buttons=$('#button_'+8+' span');
   	
    var index=1;
    var len=3;//需要显示的图的片的数量
    var interval=1000;
    var timer;
//  进行切换
    function animate (offset){
        var left=parseInt(list.css('left'))+offset;
        if (offset>0){
            offset='+='+offset;
        }
        else {
            offset='-='+Math.abs(offset);
        }
        //console.log(offset);
        list.animate({'left': offset},300,function(){
            if(left<=(-605*len)){
                list.css('left',0);
            }
        });
    }
//  按钮切换
    function showButton(){
        buttons.eq(index-1).addClass('on').siblings().removeClass('on');//序号&颜色变化
    }
// 开始动画效果
    function play(){
        timer = setTimeout(function (){
           	next();
            play();
        }, interval);
    }
//  赞停动画效果
    function stop(){
        clearTimeout(timer);
    }
//  切换下一张
	function next(){
	    if (list.is(':animated')) {
	        return;
	    }
		//切换到最后一张的时候，跳转到第一张，无限滚动
	    if (index==3){
	        index=1;
	    }
	    else{
	        index+=1;
	    }
	    animate(-605);
	    showButton();
    }
//  按钮代码 
    buttons.each(function(){
         $(this).bind('mouseenter', function(){
             if(list.is(':animated')||$(this).attr('class')=='on'){
                 return;
             }
             var myIndex=parseInt($(this).attr('index'));//每个按钮span的索引值
             var offset=-605*(myIndex-index);
             animate(offset);
             index = myIndex;
             showButton();
         });
    });
	container.hover(stop,play);
    play();
});
//八楼
$(document).ready(function(){
	    var container=$('#banner_'+9);
	    var list=$('#list_'+9);
	    var buttons=$('#button_'+9+' span');
   	
    var index=1;
    var len=3;//需要显示的图的片的数量
    var interval=1000;
    var timer;
//  进行切换
    function animate (offset){
        var left=parseInt(list.css('left'))+offset;
        if (offset>0){
            offset='+='+offset;
        }
        else {
            offset='-='+Math.abs(offset);
        }
        //console.log(offset);
        list.animate({'left': offset},300,function(){
            if(left<=(-605*len)){
                list.css('left',0);
            }
        });
    }
//  按钮切换
    function showButton(){
        buttons.eq(index-1).addClass('on').siblings().removeClass('on');//序号&颜色变化
    }
// 开始动画效果
    function play(){
        timer = setTimeout(function (){
           	next();
            play();
        }, interval);
    }
//  赞停动画效果
    function stop(){
        clearTimeout(timer);
    }
//  切换下一张
	function next(){
	    if (list.is(':animated')) {
	        return;
	    }
		//切换到最后一张的时候，跳转到第一张，无限滚动
	    if (index==3){
	        index=1;
	    }
	    else{
	        index+=1;
	    }
	    animate(-605);
	    showButton();
    }
//  按钮代码 
    buttons.each(function(){
         $(this).bind('mouseenter', function(){
             if(list.is(':animated')||$(this).attr('class')=='on'){
                 return;
             }
             var myIndex=parseInt($(this).attr('index'));//每个按钮span的索引值
             var offset=-605*(myIndex-index);
             animate(offset);
             index = myIndex;
             showButton();
         });
    });
	container.hover(stop,play);
    play();
});
//九楼
$(document).ready(function(){
	    var container=$('#banner_'+10);
	    var list=$('#list_'+10);
	    var buttons=$('#button_'+10+' span');
   	
    var index=1;
    var len=3;//需要显示的图的片的数量
    var interval=1000;
    var timer;
//  进行切换
    function animate (offset){
        var left=parseInt(list.css('left'))+offset;
        if (offset>0){
            offset='+='+offset;
        }
        else {
            offset='-='+Math.abs(offset);
        }
        //console.log(offset);
        list.animate({'left': offset},300,function(){
            if(left<=(-605*len)){
                list.css('left',0);
            }
        });
    }
//  按钮切换
    function showButton(){
        buttons.eq(index-1).addClass('on').siblings().removeClass('on');//序号&颜色变化
    }
// 开始动画效果
    function play(){
        timer = setTimeout(function (){
           	next();
            play();
        }, interval);
    }
//  赞停动画效果
    function stop(){
        clearTimeout(timer);
    }
//  切换下一张
	function next(){
	    if (list.is(':animated')) {
	        return;
	    }
		//切换到最后一张的时候，跳转到第一张，无限滚动
	    if (index==3){
	        index=1;
	    }
	    else{
	        index+=1;
	    }
	    animate(-605);
	    showButton();
    }
//  按钮代码 
    buttons.each(function(){
         $(this).bind('mouseenter', function(){
             if(list.is(':animated')||$(this).attr('class')=='on'){
                 return;
             }
             var myIndex=parseInt($(this).attr('index'));//每个按钮span的索引值
             var offset=-605*(myIndex-index);
             animate(offset);
             index = myIndex;
             showButton();
         });
    });
	container.hover(stop,play);
    play();
});