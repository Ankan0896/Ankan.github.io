var container;
var bgExit;
var copy01, copy02, copy03;
var cta;
var bg;


function politeInit(){
	container 		= document.getElementById('main-container');
	whiteFG			= document.getElementById('whiteFG');
	bgExit 			= document.getElementById('background_exit_dc');
	cta 			= document.getElementById('cta');
	bgImg 			= document.getElementById('bgImg');
	copy01 			= document.getElementById('copy01');
	copy02 			= document.getElementById('copy02');
	copy03 			= document.getElementById('copy03');
	copy04 			= document.getElementById('copy04');
	copy05 			= document.getElementById('copy05');
	guy 			= document.getElementById('guy');
	guyHead			= document.getElementById('guyHead');
	guyBody			= document.getElementById('guyBody');
	girl1 			= document.getElementById('girl1');
	girl2 			= document.getElementById('girl2');
	boy 			= document.getElementById('boy');


	//add listeners
	addListeners();


	//hide all assets
	TweenLite.set(container, 	{ alpha:1});
	TweenLite.set(whiteFG, 	   	{ alpha:1});

	//TweenLite.set(logo, 		{ alpha:0});
	TweenLite.set(copy01, 		{ alpha:0});
	TweenLite.set(copy02, 		{ alpha:0});
	TweenLite.set(copy03, 		{ alpha:0});
	TweenLite.set(copy04, 		{ alpha:0});
	TweenLite.set(copy05, 		{ alpha:0});
	TweenLite.set(cta, 			{ alpha:0});

	TweenLite.set(guy, 			{ alpha:0});
	TweenLite.set(girl1, 		{ alpha:0});
	TweenLite.set(girl2, 		{ alpha:0});
	TweenLite.set(boy, 			{ alpha:0});



	//Show Ad
	container.style.display = "block";


  startAnimation();


  function startAnimation(){
		TweenLite.to(container,		0, { delay:0, overwrite:"none", onComplete:function(){
		   act1();
		}});

		TweenLite.to(container,		0, { delay:2, overwrite:"none", onComplete:function(){
		   act2();
		}});

		TweenLite.to(container,		0, { delay:5, overwrite:"none", onComplete:function(){
		   act3();
		}});

		TweenLite.to(container,		0, { delay:8, overwrite:"none", onComplete:function(){
			act4();
		}});

		TweenLite.to(container,		0, { delay:11, overwrite:"none", onComplete:function(){
			act5();
		}});
	}
}


//Acts
function act1(){
	console.log("Act 1");
	//set
	TweenLite.set(copy01, 				{ opacity:1 });
	TweenLite.set(guy, 					{ opacity:1, y:160, x:120, transformOrigin:"80% 100%", rotation:45 });

	//tween
	TweenLite.to(whiteFG, 		0.5,  	{ opacity:0,					ease:Power1.easeIn});
	TweenLite.to(guy, 			0.75,  	{ y:-10, x:5,	rotation:0,		ease:Power1.easeOut});
	//shrug shoulders
	TweenLite.to(guyBody, 		0.5,  	{ y:'-10px',	delay:0.75,		ease:Power1.easeInOut});
	TweenLite.to(guyBody, 		0.5,  	{ y:'0px',		delay:1.25,		ease:Power1.easeInOut});

}



function act2(){
	console.log("Act 2");
	//hide
	TweenLite.to(guy, 			0.75,  	{ x:-190, 		rotation:-45,	ease:Power1.easeOut,		transformOrigin:"40% 100%"});
	TweenLite.to(copy01, 		0.5,  	{ opacity:0,					ease:Power1.easeIn, 		delay:0.25});

	//set
	TweenLite.set(girl1, 				{ opacity:1, y:160, x:120, transformOrigin:"80% 100%", rotation:45 });

	//tween
	TweenLite.to(copy02, 		0.5,  	{ opacity:1,	delay:1.0,			ease:Power1.easeIn});
	TweenLite.to(girl1, 		0.75,  	{ x:0, y:0,	rotation:0,	delay:0,	ease:Power1.easeOut});

}



function act3(){
	console.log("Act 3");
	//hide
	TweenLite.to(copy02, 		0.5,  	{ opacity:0,		delay:0.25,		ease:Power1.easeIn});
	TweenLite.to(girl1, 		0.75,  	{ x:-190,	y:30,	rotation:-45,	ease:Power1.easeOut,	transformOrigin:"40% 100%"});

	//set
	TweenLite.set(girl2, 				{ opacity:1, y:160, x:120, transformOrigin:"80% 100%", rotation:45 });

	//tween
	TweenLite.to(copy03, 		0.5,  	{ opacity:1,			delay:1.0,		ease:Power1.easeIn});
	TweenLite.to(girl2, 		0.75,  	{ x:0, y:0,	rotation:0,	delay:0,		ease:Power1.easeOut});

}



function act4(){
	console.log("Act 4");
	//hide
	TweenLite.to(copy03, 		0.5,  	{ opacity:0,		delay:0.25,		ease:Power1.easeIn});
	TweenLite.to(girl2, 		0.75,  	{ x:-210,	y:30,	rotation:-45,	ease:Power1.easeOut,	transformOrigin:"40% 100%"});

	//set
	TweenLite.set(boy, 					{ opacity:1, y:160, x:120, transformOrigin:"80% 100%", rotation:45 });

	//tween
	TweenLite.to(copy04, 		0.5,  	{ opacity:1,			delay:0.75,	ease:Power1.easeIn });
	TweenLite.to(boy, 			0.75,  	{ x:0, y:0,	rotation:0,	delay:0,	ease:Power1.easeOut});
}



function act5(){
	console.log("Act 5");
	//hide
	TweenLite.to(copy04, 		0.5,  	{ opacity:0,		delay:0.0,		ease:Power1.easeIn });
	TweenLite.to(boy, 			0.75,  	{ x:-210,	y:30,	rotation:-45,	ease:Power1.easeOut,	transformOrigin:"40% 100%"});

	//set
	TweenLite.set(cta, 							{ opacity:0,	scaleX:1.33, scaleY:1.33, transformOrigin:'50% 50%',	ease:Power1.easeOut });

	//tween
	TweenLite.to(copy05, 		0.5,  	{ opacity:1,							delay:0.5,	ease:Power1.easeIn});
	TweenLite.to(cta, 			0.5,	{ opacity:1,	scaleX:1, scaleY:1, 	delay:0.75,	ease:Power1.easeOut });
}



//Add Event Listeners
addListeners = function() {
	bgExit.addEventListener('click', bgExitHandler, false);
};

bgExitHandler = function(e) {
	window.open(clickTag,'_blank');
};


// Add all images used here...
var images = [
	'images/australia.svg',
	'images/body.svg',
	'images/buildings.svg',
	'images/buildingsBG.svg',
	'images/chair.svg',
	'images/desk.svg',
	'images/dottedLine.svg',
	'images/head.svg',
	'images/laptop.svg',
	'images/plane.svg'
];


function preloadImages(urls, callback) {
	var length = urls.length, loaded = 0;
	for (var count = 0; count < length; count++) {

		var img = new Image();
		img.onload = function() {
			if (++loaded == length && callback) callback();
		}
		img.src = urls[count];
	}
}


function todofunc(){
	politeInit();//init animation
}


function initBanner(){
	preloadImages(images, todofunc);//init preload
}


