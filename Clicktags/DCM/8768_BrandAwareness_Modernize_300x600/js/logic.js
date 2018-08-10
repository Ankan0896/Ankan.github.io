var loop=0;
var count =1;

function addevents(){
	document.getElementById("bannerCTA").addEventListener("click", trackClick);
	document.getElementById("cta").addEventListener("click", trackClick);
}

function trackClick(){
	window.open(clickTag,'_blank'); 
}

function frame1Animation(){
    TweenLite.set([copy1,logo,bg1,bg2],{opacity:1});
	TweenLite.set([sun,drone,left_wing,right_wing,drone_anim],{opacity:1, delay:0});
	
	TweenLite.to(left_wing,3.2,{rotationY:9000, ease:Linear.easeNone, force3D:true, rotationZ:0.0003, delay:0});
	TweenLite.to(right_wing,3.2,{rotationY:9000, ease:Linear.easeNone, force3D:true, rotationZ:0.0003, delay:0});
	TweenLite.delayedCall(3,frame2Animation)
	TweenLite.delayedCall(0,cloudfloat)
	TweenLite.delayedCall(0,dron_anim)
	
}
function frame2Animation(){
    TweenLite.to([copy1,drone_anim,left_wing,right_wing],0.5,{opacity:0, ease:Quad.easeOut, delay:0});
	TweenLite.to([sun,bg1],0.5,{opacity:0, ease:Quad.easeOut, delay:0});
    
    
	TweenLite.to(copy2,0.5,{opacity:1, ease:Quad.easeOut, delay:.5});
	
	TweenLite.to([cloudB1],7,{x:-37, ease:Sine.easeOut, force3D:true, rotationZ:0.0003, delay:2});
	TweenLite.to([cloudB2],7,{x:-37, ease:Sine.easeOut, force3D:true, rotationZ:0.0003, delay:2});
	TweenLite.to([cloudB3],7,{x:-37, ease:Sine.easeOut, force3D:true, rotationZ:0.0003, delay:2});
	TweenLite.to([cloudB4],7,{x:-1, ease:Sine.easeOut, force3D:true, rotationZ:0.0003, delay:2});
	TweenLite.to([cloudB5],7,{x:-1, ease:Sine.easeOut, force3D:true, rotationZ:0.0003, delay:2});
	TweenLite.to([cloudB6],7,{x:-1, ease:Sine.easeOut, force3D:true, rotationZ:0.0003, delay:2});
	TweenLite.delayedCall(4,frame3Animation)
}
function frame3Animation(){
	TweenLite.to([copy1,bg2],0.5,{opacity:0, ease:Quad.easeOut, delay:0});
	TweenLite.to(logo,0.5,{opacity:0, ease:Quad.easeOut, delay:0});
	TweenLite.to(logo3,0.5,{opacity:1, ease:Quad.easeIn, delay:0});
	TweenLite.to(logo2,0.5,{opacity:1,ease:Quad.easeIn, delay:0.5});
	TweenLite.to(copy3,0.5,{opacity:1, ease:Quad.easeIn, delay:1});
	TweenLite.to(ctaimg,0.5,{opacity:1,ease:Quad.easeIn, delay:1.5});
	
	TweenLite.delayedCall(7,animation_reset)
}

function cloudfloat(){
	TweenLite.set([cloud1,cloud2,cloud3],{opacity:1, x:-45, delay:0});
	TweenLite.set([cloud4,cloud5,cloud6],{opacity:1, x:154, y:161, delay:0});
	TweenLite.set([cloud7,cloud8,cloud9],{opacity:1, x:300, y:400, delay:0});
	
	TweenLite.set([cloudB1,cloudB5],{opacity:1, x:300, delay:0});
	TweenLite.set([cloudB2,cloudB4],{opacity:1, x:300, delay:0});
	TweenLite.set([cloudB3,cloudB6],{opacity:1, x:300, delay:0});
	
	TweenLite.to([cloud1],8,{x:-250, ease:Linear.easeNone, force3D:true, rotationZ:0.0003, delay:0});
	TweenLite.to([cloud2],8,{x:-220, ease:Linear.easeNone, force3D:true, rotationZ:0.0003, delay:0});
	TweenLite.to([cloud3],8,{x:-150, ease:Linear.easeNone, force3D:true, rotationZ:0.0003, delay:0});
	TweenLite.to([cloud4],8,{x:-150, ease:Linear.easeNone, force3D:true, rotationZ:0.0003, delay:0});
	TweenLite.to([cloud5],8,{x:-120, ease:Linear.easeNone, force3D:true, rotationZ:0.0003, delay:0});
	TweenLite.to([cloud6],8,{x:-80, ease:Linear.easeNone, force3D:true, rotationZ:0.0003, delay:0});
	
	TweenLite.to(cloud7,6,{x:-50, ease:Linear.easeNone, force3D:true, rotationZ:0.0003, delay:4});
	TweenLite.to(cloud8,6,{x:-50, ease:Linear.easeNone, force3D:true, rotationZ:0.0003, delay:4});
	TweenLite.to(cloud9,6,{x:-50, ease:Linear.easeNone, force3D:true, rotationZ:0.0003, delay:4});
}

// dron movemenet animation
function dron_anim(){
	if(count<3){
		TweenLite.to("#drone_anim",0.4,{y:2, ease:Quad.easeOut, force3D:true, rotationZ:0.0003, delay:0});
		TweenLite.to("#drone_anim",0.4,{y:0, ease:Quad.easeIn,  force3D:true, rotationZ:0.0003, delay:0.4});
		TweenLite.to("#drone_anim",0.4,{y:-2,ease:Quad.easeOut,force3D:true, rotationZ:0.0003, delay:0.8});
		TweenLite.to("#drone_anim",0.4,{y:0, ease:Quad.easeIn,  force3D:true, rotationZ:0.0003, delay:1.2});
		TweenLite.delayedCall(1.6,dron_anim)
	}
}
function animation_reset(){
if(loop<1){
	loop++;
    TweenLite.to([drone_anim],0.5,{y:0,x:0,opacity:0, ease:Quad.easeOut, delay:0});
	TweenLite.to([left_wing,right_wing],0,{rotationY:0, delay:0});
	
	TweenLite.to([logo,logo2,logo3,copy3,ctaimg,cloudB1,cloudB2,cloudB3,cloudB4,cloudB5,cloudB6,copy2],0.5,{opacity:0})
	TweenLite.delayedCall(0.5,frame1Animation)
	}
}

	
// images to preload
var images = [
	'images/copy_1.png',
	'images/copy_2.png',
	'images/copy_3.png',
	'images/bg1.png',
	'images/bg2.png',
	'images/cta.png',
	'images/logo.png',
	'images/logo2.png',
    'images/logo3.png',
	'images/cloud1.png',
	'images/cloud2.png',
	'images/cloud3.png',
	'images/cloudB1.png',
	'images/cloudB2.png',
	'images/cloudB3.png',
	'images/cloudB4.png',
	'images/cloudB5.png',
	'images/cloudB6.png',
	'images/wheel_1.png',
	'images/wheel_2.png',
    'images/wheel_3.png',
	'images/sun.png'
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
	console.log('***run todo');
	frame1Animation();
	addevents()
}

function initBanner(){
	console.log('***init');
	preloadImages(images, todofunc);
}
