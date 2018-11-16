var slideItem = 0;

window.onload = function(){
	var slideWidth = document.getElementById('slideShow').offsetWidth;
	var slideArea = document.getElementsByClassName('slideArea');
	var slide = document.getElementsByClassName('slide');
	var cont = 0;

	for(i=0; i<slide.length; i++){
		slide[i].style.width = slideWidth + 'px';
		cont++;
	}

	for(i in slideArea){
		slideArea[0].style.width = slideWidth * cont + 'px';
	}
}

function PassarSlide(pos){
	var slideWidth = document.getElementById('slideShow').offsetWidth;
	var slideArea = document.getElementsByClassName('slideArea');
	var slide = document.getElementsByClassName('slide');
	
	if(pos == 0 && slideItem > 0){
		slideItem--;
		slideArea[0].style.marginLeft = '-' + (slideWidth * slideItem) + 'px';
	}else if(pos == 1 && slideItem < slide.length - 1){
		slideItem++;
		slideArea[0].style.marginLeft = '-' + (slideWidth * slideItem) + 'px';
	}




}