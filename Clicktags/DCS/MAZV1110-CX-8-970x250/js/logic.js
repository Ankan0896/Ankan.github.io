'strict';

var setupState = 'post_page_load';
var ad, images, settings, startTime, TweenLite, zoomContainer, zoomZoomAni;
var background, whiteFG, mazdaLogo, cx8Logo, copy01, copy02, copy03, copy03b, copy04, cta;
var heroContainer, sky, road, car;


function setup (){
	switch(setupState) {
	case 'post_page_load':
		setupDOM();
		setupVars();
		setupEvents();
		setupPreload();
		break;

	case 'post_image_load':
		setupStage();
		setupPlatformDifferences();
		setupAnimation();
		break;
	}
}


function setupDOM(){
	ad 						= document.getElementById('ad');
	background 		= document.getElementById('background');
	whiteFG 			= document.getElementById('whiteFG');
	cx8Logo				= document.getElementById('cx8Logo');
	cta						= document.getElementById('cta');
	copy01				= document.getElementById('copy01');
	copy02				= document.getElementById('copy02');
	copy03				= document.getElementById('copy03');
	copy03b				= document.getElementById('copy03b');
	copy04				= document.getElementById('copy04');
	mazdaLogo			= document.getElementById('mazdaLogo');
	zoomZoomAni		= document.getElementById('zoomZoomAni');
	sky						= document.getElementById('sky');
	mazdcaraLogo	= document.getElementById('car');
	road					= document.getElementById('road');
	road02				= document.getElementById('road02');
	road03				= document.getElementById('road03');
	road04				= document.getElementById('road04');
	road05				= document.getElementById('road05');
	road06				= document.getElementById('road06');
	road07				= document.getElementById('road07');
	road08				= document.getElementById('road08');
	road09				= document.getElementById('road09');
	//wheelF 				= document.getElementById('wheelF');
	//wheelR 				= document.getElementById('wheelR');
	front 				= document.getElementById('front');
	rear 					= document.getElementById('rear');

	road10				= document.getElementById('road10');
	road11				= document.getElementById('road11');
	road12				= document.getElementById('road12');
	road13				= document.getElementById('road13');
	road14				= document.getElementById('road14');
	road15				= document.getElementById('road15');
	road16				= document.getElementById('road16');
	road17				= document.getElementById('road17');
	road18				= document.getElementById('road18');
	road19				= document.getElementById('road19');
}


function setupVars(){
	images = [];
	settings = {
		width: background.offsetWidth,
		height: background.offsetHeight,
		format: background.offsetWidth + 'x' + background.offsetHeight
	};
}


function setupEvents(){
	ad.addEventListener('click', onExit, false);
	ad.addEventListener('mouseover', onMouseOver, false);
	ad.addEventListener('mouseout', onMouseOut, false);
}


function setupPreload(){
	var _imageTag = document.getElementsByTagName("IMG");
	var length = _imageTag.length;

	for (var i = 0; i < length; i++) {
		if (_imageTag[i].src != null && _imageTag[i].src.indexOf("images/") > -1) images.push(_imageTag[i].src.substr(_imageTag[i].src.indexOf("images/")));
	}

	setupState ='post_image_load';
	preloadImages(images, setup);
}


function setupStage(){
	TweenLite.set( [ad, whiteFG, background],				{	opacity:1, display:'block' });
	TweenLite.set( zoomZoomAni, 							{ opacity:1, scale:0.5 });
}


function setupPlatformDifferences(){
	// SAFARI
	if (navigator.vendor != null && navigator.vendor.toLowerCase().indexOf('apple') > -1) {
	}

	// IE
	if (window.navigator.userAgent.toLowerCase().indexOf('trident') > -1) {
	}

	// FF
	if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
	}
}


