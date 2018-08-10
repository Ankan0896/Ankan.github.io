var loop=0;

function addevents(){
	document.getElementById("bannerCTA").addEventListener("click", trackClick);	
}

function trackClick(){
	window.open(clickTag,'_blank'); 
}
var tim="0";
var t=0;
function timecontrol(){
	tim="1"
	console.log("TotalCountofFlash=",t);
}
function SetAssets(){
	TweenLite.set([bg,logo,line],{opacity:1})
	TweenLite.set([copy1a,copy1b],{y:90,opacity:1});
	TweenLite.set(product,{y:190,opacity:1});
	TweenLite.set([cta,offer],{scale:0,opacity:1});
	
	TweenLite.delayedCall(0,frame1Animation);	
}

function frame1Animation(){
	//copy1 animation
	TweenLite.to(copy1a,0.5,{y:0, ease:Quad.easeOut,delay:0});
	TweenLite.to(copy1b,0.5,{y:0, ease:Quad.easeOut,delay:0.2});
	
	//product and cta animation
	TweenLite.to(product,0.7,{y:0,ease:Power2.easeOut,delay:1.1});
	TweenLite.to(bg2,0.5,{opacity:1, ease:Quad.easeOut,delay:1.8});
	

	//line animation
	TweenLite.to(mask,0.4,{height:72,y:-36 ,ease:Power0.easeOut, delay:0.7});
    TweenLite.to(line,0.4,{y:36, ease:Power0.easeOut, delay:0.7});
	//offer animation
	
	TweenLite.to(offer,0.3,{scale:1, opacity:1, ease:Back.easeOut, delay:1.8});
	TweenLite.to(cta,0.4,{scale:1,ease:Back.easeOut,delay:2.5});
	TweenLite.delayedCall(2,shakeImg);
	
	TweenLite.delayedCall(3,productglow);
	TweenLite.delayedCall(29,timecontrol);
	}
	
	
	function shakeImg(){
		TweenMax.fromTo(offer, 0.3, {x:-1}, {x:1, ease:RoughEase.ease.config({strength:8, points:50, template:Linear.easeNone, randomize:false}) , clearProps:"x"})
		}
	
	//glow animation function
	function productglow(){
		if(tim=="0")
		{ 
		TweenLite.set(product_shadow,{opacity:1,delay:0})
		TweenLite.to(product_shadow,2,{x:300, ease:Quad.easeInOut,delay:0});
		TweenLite.set(product_shadow,{x:0,delay:2.5})
		TweenLite.delayedCall(2.6,productglow);
		t++;
		}
	}
	
// images to preload
var images = [
	"images/bg.png",
	"images/bg2.png",
	"images/logo.png",
	"images/copy1a.png",
	"images/copy1b.png",
	"images/offer.png",
	"images/product.png",
	"images/product_shadow.png",
	"images/cta.png"
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
	SetAssets();
	addevents()
}

function initBanner(){
	console.log('***init');
	preloadImages(images, todofunc);
}
