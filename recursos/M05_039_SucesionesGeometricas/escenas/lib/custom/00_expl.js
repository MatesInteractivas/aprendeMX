



function customInit(){

	if(typeof descartesJS === 'undefined'){
		setTimeout(customInit,200);
		return;
	}
	
	descartesJS.Parser.prototype.registerExternalValues = function() {
		console.log("Registrando : ");
		
		this.functions["fadeInInst"] = function() {
			var space = document.getElementById('INSTR_canvas');
			
			space.style.opacity = 0;
			var maxTime = 1;
			var frameRate = 14;
			var nFrames  = maxTime*frameRate;
			
			var updateA = function(){
				var op = parseFloat(space.style.opacity);
				op += 1/nFrames;
				space.style.opacity = op;
				if(op < 1){
					setTimeout(updateA,1000/frameRate);
				}
			}
			
			updateA();
			return 0; 
		};
	}


}
window.addEventListener('load', customInit, false)
