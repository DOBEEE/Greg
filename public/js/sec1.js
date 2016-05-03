		$(function() {
			 window.scrollTo(0,1);
			$(".panel").css({"height":$(window).innerHeight()});
			$.scrollify({
				section:".panel"
			});
			$(".scroll").on('click',function(e) {
				// alert($(e.target).attr("href"));
				e.preventDefault();
				$.scrollify("move",$(this).attr("href"));
			});
		});
		var oNav=document.getElementById('nav');
		var yuwid=[];
		
		var al=oNav.getElementsByTagName('a');
		for (var i = 0; i < al.length; i++) {
				yuwid[i]=al[i].clientWidth;
			}
		window.onresize=function () {
			for (var i = 0; i < al.length; i++) {
				yuwid[i]=al[i].clientWidth;
			}
		};
		
		for (var i = 0; i < al.length; i++) {
				
				(function (a) {
					al[a].onmouseover=function () {
						if ($('.menu_main').css('display')=="none") {
						$(this).animate({width:'90%'},'fast');
					}
					};
					al[a].onmouseout=function () {
						if ($('.menu_main').css('display')=="none") {
						$(this).animate({width:yuwid[a]/oNav.clientWidth*100+'%'},'fast');
					}
					};
				})(i)
			
		}
var active=0;
$('.menu_main').on('click',function (e) {
	e.stopPropagation();
	if (active==0) {
		$('#nav').slideDown();
		active=1;
	} else {
		$('#nav').slideUp();
		active=0;
	}
})
$('.menu_main').on('touchstart',function () {
	if (active==0) {
		$('#nav').slideDown();

		active=1;
	} else {
		$('#nav').slideUp();
		active=0;
	}
	return false;
});
$('body').on('click',function () {
	if (active==1) {
		$('#nav').slideUp();
		active=0;
	}
})
$('body').on('touchstart',function (e) {
	var event=document.createEvent("MouseEvents");
	event.initMouseEvent("click",true,true,document.defaultView,0,0,0,0,0,false,false,false,false,0,null);
	if (/.*scroll.*/g.test(e.target.className)) {
		//判断是否为向下箭头，是则阻止冒泡
		e.target.dispatchEvent(event);
		return false;
	}else{
		e.target.dispatchEvent(event);
	}
	if (active==1) {
		
		$('#nav').slideUp();
		active=0;
		return false;
	}

})