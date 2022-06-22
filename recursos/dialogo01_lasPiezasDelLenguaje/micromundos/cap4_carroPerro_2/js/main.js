var FEEDBACK = {
		
	frag_1_ok : 'Buena elección. Si hacemos la pausa aquí tenemos una idea completa, ni muy corta ni muy larga.',
	frag_2_ok : 'Excelente decisión. Todo este fragmento habla sobre la estructura y la forma del carro.',
	frag_3_ok : '&iexcl;Buen trabajo! Identificaste los límites del enunciado con facilidad.',
	
	frag_inside_partial : 'Aquí termina una pequeña idea, en esto tienes toda la razón. Pero la idea que sigue está relacionada, creo que podemos hacer la pausa después.',
	frag_inside_error : '¡Oh no! Estás partiendo las ideas, ese pedazo que elegiste está incompleto.',
	many_frags : 'Esta opción está muy larga, ¿no crees? Además hay varias ideas mezcladas. Podemos hacer una pausa antes.',
	noselection: 'Recuerda que debes seleccionar palabras del texto.'
		
};


var mwOptions = {
	feedback : FEEDBACK
};



function MWMain(options){
	this.settings = $.extend({}, options);
	this.mainTextContainer;
	this.wordSelector = null;
	this.fragmentErrorCount = {};
	this.mwId = 'cap4_carroPerro_2';
	this.rebuilding = false;
}

