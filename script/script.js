$(document).ready( ()=>{



  $('#inputName , #inputYear').keypress(function(e) {
    var key = e.which;
    if (key == 13) // the enter key code
    {
      $('#search').click();
      return false;
    }
  });



// clearing all values in form on click

$("#reset").click(function(){


	$("#inputYear").val("");
	$("#inputName").val("");
	$(".output").empty();

});

// clearing all values in form on click, hiding year input, changing placeholder

$("#idLink").click(function(){


	$("#inputYear").hide();
	$("#inputName").val("");
	$(".output").empty();

	$("#inputName").attr('placeholder', 'ImdbId..');

	});

// clearing all values in form on click, displaying year input, changing placeholder

$("#titleLink").click(function(){


	if($('#inputYear').is(':hidden')) {
		$("#inputYear").show();
		$("#inputName").val("");
		$("#inputYear").val("");
		$(".output").empty();



			}
	$("#inputName").attr('placeholder', 'Title..');

	});


let getcard =(data)=>{

const poster= data.Poster == "N/A" ? "images/poster.jpg" : data.Poster;
let output= `
				<div class="col-sm-6 col-md-5 col-lg-3 col-8">
												
				<div class="card" style="margin-bottom:10px"  >
				<img class="card-img-top img-fluid" id="outputImg2" style="height:300px"  src="${poster}" alt="Card image cap">
			<div class="card-body text-center"  style="font-size:0.9rem">
			<p class="card-text">

			 ${data.Title}<hr>
			Year : ${data.Year}<br>
			 Type : ${data.Type}<br>
								
			 <b>ImdbID: ${data.imdbID}<br></b>
												
			</p>    	
			</div>
			</div>

													</div>`;
											
								 $('.output').append(output);
								 return(output);


}






										 
$("#search").click(function(){

var placeholder = $("#inputName").attr('placeholder');
$(".output").empty();

// Movie serach based on title and year
if( placeholder == 'Title..'){

	$.ajax({
		type : 'GET',
		datatype : 'json',
		async:true,
		url :' https://www.omdbapi.com/?apikey=133949cb&s='+ $("#inputName").val() ,

		success : (data) =>{
			if (data.Response=="False"){

			let output=	`<div class=msg >No details found</div>`
			$('.output').append(output);			};

		 if ( data.Response=="True"){

				let movieArray=data.Search;

				if($("#inputYear").val()){
	
					var isFound=false;
					for(currentMoive in movieArray){

							if(movieArray[currentMoive].Year== $("#inputYear").val()){
								isFound=true;
								let data=movieArray[currentMoive];
								
								getcard(data);
			
								
											  }
												}

					if(isFound==false){
						let output=`<div class=msg >Please check the Entered Parameters></div>	`
						$('.output').append(output);
					}

				}


			if(!$("#inputYear").val()){

				for(currentMoive in movieArray){

								let data=movieArray[currentMoive];
			
								getcard(data);

							}

					}


			}

			},
			error : (errorMsg)=>{

				let output=`<div class=msg >We cant process your request right now</div>`
					$('.output').append(output);

			},

	});

		}

//if condition ends

//moive search based on ImdbID

		else{
			
			$.ajax({

			type : 'GET',
			datatype : 'json',
			async:true,
			url :' https://www.omdbapi.com/?apikey=133949cb&i='+ $("#inputName").val() ,

			success : (data) =>{
				if (data.Response=="False"){
					let output=`<div class=msg > <b>Enter valid ImdbID</b></div>`
					$('.output').append(output);
					
						}

				else if ( data.Response=="True"){

					const poster= data.Poster == "N/A" ? "images/poster.jpg" : data.Poster;
				let output= `


					<div class="col-sm-6 col-md-6 col-lg-4 col-8">

					<div class="card" >

						<img class="card-img-top img-fluid" id="outputImg" style="height:300px"  src="${poster}" alt="Card image cap">
					<div class="card-body text-center">

					 <p class="card-text">

					 <h5>${data.Title}</h5><hr>
					 Year : ${data.Year}<br>
					 Type : ${data.Type}<br>
					 Rating : ${data.imdbRating}<br>
					 <b>ImdbID: ${data.imdbID}<br></b>
					 <br>
					 </p>
					 <!-- Button trigger modal -->
					<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#moreData">
				 more details...
				</button>

					<!-- Modal -->
					<div class="modal fade" id="moreData" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
					  <div class="modal-dialog " role="document">
						<div class="modal-content">
						  <div class="modal-header">
							<h5 class="modal-title" id="exampleModalLongTitle">${data.Title}</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
							</button>
						  </div>
						  <div class="modal-body">
		

						<img class="card-img-top img-fluid" id="modalOutputImg" style="height:200px; width:200px"  src="${data.Poster}" alt="Card image cap">
					<div class="card-body" style="text-align:left">

					<table class="table">
  
					<tbody>
						<tr>
					   
						  <td>Title </td>
						  <td>${data.Title}</td>
						  
						</tr>
						<tr>
						  
						  <td> Year</td>
						  <td>${data.Year}</td>
						  
						</tr>
						<tr>
					   
						  <td>Type</td>
						  <td>${data.Type}</td>
						 
						</tr>


						<tr>
					   
						  <td>Genre</td>
						  <td>${data.Genre}</td>
						 
						</tr>
						<tr>
					   
						  <td>Actors</td>
						  <td>${data.Actors}</td>
						 
						</tr>
						<tr>
					   
						  <td>Director</td>
						  <td>${data.Director}</td>
						 
						</tr>

						<tr>
					   
						  <td>Writer</td>
						  <td>${data.Writer}</td>
						 
						</tr>

						<tr>
					   
						  <td>Language</td>
						  <td>${data.Language}</td>
						 
						</tr>

						 <tr>
					   
						  <td>imdbRating</td>
						  <td>${data.imdbRating}</td>
						 
						</tr>
						<tr>
					   
						  <td>imdbVotes</td>
						  <td>${data.imdbVotes}</td>
						 
						</tr>
						<tr>
					   
						  <td>Runtime</td>
						  <td>${data.Runtime}</td>
						 
						</tr>

						<tr>
					   
						  <td>Production</td>
						  <td>${data.Production}</td>
						 
						</tr>
						<tr>
					   
						  <td>Released</td>
						  <td>${data.Released}</td>
						 
						</tr>
						
						<tr>
					   
						  <td>Website</td>
						  <td>${data.Website}</td>
						 
						</tr>

					   



					  </tbody>
				</table>



				</div>
	 
			</div>
			</div>
			</div>
				
					 </p>
						</div>
			</div>
					</div>

				</div>`;
				 $('.output').append(output);
				  

				  
				}
			
			},

			error : (errorMsg)=>{

				let output=`<div class=msg >We cant process your request right now</div>`
					$('.output').append(output);

			},


		});

		}
	});
});	

