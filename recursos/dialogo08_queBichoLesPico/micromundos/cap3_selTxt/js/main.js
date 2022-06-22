var wordSelectors = {};
var FEEDBACK = {
	par1:{
		frag1: {
			ok: 'Haces bien al señalar este fragmento. Para prevenir contagios, es muy importante saber cómo se transmite la fiebre de chikunguña. Aquí se indica que se transmite "de forma similar al dengue", es decir a través de la picadura de un mosquito que es portador de la enfermedad. O sea que no hay un riesgo de “contagio” de persona a persona, sino que únicamente el mosquito infectado es el que “porta” o lleva el chikunguña y se lo “pasa” a la persona sana.',
			short:'Vas por buen camino pero te falta seleccionar una parte importante de esta idea. Intenta de nuevo.',
			solution: 'Para prevenir contagios, es necesario saber cómo se transmite la fiebre de chikunguña. Aquí se indica que se transmite "de forma similar al dengue", es decir a través de la picadura de un mosquito que es portador de la enfermedad. O sea que no hay un riesgo de “contagio” de persona a persona, sino que únicamente el mosquito infectado es el que “porta” o lleva el chikunguña y se lo “pasa” a la persona sana.' 
		},
		frag2: {
			ok: '¡Buena selección! Ya sabíamos que se trata de una epidemia, es un dato importante.',
			short:'¿Cuál es la palabra más importante de todas en esta oración? Vuelve a intentar.',
			solution: 'Ya sabíamos que se trata de una epidemia. Es un dato importante, ¡recuérdalo!'
		},
		frag3: {
			ok: 'Por supuesto, es esencial saber que en México existe el riesgo de la fiebre de chikunguña causada por el bicho que la transmite.',
			short: 'En la oración que seleccionaste, ¿cuál es la frase más importante, que resume la idea clave del enunciado? ¡Búscala, anda!',
			solution: 'Es esencial saber que en México existe el riesgo de contagio de la fiebre de chikunguña causada por el bicho que la transmite, ¿no crees?'
		},
		frag4: {
			error: 'Para prevenir la transmisión de la fiebre chikunguña, ¿te parece importante conocer el nombre científico del mosquito que la causa? Es importante saber cómo es, para poder reconocerlo, pero conocer su nombre oficial no es de mucha utilidad, sólo por “cultura general”. Yo diría que esta información no es necesaria. Selecciona otro fragmento.'
		},
		general: [
		          'Se me hace que estás seleccionando varias ideas a la vez. Vete con calma, dato por dato.',
		          'En este párrafo hay tres datos importantes. ¿Cuáles son?',
		          'Por esta vez, te ayudo. Los tres datos importantes para nosotros aquí en México son:<br><br>1. La fiebre de chikunguña se transmite de forma similar al dengue, es decir, por el piquete de un mosquito infectado.<br>2. Es una epidemia latente.<br>3. La enfermedad ya ha llegado a México.'
		]
	},
	par2:{
		frag1: {
			ok: '¡Bien hecho! Es importante saber que la enfermedad comienza manifestándose con fiebres altas que pueden durar entre 2 y 5 días.',
			short: 'Vas por buen camino pero no seleccionaste la idea completa. Intenta de nuevo.',
			solution: 'Es importante saber que al inicio la enfermedad se caracteriza por fiebres altas que pueden durar entre 2 y 5 días.'
		},
		frag2: {
			ok: 'La segunda fase de la enfermedad se caracteriza por dolores fuertes en las articulaciones y puede durar ¡hasta años! ¡Es importante saberlo! ¡Bien!',
			short: 'Vas por buen camino pero no seleccionaste la idea completa. Intenta de nuevo.',
			solution: 'La segunda fase de la enfermedad se caracteriza por dolores fuertes en las articulaciones y puede durar ¡hasta años! ¡Es importante saberlo!'
		},
		frag3: {
			ok: '¡Por supuesto! Esta información sobre quiénes pueden ser más vulnerables a la enfermedad, ¡es esencial!',
			short: 'Vas por buen camino pero no seleccionaste la idea completa. Intenta de nuevo.',
			solution: 'Esta información sobre quiénes pueden ser más vulnerables a la enfermedad, ¡es esencial!'
		},
		frag4: {
			ok: '¡Uf, sí! Es muy importante saber que actualmente no existe ningún tratamiento contra el chikunguña. ¡Qué lata!',
			short: 'Vas por buen camino pero no seleccionaste la idea completa. Intenta de nuevo.',
			solution: '¡Qué pena que actualmente no haya ningún tratamiento contra el chikunguña! Este dato es de suma importancia.'
		},
		frag5: {
			ok: '¡Sí! Hay que acudir al médico ante cualquier duda. ¡Importantísimo!',
			short: 'Vas por buen camino pero no seleccionaste la idea completa. Intenta de nuevo.',
			solution: 'Hay que acudir al médico ante cualquier duda. ¡Importantísimo!'
		},
		general: [
		          'Se me hace que estás seleccionando varias ideas a la vez. Vete con calma, dato por dato.',
		          'En este párrafo hay cinco datos importantes. ¿Cuáles son?',
		          'Veo que te está costando trabajo... Te ayudo pues. Los cinco datos relevantes de esta parte del blog son:<br><br>\
			  1. En sus inicios, la enfermedad se caracteriza por fiebres altas que pueden durar entre 2 y 5 días.<br>\
			  2. La segunda fase de la enfermedad se caracteriza por dolores fuertes en las articulaciones y puede durar ¡hasta años!<br>\
			  3. Bebés, ancianos y personas con algunas enfermedades crónicas pueden ser más vulnerables a caer enfermos.<br>\
			  4. Actualmente no haya ningún tratamiento contra el chikunguña.<br>\
			  5. Hay que acudir al médico ante cualquier duda.'
		]
	},
	principal:{
		ejercicioTerminado: '<br>¡Buen trabajo! Ya identificamos todos los datos importantes en el blog. Regresemos al diálogo.',
		parrafoTerminado: '<br>¡Bien hecho! Encontraste todos los datos importantes de este párrafo.',
		parrafoNoTerminado: '¡Aún no has identificado todas las ideas más relevantes de este párrafo! Mejor búscalas de una vez.'
	}
	
};

