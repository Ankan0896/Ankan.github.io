window.onload = function() {
    init();
};

function init() {
	frame1Animation();
}
var i=0;

function frame1Animation(){
	TweenLite.set([copy_1b,copy_1c,copy_3,copy_2,legal],{alpha:0,delay:0});
	TweenLite.set([left_curt,right_curt],{alpha:1,x:0,delay:0});
	TweenLite.set(bg,{alpha:1,delay:0});
	TweenLite.set(copy_1a,{alpha:1,delay:0});
	TweenLite.to(copy_1b,0.5,{alpha:1,ease:Quad.easeIn, delay:0});
	TweenLite.to(copy_1c,0.5,{alpha:1, ease:Quad.easeIn, delay:1.0});
	TweenLite.to(logo,0.5,{alpha:1, ease:Quad.easeIn, delay:1.0});	

    TweenLite.delayedCall(4.5,frame2Animation)
}


function frame2Animation(){
	
	TweenLite.to([copy_1a,copy_1b,copy_1c,logo],0.3,{alpha:0, ease:Quad.easeOut, delay:0});	
	TweenLite.to(left_curt,0.65,{x:-99,ease:Quad.easeOut,rotationZ:0.003, delay:0.3});
	TweenLite.to(right_curt,0.65,{x:114,ease:Quad.easeOut,rotationZ:0.003, delay:0.3});
	TweenLite.set(copy_2,{alpha:1,ease:Quad.easeIn,delay:0});
	
    TweenLite.delayedCall(4,frame4Animation)
}

function frame4Animation(){
	
	TweenLite.to(copy_2,0.3,{alpha:0,ease:Quad.easeOut, delay:0});
	TweenLite.to(copy_3,0.5,{alpha:1, ease:Quad.easeIn, delay:0.3});
	TweenLite.to(legal,0.8,{alpha:1, ease:Quad.easeIn, delay:0.8});

    if(i==0)
		{
		 i=1;
	TweenLite.delayedCall(4.5,loopbanner);
		}
		
}
function loopbanner(){
	
		 TweenLite.to([copy_2,copy_3,legal,left_curt,right_curt,bg],0.5,{alpha:0,rotationZ:0.003, ease:Cubic.easeInOut, delay:0});
		 TweenLite.delayedCall(0.5,frame1Animation)	
	
}