function setupAnimation(){
	//start timer
	startTime = new Date().getTime();

	//hide
	TweenLite.set( whiteFG, { opacity:1 });
	TweenLite.set( [copy01, copy02, copy03, copy03b, copy04, cta, cx8Logo, mazdaLogo],	{	opacity:0 });

	//start
	TweenLite.delayedCall(0.1, frame1Animation);
}


function frame1Animation(){
	console.log('Act 1');
	//set
	TweenLite.set( [cx8Logo, mazdaLogo, cta, copy01],	{ opacity:1 });
	TweenLite.set( sky, 	{ x:1230, rotationZ:0.01,  opacity:1 });

	TweenLite.set(front,	{ opacity:1.0, rotation:-9, scaleX:.9,scaleY:-1.4, force3D:false });
	TweenLite.set(rear,		{ opacity:1.0, rotation:-5, scaleX:0.55, force3D:false });

	TweenLite.set(shineF,	{ opacity:0.35, force3D:false });
	TweenLite.set(shineR,	{ opacity:0.4, force3D:false });

	//TweenLite.set(wheelF,			 												{ opacity:0 });
	//TweenLite.set(wheelR,			 												{ opacity:0 });

	TweenLite.set( [road,road02,road03,road04,road05,road06,road07,road08,road09], {
			x: 0,	y:0,	scale:2.0, 	rotationZ:0.01, opacity:1, transformOrigin:'0% 0%', force3D:false
		});
	TweenLite.set( [road10,road11,road12,road13,road14,road15,road16,road17,road18,road19], {
			x: 0,	y:0,	scale:2.0, 	 rotationZ:0.01, opacity:1, transformOrigin:'0% 0%', force3D:false
		});

	//hide
	TweenLite.to(	whiteFG,					0.5,			{	opacity:0, ease:Power1.easeInOut,	delay:0.2  });

	//tween
	TweenLite.to(	sky, 						14.8,			{ x:699,	 ease:Power0.easeOut,		delay:0.2 });

	TweenLite.to(	road, 						2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:-4.0 });
	TweenLite.to(	road02, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:-3.0 });
	TweenLite.to(	road03, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:-2.0 });
	TweenLite.to(	road04, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:-1.0 });
	TweenLite.to(	road05, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:0.0 });
	TweenLite.to(	road06, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:1.0 });
	TweenLite.to(	road07, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:2.0 });
	TweenLite.to(	road08, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:3.0 });
	TweenLite.to(	road09, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:4.0 });
	TweenLite.to(	road10, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:5.0 });
	TweenLite.to(	road11, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:6.0 });
	TweenLite.to(	road12, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:7.0 });
	TweenLite.to(	road13, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:8.0 });
	TweenLite.to(	road14, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:9.0 });
	TweenLite.to(	road15, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:10.0 });
	TweenLite.to(	road16, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:11.0 });
	TweenLite.to(	road17, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:12.0 });
	TweenLite.to(	road18, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:13.0 });
	TweenLite.to(	road19, 					2.6,			{ x:-1500, y:-35, scale:1,	ease:Power1.easeOut,		delay:14.0 });


	//TweenLite.to(wheelF,			 			15.0,			{ rotation:0,									ease:Power1.easeInOut, 		delay:0.0 });
	//TweenLite.to(wheelR, 						15.0,			{ rotation:0,									ease:Power1.easeInOut, 		delay:0.0 });
	TweenLite.to(shineF,			 			15.0,			{ rotation:-3000, ease:Power0.easeOut, 		delay:0.0 });
	TweenLite.to(shineR, 						15.0,			{ rotation:3000, ease:Power0.easeOut, 		delay:0.0 });

	TweenLite.delayedCall(					3.0,			frame2Animation);
}



function frame2Animation(){
	console.log('Act 2');
	//set
	TweenLite.set( copy02, 										{ opacity:0 });

	//hide
	TweenLite.to(	copy01, 					0.5,			{ opacity:0,						ease:Power1.easeInOut,			delay:0.0 });

	//tween
	TweenLite.to(	copy02, 					0.5,			{ opacity:1,						ease:Power1.easeInOut,		delay:0.5 });

	TweenLite.delayedCall(					3.5,			frame3Animation);
}



