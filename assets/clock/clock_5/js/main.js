/* GOALS

1. create a tool -- let's call it `getTime()` -- that gets the current time using `Date()` and return the current year, month, day, hour, and minute.

2. use that tool to store the current time in a global variable called `globalTime`

3. create a tool -- let's call it `drawComposition()` -- that configures our composition based on `globalTime`

4. once the page has loaded, update our page in real time using `setInterval`

*/

// 2. global variable
var globalTime = getTime();
console.log( 'year', globalTime.year );
console.log( 'month', globalTime.month );

// wait for everything to load, then execute our script
window.onload = function(){

	// then initiate all of our code
	drawComposition(globalTime);

}


// 3. create a tool -- let's call it `drawComposition()` -- that configures our composition based on `globalTime`
function drawComposition(now) {
	
	// confirm the function is running
	console.log('drawComposition', now);

	// define an empty variable
	var container;
	// Morning: 6-11AM
	// if the hour is greater than 6 && the hour is less than or equal to 11
	if( now.hour >= 6 && now.hour <= 8 ){
		console.log('morning');
		container = document.getElementById('container-evening');
	}

	// Noon: 12-4PM
	// if the hour is greater than or equal to 12 && the hour is less than or equal to 16 (i.e., 4PM)
	else if(now.hour >= 9 && now.hour <= 16 ){
		console.log('noon')
		container = document.getElementById('container-morning');
	}

	// Evening: 5-10PM
	// if the hour is greater than or equal to 5 && the hour is less than or equal to 22 (i.e., 10PM)
	// ... you'll have to fill this in yourself
	else if(now.hour >= 17 && now.hour <= 20 ){
		console.log('evening')
		container = document.getElementById('container-evening');
	}

	// overnight
	else if(now.hour >= 22 && now.hour <= 5 ){
		console.log('night')
		container = document.getElementById('container-night')
	}

	var music;
	if (now.day = 0){
		console.log('sunday')
		music = document.getElementsById('song-sunday')
	}

	else if (now.day = 1){
		console.log ('monday')
		music = document.getElementsById('song-monday')
	}
//get all containers
//update the style so each is hidden

var allContainers = document.getElementsByClassName('container');
for(i=0; i < allContainers.length; i++){
	var thisContainer = allContainers[i];
	thisContainer.style.display="none";
}

container.style.display = "block";	

} // end drawComposition



// 1. create a tool -- let's call it `getTime()` -- that gets the current time using `Date()` and return the current year, month, day, hour, minute and second
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
	//makes sure it's working
	console.log( theTime )
	//return our time object
	return theTime;
	// functionality goes here!

} // end getTime()




