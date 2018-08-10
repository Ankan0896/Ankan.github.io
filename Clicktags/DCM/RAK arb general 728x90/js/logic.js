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
	TweenLite.set([bg,bg2,logo_copy,f1_copy_1],{opacity:0})
	TweenLite.set([b_pharma_box,bsn_box,mbbs_box,bds_box],{opacity:0,top:14,left:305})

	TweenLite.set([f3_box_left,f3_box_right,f4_copy_1,f4_copy_2],{opacity:0})
	TweenLite.set(f3_copy_1,{opacity:0})
	TweenLite.set(cta,{opacity:0})
	
	TweenLite.set(logo,{opacity:0,top:18,right:338})
	
	//TweenLite.set([cta,offer],{scale:0,opacity:1});
	
	TweenLite.delayedCall(0,frame1Animation);	
}

function frame1Animation(){
	//F1 animation
	TweenLite.to(logo,0.5,{alpha:1, ease:Quad.easeOut,delay:0});
	TweenLite.to(logo,0.5,{top:15,right:11, ease:Quad.easeOut,delay:0.5});
	TweenLite.to(logo_copy,0.5,{alpha:1, ease:Quad.easeOut,delay:1});
	TweenLite.to(bg,0.3,{alpha:1, ease:Quad.easeOut,delay:1.5});
	TweenLite.to(f1_copy_1,0.3,{alpha:1, ease:Quad.easeOut,delay:2});
	
	TweenLite.delayedCall(4.5,frame2Animation)
}
function frame2Animation(){
	TweenLite.to([bg,f1_copy_1,logo_copy],0.5,{opacity:0,delay:0});
	TweenLite.to(bg2,0.3,{alpha:1, ease:Quad.easeOut,delay:.5});
	TweenLite.to(b_pharma_box,0.5,{opacity:1,top:2,left:498,delay:0.5});
	TweenLite.to(bsn_box,0.5,{opacity:1,top:-14,left:335,delay:0.7});
	TweenLite.to(mbbs_box,0.5,{opacity:1,top:-9,left:50,delay:0.9});
	TweenLite.to(bds_box,0.5,{opacity:1,top:2,left:216,delay:1.1});

    TweenLite.delayedCall(3.7,frame3Animation)
	}
	
function frame3Animation(){
	TweenLite.to([b_pharma_box,bsn_box,mbbs_box,bds_box,bg2],0.5,{opacity:0,delay:0});
	TweenLite.to(red_box,0.3,{x:2,alpha:1, ease:Quad.easeOut,delay:0.3});
	TweenLite.to(f3_box_right,0.5,{alpha:1, ease:Quad.easeOut,delay:0.5});
	TweenLite.to(f3_box_left,0.5,{alpha:1, ease:Quad.easeOut,delay:1});
	TweenLite.to(f3_copy_1,0.5,{alpha:1, ease:Quad.easeOut,delay:1.5});
	
    TweenLite.delayedCall(3.7,frame4Animation)
	}
	
function frame4Animation(){
	TweenLite.to([f3_box_left,f3_box_right,f3_copy_1],0.5,{opacity:0,delay:0});
	TweenLite.to(logo_copy,0.5,{alpha:1, ease:Quad.easeOut,delay:.5});
	TweenLite.to(red_box,0.3,{x:229, ease:Quad.easeOut,delay:0.3});
	TweenLite.to(f4_copy_2,0.5,{alpha:1, ease:Quad.easeOut,delay:.5});
	TweenLite.to(f4_copy_1,0.5,{alpha:1, ease:Quad.easeOut,delay:1});
	TweenLite.to(cta,0.5,{alpha:1, ease:Quad.easeOut,delay:1.5});
	
	}


// images to preload
var images = [
	"images/bg.png",
	"images/bg2.png",
	"images/cta.png",
	"images/logo_copy.png",
	"images/logo.png",
	"images/b_pharma_box.png",
	"images/bds_box.png",
	"images/bsn_box.png",
	"images/f1_copy_1.png",
	"images/f3_box_left.png",
	"images/f3_box_right.png",
	"images/f3_copy_1.png",
	"images/f4_copy_1.png",
	"images/f4_copy_2.png",
	"images/mbbs_box.png"
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
