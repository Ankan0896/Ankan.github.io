document.getElementById("nav_pro").addEventListener("click",  pro_cont_show);
document.getElementById("nav_edu").addEventListener("click",  edu_cont_show);
document.getElementById("nav_exp").addEventListener("click",  exp_cont_show);
document.getElementById("nav_skil").addEventListener("click",  skill_cont_show);







// ############################## edu_cont ######################################
 
function edu_cont_show() {
 	edu_section.style.opacity = "1";
 	nav_edu.style.backgroundColor = "rgba(23,231,167,1)";
 	 document.getElementById("edu_menu").style.color = "#fff";
 	  document.getElementById("edu_icon").style.color = "rgba(255,255,255,1)";
 	 edu_section.style.display = "block";

 	pro_cont_hide();
 	exp_cont_hide();
 	skill_cont_hide();
 }
function edu_cont_hide() {

	 edu_section.style.opacity = "0";
 	 edu_section.style.display = "none";
 	 nav_edu.style.backgroundColor = "rgba(23,231,167,0)";
 	  document.getElementById("edu_menu").style.color = "rgba(255,255,255,0.75)";
	document.getElementById("edu_icon").style.color = "rgba(255,255,255,0.75)";

}



// ############################## pro_cont ######################################

function pro_cont_show(){
 	pro_section.style.opacity = "1";
 	nav_pro.style.backgroundColor = "rgba(23,231,167,1)";
 	 document.getElementById("pro_menu").style.color ="rgba(255,255,255,1)";
 	  document.getElementById("pro").style.color = "rgba(255,255,255,1)";
 	 pro_section.style.display = "block";
	// document.getElementById("nav_pro").style.borderLeft = "1px solid rgba(2,1,14,0.85)";
	//  document.getElementById("nav_pro").style.borderright = "1px solid rgba(2,1,14,0.85)";


 edu_cont_hide();
 exp_cont_hide();
 skill_cont_hide();
 }

function pro_cont_hide() {
	 pro_section.style.opacity = "0";
 	 pro_section.style.display = "none";
 	 document.getElementById("pro_menu").style.color ="rgba(255,255,255,0.75)";
 	  document.getElementById("pro").style.color = "rgba(255,255,255,0.75)";
 	 nav_pro.style.backgroundColor = "rgba(23,231,167,0)";
 	//  document.getElementById("nav_pro").style.borderLeft = "1px solid rgba(2,1,14,0)";
	 // document.getElementById("nav_pro").style.borderright = "1px solid rgba(2,1,14,0)";

}


// ############################## exp_cont ######################################

function exp_cont_show() {
 	exp_section.style.opacity = "1";
 	nav_exp.style.backgroundColor = "rgba(23,231,167,1)";
 	 document.getElementById("exp_menu").style.color = "#fff";
 	 document.getElementById("exp_icon").style.color = "#fff";
 	 exp_section.style.display = "block";

 	 edu_cont_hide();
 	 pro_cont_hide();
 	 skill_cont_hide();
 }

 function exp_cont_hide() {
	 exp_section.style.opacity = "0";
 	 exp_section.style.display = "none";
 	 nav_exp.style.backgroundColor = "rgba(23,231,167,0)";
 	 document.getElementById("exp_menu").style.color = "rgba(255,255,255,0.75)";
 	  document.getElementById("exp_icon").style.color = "rgba(255,255,255,0.75)";

}

function skill_cont_show() {
 	skill_section.style.opacity = "1";
 	nav_skil.style.backgroundColor = "rgba(23,231,167,1)";
 	 document.getElementById("skil_menu").style.color = "#fff";
 	 document.getElementById("skil_icon").style.color = "rgba(255,255,255,1)";
 	 skill_section.style.display = "block";


 	 edu_cont_hide();
 	 pro_cont_hide();
 	 exp_cont_hide();
 }

 function skill_cont_hide() {
	 skill_section.style.opacity = "0";
 	 skill_section.style.display = "none";
 	 nav_skil.style.backgroundColor = "rgba(23,231,167,0)";
 	 document.getElementById("skil_menu").style.color = "rgba(255,255,255,0.75)";
 	 document.getElementById("skil_icon").style.color = "rgba(255,255,255,0.75)";

}






function init(){
	console.log("load_init");
	setTimeout(pro_cont_show,200);
	//pro_cont_show();
}






