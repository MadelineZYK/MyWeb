$(function(){
	$("#btn").click(function(){
		$.ajax({
			url:"ws/chatservice.php",
			type:"POST",
			data:{flag:"test",name:"Mike"},
			success:function(res){
				alert(res);
			}
		});
	});

	$(".addbtn").click(function(){
		$ajax({
			url:"ws/chatservice.php",
			type:"POST",
			data:{},
			success:function(res){
				
			}
		});
	});
});