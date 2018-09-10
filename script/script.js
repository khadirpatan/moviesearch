$(document).ready( ()=>{





$("#idLink").click(function(){


	$("#inputYear").hide();
	$("#inputName").val("");
	$("#inputYear").val("");

 	$("#inputName").attr('placeholder', 'ImdbId..');

	});

$("#titleLink").click(function(){


	if($('#inputYear').is(':hidden')) {
    	$("#inputYear").show();
    	$("#inputName").val("");

			}
 	$("#inputName").attr('placeholder', 'Title..');

	});




$("#search").click(function(){

var k = $("#inputName").attr('placeholder');
alert(k);

if( k == 'Title..'){

			alert("in title");

		}

		else{
			alert("in year");
		}


	$.ajax({

		type : 'GET',
		datatype : 'json',
		async:true,

		

		url : ' http://www.omdbapi.com/?i=tt3896198&apikey=133949cb&s='+ $("#inputName").val() || ' http://www.omdbapi.com/?i=tt3896198&apikey=133949cb&i='+ $("#inputName").val() ,

		success : (respone) =>{
			console.log(respone);
		}




	});



	});



});	