MWMain.prototype = {
		init:function(){
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
			this.feedbackWindow = $('.js-vntn-feedback');
			this.mainContainer = $('.js-oactx');
			
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
		    
			$('.js-btn-instr').trigger('click');
		    
		    //Wrap words
		    var origText = $('.js-orig-text').remove();
		    var finalText = $('<div class="js-final-text final-text"></div>');
		    
		    this.mainTextContainer = $('.js-main-text'); 
		    this.mainTextContainer.append(finalText);
		    
		    this.wordSelector = new WordSelector(origText, finalText, {onClick: function(){console.log('No firstSelection')}});
		    
		    //init errorCounter
		    var fragments = this.mainTextContainer.find('[data-frag]');
		    for(var i=0; i<fragments.length; i++){
		    	this.fragmentErrorCount['frag_'+$(fragments.get(i)).data('frag')] = 0;
		    }
		  
		    // Buttons
		    this.mainContainer.find('.js-borrar')
	    		.on('click', function(){
	    			_this.wordSelector.clearSelection();
	    			_this.updateDrags();
	    		});
		    this.mainContainer.find('.js-confirmar').
	    		on('click', function(){
	    			
	    			if(_this.wordSelector.currentState!= WordSelector.SELECTED_COMPLETE){
		    			//update
		    			_this.updateWSState();
		    		}
	    			
		    		var selectionRange = _this.wordSelector.getSelectionWordRange();
		    		console.log(selectionRange);
		    		
		    		
		    		
		    		_this.verifyUserAnswer(selectionRange);

	    		});
		    
		    
		    //Configure D&D text selection
		    var words =  this.mainTextContainer.find('.word');
	    	var drag = $('<span class="dr"></span>');
	    	
	    	var cloneDrag;
	    	var currW;
	    	words.each(function(){
	    		currW = $(this);
	    		
	    		cloneDrag = drag.clone().css('position','absolute');
	    		cloneDrag.data('idWord', $(this).data('word')).draggable({
	    			revert: true,
	    			containment: _this.mainTextContainer,
	    			start: function(event, ui){
	    				var ws = _this.wordSelector;
	    				ws.allWords.find('.dr').hide();
	    				$(this).show();
	    			}
	    		});
	    		currW.append(cloneDrag);
	    	});
	    	
	    	words.droppable({
	    		hoverClass: 'e-over',
	    	      drop: function( event, ui ) {
	    	    	  console.log("DROPPED IN : ");
	    	    	  
	    	    	  ui.draggable.hide();
	    	    	  //get person
	    	    	  var ws = _this.wordSelector;
	    	    	  var from = ui.draggable.data('idWord');
	    	        	var to = $(this).data('word');
	    	        	
	    	        	console.log("FROM: "+from+" TO:"+to)
	    	        	var tmp = from;
	    	        	if(from > to){
	    	        		tmp = to;
	    	        		to = from;
	    	        		from = tmp;
	    	        	}
	    	        	for(var i=from; i<=to; i++ ){
	    	        		//console.log('[data-word="'+i+'"]');
	    	        		ws.allWords.filter('[data-word="'+i+'"]').addClass('highlightSelection');
	    	        	}
	    	        	
	    	        	//update ws
	    	        	ws.currentState = WordSelector.SELECTED_COMPLETE;
						ws.highlightSelection();
	    	    	  
	    	        },
	    	        over: function( event, ui ) {
	    	        	//console.log("OVER : ");
	    	        	//console.log($(this));
	    	        	
	    	        	
	    	        	//get person
		    	    	  var ws = _this.wordSelector;
	    	        	 var from = ui.draggable.data('idWord');
		    	        	var to = $(this).data('word');
		    	        	var tmp = from;
		    	        	if(from > to){
		    	        		tmp = to;
		    	        		to = from;
		    	        		from = tmp;
		    	        	}
		    	        	for(var i=0; i<=ws.allWords.length; i++ ){
		    	        		var currW = $(ws.allWords.get(i)).removeClass('highlightSelection');
		    	        		if(currW.data('word')>=from && currW.data('word')<=to){
		    	        			//ws.allWords.filter('[data-word="'+i+'"]').addClass('highlightSelection');
		    	        			currW.addClass('highlightSelection');
		    	        		}
		    	        		
		    	        	}
	    	        	
	    	        	
	    	        }
	    	});
		    
		},
		
		disableAllDrags: function(){
			console.log('--Disable all drags');
			var ws = this.wordSelector;
			console.log(ws);
			var inactiveWords = ws.allWords.filter('.ui-droppable');
			inactiveWords.find('.dr').remove();
			inactiveWords.droppable('destroy');

		},
		
		updateDrags: function(){
			var ws = this.wordSelector;
			var inactiveWords = ws.allWords.filter('.e-inactivo.ui-droppable');
			inactiveWords.find('.dr').remove();
			inactiveWords.droppable('destroy');
			ws.allWords.find('.dr').show();
		},
		
		updateWSState: function(){
			
			var ws = this.wordSelector;
    		
    		if(ws.currentState != WordSelector.SELECTED_COMPLETE){
    			
    			//Find elements
    			//console.log("Updating WS , "+ws.currentFirst+"->"+ws.currentLast);
    			var allWords = ws.allWords;
    			var setFirst = false;
    			var setLast = false;
    			
    			for(var i=0; i<allWords.length; i++ ){
	        		//console.log('[data-word="'+i+'"]');
	        		var currW = $(allWords.get(i));
	        		//console.log(currW);
	        		if(currW.hasClass('highlightSelection')){
	        			
	        			if(!setFirst){
	        				setFirst = true;
	        				ws.currentFirst = currW.data('word');
	        				//console.log("Fisrt: "+ws.currentFirst);
	        				
	        			}
	        		} else {
	        			
	        			if(setFirst && !setLast){
	        				setLast = true;
	        				ws.currentLast = currW.data('word')-1;
	        				ws.currentState = WordSelector.SELECTED_COMPLETE;
	        				//console.log("Last: "+ws.currentLast);
	        			}
	        			
	        		}
	        		
	        	}
    			
    			if(setFirst && !setLast){
    				setLast = true;
    				
    				ws.currentLast = currW.data('word');
    				//console.log("Last: "+ws.currentLast);
    				ws.currentState = WordSelector.SELECTED_COMPLETE;
    			}
    			//update ws
				ws.highlightSelection();
				//this.updateDrags(person);
				console.log("Final WS , "+ws.currentFirst+"->"+ws.currentLast);
    		}
		},
		
		
		verifyUserAnswer: function(selectionRange){
			
			var feedbackObj = this.getFeedbackForSelection(selectionRange);
			//console.log("Feedback : "+JSON.stringify(feedbackObj));
			
			if(feedbackObj.errorCount>2){
				/*
				var _this = this;
				var clickExtra = function(){
					_this.inactiveFragment(_this.mainTextContainer.find('[data-frag="'+feedbackObj.fragNumber+'"]'));
					$(this).off('click', clickExtra);
				}
				this.feedbackWindow.find('.vntn--btn-cerrar').on('click', clickExtra);
				*/
				this.inactiveFragment(this.mainTextContainer.find('[data-frag="'+feedbackObj.fragNumber+'"]'),true);
				return;
			}
			
			this.showFeedback(feedbackObj.text, feedbackObj.correct);
			
    		
		},

		getFeedbackForSelection: function(selectedRange){
			
			var resultObj = {
					text : 'XXXXX',
					correct: false,
					errorCount: 0 
			};
			
			//Verify there is selection
			if(selectedRange == null){
				console.log("NO SELECTION");
				resultObj.text = this.settings.feedback.noselection;
				resultObj.correct = false;
				return resultObj;
			}
			
			var fragments = this.mainTextContainer.find('[data-frag]').not(".e-solved");
			console.log("Fragments");
			console.log(fragments);
			
			
			var fragNum = fragments.length;
			var currFrag;
			var currWR;
			var currFragIndex = 0;
			var isErrorFrag = false;
			
			
			
			//Verify by fragment
			for(var i=0; i<fragNum; i++){
				console.log("=================== Frag:"+(i+1));
				
				currFrag = $(fragments.get(i));
				currFragIndex = currFrag.data('frag');
				currWR = new WordRange(currFrag.find('.word'), this.wordSelector.wordWrapper.settings.customDataAttrName);
				
				resultObj.fragNumber = currFrag.data('frag');
				
				//Verify all fragment in selection
				if(selectedRange.containsRange(currWR)){
					
					//Verify more selection
					if(selectedRange.getMinIndex() < currWR.getMinIndex() || 
							selectedRange.getMaxIndex() > currWR.getMaxIndex() ){
						
						console.log("MANY FRAG SELECTED");
						resultObj.text = this.settings.feedback.many_frags;
						resultObj.correct = false;
						resultObj.errorCount = this.fragmentErrorCount['frag_'+currFrag.data('frag')];
						return resultObj;
						
					}
					
					
					console.log("All FRAGMENT SELECTED");
					resultObj.text = this.settings.feedback['frag_'+currFrag.data('frag')+'_ok'];
					resultObj.correct = true;
					this.inactiveFragment(currFrag);

					return resultObj;
					
				}
				
				//Verify inner selection for error
				if(currWR.containsRange(selectedRange)){
					var currErr;
					var errFrag = currFrag.find('[data-error]');
					var currErrRange;
					//verify an error frag
					for(var j=0; j<errFrag.length; j++){
						currErr = $(errFrag.get(j));
						currErrRange = new WordRange(currErr.find('.word'), this.wordSelector.wordWrapper.settings.customDataAttrName);
						
						if(selectedRange.containsRange(currErrRange) && currErrRange.containsRange(selectedRange)){
							console.log("SELECTED ERR in frag");
							resultObj.text = this.settings.feedback.frag_inside_partial;
							resultObj.correct = false;
							this.fragmentErrorCount['frag_'+currFrag.data('frag')]++;
							resultObj.errorCount = this.fragmentErrorCount['frag_'+currFrag.data('frag')];
							return resultObj;
						}
						
					}
					
					
					console.log("Incomplete & Not Err selection in Frag: " + currFrag.data('frag'));
					resultObj.text = this.settings.feedback.frag_inside_error;
					resultObj.correct = false;
					this.fragmentErrorCount['frag_'+currFrag.data('frag')]++;
					resultObj.errorCount = this.fragmentErrorCount['frag_'+currFrag.data('frag')];
					return resultObj;
				}
				
			} //for
				
			return resultObj;
			
		},
		
		
		inactiveFragment: function(fragment,solution){
			this.completeFragment(fragment);
			var fragWR = this.wordSelector.getWordRangeInElement(fragment);
			fragWR.elements.addClass('e-inactivo').off('click');
			if(solution){
				fragWR.elements.addClass('e-incorrecto');
			}
			this.wordSelector.clearSelection();
			this.updateDrags();
		},
		
		completeFragment: function(fragment){
			
			//console.log(fragment);
			fragment.addClass('e-solved');
			var frag = $(fragment).find('[data-word]');
			var firstWord = $(frag.get(0));
			firstWord.addClass('e-capitalize');
			var lastWord = $(frag.get(frag.length-1));
			if(!/\./.test(lastWord.text())){
				lastWord.html($.trim(lastWord.text())+'. ');
			}
			this.wordSelector.clearSelection();
			this.updateDrags();
			//var finalDot = $('<span class="extra">.</span>');
			//lastWord.append(finalDot);
			
			if(this.isFinished()){
				this.inactiveButtons(this.mainContainer);
				if(!this.rebuilding){
					this.gotoNextQuestion(2000);
					this.addMwSettings('finished','true');
				}
			}
		},
		
		isFinished:function(){
			var fragments = this.mainTextContainer.find('[data-frag]');
			//console.log(fragments.filter('.e-solved').length +','+ fragments.length);
			return (fragments.filter('.e-solved').length == fragments.length);
		},
		
		showFeedback: function(message, status){
			
			if(status!=null){
				this.feedbackWindow.attr("data-correct", status);
			}
			this.feedbackWindow.find('.vntn--contenido').html(message);
			this.overlay.removeClass('e-oculto');
			this.feedbackWindow.removeClass('e-oculto');
			
		},
		inactiveButtons: function(container){
			console.log(container);
			container.find('.js-borrar').addClass('e-inactivo').off('click');
			container.find('.js-confirmar').addClass('e-inactivo').off('click');
		},
		
		implementSolution: function(){
			this.rebuilding = true;
			mwMain.inactiveButtons(this.mainContainer);
			for(var i=1;i<4;i++){
				this.inactiveFragment(this.mainTextContainer.find('[data-frag="'+i+'"]'));
			}
			this.rebuilding = false;
		},
		
		gotoNextQuestion: function(delay){
			var _this = this;
			setTimeout(function(){
				var padre = window.parent;
				var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: _this.mwId} };
				padre.postMessage(mensajeTipoSet, "*");	
			},delay);
			
		},
		
		addMwSettings: function(name,value){
			//alert('setting name: '+name+'& value: '+value);
			var padre = window.parent;
			var mensajeTipoSet = { command: "addMicroworldSettings", params: {id: this.mwId, name: name, value: value } };
			padre.postMessage(mensajeTipoSet, "*");	
		}

};

var mwMain = new MWMain(mwOptions);
$(document).ready(function(){
	
	mwMain.init();
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwMain.mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if (evt.data && evt.data.type === "set") {

		if(evt.data.name=="mwReconstruction"){
			
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica
				//nada, que lo vuelvan a hacer; mw=inactive-->setAnswer no se pela
				mwMain.implementSolution();
				
			} else {
				//lo que se tenga que hacer con base en historial
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='finished' && pair[1]=='true'){
						mwMain.implementSolution();
					}
				}
			}
								
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwMain.mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		} 
		
		
	}
}

