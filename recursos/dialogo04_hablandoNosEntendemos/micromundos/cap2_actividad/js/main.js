var wordSelectors = {};
var FEEDBACK = {
	trini:{
		frag1: {
			ok: '¡Buena selección! El primer deseo de Trini es que vayan a un lugar &quot;muy pintoresco&quot;: con bonitas calles, iglesias, artesanías y mercados.',
			short:'Selecciona la parte más importante de este comentario de Trini, o selecciónalo completito.',
			solution: 'El primer deseo de Trini es que vayan a un lugar &quot;muy pintoresco&quot;: con bonitas calles, iglesias, artesanías y mercados.' 
		},
		frag2: {
			ok: 'Muy bien, Trini quiere que haya museos.',
			short:'¿Cuál es la palabra más importante de esta oración? ¡Selecciónala y pulsa ‘Confirmar’!',
			solution: 'Trini quiere que haya museos.'
		},
		frag3: {
			ok: 'Identificaste bien esta importante condición expresada por Trini: el destino debe ser económico, porque ‘tienen que cuidar el bolsillo’, es decir, que los gastos no sobrepasen lo que tienen para las vacaciones.',
			short:'Vas por buen camino, pero ubica la frase más importante de esta oración.',
			solution:'Fíjate en esta importante condición expresada por Trini: el destino debe ser económico, porque ‘tienen que cuidar el bolsillo’, es decir, que los gastos no sobrepasen lo que tienen para las vacaciones.'
		},
		general: [
		          'Te comparto un truco: trata de seleccionar oraciones completas, desde la letra mayúscula inicial hasta el punto final de la oración.',
		          'Trini expresó tres deseos. ¿Cuáles son?',
		          'Por esta vez, te ayudo. Observa los tres principales deseos de Trini en la tabla y compáralos con el texto. Luego puedes cerrar esta ventanita.'
		]
	},
	lucia:{
		frag1: {
			error: 'En el primer comentario de Lucía no hay información que nos pueda ayudar a elegir un destino para el viaje. Sigue buscando.'
		},
		frag2: {
			ok: 'Hiciste bien en seleccionar este fragmento: Lucía espera que haya gente de su edad, que haya otros jóvenes.',
			short:'Caliente, caliente... En esta oración hay información útil, pero no seleccionaste las palabras más importantes. Borra tu selección e intenta nuevamente.',
			solution:'Lucía espera que haya gente de su edad, que haya otros jóvenes.'
		},
		general: [
		          'Lucía expresa un solo deseo con respecto al viaje. Además, está expresado de manera indirecta.',
		          'Busca la frase que empieza con la palabra &quot;no&quot; y... ¡atinarás!',
		          'Bueno, te echo una manita… Fíjate en la columna izquierda de la tabla: Lucía quiere que haya jóvenes, gente &quot;de su edad&quot;.'
		]
	},
	tono:{
		frag1: {
			error: 'En el primer comentario de Toño no hay información que nos sea útil para elegir un destino de viaje. Sigue buscando.'
		},
		frag2: {
			ok: 'Buena observación: Toño quiere acampar.',
			short:'Caliente, caliente... ¿Cuál es la palabra más importante de esta frase? ¡Selecciónala y pulsa ‘Confirmar’!',
			solution:'Toño quiere acampar.'
		},
		frag3: {
			error: 'Sí, Toño menciona la playa, el bosque y la orilla del río pero… ¡el lugar exacto no le importa! ¿Qué es lo que sí le importa?'
		},
		frag4: {
			ok: '¡Por supuesto! Toño quiere estar en la naturaleza, al aire libre, para jugar y explorar.',
			short:'¡Casi aciertas! Sólo selecciona la o las palabras clave de esta frase.',
			solution:'Toño quiere estar en la naturaleza, al aire libre, para jugar y explorar.'
		},
		frag5: {
			ok: '¡Tienes dotes de detective! A Toño le gustaría nadar.',
			short:'¿Cuál es el último deseo de Toño?',
			solution: 'A Toño le gustaría nadar.'
		},
		general: [
		          'Se me hace que estás seleccionando varios deseos a la vez. Vete con calma, oración por oración.',
		          'Te ayudo un poquito. Los tres deseos de Toño son: acampar, estar afuera (para jugar y salir a explorar) y ... ¿qué más? ',
		          '¡No está fácil!, ¿verdad? Básicamente, lo que Toño quiere es: <ol><li>Ir a acampar</li><li>Estar afuera, en la naturaleza (para jugar y explorar)</li><li>Nadar</li></ol>'
		]
	},
	principal:{
		ejercicioTerminado: '¡Buen trabajo! Ya completamos nuestra tabla con todas las solicitudes. Regresemos al diálogo.',
		personajeTerminado: '¡Bien hecho! Encontraste todos los deseos de [nombre]. Continúa con el siguiente familiar.',
		personajeNoTerminado: '¡Aún no has identificado todas las peticiones de [nombre]! Mejor búscalas de una vez.'
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
		trini: {
			errorCount : 0,
			errorInFragment:{},
			completedFragments : [],
			complete: false,
			totalFragments : 0,
			errorFragments : [],
			nombre: 'Trini',
			interactions: 0
		},
		lucia: {
			errorCount : 0,
			errorInFragment:{},
			completedFragments : [],
			complete: false,
			totalFragments : 0,
			errorFragments : [],
			//errorFragments : [1],
			nombre: 'Lucía',
			interactions: 0
		},
		tono: {
			errorCount : 0,
			errorInFragment:{},
			completedFragments : [],
			complete: false,
			totalFragments : 0,
			errorFragments : [],
			//errorFragments : [1,3,6],
			nombre: 'Toño',
			interactions: 0
		}
};

var MESSAGES = {
	noselection: 'Recuerda que debes seleccionar uno por uno los fragmentos que contienen un deseo o una solicitud que quieres agregar a la tabla.'	
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
		    
		    
		    //init vntn-containers
		    var personContainer = $('.js-person-container');
		    personContainer.each(function(){
		    	var currContainer = $(this);
		    	var personaje = currContainer.find('.solicitudes--personaje').on('click', function(person){
		    		return function(){
		    			$('.js-vntn-comment[data-personaje="'+person+'"]').removeClass('e-oculto');
		    		}
		        }(currContainer.data('personaje')));
		    });
		    
		    
		    
		    // init windows
		    var vntns = $('.vntn').addClass('e-oculto');
		    var vntnsNumber = vntns.length;
		    
		    
		    for(var i=0; i<vntnsNumber; i++){
		    	var vtn = $(vntns.get(i));
		    	
		    	var personaje = vtn.data('personaje');
		    	var wordSelector = this.wordSelectors[personaje];
		    	
		    	var closeBtn = $('<button class="vntn--btn-cerrar">X</button>');
		    	closeBtn.on('click', function(){
		    		var vtn = $(this).closest('.vntn');
		    		
		    		vtn.addClass('e-oculto');
		    		
		    		_this.overlay.addClass('e-oculto');
		    		
		    		
		    		if(vtn.hasClass("js-vntn-comment")){
		    			_this.wordSelectors[vtn.data('personaje')].clearSelection();
		    			_this.updateDrags(vtn.data('personaje'));
		    		}
		    		
		    	});
		    	vtn.append(closeBtn);
		    	
		    	// Buttons
		    	vtn.find('.js-borrar')
		    		.data('personaje',vtn.data('personaje'))
		    		.on('click', function(){
		    		
		    		_this.wordSelectors[$(this).data('personaje')].clearSelection();
		    		_this.updateDrags($(this).data('personaje'));
		    		
		    	});
		    	vtn.find('.js-confirmar').
		    		data('personaje',vtn.data('personaje')).
		    		on('click', function(){
		    			var person = $(this).data('personaje');
			    		var selectionRange = _this.wordSelectors[person].getSelectionWordRange();
			    		
			    		var ws = _this.wordSelectors[person];
			    		//console.log("WS state:"+ws.currentState);
			    		
			    		if(ws.currentState!= WordSelector.SELECTED_COMPLETE){
			    			
			    			//update
			    			_this.updateWSState(person);
			    			
			    			
			    		}
			    		
			    		_this.verifyUserAnswer(person);

		    		});
		    			    	
		    	// Create wordWrap
		    	if(vtn.hasClass('js-vntn-comment')){
		    		
		    		var from = vtn.find('.js-texto-orig').remove();
		    		var to = vtn.find('.js-texto-final');
		    		var person = vtn.data('personaje');
		    				    		
		    		var personStatus = _this.settings.status[person];
		    		
		    		var wordSelector = new WordSelector(from, to, {onClick: function(){console.log('No firstSelection')}});
		    		_this.wordSelectors[person] = wordSelector;
		    		
		    		var frags = vtn.find('[data-frag]');
		    		var errFrag = frags.filter('[data-err]');
		    		errFrag.each(function(){
		    			personStatus.errorFragments.push($(this).data('frag'));
		    		});
		    		if(personStatus == null){
		    			_this.settings.status[person] = {};
		    		}
		    		personStatus.totalFragments = frags.length - personStatus.errorFragments.length;
		    		personStatus.textContainer = vtn;
		    		
		    		//Add click to verify personCompleted
		    		closeBtn.off('click');
		    		closeBtn.on('click', function(){
			    		var vtn = $(this).closest('.vntn');
			    		var person = vtn.data('personaje');
			    		var personStatus = _this.settings.status[person];
			    		var personName = personStatus.nombre;
			    		console.log(personStatus);
			    		if(!personStatus.complete && (personStatus.completedFragments.length>0 || personStatus.interactions>0)){
			    			var mssg = _this.settings.feedback.principal.personajeNoTerminado.replace("[nombre]", personName.substring(0,1).toUpperCase()+personName.substring(1));
			    			_this.showFeedback(mssg , false, person);
			    			
			    		} else {
			    			vtn.addClass('e-oculto');
				    		
				    		_this.overlay.addClass('e-oculto');
				    		_this.wordSelectors[vtn.data('personaje')].clearSelection();
			    		}
			    		
			    		
			    		
			    	});
		    		
		    		//Configure D&D text selection
			    	var words =  vtn.find('.js-texto-orig .word');
			    	var drag = $('<span class="dr"></span>');
			    	
			    	var cloneDrag;
			    	var currW;
			    	words.each(function(){
			    		currW = $(this);
			    		
			    		cloneDrag = drag.clone().css('position','absolute');
			    		cloneDrag.data('person',vtn.data('personaje'));
			    		cloneDrag.data('idWord', $(this).data('word')).draggable({
			    			revert: true,
			    			containment: vtn,
			    			start: function(event, ui){
			    				var ws = _this.wordSelectors[$(this).data('person')];
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
			    	    	  //get person
			    	    	  var person = $(this).closest('.js-vntn-comment').data('personaje');
			    	    	  var ws = _this.wordSelectors[person];
			    	    	  //console.log("Personaje: "+person);
			    	    	  
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
			    	        	//get person
				    	    	  var person = $(this).closest('.js-vntn-comment').data('personaje');
				    	    	  var ws = _this.wordSelectors[person];
			    	        	
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
		   

		    
		    
		},
		
		disableAllDrags: function(person){
			var ws = this.wordSelectors[person];
			var inactiveWords = ws.allWords.filter('.ui-droppable');
			inactiveWords.find('.dr').remove();
			inactiveWords.droppable('destroy');

		},
		
		updateDrags: function(person){
			//console.log('--//'+person+'//--');
			
			var ws = this.wordSelectors[person];
			var inactiveWords = ws.allWords.filter('.e-inactivo.ui-droppable');
			
			inactiveWords.find('.dr').remove();
			inactiveWords.droppable('destroy');
			
			ws.allWords.find('.dr').show();
		},
		
		updateWSState: function(person){
			
			var ws = this.wordSelectors[person];
    		
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
				//console.log("Final WS , "+ws.currentFirst+"->"+ws.currentLast);
    		}
		},
		
		
		verifyUserAnswer: function(person){
			var selectionRange = this.wordSelectors[person].getSelectionWordRange();
    		
    		var feedbackObj = this.getFeedbackForSelection(selectionRange, person);
    		//var feedbackText = this.getFeedbackForSelection(selectionRange, person);

    		var feedbackText = feedbackObj.text;
    		var correctStatus = feedbackObj.correct;

    		//_this.verifyComplete(person, feedbackText);
    		
    		var completedStatus = this.getCompletedStatus(person);
    		
    		if( completedStatus.completed ){
    			
				this.settings.status[person].complete = true;
				this.inactiveButtons(this.settings.status[person].textContainer);
				
				var ws = this.wordSelectors[person];
				ws.allWords.off('click');

				this.settings.status[person].textContainer.addClass('js-solved');
								
				var message = feedbackText + '<p>'+ this.settings.feedback.principal.personajeTerminado.replace("[nombre]", this.settings.status[person].nombre)+'</p>';
				
				ws.clearSelection();
				
				//---this.updateDrags(person);
				this.disableAllDrags(person);
				
				/*
				//Add click to close feedabck
				$('.js-vntn-feedback > .vntn--btn-cerrar').on('click', function(){
					$('.js-vntn-comment[data-personaje="'+person+'"]').addClass('e-oculto');
				});
				*/
				
				
				if( completedStatus.completedErrors ){
					this.showFeedback(this.settings.feedback[person]['general'][this.settings.status[person].errorCount-1], false, person);
					//Show all fragment solution
					var personComment =  $('.js-vntn-comment[data-personaje="'+person+'"]');
					
					this.showSolution(personComment);

					this.showAllFragmentInTable(person);
					return;
				}
				
				if(this.isFinished()){
					var _this = this;
					message = feedbackText + '<p>' + this.settings.feedback.principal.ejercicioTerminado + '</p>';
					setTimeout(function(){
						var padre = window.parent;
						var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: _this.mwId } };
						padre.postMessage(mensajeTipoSet, "*");	
					},5000);
				}
				
				
				
				this.showFeedback(message, correctStatus, person);
				return;
			}
			
			this.showFeedback(feedbackText, correctStatus, person);
    		
		},

		getFeedbackForSelection: function(selectedRange, person){
			var errorCount = this.settings.status[person].errorCount;
			var resultObj = {
					text : '',
					correct: false
			};
			
			if(this.settings.status[person].complete){
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
				
			var ws = this.wordSelectors[person];
			var fragments = $('.js-vntn-comment[data-personaje="'+person+'"] [data-frag]').not(".e-inactivo");
			
			var fragNum = fragments.length;
			var currFrag;
			var currWR;
			var currFragIndex = 0;
			
			var firstFrag = null;
			
			var fragCompleteCount = 0;
			
			var currStatus = this.settings.sel_status.NONE;
			var isErrorFrag = false;
			
			var personStatus = this.settings.status[person];
			
			//log interactionNumber
			personStatus.interactions++;
			
			//Verify by fragment
			for(var i=0; i<fragNum; i++){
				
				currFrag = $(fragments.get(i));
				currFragIndex = currFrag.data('frag');
				currWR = new WordRange(currFrag.find('.word'), ws.wordWrapper.settings.customDataAttrName);
				isErrorFrag = personStatus.errorFragments.indexOf(currFragIndex)>=0;
				
				//Verify error fragment
				if(isErrorFrag && currWR.containsRange(selectedRange)){
					//this.showFeedback(this.settings.feedback[person]['frag'+currFragIndex]['error']);
					this.inactiveFragment(currFragIndex, person);
					resultObj.text = this.settings.feedback[person]['frag'+currFragIndex]['error'];
					resultObj.correct = false;
					return resultObj;
					//return this.settings.feedback[person]['frag'+currFragIndex]['error'];
				}
				
				
				// All frag contained in Selection
				if(selectedRange.containsRange(currWR)){
					
					// Verify more selected
					if(selectedRange.getMinIndex() < currWR.getMinIndex() || 
							selectedRange.getMaxIndex() > currWR.getMaxIndex() ){
						
						currStatus = this.settings.sel_status.MANY_FRAGMENT;
						
						//this.showFeedback(this.settings.feedback[person]['general'][errorCount]);
						personStatus.errorCount++;
						resultObj.text = this.settings.feedback[person]['general'][errorCount];
						resultObj.correct = false;
						return resultObj;
						//return this.settings.feedback[person]['general'][errorCount];
						
					}
					
					// All Fragment selected
					currStatus = this.settings.sel_status.ONE_FRAGMENT;
					//this.showFeedback(this.settings.feedback[person]['frag'+currFrag.data('frag')]['ok']);
					selectedRange.elements.addClass('e-correcto');
					this.showFragmentComplete(currFrag.data('frag'), person);
					resultObj.text = this.settings.feedback[person]['frag'+currFrag.data('frag')]['ok'];
					resultObj.correct = true;
					return resultObj;
					//return this.settings.feedback[person]['frag'+currFrag.data('frag')]['ok'];

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
							//this.showFeedback(this.settings.feedback[person]['frag'+currFrag.data('frag')]['ok']);
							selectedRange.elements.addClass('e-correcto');
							this.showFragmentComplete(currFrag.data('frag'), person);
							resultObj.text = this.settings.feedback[person]['frag'+currFrag.data('frag')]['ok'];
							resultObj.correct = true;
							return resultObj;
						}
						
					}
					
					//Not minSel
					//Verify already selected this fragment
					if(personStatus.errorInFragment[currFragIndex] != null ){
						currFrag.find('.word').addClass('e-solucion');
						this.showFragmentComplete(currFragIndex, person);
						resultObj.text = this.settings.feedback[person]['frag'+currFrag.data('frag')]['solution'];
						resultObj.correct = false;
						return resultObj;
						//return this.settings.feedback[person]['frag'+currFrag.data('frag')]['solution'];
					}
					
					personStatus.errorInFragment[currFragIndex] = 1;
					//this.showFeedback(this.settings.feedback[person]['frag'+currFrag.data('frag')]['short']);
					resultObj.text =this.settings.feedback[person]['frag'+currFrag.data('frag')]['short'];
					resultObj.correct = false;
					return resultObj;

				}
				
				// Verify intersection
				if((selectedRange.getMinIndex() >= currWR.getMinIndex() && selectedRange.getMinIndex() <= currWR.getMaxIndex()) ||
					(selectedRange.getMaxIndex() >= currWR.getMinIndex() && selectedRange.getMaxIndex() <= currWR.getMaxIndex())){
						//this.showFeedback(this.settings.feedback[person]['general'][errorCount]);
						personStatus.errorCount++;
						resultObj.text = this.settings.feedback[person]['general'][errorCount];
						resultObj.correct = false;
						return resultObj;
						//return this.settings.feedback[person]['general'][errorCount];
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
			//$('.js-vntn-comment[data-personaje="'+person+'"] [data-frag]').not("[data-err]").find('.word').addClass('e-inactivo e-solucion');
			
			//this.updateDrags(person);
			this.disableAllDrags(comment.data('personaje'));
		},
		
		showFragmentInTable: function(fragIndex, person){
			var container = $('.js-person-container[data-personaje="'+person+'"]');
			container.find('.solicitudes--solicitud[data-frag="'+fragIndex+'"]').removeClass('e-oculto');
		},
		showAllFragmentInTable: function(person){
			var container = $('.js-person-container[data-personaje="'+person+'"]');
			container.find('.solicitudes--solicitud').removeClass('e-oculto');
		},
		getMinSel: function(fragIndex, person){
			var container = $('.js-vntn-comment[data-personaje="'+person+'"]');
			return container.find('[data-frag="'+fragIndex+'"] > .js-sel-min');
		},
		inactiveFragment: function(fragIndex, person){
			
			var ws = this.wordSelectors[person];
			var container = this.settings.status[person].textContainer; //$('.js-vntn-comment[data-personaje="'+person+'"]');
			var frag = container.find('[data-frag="'+fragIndex+'"]');
			var wr = ws.getWordRangeInElement(frag);
			wr.elements.addClass('e-inactivo').off('click');
			ws.clearSelection();
			
			//remove drags
			this.updateDrags(person);
		},
		highlightFragment: function(fragIndex, person){
			
		},
		
		showFragmentComplete: function(fragIndex, person){
			var ws = this.wordSelectors[person];
			var container = this.settings.status[person].textContainer;
			var frag = container.find('[data-frag="'+fragIndex+'"]');
			var wr = ws.getWordRangeInElement(frag);
			wr.elements.addClass('e-inactivo').off('click');
			ws.clearSelection();
			this.showFragmentInTable(fragIndex, person);
			this.settings.status[person].completedFragments.push(fragIndex);
			
			//remove drags
			
			this.updateDrags(person);
		},
		
		getCompletedStatus:function(person){

			var completeFrag = this.settings.status[person].completedFragments.length == this.settings.status[person].totalFragments;
			var manyError = this.settings.status[person].errorCount == this.settings.feedback[person]['general'].length;
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
		
		showFeedback: function(message, status, person){
			
			var vntn = $('.js-vntn-feedback');
			vntn.attr("data-correct", "");
			vntn.attr("data-personaje", "");
			if(status!=null){
				vntn.attr("data-correct", status);
			}
			if(person!=null){
				vntn.attr("data-personaje", person);
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

var mwId = 'cap2_actividad';
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
