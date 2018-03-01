/* GOALS

	we're trying to accomplish ... 

	time breakouts
	6–9 am (video inverted)
	9 am – 5 pm (video normal, a.k.a. default)
	5–9 pm (video inverted)
	9 pm – 6 am (video grayscale)

	1 video, 3 states
	- inverted
	- grayscale
	- normal

	1 circle, grows with the day

	8 songs
	at night, we always play evening song
	day 0 = song 0 (sunday)
	day 1 = song 1
	day 2 = song 2
	day 3 = song 3
	day 4 = song 4
	day 5 = song 5
	day 6 = song 6

*/ 

// get the current time, store it in a global variable
var globalTime = getTime();

// wait for everything to load, then execute our script
// i.e., wait for the browser to draw all the HTML so we can access it via JS
window.onload = function(){

	// then initiate all of our code
	drawComposition(globalTime);

}



function drawComposition(now) {

	// confirm the function is running
	console.log('drawComposition', now);


	// ^^^^^^ PART 1 ^^^^^^
	// define all the pieces we want to use
	var projectContainer = document.getElementById('project-container');
	var video = document.getElementById('video-container');
	var song = document.getElementById('time-song');
	var circle = document.getElementById('circle');
	var circletwo = document.getElementById('circle2');

	var videoState = "";
	var circleSize = now.hour * 20;
	// assuming song files are named `song-0.mp3`, `song-1.mp3`, etcetera ... 
	var songFile = "song-"+now.day+".wav";


	// ^^^^^^ PART 2 ^^^^^^
	// outline rules for how to use those pieces

	// 6–9 am (video inverted)
	if ( now.hour >= 6 && now.hour < 9 ) {
		videoState = "inverted";
	}

	// 9 am – 5 pm (video normal, a.k.a. default)
	// else if ... 
	else if ( now.hour >= 9 && now.hour < 17 ) {
		videoState = "blur";
	}

	// 5–9 pm (video inverted)
	else if ( now.hour >= 17 && now.hour < 21 ) {
		videoState = "inverted";
	}

	// 9 pm – 6 am (video grayscale)
	else if ( now.hour >= 21 || now.hour < 6 ) {
		videoState = "grayscale";
		songFile = "night.wav"
	}

	// we have to end with `else`
	else {
		// do nothing
	}


	// ^^^^^^ PART 3 ^^^^^^
	// apply the rules, display the pieces, etc.

	// update video class name
	video.classList.add(videoState);
	// insert the right song file
	song.innerHTML = "<source src='music/"+songFile+"'>";
	// change the circle size
	circle.style.width = circleSize+"px";
	circle.style.height = circleSize+"px";
	// reveal everything
	projectContainer.style.opacity = 1;

} // end drawComposition


// Get current time using `Date()` and return the current year, month, day, hour, minute and second
function getTime() {

	//get absolute most current time and date
	var localTime = new Date();
	//make sure we got it
	console.log( localTime );
	//extract time and date info and store it in an object
	var theTime = {
		year : localTime.getFullYear(),
		month : localTime.getMonth(),
		date: localTime.getDate(),
		day : localTime.getDay(),
		hour : localTime.getHours(),
		minute : localTime.getMinutes()
	};

	//return our time object
	return theTime;

} // end getTime()