var SEL_STATUS = {
		ONE_FRAGMENT: 1,
		MANY_FRAGMENT: 2,
		ALL_FRAGMENTS: 3,
		NONE: 0,
		MIN_SEL: 4,
		INCOMPLETE_SEL: 5,
		SEL_IN_FRAGMENT : 6,
		FRAGMENT_COMPLETE: 7
};
var STATUS = {
		par1: {
			errorCount : 0,
			errorInFragment:{},
			completedFragments : [],
			complete: false,
			totalFragments : 0,
			errorFragments : [],
			nombre: 'párrafo 1',
			interactions: 0
		},
		par2: {
			errorCount : 0,
			errorInFragment:{},
			completedFragments : [],
			complete: false,
			totalFragments : 0,
			errorFragments : [],
			//errorFragments : [1],
			nombre: 'párrafo 2',
			interactions: 0
		},
		par3: {
			errorCount : 0,
			errorInFragment:{},
			completedFragments : [],
			complete: false,
			totalFragments : 0,
			errorFragments : [],
			//errorFragments : [1,3,6],
			nombre: 'párrafo 3',
			interactions: 0
		}
};

var MESSAGES = {
	noselection: 'Recuerda que debes seleccionar uno por uno los fragmentos que contienen un dato importante sobre el chikunguña.'	
};

var mwOptions = {
	feedback : FEEDBACK,
	sel_status : SEL_STATUS,
	status: STATUS,
	messages: MESSAGES
};



