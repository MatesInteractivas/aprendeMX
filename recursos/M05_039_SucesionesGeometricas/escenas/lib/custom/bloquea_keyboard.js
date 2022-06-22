function bloqueaTeclado (event){
	var tmpInputs = document.getElementsByTagName('input');
	if(tmpInputs.length <= 0){
		setTimeout(bloqueaTeclado,200);
		return;
	}

	for(var i=0; i < tmpInputs.length; i++){
		var inputA = tmpInputs[i];
		inputA.readOnly=true;
		if(inputA.className.indexOf('DescartesSpinnerField') >= 0){
		   inputA.addEventListener('focus',function(e){
		      e.target.blur();
		   });
		}
	}
}


var egoMaskVisible = false;

function showMask(){
	var shadeCover = parent.document.getElementById('shade_cover'); 
	if(shadeCover.style.display=='block')
		return;

	shadeCover.style.display='block';
	egoMaskVisible = true
}

function hideMask(){
	console.log("Ocultando shade : "+egoMaskVisible);
	if(!egoMaskVisible)
		return;
	
	parent.document.getElementById('shade_cover').style.display='none';
	egoMaskVisible = false;
}



window.addEventListener('load', bloqueaTeclado, false);
