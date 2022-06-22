
var FEEDBACK = {
	
};


var mwOptions = {
	feedback : FEEDBACK,
	instrucciones : {
		fase1: "Presiona con el dedo sobre las oraciones que te gustaría cambiar; yo te daré varias opciones de sustitución. Elige la que más te agrada.<br><br>Cuando hayas seleccionado todos los fragmentos que deseas cambiar, presiona '¡Listo!'.",
		fase2: "Con las oraciones que acabas de elegir y los otros elementos que aparecieron en pantalla, podrás reconstruir el texto para que quede más a tu gusto.\
		        <br><br>Simplemente presiona los fragmentos en el orden en que los quieres colocar. Solitos se acomodarán.\
			<br><br>Recuerda estos puntos importantes:\
			<ul><li>Procura agrupar las ideas relacionadas entre sí.</li><li>Usa correctamente los conectores según el tipo de relación que expresan.</li><li>El uso de las frases para marcar ideas ('marcadores') es opcional.</li></ul>¡Adelante con la recreación!"
	},
	config: {
		elena: {
			blank1:{
				opt1:{
					text: 'Esta candidata se llama María Elena, tiene 11 años y juega futbol desde hace cuatro años.',
					feedback: null,
					correct: true
				},
				opt2:{
					text:'María Elena, de 11 años, ya tiene cuatro años jugando futbol.',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'La joven María Elena tiene 11 años, de los cuales cuatro jugando futbol.',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'Esta futbolista, de nombre María Elena y con 11 años de edad, ya cuenta con cuatro años de experiencia jugando en un equipo.',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'María Elena es una chica de 11 años que practica el futbol desde la temprana edad de siete.',
					feedback: null,
					correct: true
				}

			},
			blank2:{
				opt1:{
					text: 'Se lució en la prueba de velocidad, alcanzado a correr 70 metros en diez segundos.',
					feedback: null,
					correct: true
				},
				opt2:{
					text: 'En la prueba de velocidad, no tuvo su igual.',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'Es la que corre más velozmente.',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'Su rapidez al correr es asombrosa para alguien de su edad.',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'Es rápida como el viento.',
					feedback: null,
					correct: true
				}
			},
			blank3:{
				opt1:{
					text: 'demostró tener una condición física muy sólida',
					feedback: null,
					correct: true
				},
				opt2:{
					text: 'se encuentra en óptimas condiciones físicas',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'en la prueba de condición física, se colocó en segundo lugar',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'es la segunda mejor en lo que a la condición física se refiere',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'logró brincar 85 veces a la cuerda en un minuto, evidenciando así su fortaleza física',
					feedback: null,
					correct: true
				}
			},
			blank4:{
				opt1:{
					text: 'Con ocho de diez remates concretados, se puede decir que su capacidad goleadora es buena',
					feedback: null,
					correct: true
				},
				opt2:{
					text: 'Logró concretar ocho de diez disparos a gol, por lo que su capacidad goleadora está justo en la media de las tres candidatas',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'Su desempeño frente a la portería es más que satisfactorio',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'Al rematar a gol, fue efectiva ocho de diez veces',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'Su capacidad para anotar es de ocho sobre diez',
					feedback: null,
					correct: true
				}
			},
			blank5:{
				opt1:{
					text: 'no es la más ágil con el balón',
					feedback: null,
					correct: true
				},
				opt2:{
					text: 'habrá que trabajar en su habilidad para engañar al oponente',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'su agilidad con la pelota es regular',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'en la prueba de agilidad, fue la que se destacó menos',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'hay oportunidad para mejorar su capacidad de burlar al oponente',
					feedback: null,
					correct: true
				}
			}
			
		},
		claudia: {
			blank1:{
				opt1:{
					text: 'Esta candidata se llama Claudia, tiene 12 años y juega futbol desde hace dos años.',
					feedback: null,
					correct: true
				},
				opt2:{
					text:'Claudia, de 12 años, tiene dos años jugando futbol.',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'La joven Claudia tiene 12 años, de los cuales dos jugando futbol.',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'Esta futbolista, de nombre Claudia y con 12 años de edad, ya cuenta con dos años de experiencia jugando en un equipo.',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'Claudia es una chica de 12 años que practica el futbol desde que tenía 10.',
					feedback: null,
					correct: true
				}

			},
			blank2:{
				opt1:{
					text: 'Su capacidad para anotar es asombrosa',
					feedback: null,
					correct: true
				},
				opt2:{
					text: 'Tuvo un desempeño extraordinario frente a la portería',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'Fue superior a las otras candidatas en la prueba de anotación',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'Sin duda alguna, es la mejor a la hora de rematar a gol',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'Demostró ser contundente en el ataque',
					feedback: null,
					correct: true
				}
			},
			blank3:{
				opt1:{
					text: 'su habilidad para fintar es admirable',
					feedback: null,
					correct: true
				},
				opt2:{
					text: 'ella es la mejor cuando de esquivar al oponente se trata',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'es la más ágil con el balón, y con bastante margen',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'con cuatro defensas burladas, se impuso claramente en la prueba de agilidad con el balón',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'para driblar, no hubo otra igual',
					feedback: null,
					correct: true
				}
			},
			blank4:{
				opt1:{
					text: 'no es tan veloz',
					feedback: null,
					correct: true
				},
				opt2:{
					text: 'no corre tan rápido como las otras dos candidatas',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'su velocidad es bastante inferior a la de las otras dos',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'corre menos rápido que sus dos competidoras',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'su desempeño en la prueba de velocidad no fue tan bueno',
					feedback: null,
					correct: true
				}
			},
			blank5:{
				opt1:{
					text: 'aún no posee la condición física de sus contrincantes',
					feedback: null,
					correct: true
				},
				opt2:{
					text: 'su condición física es regular',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'hay oportunidad para que su condición física mejore',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'habría que trabajar en su condición física',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'aunque no se encuentra en excelentes condiciones físicas, puede rendir',
					feedback: null,
					correct: true
				}
			}
			
		},
		ana: {
			blank1:{
				opt1:{
					text: 'Esta candidata se llama Ana María, tiene 11 años y sería la primera vez que juegue en un equipo.',
					feedback: null,
					correct: true
				},
				opt2:{
					text:'Ana María, de 11 años, no cuenta con experiencia previa jugando en un equipo.',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'La joven Ana María tiene 11 años y nunca ha formado parte de un equipo.',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'Esta futbolista, de nombre Ana María y con 11 años de edad, carece de experiencia jugando en un equipo formal.',
					feedback: null,
					correct: true
				}
			},
			blank2:{
				opt1:{
					text: 'Su condición física es superior a la de las demás candidatas.',
					feedback: null,
					correct: true
				},
				opt2:{
					text: 'Se encuentra en óptimas condiciones físicas.',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'En la prueba de condición física, se colocó en primer lugar.',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'En lo que concierne a la condición física de las candidatas, es la mejor.',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'Logró brincar 92 veces a la cuerda en un minuto, demostrando así una extraordinaria fortaleza física.',
					feedback: null,
					correct: true
				}
			},
			blank3:{
				opt1:{
					text: 'en velocidad, es la segunda mejor',
					feedback: null,
					correct: true
				},
				opt2:{
					text: 'tuvo un excelente desempeño en la prueba de velocidad',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'se colocó en segundo lugar en la prueba de velocidad, justo detrás de María Elena',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'logró recorrer 65 metros en diez segundos: un resultado admirable',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'corre a muy buena velocidad',
					feedback: null,
					correct: true
				}
			},
			blank4:{
				opt1:{
					text: 'su capacidad para anotar es inferior a la de las otras dos seleccionadas',
					feedback: null,
					correct: true
				},
				opt2:{
					text: 'su desempeño frente a la portería no fue tan bueno',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'en la prueba de anotación, resultó ser la menos fuerte',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'con seis disparos de diez concretados, queda claro que puede mejorar su capacidad goleadora',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'entrenando aprenderá a ser más contundente en el ataque',
					feedback: null,
					correct: true
				}
			},
			blank5:{
				opt1:{
					text: 'considerando la falta de experiencia de esta candidata, su habilidad con el balón es bastante buena',
					feedback: null,
					correct: true
				},
				opt2:{
					text: 'su habilidad para engañar al oponente es la segunda mejor',
					feedback: null,
					correct: true
				},
				opt3:{
					text: 'logró esquivar a dos oponentes, un buen desempeño si consideramos su falta de currículo',
					feedback: null,
					correct: true
				},
				opt4:{
					text: 'en la prueba de agilidad, se colocó en segundo lugar',
					feedback: null,
					correct: true
				},
				opt5:{
					text: 'hay oportunidad para mejorar su capacidad de burlar al oponente',
					feedback: null,
					correct: true
				}
			}
			
		}
		
	}
};


