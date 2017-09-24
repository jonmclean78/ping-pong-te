$(document).ready($ => { 

	//add player button
	let addPlayer = $("#addPlayer");

	//create tournament button	
	let createTournament = $("#ctbutton")
	
	addPlayer.on("click", function () {
		
		//add name to the player list
		let addItem = $("<li />");
		let newItem = $("#inputItem");
		addItem.text(newItem.val());
		let list = $(".list-inline");
		list.append(addItem);

		//clear input after button is clicked
		$('input').val('').removeAttr('checked').removeAttr('selected');

		

	});
		
	
	createTournament.on("click", function () {

			// create array of players
			let players = [];
			$("ul li").each(function() { players.push($(this).text()) });
			// enable create tournament button if there are at least 2 players
			// if (players.length >= 2) {
			//     	$('#ctbutton').attr('disabled', 'enabled');
			// }
			console.log(players);	
			//alert if number of names is not even
			if (players.length % 2 != 0) {
		    	alert("You must have an even number of names. You currently have " + players.length + " players.");
			} else {
			//shuffle players using fisher-yates
			function shuffle(players) {
			    var i, j, temp;
			    for (i = players.length - 1; i > 0; i--) {
			        j = Math.floor(Math.random() * (i + 1));
			        temp = players[i];
			        players[i] = players[j];
			        players[j] = temp;
			    }
			    return players;
			}
			let playersShuffled = shuffle(players);
			console.log(playersShuffled);

			//split shuffled players into two equal length arrays
			let firstHalf = playersShuffled.splice(0, Math.floor(playersShuffled.length / 2));
			let secondHalf = playersShuffled

			//output matches
			let newHTML1 = [];
			for (let i = 0; i < firstHalf.length; i++) {
			    newHTML1.push('<p>' + firstHalf[i] + '<p>');
			}
			$("#firstPlayer").html(newHTML1.join(""));	

			
			let newHTML2 = [];
			for (let i = 0; i < firstHalf.length; i++) {
			    newHTML2.push('<p> vs. <p>');
			}
			$("#playText").html(newHTML2.join(""));	

			
			let newHTML3 = [];
			for (let i = 0; i < secondHalf.length; i++) {
			    newHTML3.push('<p>' + secondHalf[i] + '<p>');
			}
			$("#secondPlayer").html(newHTML3.join(""));	
		};
	});
});
		





