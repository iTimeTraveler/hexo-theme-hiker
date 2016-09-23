
var night_model=false;		//夜间阅读模式
function setBackground(){
	var header = document.getElementById('allheader');
	if(night_model == false){
		night_model=true;
    	header.style.background = '#161718';
    	header.style.borderColor = '#1f2021';
    	document.getElementById('body').style.background = '#1d1e1f';
		document.getElementById('h2').style.color='#9da5ae';
		var x = document.getElementsByTagName('p');
		for (var i=0;i<x.length;i++){ 
		  	x[i].style.color='#83868a';
		}
	}else{
		night_model=false;
    	header.style.background = '#fff';
    	header.style.borderColor = '#e0e0e0';
    	document.getElementById('body').style.background = '#fafafa';
		document.getElementById('h2').style.color='#000';
		var x = document.getElementsByTagName('p');
		for (var i=0;i<x.length;i++){ 
		  	x[i].style.color='#000';
		}
	}
	
}

function setFontSize() {		//正文字号大小
	var x = document.getElementsByTagName('p');
	for (var i=0;i<x.length;i++){ 
	  	x[i].style.fontSize='20px';
	}
}