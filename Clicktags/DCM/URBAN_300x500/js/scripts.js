
function addevents(){
    document.getElementById("banner300x500").addEventListener("click", trackClick); 
}

function trackClick(){
    window.open(clickTag,'_blank');
}
var loop=1;
var resetloop=1;
var animationloop=0;
function frame1Animation(){
	// model1 frame
	TweenLite.set([logo,cta],{opacity:1});
	TweenLite.delayedCall(0.1,copyAnimation);
	/*.....image animation.....*/
	//First frame img
	TweenLite.set(img2,{opacity:1, scale:0.6, x:-114, y:49});
	TweenLite.set(img1,{opacity:1, scale:1, x:0, y:0});
	TweenLite.set(img3,{opacity:1, scale:0.6, x:114, y:49});
	TweenLite.set(img4,{opacity:1,scale:0.6,x:-210,y:49});
	TweenLite.set(img5,{opacity:1,scale:0.6,x:-210,y:49});
	
	//Second frame img
	TweenLite.to(img2,0.5, {scale:1, x:0, y:0, zIndex:10, delay:2});
	TweenLite.to(img3,0.5, {x:206, delay:2});
	TweenLite.to(img1,0.5, {scale:0.6, x:110, y:49, delay:2});
	TweenLite.to(img4,0.5, {x:-105, delay:2});
	
	
	//3rd frame img
	TweenLite.to(img4,0.5, {scale:1, x:0, y:0, zIndex:10, delay:4});
	TweenLite.to(img2,0.5, {scale:0.6, x:118, y:49, delay:4});
	TweenLite.to(img1,0.5, {x:219, delay:4});
	TweenLite.to(img5,0.5, {x:-112, delay:4});
	
	TweenLite.set(img3,{scale:0.8, x:-205, y:49,delay:4});
	
	//4rth frame img
	TweenLite.to(img5,0.5, {scale:1, x:0, y:0, zIndex:10, delay:6});
	TweenLite.to(img4,0.5, {scale:0.6, x:116, y:52, delay:6});
	TweenLite.to(img3,0.5, {x:-120, y:49,delay:6});
	TweenLite.to(img2,0.5, {x:206,delay:6});
	
	TweenLite.set(img1,{scale:0.6, x:-500, y:49,delay:6});
	
	//5th frame img
	TweenLite.to(img3,0.5, {scale:1, x:0, y:0, zIndex:10, delay:8});
	TweenLite.to(img5,0.5, {scale:0.6, x:110, y:49, delay:8});
	TweenLite.to(img1,0.5, {x:-103,delay:8});
	TweenLite.to(img4,0.5, {x:246,delay:8});
	
	TweenLite.delayedCall(10,animation_reset)
	
}
function copyAnimation(){
	/*.....copy1 animation....*/
	TweenLite.set([".boxmask1",".boxmask2"],{width:0,opacity:1})
	
	TweenLite.to(".boxmask1",0.2,{width:125,ease: Power2.easeIn,delay:0})
	TweenLite.to(shimmer1,0.2,{opacity:1,x:86,delay:0.1})
	
	TweenLite.set(shimmer1,{opacity:0,delay:0.25})
	TweenLite.set(copy1,{opacity:1,ease:Quad.easeOut,delay:0.3})
	
	/*.....copy1a animation....*/
	TweenLite.to(".boxmask2",0.2,{width:125,ease: Power2.easeIn,delay:0.3})
	TweenLite.to(shimmer2,0.2,{opacity:1,x:67,delay:0.4})
	
	TweenLite.set(shimmer2,{opacity:0,delay:0.55})
	TweenLite.set(copy1a,{opacity:1,ease:Quad.easeOut,delay:0.6})
	
	if(resetloop<=4)
	{resetloop++;
	TweenLite.delayedCall(1.5,resetcopy);
	}
}
function resetcopy(){
	TweenLite.to([copy1,copy1a,".boxmask1",".boxmask2"],0.5,{opacity:0,ease:Quad.easeIn,delay:0})
	if(loop<=4)
	{loop++;
	TweenLite.delayedCall(0.5,copyAnimation);
	}
}
//animation reset
 function animation_reset(){
	 loop=1;
	 resetloop=1;
 if(animationloop<1)
 {
	animationloop++;
 	TweenLite.to([copy1,copy1a,".boxmask1",".boxmask2",img1,img3,img5,logo,cta],0.5,{opacity:0,ease:Quad.easeIn,delay:0})
 	TweenLite.delayedCall(1,frame1Animation);
 }

 }

// images to preload
var images = [
	'images/logo.png',
	'images/cta.png',
	'images/img1.png',
	'images/img2.png',
	'images/img3.png',
	'images/img4.png',
	'images/img5.png',
	'images/shimmer.png',
	'images/copy1.png',
	'images/copy1a.png'
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
	TweenLite.delayedCall(0.5, frame1Animation);
}

window.onload = function() {
	//init preload
	console.log('***init');
	preloadImages(images, todofunc);
	addevents();
};