function frame3Animation(){
	console.log('Act 3');
	//set
	TweenLite.set( [copy03, copy03b], 				{ opacity:0 });

	//hide
	TweenLite.to(	copy02, 					0.5,			{ opacity:0,						ease:Power1.easeInOut,			delay:0.0 });

	//tween
	TweenLite.to(	copy03, 					0.5,			{ opacity:1,						ease:Power1.easeInOut,		delay:0.5 });

	TweenLite.to(	copy03, 					0.5,			{ opacity:0,						ease:Power1.easeInOut,			delay:1.5 });
	TweenLite.to(	copy03b, 					0.5,			{ opacity:1,						ease:Power1.easeInOut,		delay:2.0 });

	TweenLite.delayedCall(					4.5,			frame4Animation);
}


function frame4Animation(){
	console.log('Act 4');
	//set
	var split = new SplitText( copy04, { type: "chars" } );
	var timeline = new TimelineMax();
	TweenLite.set( copy04, 										{ opacity:1 });

	//hide
	TweenLite.to(	[copy03, copy03b],0.5,			{ opacity:0,						ease:Power1.easeInOut,	delay:0.0 });

	//tween
	timeline.staggerFrom( split.chars, 0.3, 	{ opacity:0, 	scale:3, 	ease:Power1.easeIn,			delay:0.5}, 	0.12 );

	TweenLite.delayedCall(1.3,	animateZoomZoom);
}



function animateZoomZoom() {
	var frameHeight = 31, numRows = 30;
	var steppedEase = new SteppedEase(numRows);
	TweenLite.to(mazdaLogo, 	0.3, 	{ opacity:0,	delay:0.25,	ease:Power1.easeOut });
	TweenLite.to(mazdaLogo, 	0.3, 	{ opacity:1,	delay:2.0,	ease:Power1.easeOut });
	TweenLite.set(zoomZoomAni,			{ backgroundPosition: '0px 0px'});
	TweenLite.to(zoomZoomAni, 2.0,	{ backgroundPosition: '-'+'0px '+(frameHeight*numRows)+'px', ease:steppedEase, repeat:-1, delay:0.25, 	onComplete:getDuration});
}


function getDuration(){
	var currentTime = new Date().getTime();
	console.log( ((currentTime - startTime) * 0.001).toFixed(2) );
	TweenLite.killTweensOf([ road17,road18,road19,sky ], true);
	//TweenLite.to(wheelF,			 			0.5,			{ opacity:0,			ease:Power1.easeInOut, 		delay:0.0 });
	//TweenLite.to(wheelR, 						0.5,			{ opacity:0,			ease:Power1.easeInOut, 		delay:0.0 });
}


function preloadImages(urls, callback){
	var length = urls.length;
	var loaded = 0;
	var failed = false;
	var branch = function () {
		if (++loaded == length && callback) {
			if (failed) {
				console.log(loaded);
				console.log(length);
				showFallback();
			} else {
				callback();
			}
		}
	};

	for (var i = length-1; i >= 0; i--) {
		if ("" == urls[i] || urls[i] == null) {
			urls.splice(i, 1);
		}
	}

	for (var i = 0, length = urls.length; i < length; i++) {

		var img = new Image();
		img.onload = function() {
			branch();
		};
		img.onerror = function(e) {
			console.log(e);
			failed = true;
			branch();
		};
		img.src = urls[i];
	}

	if (length == 0) callback();
}


function showFallback(){
	document.getElementsByTagName("body")[0].innerHTML += '<img style="position:absolute;top:0;left:0" src="images/backup.jpg">';
}


function onExit(e){
	Enabler.exit('Exit');
}


function onMouseOver(e){
}


function onMouseOut(e){
}

