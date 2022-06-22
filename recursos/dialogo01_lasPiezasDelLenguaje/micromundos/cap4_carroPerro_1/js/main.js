
var mwOptions = {

};

var FEEDBACK = {
	
	error1: 'Esta palabra pertenece al texto sobre el coche, ¡no la debes eliminar!',
	error2: 'Te doy una pista: todo los intrusos hablan sobre el perro. ¡Busca esas partes del texto!',
	error3: '¡Acuérdate!, todos los intrusos hablan de los perros.',
	error4: 'Ay, ya no sé qué más decirte... Sigue intentándolo.',
	incomplete: 'Aún queda+n [n] intruso+s por eliminar. Sigue buscando.'
	
};


var mwOptions = {
	feedback : FEEDBACK
};

function MWMain(options){
	this.settings = $.extend({}, options);
	this.mainTextContainer;
	this.wordWrapper = null;
	this.animating = false;
	this.mwId = 'cap4_carroPerro_1';
	this.nextQKey = 'sinErrores';
	this.nextQs = {
		sinErrores: 'cap4_preg1_SinErrores',
		conErrores: 'cap4_preg1_ConErrores'
	}
	this.errors = 0;
}

MWMain.prototype = {
		init:function(){
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
			this.feedbackWindow = $('.js-vntn-feedback');
			
			var _this = this;
		    
		    $('.js-btn-instr').on('click', function(){
				$('.js-instrucciones').removeClass('e-oculto');
				_this.overlay.removeClass('e-oculto');
			});
		    		    
		    // init windows
		    var vntns = $('.vntn').addClass('e-oculto');
		    var vtn;
		    for(var i=0; i<vntns.length; i++){
		    	 vtn = $(vntns.get(i));
		    	
		    	var closeBtn = $('<button class="vntn--btn-cerrar">X</button>');
		    	closeBtn.on('click', function(){
		    		var vtn = $(this).closest('.vntn');
		    		vtn.addClass('e-oculto');
		    		_this.overlay.addClass('e-oculto');
		    		
		    	});
		    	vtn.append(closeBtn);
		    }
		    
		    
		    //Wrap words
		    var origText = $('.js-orig-text');
		    var finalText = $('<div class="js-final-text final-text"></div>');
		    this.wordWrapper = new WordWrapper(origText,finalText);
		    this.wordWrapper.init();
		    this.allWords = this.wordWrapper.targetJqElement.find("."+this.wordWrapper.settings.wordClassName);
		    origText.remove();
		    this.mainTextContainer = $('.js-main-text'); 
		    this.mainTextContainer.append(finalText);
		    this.fragments = finalText.find('[data-frag]');
		    var _this = this;
		    finalText.find('.word').on('click', function() {
		    	//console.log("Cick animating ? "+ _this.animating);
		    	if(_this.animating == true){
		    		return;
		    	}
		    	
				var currWR;
				var currFrag;
				var currIdx = $(this).data('word');
				for(var i=0; i<_this.fragments.length; i++){
					currFrag = $(_this.fragments.get(i));
					currWR = new WordRange(currFrag.find('.word'), _this.wordWrapper.settings.customDataAttrName);
					
					//console.log(currIdx + " in "+ currWR+" ? ");
					
					if(currWR.getMinIndex() <= currIdx &&
							currWR.getMaxIndex() >= currIdx){
						//console.log("In fragment : "+currFrag.data('frag'));
						
						_this.trashFragment(currFrag);
	
						return;
					}
				}
				
				//console.log("Not in fragment");
				if(_this.errors<4){
					_this.errors++;
					if(_this.errors==1){
						_this.nextQKey = 'conErrores';
						_this.addMwSettings('nextQKey','conErrores');
					}
				}
				var key = 'error'+_this.errors;
				_this.showFeedback(_this.settings.feedback[key], false);
			});
		    
		  
		    $('.js-btn-finish').on('click', function(){
				_this.overlay.removeClass('e-oculto');
				_this.verifyCompleted();
			});
		    
		    
		    
		},
		
		verifyCompleted: function(){
			
			var frags =  this.mainTextContainer.find('[data-frag]');
			if(frags.length == 0){
				this.disableWords();
				this.finishExercise();
				return;
				
			}
			
			var mssg = this.settings.feedback.incomplete.replace('[n]', frags.length);
			//console.log("Replace : "+mssg);
			if(frags.length == 1){
				mssg = mssg.replace('+n', '').replace('+s', '');
				//console.log("Replace one : "+mssg);
			} else {
				mssg = mssg.replace('+n', 'n').replace('+s', 's');
				//console.log("Replace one : "+mssg);
			}
			
			this.showFeedback(mssg, false);
			
			
			
		},
		
		trashFragment: function(fragment, animated){
			
			var trash = $('.trash');
			fragment.addClass('e-highlight');
			
			if(animated === false){
				fragment.remove(); 
				fragment.addClass('e-trashed');
				fragment.appendTo(trash);
				return;
			}
			this.animating = true;
			var _this = this;
			fragment.animate({opacity:0}, 1200, function(){
				fragment.remove().removeClass('e-highlight');
				fragment.css('opacity', 1).addClass('e-trashed');
				fragment.appendTo(trash);
				_this.animating = false;
			});
			
			
		},
		
		showSolution: function(){
	
			var finalText = $('.js-final-text.final-text');
			this.fragments = finalText.find('[data-frag]');
			if(this.fragments.length > 0){
				this.trashFragmentInSolution();
				return;
			} 
	
			this.disableWords();
			$('.js-btn-finish').addClass('e-inactivo').off('click');
		},
		
		trashFragmentInSolution: function(){
			var _this = this;
			var currFrag = $(this.fragments.get(0));
			this.trashFragment(currFrag);
			setTimeout(function(){
				_this.showSolution();
			},3000);
		},
		
		implementSolution: function(){
			var finalText = $('.js-final-text.final-text');
			this.fragments = finalText.find('[data-frag]');
			for(var i=0;i<this.fragments.length;i++){
				var currFrag = $(this.fragments.get(i));
				this.trashFragment(currFrag,false);
			} 
	
			this.disableWords();
			$('.js-btn-finish').addClass('e-inactivo').off('click');	
		},
		
		disableWords: function(){
			this.mainTextContainer.find('.word').off('click').addClass('e-inactivo');
		},
		
		showFeedback: function(message, status){
			
			this.feedbackWindow.attr("data-correct", "");
			this.feedbackWindow.attr("data-personaje", "");
			if(status!=null){
				this.feedbackWindow.attr("data-correct", status);
			}
			this.feedbackWindow.find('.vntn--contenido').html(message);
			this.overlay.removeClass('e-oculto');
			this.feedbackWindow.removeClass('e-oculto');
			
		},
		
		finishExercise: function(){
			 $('.js-btn-finish').addClass('e-inactivo').off('click');
			 //this.overlay.addClass('e-oculto');
			 var mssg = 'Encontraste todos los intrusos, ¡bien hecho!<br><br>Regresemos al diálogo.'
			 this.showFeedback(mssg,true);
			 //this.setAnswerInDialog('Actividad terminada',5000);
			 this.addMwSettings('finished','true');
			 this.gotoQuestion(this.nextQs[this.nextQKey]);
			//alert("Exercise complete");
		},
		
		/*setAnswerInDialog: function(answer,delay){
			var _this = this;
			setTimeout(function(){
				var padre = window.parent;
				var mensajeTipoSet = { command: "setAnswer", params: {id: _this.mwId, value: answer } };
				padre.postMessage(mensajeTipoSet, "*");	
			},delay);
			
		},*/
		
		addMwSettings: function(name,value){
			var padre = window.parent;
			var mensajeTipoSet = { command: "addMicroworldSettings", params: {id: this.mwId, name: name, value: value } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		gotoQuestion: function(nextQId){
			var padre = window.parent;
			var mensajeTipoSet = { command: "gotoQuestion", params: {id: this.mwId, value: nextQId } };
			padre.postMessage(mensajeTipoSet, "*");	
		}

};

var mwMain = new MWMain(mwOptions);
$(document).ready(function(){
	mwMain.init();
	//mwMain.showSolution();
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwMain.mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});


window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if (evt.data && evt.data.type === "set") {

		/*if(evt.data.name=='nextQ'){
			mwMain.nextQKey = evt.data.value;
			mwMain.addMwSettings('nextQKey',mwMain.nextQKey);
		} else
		if(evt.data.name=='solution'){
			mwMain.showSolution();
		} else*/

		if(evt.data.name=="mwReconstruction"){
			
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica
				//nada, que lo vuelvan a hacer; de todos mods mw=inactive-->setAnswer no se pela
				
			} else {
				//lo que se tenga que hacer con base en historial
				var finished = false;
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='nextQKey'){
						mwMain.nextQKey = pair[1];
					} else
					if(pair[0]=='finished' && pair[1]=='true'){
						finished = true;
						mwMain.implementSolution();
					} 
				}
				
				if(finished){
					mwMain.gotoQuestion(mwMain.nextQs[mwMain.nextQKey]);
				}
			}
								
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwMain.mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		} 
		
		
	}
}