function MWTextSelection(id,options){
	this.mwId = id;
	this.settings = $.extend({}, options);
	this.wordSelectors = {};
}

MWTextSelection.prototype = {
	
		init:function(){
			
			var _this = this;
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
		    
			$('.js-btn-instr').on('click', function(){
				$('.js-instrucciones').removeClass('e-oculto');
				_this.overlay.removeClass('e-oculto');
			});
		    

		    
		    // init windows
		    var vntns = $('.vntn').addClass('e-oculto');
		    var vntnsNumber = vntns.length;
		    
		    for(var i=0; i<vntnsNumber; i++){
		    	
			var vtn = $(vntns.get(i));
		    	var par = vtn.data('par');
		    	//var wordSelector = this.wordSelectors[par];
		    	
			// close bt
				if(!vtn.hasClass("js-vntn-comment")){
				var closeBtn = $('<button class="vntn--btn-cerrar">X</button>');
				closeBtn.on('click', function(){
					var vtn = $(this).closest('.vntn');
					vtn.addClass('e-oculto');
					_this.overlay.addClass('e-oculto');
					/*if(vtn.hasClass("js-vntn-comment")){
						_this.wordSelectors[vtn.data('par')].clearSelection();
						_this.updateDrags(vtn.data('par'));
					}*/
				});
				vtn.append(closeBtn);
			}
			
		    	// Buttons
		    	vtn.find('.js-borrar')
		    		.data('par',vtn.data('par'))
		    		.on('click', function(){
					_this.wordSelectors[$(this).data('par')].clearSelection();
					_this.updateDrags($(this).data('par'));
		    	});
		    	vtn.find('.js-confirmar').
		    		data('par',vtn.data('par')).
		    		on('click', function(){
		    			var parrafo = $(this).data('par');
			    		var selectionRange = _this.wordSelectors[parrafo].getSelectionWordRange();
			    		
			    		var ws = _this.wordSelectors[parrafo];
			    		//console.log("WS state:"+ws.currentState);
			    		
			    		if(ws.currentState!= WordSelector.SELECTED_COMPLETE){
			    			
			    			//update
			    			_this.updateWSState(parrafo);
	
			    		}
			    		
			    		_this.verifyUserAnswer(parrafo);

		    		});
		    			    	
		    	// Create wordWrap
		    	if(vtn.hasClass('js-vntn-comment')){
		    		
		    		var from = vtn.find('.js-texto-orig').remove();
		    		var to = vtn.find('.js-texto-final');
		    		var parrafo = vtn.data('par');
		    				    		
		    		var parStatus = _this.settings.status[parrafo];
		    		
		    		var wordSelector = new WordSelector(from, to, {onClick: function(){console.log('No firstSelection')}});
		    		_this.wordSelectors[parrafo] = wordSelector;
		    		
		    		var frags = vtn.find('[data-frag]');
		    		var errFrag = frags.filter('[data-err]');
		    		errFrag.each(function(){
		    			parStatus.errorFragments.push($(this).data('frag'));
		    		});
		    		if(parStatus == null){
		    			_this.settings.status[parrafo] = {};
		    		}
		    		parStatus.totalFragments = frags.length - parStatus.errorFragments.length;
		    		parStatus.textContainer = vtn;
		    		
		    		//Add click to verify personCompleted
		    		/*closeBtn.off('click');
		    		closeBtn.on('click', function(){
			    		var vtn = $(this).closest('.vntn');
			    		var parrafo = vtn.data('par');
			    		var parStatus = _this.settings.status[parrafo];
			    		var personName = parStatus.nombre;
			    		console.log(parStatus);
			    		if(!parStatus.complete && (parStatus.completedFragments.length>0 || parStatus.interactions>0)){
			    			var mssg = _this.settings.feedback.principal.parrafoNoTerminado.replace("[nombre]", personName.substring(0,1).toUpperCase()+personName.substring(1));
			    			_this.showFeedback(mssg , false, parrafo);
			    			
			    		} else {
			    			vtn.addClass('e-oculto');
				    		
				    		_this.overlay.addClass('e-oculto');
				    		_this.wordSelectors[vtn.data('par')].clearSelection();
			    		}	
			    	});
				*/
		    		
		    		//Configure D&D text selection
			    	var words =  vtn.find('.js-texto-orig .word');
			    	var drag = $('<span class="dr"></span>');
			    	
			    	var cloneDrag;
			    	var currW;
			    	words.each(function(){
			    		currW = $(this);
			    		
			    		cloneDrag = drag.clone().css('position','absolute');
			    		cloneDrag.data('parrafo',vtn.data('par'));
			    		cloneDrag.data('idWord', $(this).data('word')).draggable({
			    			revert: true,
			    			containment: vtn,
			    			start: function(event, ui){
			    				var ws = _this.wordSelectors[$(this).data('parrafo')];
			    				ws.allWords.find('.dr').hide();
			    				$(this).show();
			    			}
			    		});
			    		//cloneDrag.hide();
			    		currW.append(cloneDrag);

			    	});
			    	
			    	words.droppable({
			    		hoverClass: 'e-over',
			    	      drop: function( event, ui ) {
			    	    	  //console.log("DROPPED IN : ");
			    	    	  
			    	    	  ui.draggable.hide();
			    	    	  //get parrafo
			    	    	  var parrafo = $(this).closest('.js-vntn-comment').data('par');
			    	    	  var ws = _this.wordSelectors[parrafo];
			    	    	  
			    	    	  var from = ui.draggable.data('idWord');
			    	        	var to = $(this).data('word');
			    	        	
			    	        	var tmp = from;
			    	        	if(from > to){
			    	        		tmp = to;
			    	        		to = from;
			    	        		from = tmp;
			    	        	}
			    	        	for(var i=from; i<=to; i++ ){
			    	        		ws.allWords.filter('[data-word="'+i+'"]').addClass('highlightSelection');
			    	        	}
			    	        	
			    	        	//update ws
			    	        	ws.currentState = WordSelector.SELECTED_COMPLETE;
								ws.highlightSelection();
								
								
			    	    	  
			    	    	  
			    	        },
			    	        over: function( event, ui ) {
			    	        	//get parrafo
				    	    	  var parrafo = $(this).closest('.js-vntn-comment').data('par');
				    	    	  var ws = _this.wordSelectors[parrafo];
			    	        	
				    	    	  //ws.allWords.removeClass('highlightSelection');
			    	        	
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
		    		
		    		
		    	}
	
		    }
		   
		     $('div.js-vntn-comment[data-par="par1"]').removeClass('e-oculto');
		    
		},
		
		disableAllDrags: function(parrafo){
			var ws = this.wordSelectors[parrafo];
			var inactiveWords = ws.allWords.filter('.ui-droppable');
			inactiveWords.find('.dr').remove();
			inactiveWords.droppable('destroy');

		},
		
		updateDrags: function(parrafo){
			
			var ws = this.wordSelectors[parrafo];
			var inactiveWords = ws.allWords.filter('.e-inactivo.ui-droppable');
			
			inactiveWords.find('.dr').remove();
			inactiveWords.droppable('destroy');
			
			ws.allWords.find('.dr').show();
		},
		
		updateWSState: function(parrafo){
			
			var ws = this.wordSelectors[parrafo];
    		
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
				//this.updateDrags(parrafo);
				//console.log("Final WS , "+ws.currentFirst+"->"+ws.currentLast);
    		}
		},
		
		
		verifyUserAnswer: function(parrafo){
			var selectionRange = this.wordSelectors[parrafo].getSelectionWordRange();
    		
    		var feedbackObj = this.getFeedbackForSelection(selectionRange, parrafo);
    		//var feedbackText = this.getFeedbackForSelection(selectionRange, parrafo);

    		var feedbackText = feedbackObj.text;
    		var correctStatus = feedbackObj.correct;

    		//_this.verifyComplete(parrafo, feedbackText);
    		
    		var completedStatus = this.getCompletedStatus(parrafo);
    		
    		if( completedStatus.completed ){
    			
				this.settings.status[parrafo].complete = true;
				this.inactiveButtons(this.settings.status[parrafo].textContainer);
				
				var ws = this.wordSelectors[parrafo];
				ws.allWords.off('click');

				this.settings.status[parrafo].textContainer.addClass('js-solved');
								
				var message = feedbackText + '<p>'+ this.settings.feedback.principal.parrafoTerminado+'</p>';
				
				ws.clearSelection();
				
				//---this.updateDrags(parrafo);
				this.disableAllDrags(parrafo);
				
				/*
				//Add click to close feedabck
				$('.js-vntn-feedback > .vntn--btn-cerrar').on('click', function(){
					$('.js-vntn-comment[data-par="'+parrafo+'"]').addClass('e-oculto');
				});
				*/
				
				setTimeout(function(){
					var padre = window.parent;
					var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: this.mwId } };
					padre.postMessage(mensajeTipoSet, "*");	
				},8000);
				
				
				if( completedStatus.completedErrors ){
					this.showFeedback(this.settings.feedback[parrafo]['general'][this.settings.status[parrafo].errorCount-1], false, parrafo);
					//Show all fragment solution
					var personComment =  $('.js-vntn-comment[data-par="'+parrafo+'"]');
					
					this.showSolution(personComment);

					//this.showAllFragmentInTable(parrafo);
					return;
				}
				
				/*if(this.isFinished()){
					var _this = this;
					message = feedbackText + '<p>' + this.settings.feedback.principal.ejercicioTerminado + '</p>';
					setTimeout(function(){
						var padre = window.parent;
						var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: _this.mwId } };
						padre.postMessage(mensajeTipoSet, "*");	
					},5000);
				}*/
				
				
				
				this.showFeedback(message, correctStatus, parrafo);
				return;
			}
			
			this.showFeedback(feedbackText, correctStatus, parrafo);
    		
		},

		getFeedbackForSelection: function(selectedRange, parrafo){
			var errorCount = this.settings.status[parrafo].errorCount;
			var resultObj = {
					text : '',
					correct: false
			};
			
			if(this.settings.status[parrafo].complete){
				return;
			}
			
			//Verify selection not null
			if(selectedRange == null){
				//this.showFeedback(this.settings.messages['noselection']);
				//return this.settings.messages['noselection'];
				resultObj.text = this.settings.messages['noselection'];
				resultObj.correct = false;
				return resultObj;
			}
				
			var ws = this.wordSelectors[parrafo];
			var fragments = $('.js-vntn-comment[data-par="'+parrafo+'"] [data-frag]').not(".e-inactivo");
			
			var fragNum = fragments.length;
			var currFrag;
			var currWR;
			var currFragIndex = 0;
			
			var firstFrag = null;
			
			var fragCompleteCount = 0;
			
			var currStatus = this.settings.sel_status.NONE;
			var isErrorFrag = false;
			
			var parStatus = this.settings.status[parrafo];
			
			//log interactionNumber
			parStatus.interactions++;
			
			//Verify by fragment
			for(var i=0; i<fragNum; i++){
				
				currFrag = $(fragments.get(i));
				currFragIndex = currFrag.data('frag');
				currWR = new WordRange(currFrag.find('.word'), ws.wordWrapper.settings.customDataAttrName);
				isErrorFrag = parStatus.errorFragments.indexOf(currFragIndex)>=0;
				
				//Verify error fragment
				if(isErrorFrag && currWR.containsRange(selectedRange)){
					//this.showFeedback(this.settings.feedback[parrafo]['frag'+currFragIndex]['error']);
					this.inactiveFragment(currFragIndex, parrafo);
					resultObj.text = this.settings.feedback[parrafo]['frag'+currFragIndex]['error'];
					resultObj.correct = false;
					return resultObj;
					//return this.settings.feedback[parrafo]['frag'+currFragIndex]['error'];
				}
				
				
				// All frag contained in Selection
				if(selectedRange.containsRange(currWR)){
					
					// Verify more selected
					if(selectedRange.getMinIndex() < currWR.getMinIndex() || 
							selectedRange.getMaxIndex() > currWR.getMaxIndex() ){
						
						currStatus = this.settings.sel_status.MANY_FRAGMENT;
						
						//this.showFeedback(this.settings.feedback[parrafo]['general'][errorCount]);
						parStatus.errorCount++;
						resultObj.text = this.settings.feedback[parrafo]['general'][errorCount];
						resultObj.correct = false;
						return resultObj;
						//return this.settings.feedback[parrafo]['general'][errorCount];
						
					}
					
					// All Fragment selected
					currStatus = this.settings.sel_status.ONE_FRAGMENT;
					//this.showFeedback(this.settings.feedback[parrafo]['frag'+currFrag.data('frag')]['ok']);
					selectedRange.elements.addClass('e-correcto');
					this.showFragmentComplete(currFrag.data('frag'), parrafo);
					resultObj.text = this.settings.feedback[parrafo]['frag'+currFrag.data('frag')]['ok'];
					resultObj.correct = true;
					return resultObj;
					//return this.settings.feedback[parrafo]['frag'+currFrag.data('frag')]['ok'];

				}

				var minSel;
				var currwr;
				var currMinsel;
				
				
				// Verify all selection is in fragment
				if(currWR.containsRange(selectedRange)){

					// Verify min selection
					minsel = currFrag.find('.js-sel-min');
					allContained = true;
					minselLength = minsel.length;
					
					//Its enough only 1 selmin
					for(var j=0; j<minselLength; j++){
						
						currMinsel = $(minsel.get(j));
						currwr = new WordRange(currMinsel.find('.word'), ws.wordWrapper.settings.customDataAttrName);
						
						//contains any selmin
						if(selectedRange.containsRange(currwr)){
							currStatus = this.settings.sel_status.FRAGMENT_COMPLETE;
							selectedRange.elements.addClass('e-correcto');
							this.showFragmentComplete(currFrag.data('frag'), parrafo);
							resultObj.text = this.settings.feedback[parrafo]['frag'+currFrag.data('frag')]['ok'];
							resultObj.correct = true;
							return resultObj;
						}
						
					}
					
					//Not minSel
					//Verify already selected this fragment
					if(parStatus.errorInFragment[currFragIndex] != null ){
						currFrag.find('.word').addClass('e-solucion');
						this.showFragmentComplete(currFragIndex, parrafo);
						resultObj.text = this.settings.feedback[parrafo]['frag'+currFrag.data('frag')]['solution'];
						resultObj.correct = false;
						return resultObj;
					}
					
					parStatus.errorInFragment[currFragIndex] = 1;
					resultObj.text =this.settings.feedback[parrafo]['frag'+currFrag.data('frag')]['short'];
					resultObj.correct = false;
					return resultObj;

				}
				
				// Verify intersection
				if((selectedRange.getMinIndex() >= currWR.getMinIndex() && selectedRange.getMinIndex() <= currWR.getMaxIndex()) ||
					(selectedRange.getMaxIndex() >= currWR.getMinIndex() && selectedRange.getMaxIndex() <= currWR.getMaxIndex())){
						parStatus.errorCount++;
						resultObj.text = this.settings.feedback[parrafo]['general'][errorCount];
						resultObj.correct = false;
						return resultObj;
						//return this.settings.feedback[parrafo]['general'][errorCount];
				}
				
			}
			return resultObj;
			//return null;
		},
		
		showSolution:function(comment){
			var frags = comment.find('[data-frag]');
			comment.find('.word').addClass('e-inactivo');
			//Highlight selmin
			//frags.not('[data-err]').find('.word').addClass('e-solucion');
			frags.not('[data-err]').find('.js-sel-min > .word').addClass('e-solucion');
			
			this.disableAllDrags(comment.data('par'));
		},
		

		getMinSel: function(fragIndex, parrafo){
			var container = $('.js-vntn-comment[data-par="'+parrafo+'"]');
			return container.find('[data-frag="'+fragIndex+'"] > .js-sel-min');
		},
		
		inactiveFragment: function(fragIndex, parrafo){
			
			var ws = this.wordSelectors[parrafo];
			var container = this.settings.status[parrafo].textContainer; //$('.js-vntn-comment[data-par="'+parrafo+'"]');
			var frag = container.find('[data-frag="'+fragIndex+'"]');
			var wr = ws.getWordRangeInElement(frag);
			wr.elements.addClass('e-inactivo').off('click');
			ws.clearSelection();
			
			//remove drags
			this.updateDrags(parrafo);
		},
		highlightFragment: function(fragIndex, parrafo){
			
		},
		
		showFragmentComplete: function(fragIndex, parrafo){
			var ws = this.wordSelectors[parrafo];
			var container = this.settings.status[parrafo].textContainer;
			var frag = container.find('[data-frag="'+fragIndex+'"]');
			var wr = ws.getWordRangeInElement(frag);
			wr.elements.addClass('e-inactivo').off('click');
			ws.clearSelection();
			//this.showFragmentInTable(fragIndex, parrafo);
			this.settings.status[parrafo].completedFragments.push(fragIndex);
			
			//remove drags
			
			this.updateDrags(parrafo);
		},
		
		getCompletedStatus:function(parrafo){

			var completeFrag = this.settings.status[parrafo].completedFragments.length == this.settings.status[parrafo].totalFragments;
			var manyError = this.settings.status[parrafo].errorCount == this.settings.feedback[parrafo]['general'].length;
			var completed = completeFrag || manyError;
			
			
			var completedStatus = {
					'completed': completed,
					completedErrors: manyError,
					fragComplete: completeFrag
			};
			
			return completedStatus;
		},
		
		isFinished:function(){
			return (Object.keys(STATUS).length == $('.js-solved').length);
		},
		
		showFeedback: function(message, status, parrafo){
			
			var vntn = $('.js-vntn-feedback');
			vntn.attr("data-correct", "");
			vntn.attr("data-par", "");
			if(status!=null){
				vntn.attr("data-correct", status);
			}
			if(parrafo!=null){
				vntn.attr("data-par", parrafo);
			}
			
			vntn.find('.vntn--contenido').html(message);
			this.overlay.removeClass('e-oculto');
			vntn.removeClass('e-oculto');
		},
		inactiveButtons: function(container){
			container.find('.js-borrar').addClass('e-inactivo').off('click');
			container.find('.js-confirmar').addClass('e-inactivo').off('click');
		}

};

var mwId = 'cap3_selTxt';

var mwTestSelection = new MWTextSelection(mwId,mwOptions);
$(document).ready(function(){
	mwTestSelection.init();
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if (evt.data && evt.data.type === "set") {
		
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=='indicaciones'){
			if(evt.data.value=='1'){
				$('.js-btn-instr').trigger('click');
			}
		} else
		if(evt.data.name=='par'){
			 $('div.js-vntn-comment[data-par="par1"]').addClass('e-oculto');
			 $('div.js-vntn-comment[data-par="'+evt.data.value+'"]').removeClass('e-oculto');
		} else 
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				
				//lo que se tenga que hacer por omisión / sin info específica
				//MARIO: ¿QUÉ HACER AQUÍ?
				
				//esto SIEMPRE debe ir
				
			} else {
				//lo que se tenga que hacer con base en historial
				//MARIO: ¿QUÉ HACER AQUÍ?
			}
			
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		} 
	}
}
