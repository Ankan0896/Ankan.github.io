"strict";
var setupState = "post_page_load";
var images;
var tl;
var startTime;
var callbackDelay;
var ad;
var fallback;
var background;
var settings;
var disclaimer;
var disclaimerBtn;
var disclaimerBtnBG;
var disclaimerOpen = 'false';
var clickthrough;
var bgClickthrough;


function setup (){
	switch(setupState) {
		case "post_page_load":
			setupDOM();
			setupVars();
			setupEvents();
			setupPreload();
			break;

		case "post_image_load":
			setupPlatformDifferences();
			setupAnimation();
			setupVisibility();
			break;
	}
}


function setupDOM(){
	ad 							= document.getElementById("ad");
	background 			= document.getElementById("background");
	disclaimer 			= document.getElementById('disclaimer');
	disclaimerBtn 	= document.getElementById('disclaimerBtn');
	disclaimerBtnBG = document.getElementById('disclaimerBtnBG');
	bgClickthrough 	= document.getElementById('bgClickthrough');
}


function setupVars(){
	tl = new TimelineLite();

	images = [];

	callbackDelay = 500;

	settings = {
		fallback: "images/default.jpg",
		width: background.offsetWidth,
		height: background.offsetHeight,
		format: background.offsetWidth + 'x' + background.offsetHeight
	};
}


function setupEvents(){
	bgClickthrough.addEventListener('click', 	onExit, false);
	disclaimerBtnBG.addEventListener('click', 	onDisclaimerClick, false);
	//
	bgClickthrough.addEventListener('mouseover', onMouseOver, false);
	bgClickthrough.addEventListener('mouseout', onMouseOut, false);
}


function setupPreload(){
	var _imageTag = document.getElementsByTagName("IMG");
	var length = _imageTag.length;

	for (var i = 0; i < length; i++) {
		if (_imageTag[i].src != null && _imageTag[i].src.indexOf("images/") > -1) images.push(_imageTag[i].src.substr(_imageTag[i].src.indexOf("images/")));
	}

	setupState ="post_image_load";
	preloadImages(images, setup);
}


function setupPlatformDifferences(){
	//	SAFARI
	if (navigator.vendor != null && navigator.vendor.toLowerCase().indexOf('apple') > -1) {
	}

	//	IE
	if (window.navigator.userAgent.indexOf("Trident") > -1) {
	}
}



function setupAnimation(){

	var time = 0;

	//	START ANIMATION
	{
		tl.set(ad, 														{display:"block"});
		tl.set(disclaimerArr,					 				{opacity: 1, color:'#1f5aa5', fill:'#1f5aa5', scaleY:-1 });
		tl.set(disclaimer,					 					{opacity:1, y:settings.height, backgroundColor: "rgba(31,90,166,0)"});
		tl.to([ad], 1, 												{opacity: 1, perspective: 800, ease:Power1.easeOut, onStart:setTime}, time);
		tl.to([background, "#footer"], 0.25, 	{opacity: 1, ease:Power1.easeOut}, time);
	}


	//	FRAME 1
	{
		// IN
		tl.fromTo("#frame1", 0.5, {opacity: 0}, {opacity: 1, ease: Power1.easeOut}, time);
		// WAIT
		time += 4;
	}


	//	FRAME 2
	{
		// OUT
		tl.to("#frame1", 1, {opacity: 0, ease: Power1.easeIn}, time + "-=1");
		// IN
		tl.fromTo("#frame2", 0.5, {opacity: 0}, {opacity: 1, ease: Power1.easeOut}, time);
		tl.fromTo("#copy2", 0.9, {opacity: 0, y:20}, {opacity:1, y: 0, ease: Back.easeOut.config(1)}, time + "+=0.0");
		// WAIT
		time += 4;
	}


	//	FRAME 3
	{
		// OUT
		tl.to("#backgroundImage-1", 0.5, {y: -settings.height, ease: Power1.easeInOut}, time + "-=0");
		tl.to(["#frame2"], 				0.5, {opacity: 0, ease: Power1.easeIn}, time + "-=0.5");
		// IN
		tl.fromTo("#frame3", 			0.9, {opacity: 0}, 										{opacity: 1, ease: Back.easeOut.config(1)}, time);
		tl.fromTo("#copy3", 			0.9, {opacity: 1, y:settings.height}, {opacity:1, y: 0, ease: Power1.easeInOut}, time + "+=0.0");
		tl.fromTo("#CTA", 				1.0, {opacity: 1, y:settings.height}, {opacity:1, y: 0, ease:Power1.easeInOut}, time + "+=0.5");
		tl.fromTo(['#disclaimerBtn'], 0.5, 	    {opacity:0, y:20}, {opacity:1, y:0,	ease:Power1.easeInOut}, time + '+=0.9');
        tl.fromTo(['#disclaimer'], 	0.5, 	    {opacity:1, y:settings.height}, {opacity:1, y:0,	ease:Power1.easeInOut}, time + '+=0.9');
		tl.to(["#disclaimerBtnBG"], 				0.5, {display:'block'}, time + "+=0.9");
		// WAIT
		time += 4;
	}


	{
		tl.to({}, 0, {onComplete:getTime}, time);
	}

}



