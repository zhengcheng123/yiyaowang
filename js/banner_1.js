//JQ的轮播图代码
$(document).ready(function(){
    var container=$('#container_1');
    var list=$('#lunbotu_1');
    var buttons=$('#button_1 span');
    var index=1;
    var len=6;//需要显示的图的片的数量
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
            if(left<=(-750*len)){
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
	    if (index==6){
	        index=1;
	    }
	    else{
	        index+=1;
	    }
	    animate(-750);
	    showButton();
    }
//  按钮代码 
    buttons.each(function(){
         $(this).bind('mouseenter', function(){
             if(list.is(':animated')||$(this).attr('class')=='on'){
                 return;
             }
             var myIndex=parseInt($(this).attr('index'));//每个按钮span的索引值
             var offset=-750*(myIndex-index);
             animate(offset);
             index = myIndex;
             showButton();
         });
    });
	container.hover(stop,play);
    play();
});