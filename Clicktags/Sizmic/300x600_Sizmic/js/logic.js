var tw = TweenLite;
var loop=0;
function EBinit(){
	document.getElementById("bannerCTA").addEventListener("click", handleClickthroughButtonClick);
}
function handleClickthroughButtonClick(){
    EB.clickthrough();
	console.log("click"); 
}


function frame1Anim(){
     tw.set(".bg-img",{alpha:0})
	
	 tw.to(".bg-img",	    1.5, {alpha:1, ease:Linear.easeNone, delay:.5})
	 tw.delayedCall(2.5,frame2Anim);
}

function frame2Anim(){
	 tw.set(".bottom_copy1", {scale:0.5})
	 tw.set(".c1", {scale:1.2})
	 tw.set(".leaf", {scale:1.2})
	 tw.set([".kidskull",".vitamins"], {scale:0.8})
     
	 
	 
	 tw.to(".bg-img",	    .5, {alpha:0, ease:Linear.easeNone, delay:0})
	 tw.to(".f2_bg",	    .5, {alpha:1, ease:Linear.easeNone, delay:0})
	 tw.to(".bottom_copy1",	    .65, {alpha:1, scale:1, ease:Quad.easeInOut,delay:0})
	 tw.to(".c1",	    .6, {alpha:1, scale:1, ease:Quad.easeInOut,delay:0})
	 
	 //tw.to([".kidskull",".leaf"],	    0.4, {alpha:1, ease:Quad.easeOut,force3D:true,delay:0.8})
	 tw.to(".kidskull",	    0.8, {alpha:1, scale:1, ease:Quad.easeInOut,delay:0.2})
	 
	 tw.to(".leaf",	    0.9, {alpha:1, scale:1, ease:Quad.easeInOut,delay:0.4})
	 
	 tw.to(".vitamins",	    1, {alpha:1, scale:1, ease:Quad.easeInOut,delay:0.5})
	 
	 tw.to(".vitamins",	    0.3, {scale:1.02, ease:Quad.easeInOut,delay:1.5})
	 tw.to(".vitamins",	    0.3, {alpha:1, scale:1, ease:Quad.easeInOut,delay:1.8})
	 
	 tw.to(".vitamins",	    0.3, {scale:1.02, ease:Quad.easeInOut,delay:2.1})
	 tw.to(".vitamins",	    0.3, {alpha:1, scale:1, ease:Quad.easeInOut,delay:2.3})
	 tw.delayedCall(3.5,frame3Anim);
}


function frame3Anim(){
	 tw.set(".c2", {scale:0.8})
	 tw.set(".can", {scale:1.2})
   	 
	 tw.to(".vitamins",	    0.6, {alpha:0, ease:Quad.easeInOut, delay:0})
	 tw.to(".leaf",	    0.5, {alpha:0, ease:Quad.easeInOut, delay:0.3})
	 tw.to([".kidskull"],	    0.65, {alpha:0, ease:Quad.easeInOut, delay:0.6})
	 tw.to([".c1"],	    0.5, {alpha:0, ease:Quad.easeInOut, delay:0.8})
	 
	 tw.to(".c2",	    0.7, {alpha:1, scale:1, ease:Quad.easeInOut,delay:1.3})
	 tw.to(".can",	    0.7, {alpha:1, scale:1, ease:Quad.easeInOut,delay:1.5})
   	 tw.delayedCall(3.7,frame4Anim);
}

function frame4Anim(){
	 tw.set(".simimama", {scale:0.6})
	 tw.set(".c3", {scale:0.8})
	 tw.set(".star", {scale:1.3})
	 tw.set(".button", {scale:1.2})
	 tw.set(".bottom_copy2", {scale:1.2})
	 
	 tw.to(".c2",	    0.5, {alpha:0, ease:Quad.easeInOut, delay:0})
	 tw.to(".can",	    0.5, {alpha:0, ease:Quad.easeInOut, delay:0.2})
	 tw.to(".bottom_copy1",	    0.5, {alpha:0, ease:Quad.easeInOut, delay:0.4})
	 
	 tw.to(".simimama",	    0.5, {alpha:1, scale:1, ease:Quad.easeInOut, delay:0.9})
	 tw.to(".star",	    0.5, {alpha:1, scale:1, ease:Quad.easeInOut, delay:1.3})
	 
	 tw.to(".c3",	    0.5, {alpha:1, scale:1, ease:Quad.easeInOut, delay:1.5})
	 tw.to(".button",	    0.5, {alpha:1, scale:1, ease:Quad.easeInOut, delay:1.7})
	 tw.to(".bottom_copy2",	    0.5, {alpha:1, scale:1, ease:Quad.easeInOut, delay:1.9})
}


// images to preload
var images = [
	'images/bg.jpg',
	'images/bluebg.jpg',
	'images/bottom1.png',
	'images/bottom2.png',
	'images/c1.png',
	'images/c2.png',
	'images/c3.png',
	'images/can.png',
	'images/kidskull.png',
	'images/leaf.png',
	'images/simimama.png',
	'images/star.png',
	'images/vitamins.png',
	'images/button.png'
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
	//init animation
	console.log('***run todo');
	frame1Anim();
	EBinit();
}

function initBanner(){
	//init preload
	console.log('***init');
	preloadImages(images, todofunc);
}