function setupVisibility(){
	tl.pause();
	if (!Enabler.isVisible()) {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, function() {tl.restart();});
	} else {
		tl.restart();
	}
}


function preloadImages(urls, callback){
	var length = urls.length;
	var loaded = 0;
	var failed = false;
	var removeDuplicates = {};

	var branch = function () {
		if (++loaded == length && callback) {
			if (failed) {
				showFallback();
			} else {
				setTimeout(callback, callbackDelay);
			}
		}
	};

	for (var i = length-1; i >= 0; i--) {
		if (urls[i] != "" || urls[i] != null) {
			removeDuplicates[urls[i]] = urls[i];
		}
	}

	urls = [];

	for (var j in removeDuplicates) {
		urls.push(removeDuplicates[j]);
	}

	for (var i = 0, length = urls.length; i < length; i++) {
		var img = new Image();
		img.onload = function() {
			branch();
		};
		img.onerror = function(e) {
			failed = true;
			branch();
		};
		img.src = urls[i];
	}

	if (length == 0) setTimeout(callback, callbackDelay);
}


function setTime(){
	startTime = new Date().getTime();
}

function getTime(){
	var currentTime = new Date().getTime();
	console.log((currentTime - startTime) * 0.001);
	return (currentTime - startTime) * 0.001;
}


function showFallback(){
	document.getElementsByTagName("body")[0].innerHTML += '<img id="fallback" style="position:absolute;top:0;left:0" src="' + settings.fallback + '">';
	fallback = document.getElementById("fallback");
	fallback.addEventListener('click', onExit, false);
}


function onExit(e){
	console.log('exit');
	Enabler.exit('Default Exit');
}


function onDisclaimerClick(e){
	if(disclaimerOpen == 'false'){
		console.log('open disclaimer');
		TweenLite.to(disclaimer, 		0.4, 	{ y:-90, backgroundColor: "rgba(31,90,166,1)", ease:Sine.easeOut});
		TweenLite.to(disclaimerBtn, 0.15, { color:'#ffffff', fill:'#ffffff', borderBottomColor:'#ffffff', ease:Sine.easeOut });
		TweenLite.to(disclaimerArr, 0.15, { color:'#ffffff', fill:"#ffffff", ease:Sine.easeOut, scaleY:1 });
		disclaimerOpen = 'true';

	} else if(disclaimerOpen == 'true'){
		console.log('close disclaimer');
		TweenLite.to(disclaimer, 		0.4, 	{ y:0, backgroundColor: "rgba(31,90,166,0)", ease:Sine.easeIn});
		TweenLite.to(disclaimerBtn, 0.15, { color:'#1f5aa5', fill:'#1f5aa5', borderBottomColor:'#1f5aa5', ease:Sine.easeIn });
		TweenLite.to(disclaimerArr, 0.15, { color:'#1f5aa5', fill:"#1f5aa5", ease:Sine.easeIn, scaleY:-1 });
		disclaimerOpen = 'false';
	}
}

function onMouseOver(e){
	TweenLite.to(["#CTA", "#arrow"], 0.15, {css:{color:"#ffda41", fill:"#ffda41"}, ease: Sine.easeIn});
	TweenLite.to(["#arrow"], 0.15, {x:1, ease: Sine.easeIn});
}


function onMouseOut(e){
	TweenLite.to(["#CTA", "#arrow"], 0.15, {css:{color:"#ffffff", fill:"#ffffff"}, ease: Sine.easeIn});
	TweenLite.to(["#arrow"], 0.15, {x:0, ease: Sine.easeIn});
}


// Replay the animated timeline.
function onRestart(e){
	tl.restart();
}
