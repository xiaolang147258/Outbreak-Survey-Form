$(function(){
        Victor("container", "output");   //登陆背景函数
        $("#entry_password").focus();
    $(document).keyup(function(event){
      if(event.keyCode ==13){
        $("#entry_btn").trigger("click");
		 event.preventDefault();
      }
    });
		$('#entry_btn').on('click',function(){c_function();});function c_function(){let val = $('#entry_password').val();if(val){if(val=='lsq2020'){sessionStorage.id='2020';window.location.href = '../index.html'}else{alert('口令错误');$('#entry_password').val('')}}else{return false;}
		}
    });