/*------------------ Image gallery functionality ------------------ */
var currentImg;		//keeps track of which image is currently displayed

function openImage(imageName) {	
		
	var img = document.getElementById(imageName);
	var modalBox = document.getElementsByClassName("modalBox");
	var modalImage = document.getElementsByClassName("modalImage");
	var mainPage = document.getElementById("screenFilter");

	modalImage[0].innerHTML = img.innerHTML;	//Inserts image ID into frame	
	modalBox[0].style.display = "block";		//Displays center frame for image
    screenFilter.style.display = "block";		//Applies screen filter to darken background
	currentImg = img;							//Keeps track of the image selected
}

function closeImage() {
	
	var modalBox = document.getElementsByClassName("modalBox");	
	var mainPage = document.getElementById("screenFilter");
	
	modalBox[0].style.display = "none";			//Hides the image and frame box
	screenFilter.style.display = "none";		//Hides the background screen filter
}

function nextImage() {
	
	var lastImg = document.getElementById("Gallery").lastElementChild.id;
	var firstImg = document.getElementById("Gallery").firstElementChild.id;

	if (currentImg.id == lastImg) {		//if the current image is the last one in the collection	
		openImage(firstImg);			//then go back to the first image
	} else {
		var nextImg = currentImg.nextElementSibling.id;		
		openImage(nextImg);				//otherwise just select the next adjacent image in the collection
	}
}

function prevImage() {
	
	var lastImg = document.getElementById("Gallery").lastElementChild.id;
	var firstImg = document.getElementById("Gallery").firstElementChild.id;

	if (currentImg.id == firstImg) {	//if the current image is the first one in the collection
		openImage(lastImg);				//then jump to the last image
	} else {
		var prevImg = currentImg.previousElementSibling.id;
		openImage(prevImg);				//otherwise just select the previous adjacent image in the collection
	}	
}


/*------------------ Events menu functionality ------------------ */
function selectEvent(evnt, eventName) {

	var i, events, event_buttons;

	//Hides all events
	events = document.getElementsByClassName("eventItem");
	  for (i=0; i < events.length; i++) {
	    events[i].style.display = "none";
	  }
	  
	//Removes the "active" class from all of the buttons
	event_buttons = document.getElementsByClassName("eventButton");
	  for (i=0; i < event_buttons.length; i++) {
		  event_buttons[i].className = event_buttons[i].className.replace(" active", "");
	  }
	
	//Display the selected subpage and add an "active" class to the button for that page   
	document.getElementById(eventName).style.display = "block";
	evnt.currentTarget.className += " active";
}


/*------------------ Carousel functionality ------------------ */
var panes = document.getElementsByClassName("carouselPane");
var markers = document.getElementsByClassName("indexMarker");
var paneIndex = 0;

function resetCarousel() {			//used to reset the counter so that when a user selects a slide 
	clearInterval(rotateCarousel);
	rotateCarousel = setInterval(function () {
	    moveIndex(+1)
		}, 5000);  
}


function selectPane(n) {
	for (i=0; i < panes.length; i++) {
		panes[i].style.display = "none";	// hides all panes 
	}
    
	for (i=0; i < markers.length; i++) {
		markers[i].className = markers[i].className.replace(" active", "");	// deactivates all markers
	}
	panes[n].style.display = "block";	//only show pane of index 'n'
	markers[n].className += " active";  //only activate marker index 'n' 
}

function moveIndex(x) {
	paneIndex += x;		//move the pane index forward/back by 'x'
	
	if (paneIndex > panes.length - 1) {
		paneIndex = 0;				// returns the index back to 0 if it exceeds the number of panes
	} else if (paneIndex < 0) {
		paneIndex = panes.length - 1;	// takes the index to the end if it goes backwards from the first pane
	}
	
	selectPane(paneIndex);		//select the pane with this new index
	
	resetCarousel();		// resets the carousel timer;
}


/* ------------------ Button menu functionality ------------------ */
function selectRegion(evnt, subpageName) {

	//Variables
	var i, subpages, button_links;

	//Hides all subpages
	subpages = document.getElementsByClassName("subpage");
	  for (i=0; i < subpages.length; i++) {
	    subpages[i].style.display = "none";
	  }
	  
	//Removes the "active" class from all of the buttons
	button_links = document.getElementsByClassName("button_link");
	  for (i=0; i < button_links.length; i++) {
		  button_links[i].className = button_links[i].className.replace(" active", "");
	  }
	
	//Display the selected subpage and add an "active" class to the button for that page   
	document.getElementById(subpageName).style.display = "block";
	evnt.currentTarget.className += " active";
}


/*------------------ side bar functionality ------------------ */
function openSideBar() {
	var toggleSlideBar;
	var toggleDirection;
	
	document.getElementById("sideBar").style.width = "20%";
	document.getElementById("main").style.marginRight = "20%";
	
	toggleSlideBar = document.getElementById('sliderBarControl');
	toggleDirection = document.getElementById('sliderBarDirection');
	toggleSlideBar.style.width = "21.5%";
	toggleDirection.innerHTML = '&#10095';
	toggleSlideBar.onclick = function() {closeSideBar()};
	
}

function closeSideBar() {
	var toggleSlideBar;
	
	document.getElementById("sideBar").style.width = "0";
	document.getElementById("main").style.marginRight = "0";
	
	toggleSlideBar = document.getElementById('sliderBarControl'); 
	toggleDirection = document.getElementById('sliderBarDirection');
	toggleSlideBar.style.width = "1.5%";
	toggleDirection.innerHTML = '&#10094';
	toggleSlideBar.onclick = function() {openSideBar()};
}


/*------------------ clock functionality ------------------ */
function updateTime (time) {
    time.innerHTML = new Date().toLocaleTimeString();
}