function MWMain(mwId,options){
	this.mwId = mwId;
	this.player = "";
	this.settings = $.extend({}, options);
	this.playerWindows = {};
	this.currentStatus = {
		playersCompleted : 0
	};
}

MWMain.prototype = {
	
		init:function(playerName){
			
			this.inicio = true;
			this.player = playerName;
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
			this.feedbackWindow = $('.js-vntn-feedback');
			this.btBorrar = $('.js-btn-borrar');
			
			var _this = this;

			this.initWindows();
		    
		    
		    /*$('.js-player-data').on('click', function(){
		    	$('.js-vntn-player[data-player="'+$(this).data('player')+'"]').removeClass('e-oculto');
		    	//_this.initOptions($(this).data('player'));
		    })
		    */
		    
		    $('.js-vntn-player[data-player="'+this.player+'"]').removeClass('e-oculto');
		    $('.div-fase1 .foto').attr('src','img/'+this.player+'.png');
		    
		    /* mostrar instrucciones */
		    this.mostrarInstrucciones(this.settings.instrucciones.fase1);
		  
		    $('.js-btn-finish').on('click', function(){
				_this.verifyCompleted();
			});
		    
		    $('.js-btn-cambiarOraciones').on('click', function(){
				$('.div-fase1').removeClass('e-oculto');
				$('.div-fase2').addClass('e-oculto');
				$('.vntn-inst .vntn--contenido').html(_this.settings.instrucciones.fase1);
			});
		},
		
		reinit: function(playerName){
			this.player = playerName;
			this.inicio = false;
			$('.js-vntn-player').addClass('e-oculto');
			$('.js-vntn-player[data-player="'+playerName+'"]').removeClass('e-oculto');
			$('.div-fase1 .foto').attr('src','img/'+playerName+'.png');
			$('.div-fase2').addClass('e-oculto');
			$('.div-fase1').removeClass('e-oculto');
			this.btBorrar.off();
		},
		
		initWindows: function(){
			var _this = this;
			// init windows
		    var vntns = $('.vntn').addClass('e-oculto');
		    var vtn;
		    for(var i=0; i<vntns.length; i++){
		    	 vtn = $(vntns.get(i));
		    	//Tine
			if(!vtn.hasClass('vntn-player')){
				var closeBtn = $('<button class="vntn--btn-cerrar">X</button>');
				closeBtn.on('click', function(){
					var vtn = $(this).closest('.vntn');
					vtn.addClass('e-oculto');
					_this.overlay.addClass('e-oculto');
					
				});
				vtn.append(closeBtn);
			}
		    	
		    	
		    	if(vtn.hasClass('vntn-player')){
		    		this.playerWindows[vtn.data('player')] = vtn;
		    		
		    		var blanks = vtn.find('span.blank').each(function(){
		    			console.log(vtn.data('player'));
		    			var currBlank = $(this);
		    			currBlank.data('player', vtn.data('player'))
		    			currBlank.on('click',function(){
		    				_this.showOptions(currBlank.data('player'), currBlank);
						//Tine
						$('span.blank').removeClass('e-seleccionado');
						currBlank.addClass('e-seleccionado');
		    			});
		    		});
		    		
		    		
		    		var optionsDiv = $('<div class="js-options options"></div>');
				vtn.append(optionsDiv);
		    		
		    	}
		    }
		    
		    $('.js-btn-instr').on('click', function(){
				$('.js-instrucciones').removeClass('e-oculto');
				_this.overlay.removeClass('e-oculto');
			});
		},
		
		mostrarInstrucciones: function(txt){
			$('.vntn-inst').removeClass('e-oculto');
			$('.vntn-inst .vntn--contenido').html(txt);
			this.overlay.removeClass('e-oculto');	
		},
		
		activarBorrar: function(){
			if(this.btBorrar.hasClass('e-inactivo')){
				var _this = this;
				this.btBorrar.removeClass('e-inactivo');
				this.btBorrar.on('click', function(){
					var $lastFrag = $('.parrafo span:last-child');
					var id = $lastFrag.attr('data-id');
					var $slctr = $('.txtElem[data-id="'+id+'"]');
					_this.activateTxtElems($slctr);
					$lastFrag.remove();
					var $prevFrag = $('.parrafo span:last-child');
					if($lastFrag.html()=='y '){
						var newTxt = $prevFrag.html().substr(0,$prevFrag.html().length-1) + '. ';
						$prevFrag.html(newTxt);
					}
					if($prevFrag.hasClass('first')){
						_this.desactivarBorrar();
					}
				});
			}
		},
		
		desactivarBorrar: function(){
			this.btBorrar.addClass('e-inactivo');
			this.btBorrar.off();
		},
		
		verifyCompleted: function(){
			
				this.finishExercise();
				return;
			
		},
		
		showSolution: function(){
	
			
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
			
			//alert("Exercise complete");
			
			//$('.js-vntn-player[data-player="'+this.player+'"]').addClass('e-oculto');
			//$('.js-btn-finish').addClass('e-oculto');
			$('.div-fase1').addClass('e-oculto');
			
			this.iniciarFase2();
		},
	
		
		showOptions: function(playerName, blankSpan){
			
			console.log("show options for: "+playerName);
			console.log(blankSpan);
			
			var optionDiv = $('.js-vntn-player[data-player="'+playerName+'"]>.js-options');
			console.log(optionDiv);
			optionDiv.empty();
			
			var options = this.settings.config[playerName]['blank'+blankSpan.data('blank')];
			
			console.log(options);
			var _this = this;
			
			var optSpan = $('<span class="option"></span>');
			var currOptSpan;
			var currOptConfig;
			for(var opt in options){
				currOptConfig = options[opt];
				currOptSpan = optSpan.clone();
				currOptSpan.data('id', opt).data('blank', 'blank'+blankSpan.data('blank'));
				currOptSpan.data('blankSpan', blankSpan);
				currOptSpan.html(currOptConfig.text);
				
				currOptSpan.on('click', function(){
					_this.verifyAnswer(playerName, $(this));
				});
				
				
				optionDiv.append(currOptSpan);
			}
		
		},
		
		verifyAnswer: function(playerName, optionSpan){
			
			console.log('Verify: '+optionSpan.data('id')+" : "+optionSpan.data('blank'));
			
			//Tine css
			var optionDiv = $('.js-vntn-player[data-player="'+playerName+'"]>.js-options');
			jQuery('span.option',optionDiv).removeClass('e-seleccionado');
			optionSpan.addClass('e-seleccionado');
			
			//Init currentStatus
			if(this.currentStatus[playerName]==null){
				this.initPlayerStatus(playerName);
			}
						
			var playerStatus = this.currentStatus[playerName];
			var optionData = this.settings.config[playerName][optionSpan.data('blank')][optionSpan.data('id')];
			
			console.log(optionData);
			
			//comentado por Tine
			//optionSpan.off('click');
			//optionSpan.addClass('e-inactivo');
			
			if(optionData.correct===true){
				var blankSpan = optionSpan.data('blankSpan');
				//blankSpan.off('click');
				//blankSpan.addClass('e-resuelto');
				blankSpan.html(optionData.text);
				
				//this.disableOptions(playerName);
			}
			
			if(optionData.feedback!=null){
				
				this.showFeedback(optionData.feedback, optionData.correct);
			}
			
		},
		
		iniciarFase2: function(){
			$('.parrafo').empty();
			this.addOraciones();
			var $slctr = $('.txtElem');
			this.activateTxtElems($slctr);
			$('.div-fase2').removeClass('e-oculto');
			if(this.inicio){
				this.inicio=false;
				this.mostrarInstrucciones(this.settings.instrucciones.fase2);
			} else {
				$('.vntn-inst .vntn--contenido').html(this.settings.instrucciones.fase2);
			}
		},
		
		addOraciones: function(){
			var _this = this;
			var $oraciones = $('.oraciones');
			$("div").remove(".oracion");
			$('.js-vntn-player[data-player="'+this.player+'"] span.blank').each(function(){
				var txt = _this.makeOracion($(this).html());
				if($(this).attr('data-blank')!=1){
					var $div = $("<div>", {'class':'txtElem oracion','data-id': 'or_'+txt.substr(0,10) });
					$div.html(txt);
					$div.appendTo($oraciones);
				} else {
					var $span = $("<span>", {'class': 'fragmento first' });
					$span.html(txt);
					$span.appendTo($('.parrafo'));
				}
			});	
		},
		
		activateTxtElems:function($slctr){
			var _this = this;
			$slctr.removeClass('e-inactivo');
			$slctr.off();
			$slctr.on('click',function(){
				$(this).off();
				$(this).addClass('e-inactivo');
				//_this.addFragment($(this).html(),$(this).attr('data-id'));
				_this.addFragment($(this));
				_this.checkFinished();
			});
		},
		
		checkFinished: function(){
			if($('.txtElem.oracion:not(.e-inactivo)').length==0){
				var par = $('.parrafo').text();
				this.setMwValue('cap4_3parrafos',this.player,par);
			}
		},
		
		//addFragment: function(txt,id){
		addFragment: function(txtElem){
			var txt = txtElem.html();
			var id = txtElem.attr('data-id');
			var _this = this;
			var $prevFrag = $('.parrafo span:last-child');
			if(/^(cntr|mrcdr)/.test($prevFrag.attr('data-id'))){
				if(!/^(María|Claudia|Ana)/.test(txt)){
					txt = txt.charAt(0).toLowerCase() + txt.substr(1);
				}
			}
			if(txt == 'y '){
				var newPrevTxt = $prevFrag.html().substr(0,$prevFrag.html().length-2) + ' ';
				$prevFrag.html(newPrevTxt);
			}
			var clases = txtElem.hasClass('conector')?'fragmento conector':(txtElem.hasClass('marcador')?'fragmento marcador':'fragmento');
			var $span = $("<span>", {'class': clases,'data-id':id });
			$span.html(txt);
			$span.appendTo($('.parrafo'));
			/*$span.on('click',function(){
				var id = $(this).attr('data-id');
				var $slctr = $('.txtElem[data-id="'+id+'"]');
				_this.activateTxtElems($slctr);
				$(this).remove();
				if($(this).html()=='y '){
					newPrevTxt = $prevFrag.html().substr(0,$prevFrag.html().length-1) + '. ';
					$prevFrag.html(newPrevTxt);
				}
			});*/
			this.activarBorrar();
		},
		 
		
		makeOracion: function(txt){
			txt = txt.charAt(0).toUpperCase() + txt.substr(1);
			txt.trim();
			if(!/\.$/.test(txt)){
				txt = txt + ". ";
			} else {
				txt = txt + " ";
			}
			return txt;
		},
		
		initPlayerStatus: function(playerName){
			this.currentStatus[playerName] = {
					completed: false
				};
		},
		
		disableOptions: function(playerName){
			var opts =  $('.js-vntn-player[data-player="'+playerName+'"]').find('.option');
			opts.off('click').addClass('e-inactivo');
		},
		
		playerFinished: function(playerName){
			console.log("END : "+playerName);
			var playerStatus = this.currentStatus[playerName];
			playerStatus.completed = true;
			
			
		},
		
		
		// chat
		
		setMwValue:function(target,nombre,valor){
			var padre = window.parent;
			var mensajeTipoSet = { command: "setMicroworldValue", params: {id: this.mwId, targetId: target, name: nombre, value: valor } }; 
			padre.postMessage(mensajeTipoSet, "*");	
		}

};

var mwId = 'cap4_actividad';
var mwMain = new MWMain(mwId,mwOptions);

$(document).ready(function(){
	
	//mwMain.init('ana');
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");
	
	getMwSettings('cap4_3parrafos');
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if (evt.data && evt.data.type === "set") {
		if(evt.data.name=="microworldSettings"){
			var arr = evt.data.value.match(/favorita\:(elena|ana|claudia)/);
			if(arr && arr.length>0){
				var favorita = arr[0].replace(/favorita\:/,'');
				mwMain.init(favorita);
			}
		} else
		if(evt.data.name=='candidata'){
			//mwMain.init(evt.data.value);
			mwMain.reinit(evt.data.value);
		} else
		if(evt.data.name=="mwReconstruction"){
			
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica
				//nada, que lo vuelvan a hacer; de todos mods mw=inactive-->setAnswer no se pela
				
			} else {
				
			}
								
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		} 
		
	}
}


function getMwSettings(target){
	var padre = window.parent;
	var mensajeTipoSet = { command: "getMicroworldSettings", params: {id: mwId, targetId: target, src: 'chat' } }; //src = mw/chat
	padre.postMessage(mensajeTipoSet, "*");	
}

