var key={
	se2:0,
	se3:0,
	se4:0,
	se5:0,
	se6:0
}
$(window).on('scroll',function () {
	var num=shownum();
	if(ifscorll(num)){
		showse(num);
	}
})
function shownum() {
	var scrollTop=$(window).scrollTop();
	var windowH=$(window).height();
	var num=Math.round(scrollTop/windowH)+1;
	return num;
}
function ifscorll(num) {
	if(key['se'+num]==0) {
		return true;
	}
}
function showse(num) {
	if (num==6) {
	$(".se6").css({"height":$(window).innerHeight()});
	}

	key['se'+num]=1;
		$.ajax({
			type:"GET",
			url:"/?id="+num,
			success:function(data){
				console.log('success');
				var see='see'+num;
				var pin='pin'+num;
				$('#'+see).html(data);
				$('.'+pin).fadeToggle(1000);
				$(".scroll").click(function(e) {
					// alert($(e.target).attr("href"));
					e.preventDefault();
					$.scrollify("move",$(this).attr("href"));

				});
			},
			error:function (err) {
				console.log(err);
			}
		})
}