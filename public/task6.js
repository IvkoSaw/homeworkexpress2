$(function(){
	$('button').on('click', function(event){
		event.preventDefault();
		$.ajax({
			url:'http://localhost:3000/articlesTask6',
			method:'post',
			data:{
				email:$('#email').val(),
				password:$('#password').val()
			},
			success: function(res){
				alert(res);
			},
			error: function(res){
				alert(res.responseText);
			}
		});
	});
});