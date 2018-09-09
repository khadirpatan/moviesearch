$(document).ready( ()=>{





$("#idLink").click(function(){


	$("#inputYear").hide();

 $("#inputName").attr('placeholder', 'Enter ImdbId');

});

$("#titleLink").click(function(){


if($('#inputYear').is(':hidden')) {
    $("#inputYear").show();

}
 $("#inputName").attr('placeholder', 'Enter MovieName');

});









	$("#imbdReset").click(function(){

		$("#imbd").val("");
	});




	$("#imbdSearch").click(function(){

		let value= $("#imbd").val();
		alert(value);

		if (value==""){
			alert("Enter a movie Id");
		}

		else{

			alert("you have entered an ");
		}
	});



});	

