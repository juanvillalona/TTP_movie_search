$( document ).ready(function () {
	var searchBar = document.getElementById("movieSearcher");

	$("#mainForm").submit( function(event) {
		event.preventDefault(); //every time you hit submit, it won't refresh the page
	});

	$("#movieSearcher").keyup(function(event) {
		var valueSearch = searchBar.value;
		
		if(valueSearch.length > 3) {
			$.ajax( {
				type:"GET",
				url: "http://www.omdbapi.com/?apikey=d93fe7f0&",
				data: {
					t: $("#movieSearcher").val()
				},
				dataType: "json", //we are expecting to get back the JSON data
				success: function(response) {
					$("#movieTitle").html(response.Title);
					$("#movieImage").attr("src", response.Poster);
					$("#movieDesc").html(response.Plot);
				}
			});
		}
	});

});