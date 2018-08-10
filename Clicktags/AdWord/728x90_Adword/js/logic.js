function EBinit(){
	document.getElementById("bannerCTA").addEventListener("click", handleClickthroughButtonClick);
	document.getElementById("bannerCTA").addEventListener("mouseover", ctahover);
}

function handleClickthroughButtonClick(){
	EB.clickthrough(); 
}

function frame1Animation(){
	TweenLite.set([img1,copy_shimmer, greenBG,logo],{opacity:1});
	TweenLite.set([img1,img2],{x:-100});
    TweenLite.set([f1_copy],{x:-30,opacity:0});
    TweenLite.set([logo],{x:162,opacity:0});
    TweenLite.set([ellips],{x:-400,opacity:1});
    TweenLite.set([copy2,copy3a,copy3b],{x:-310,opacity:1});
    
    
    TweenLite.to(logo,0.5,{x:0, opacity:1, ease: Back.easeOut.config(1), delay:0});
	TweenLite.to(f1_copy,0.5,{x:0, opacity:1, ease: Back.easeOut.config(1), delay:0.5});
    TweenLite.to(copy_shimmer,1.5,{x:720, opacity:1, ease:Quad.easeIn, delay:0.7});
    TweenLite.to(f1_copy,0.5,{opacity:0, ease:Quad.easeIn, delay:2.5});
	TweenLite.to(greenBG,0.5,{x:728,opacity:1, ease:Quad.easeInOut, delay:2.7});
	TweenLite.to([img1,img2],7,{x:0, rotation:0.003, rotationZ:0.003, ease:Linear.easeNone, delay:2.5});
    TweenLite.to(ellips,0.5,{x:0,opacity:1, ease: Back.easeOut.config(1), delay:3});
    TweenLite.to(copy2,0.65,{x:0,opacity:1, ease:Quad.easeOut, delay:3});
	TweenLite.delayedCall(6,frame2Animation);
}
	
function frame2Animation(){
	TweenLite.to(copy2,0.65,{y:-200, ease:Quad.easeOut, delay:0});
	TweenLite.set(bubble_img,{opacity:1,y:728, scaleY:0});
	TweenLite.set(bubble_copy,{opacity:1, x:180});
	
	TweenLite.to(img1,0.5,{opacity:0, delay:0});
	TweenLite.to(img2,0.5,{opacity:1, delay:0});
	TweenLite.to([copy3a,copy3b],0.65,{opacity:1, x:0, ease:Quad.easeOut, delay:0.3});
	
	TweenLite.to(bubble_copy,0.5,{x:0, ease:Quad.easeOut, delay:1});
	TweenLite.to(bubble_img,0.4,{scaleY:1,y:0, ease:Back.easeOut.config(1.3), delay:1.15});
	TweenLite.delayedCall(4,frame3Animation);
}

function frame3Animation(){
	//TweenLite.set(greenBG,{x:0 , alpha:0});
	TweenLite.set(copy4,{y:-150, alpha:1});
	TweenLite.set(cta,{y: 150, alpha:1});
	TweenLite.set(shimmerIMG,{opacity:1, left:-63});
	TweenLite.to(ellips,0.65,{x:0, y:0, scale:2, ease:Quad.easeInOut, delay:0});
	TweenLite.to(copy3a,0.65,{opacity:1, y:-90, ease:Quad.easeIn, delay:0});
	TweenLite.to(copy3b,0.65,{opacity:1, y:90, ease:Quad.easeIn, delay:0});
	TweenLite.to([img1,img2],0.65,{opacity:0, ease:Quad.easeOut, delay:0});
	TweenLite.to(bubble_copy,0.65,{x:200, ease:Quad.easeIn, delay:0});
	TweenLite.to(bubble_img,0.65,{x:10, y:150, ease:Quad.easeIn, delay:0.1});
	TweenLite.to(ellips,0.2,{alpha:0, ease:Quad.easeIn, delay:0.65});
	TweenLite.to(copy4,0.65,{y:0, ease:Quad.easeOut, delay:0.5});
	TweenLite.to(cta,0.65,{y:0, ease:Quad.easeOut, delay:0.5});
	TweenLite.to(shimmerIMG,1.5,{left:187, ease:Quad.easeOut, delay:1.5});
}

//cta hover
function ctahover(){
	TweenLite.set(shimmerIMG,{left:-50, delay:0});
	TweenLite.to(shimmerIMG,1.5,{left:187, ease:Quad.easeOut, delay:0});
}
	
	
// images to preload
var images = [
	'images/bubble.png',
	'images/img1.jpg',
	'images/img2.jpg',
	'images/logo.png',
	'images/shimmer.png',
    'images/copy_shimmer.png'
    
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
	frame1Animation();
	EBinit()
}

function initBanner(){
	//init preload
	console.log('***init');
	preloadImages(images, todofunc); 
}
