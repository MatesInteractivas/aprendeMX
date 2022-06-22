var textos = {
	p1: {
		faseIni: 'Hija.',
		faseMayusculas: '<span class="e-resaltado">H</span>ija.',
		fasePregIni: 'Hija.',
		fasePregSel: '<span class="e-seleccionable incorr">Hija.</span>',
		fasePregFin: 'Hija.',
		faseAmbosSel: 'Hija.',
		faseFinal: 'Hija.'
	},
	p10: {
		faseIni: '---',
		faseMayusculas: '---',
		fasePregIni: '---',
		fasePregSel: '<span class="e-seleccionable incorr">---</span>',
		fasePregFin: '---',
		faseAmbosSel: '---',
		faseFinal: '---'
	},
	p2: {
		faseIni: 'Hija.',
		faseMayusculas: '<span class="e-resaltado">H</span>ija.',
		fasePregIni: 'Hija.',
		fasePregSel: '<span class="e-seleccionable incorr">Hija.</span>',
		fasePregFin: 'Hija.',
		faseExcl1: '<span class="e-resaltado-brown">¡</span>Hija<span class="e-resaltado-brown">!</span>',
		faseAmbosSel: '¡Hija!',
		faseFinal: '¡Hija!'
	},
	p11: {
		faseIni: 'Mmm.',
		faseMayusculas: '<span class="e-resaltado">H</span>mmm.',
		fasePregIni: 'Mmm.',
		fasePregSel: '<span class="e-seleccionable incorr">Mmm.</span>',
		fasePregFin: 'Mmm.',
		faseAmbosSel: 'Mmm.',
		faseFinal: 'Mmm.'
	},
	p3: {
		faseIni: 'Hijaaaaa.',
		faseMayusculas: '<span class="e-resaltado">H</span>ijaaaaa.',
		fasePregIni: 'Hijaaaaa.',
		fasePregSel: '<span class="e-seleccionable incorr">Hijaaaaa.</span>',
		fasePregFin: 'Hijaaaaa.',
		faseExcl2: '<span class="e-resaltado-brown">¡</span>Hijaaaaa<span class="e-resaltado-brown">!</span>',
		faseAmbosSel: '¡Hijaaaaa!',
		faseFinal: '¡Hijaaaaa!'
	},
	p12: {
		faseIni: 'Eh.',
		faseMayusculas: '<span class="e-resaltado">E</span>h.',
		fasePregIni: 'Eh.',
		fasePregSel: '<span class="e-seleccionable incorr">Eh.</span>',
		fasePregFin: 'Eh.',
		faseAmbosSel: 'Eh.',
		faseFinal: 'Eh.'
	},
	p4: {
		faseIni: 'Qué quieres comer.',
		faseMayusculas: '<span class="e-resaltado">Q</span>ué quieres comer.',
		fasePregIni: 'Qué quieres comer.',
		fasePregSel: '<span class="e-seleccionable corr req">Qué quieres comer.</span>',
		fasePregFin: '¿Qué quieres comer?',
		faseAmbosSel: '<span class="e-seleccionable incorr"><span class="e-resaltado">¿</span>Qué quieres comer<span class="e-resaltado">?</span></span>',
		faseFinal: '¿Qué quieres comer?'
	},
	p13: {
		faseIni: 'Qué.',
		faseMayusculas: '<span class="e-resaltado">Q</span>ué.',
		fasePregIni: '<span class="e-resaltado">¿</span>Qué<span class="e-resaltado">?</span>',
		fasePregSel: '<span class="e-resaltado">¿</span>Qué<span class="e-resaltado">?</span>',
		fasePregFin: '¿Qué?',
		faseAmbosSel: '<span class="e-seleccionable incorr"><span class="e-resaltado">¿</span>Qué<span class="e-resaltado">?</span></span>',
		faseFinal: '¿Qué?'
	},
	p5: {
		faseIni: 'Que qué quieres comer.',
		faseMayusculas: '<span class="e-resaltado">Q</span>ue qué quieres comer.',
		fasePregIni: 'Que qué quieres comer.',
		fasePregSel: '<span class="e-seleccionable corr">Que qué quieres comer.</span>',
		fasePregFin: 'Que qué quieres comer.',
		faseAmbosSel: 'fasePregFin',
		faseFinal: 'fasePregFin'
	},
	p14: {
		faseIni: 'Quiero…',
		faseMayusculas: '<span class="e-resaltado">Q</span>uiero…',
		fasePregIni: 'Quiero…',
		fasePregSel: '<span class="e-seleccionable incorr">Quiero…</span>',
		fasePregFin: 'Quiero…',
		faseAmbosSel: 'Quiero…',
		faseFinal: 'Quiero…'
	},
	p6: {
		faseIni: 'Quieres qué.',
		faseMayusculas: '<span class="e-resaltado">Q</span>uieres qué.',
		fasePregIni: '<span class="e-resaltado">¿</span>Quieres qué<span class="e-resaltado">?</span>',
		fasePregSel: '<span class="e-resaltado">¿</span>Quieres qué<span class="e-resaltado">?</span>',
		fasePregFin: '¿Quieres qué?',
		faseAmbosSel: '<span class="e-seleccionable corr"><span class="e-resaltado">¿</span>Quieres qué<span class="e-resaltado">?</span></span>',
		faseFinal: '¿Quieres qué?',
		faseFinalConAmbos: '¡¿Quieres qué?!'
	},
	p15: {
		faseIni: 'Sí.',
		faseMayusculas: '<span class="e-resaltado">S</span>í.',
		fasePregIni: 'Sí.',
		fasePregSel: '<span class="e-seleccionable incorr">Sí.</span>',
		fasePregFin: 'Sí.',
		faseAmbosSel: 'Sí.',
		faseFinal: 'Sí.'
	},
	p7: {
		faseIni: 'Sí, qué.',
		faseMayusculas: '<span class="e-resaltado">S</span>í, qué.',
		fasePregIni: 'Sí, <span class="e-resaltado">¿</span>qué<span class="e-resaltado">?</span>',
		fasePregSel: 'Sí, <span class="e-resaltado">¿</span>qué<span class="e-resaltado">?</span>',
		fasePregFin: 'Sí, ¿qué?',
		faseAmbosSel: 'Sí, <span class="e-seleccionable corr"><span class="e-resaltado">¿</span>qué<span class="e-resaltado">?</span></span>',
		faseFinal: 'Sí, ¿qué?',
		faseFinalConAmbos: 'Sí, ¡¿qué?!'
	},
	p16: {
		faseIni: 'Qué de qué.',
		faseMayusculas: '<span class="e-resaltado">Q</span>ué de qué.',
		fasePregIni: '<span class="e-resaltado">¿</span>Qué de qué<span class="e-resaltado">?</span>',
		fasePregSel: '<span class="e-resaltado">¿</span>Qué de qué<span class="e-resaltado">?</span>',
		fasePregFin: '¿Qué de qué?',
		faseAmbosSel: '<span class="e-seleccionable corr req"><span class="e-resaltado">¿</span>Qué de qué<span class="e-resaltado">?</span></span>',
		faseFinal: '¡¿Qué de qué?!'
	},
	p8: {
		faseIni: 'Respóndeme.',
		faseMayusculas: '<span class="e-resaltado">R</span>espóndeme.',
		fasePregIni: 'Respóndeme.',
		fasePregSel: '<span class="e-seleccionable incorr">Respóndeme.</span>',
		fasePregFin: 'Respóndeme.',
		faseExcl3: '<span class="e-resaltado-brown">¡</span>Respóndeme<span class="e-resaltado-brown">!</span>',
		faseAmbosSel: '¡Respóndeme!',
		faseFinal: '¡Respóndeme!'
	     },
	p17: {
		faseIni: 'Qué cosa.',
		faseMayusculas: '<span class="e-resaltado">Q</span>ué cosa.',
		fasePregIni: 'Qué cosa.',
		fasePregSel: '<span class="e-seleccionable corr req">Qué cosa.</span>',
		fasePregFin: '¿Qué cosa?',
		faseAmbosSel: '<span class="e-seleccionable corr req"><span class="e-resaltado">¿</span>Qué cosa<span class="e-resaltado">?</span></span>',
		faseFinal: '¡¿Qué cosa?!'
	},
	p9: {
		faseIni: 'Qué quieres comer.',
		faseMayusculas: '<span class="e-resaltado">Q</span>ué quieres comer.',
		fasePregIni: '<span class="e-resaltado">¿</span>Qué quieres comer<span class="e-resaltado">?</span>',
		fasePregSel: '<span class="e-resaltado">¿</span>Qué quieres comer<span class="e-resaltado">?</span>',
		fasePregFin: '¿Qué quieres comer?',
		faseAmbosSel: '<span class="e-seleccionable corr req"><span class="e-resaltado">¿</span>Qué quieres comer<span class="e-resaltado">?</span></span>',
		faseFinal: '¡¿Qué quieres comer?!'
	},
	p18: {
		faseIni: 'Ah, no tengo hambre.',
		faseMayusculas: '<span class="e-resaltado">A</span>hh, no tengo hambre.',
		fasePregIni: 'No tengo hambre.',
		fasePregSel: '<span class="e-seleccionable incorr">Ah, no tengo hambre.</span>',
		fasePregFin: 'Ah, no tengo hambre.',
		faseAmbosSel: 'Ah, no tengo hambre.',
		faseFinal: 'Ah, no tengo hambre.'
	}
}

function InteractiveText(id,textos){
	
	this.textos = $.extend({}, textos);
	this.mwId = id;
	this.fase = 'faseIni';
	this.toBeFound = 0;
	this.fases = ['Ini','Mayusculas','PregIni','PregSel','PregFin','Excl1','Excl2','Excl3','AmbosSel','Final'];
	this.excl = {
		'1' : 'Llamado de atención',
		'2' : 'Llamado + ¿...?',
		'3' : '¿...?',
	}
	this.estadosSel = [];
	this.rebuilding = false;
}

InteractiveText.prototype = {
	
		init:function(){
			
			var _this = this;
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
		    
			/*$('.js-btn-instr').on('click', function(){
				$('.js-instrucciones').removeClass('e-oculto');
				_this.overlay.removeClass('e-oculto');
			});*/
			
			$('.js-btn-sig').on('click', function(){
				var nFase = parseInt($(this).attr('data-fase'));
				nFase++;
				$(this).attr('data-fase',nFase);
				_this.nextPhase(nFase);
			});
		    		    
		    
			// init windows
			var vntns = $('.vntn').addClass('e-oculto');
			var vntnsNumber = vntns.length;
		    
		    
			for(var i=0; i<vntnsNumber; i++){
			    
			    var vtn = $(vntns.get(i));

			    var closeBtn = $('<button class="vntn--btn-cerrar">X</button>');
			    closeBtn.on('click', function(){
				    var vtn = $(this).closest('.vntn');
				    
				    vtn.addClass('e-oculto');
				    
				    _this.overlay.addClass('e-oculto');  
			    });
			    vtn.append(closeBtn);
			    
			}
			
			this.showText();
		    
		},
		
		showText: function(){
			
			if(this.fase == 'faseAmbosSel'){
				$('.info').remove();
			}
			
			var _this = this;
			var nP = 0;
			$('.textSegment .intercambio').each(function(){
				$(this).removeClass('e-correcto e-incorrecto e-highlight e-seleccionable');
				nP++;
				var slctr = 'p'+nP;
				if(_this.textos[slctr][_this.fase]){
					// caso único p9
					if(_this.textos[slctr][_this.fase] == 'fasePregFin'){
						var html = _this.textos[slctr]['fasePregFin'];
						if(/^¿/.test(html)){
							html = '<span class="e-seleccionable incorr">' + html + '</span>';
						} 
						$(this).html(html);
					} else {
						$(this).html(_this.textos[slctr][_this.fase]);
					}
					
					if($('span',$(this)).hasClass('e-seleccionable')){
						$(this).addClass('e-seleccionable');
					} else if( $('span',$(this)).hasClass('e-resaltado-brown') && /faseExcl/.test(_this.fase)){
						$(this).addClass('e-highlight');
						var id = _this.fase.replace(/faseExcl/,'');
						$( "<p class='info' id='"+ _this.fase + "'>" + _this.excl[id] + "</p>" ).insertBefore($(this));
					}
				}
				
			});
		},
		
		nextPhase: function(nFase){
			this.fase = 'fase'+this.fases[nFase];
			if(this.fase=='fasePregSel'){
				alert('Hay que seleccionar las preguntas sin signos de interrogación.');
			} else if(this.fase=='faseAmbosSel'){
				alert('Hay que seleccionar las preguntas que requieren signos de exclamación.');
			}
			this.showText();
			if(/sel$/i.test(this.fase)){
				this.activateForSelection();
			}	
		},
		
		activateForSelection: function(){
			var _this = this;
			this.toBeFound = $('span.e-seleccionable.corr.req').length;
			$('span.e-seleccionable').on('click',function(){
				
				var $par = $(this).closest('.intercambio');
				var nP = $('p.intercambio').index($par)+1;
				
				if($(this).hasClass('incorr')){
					
					var retroErr;
					if(_this.fase == 'fasePregSel'){
						retroErr =  'Oh no. Aquí no se está haciendo una pregunta.';
					} else {
						retroErr = 'Fíjate bien. En esta pregunta no hay enojo o sorpresa.<br><br>Puedes volver a escuchar el audio para encontrar las "preguntas enojadas".';
					}
					_this.showFeedback(retroErr,false);
					//$(this).removeClass('e-seleccionable').addClass('e-incorrecto');
					$par.removeClass('e-seleccionable').addClass('e-incorrecto');
				
				} else if($(this).hasClass('corr')){
					
					var html;
					var slctr;
					if(_this.fase == 'fasePregSel'){
						var text = $(this).html().substring(0,$(this).html().length-1);
						if($(this).hasClass('req')){
							html = '<span class="e-correcto req">' + '<span class="e-resaltado-white">¿</span>' + text + '<span class="e-resaltado-white">?</span></span>';
						} else {
							html = '<span class="e-correcto">' + '<span class="e-resaltado-white">¿</span>' + text + '<span class="e-resaltado-white">?</span></span>';
							slctr  = 'p'+nP;
							_this.textos[slctr]['fasePregFin'] = '¿' + text + '?';
						}
					} else if(_this.fase == 'faseAmbosSel'){
						if($(this).hasClass('req')){
							html = '<span class="e-correcto req">' + '<span class="e-resaltado-white">¡</span>' + $(this).html() + '<span class="e-resaltado-white">!</span></span>';
						} else {
							html = '<span class="e-correcto">' + '<span class="e-resaltado-white">¡</span>' + $(this).html() + '<span class="e-resaltado-white">!</span></span>';
							slctr = 'p'+nP;
							_this.textos[slctr]['faseFinal'] = _this.textos[slctr]['faseFinalConAmbos'];
						}
					}
					$(this).html(html);
					$par.removeClass('e-seleccionable').addClass('e-correcto');
					
					if(!_this.rebuilding){
						//feedback
						var nFaltan = _this.toBeFound - $('span.e-correcto.req').length;
						var insert = "";
						if(nFaltan>1){
							insert = "Te falta encontrar " + nFaltan + " preguntas más.";
						} else if(nFaltan==1){
							insert = "Te falta encontrar una pregunta más.";
						} else if(nFaltan==0){
							insert = "Ya encontraste todas las preguntas.";
							_this.gotoNextQuestion(2000);
						}
						var retroCorr;
						if(_this.fase == 'fasePregSel'){
							retroCorr = 'Muy bien, ésta es una pregunta a la que le faltaban los signos. Ya se los puse.<br><br>' + insert;
						} else if(_this.fase == 'faseAmbosSel'){
							retroCorr = '¡Bien pensado! Este intercambio, además de ser una pregunta, revela emociones de desesperación e incluso enojo. ¡Le hacen falta los signos de exclamación!<br><br>' + insert;
						}
						_this.showFeedback(retroCorr,true);
						
						//reconstruction settings
						_this.addMwSettings(_this.fase,nP);
					}
				}
			});
		},

		
		showFeedback: function(message, status){
			
			var vntn = $('.js-vntn-feedback');
			vntn.attr("data-correct", "");
			if(status!=null){
				vntn.attr("data-correct", status);
			}
			
			vntn.find('.vntn--contenido').html(message);
			this.overlay.removeClass('e-oculto');
			vntn.removeClass('e-oculto');
			
		},
		
		triggerSelection: function(){
			this.rebuilding = true;
			for(var i=0;i<this.estadosSel.length;i++){
				var pair = this.estadosSel[i].split(':');
				if(pair[0] == this.fase){
					var nP = pair[1];
					var $par = $('p.intercambio:nth-child('+nP+')');
					$('span.e-seleccionable.corr',$par).trigger('click');
				}
			}
			this.rebuilding = false;
		},
		
		
		/** mensajes a chat **/
		
		setAnswer: function(str){
			var padre = window.parent;
			var mensajeTipoSet = { command: "setAnswer", params: {id: this.mwId , value: str } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		showTutorIntervention: function(text,emotion){
			var padre = window.parent;
			var mensajeTipoSet = { command: "showTutorIntervention", params: {id: this.mwId , text: text, emotion: emotion } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		gotoNextQuestion: function(delay){
			var _this = this;
			setTimeout(function(){
				var padre = window.parent;
				var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: _this.mwId } };
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

var mwId = 'cap2_conversacion';
var interactiveText = new InteractiveText(mwId,textos);

$(document).ready(function(){
	
	interactiveText.init();
	
	//interactiveText.fase = 'faseExcl1';
	//interactiveText.showText();
		
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: { id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if (evt.data && evt.data.type === "set") {
		if(evt.data.name=="fase"){
			interactiveText.fase = 'fase'+evt.data.value;
			interactiveText.showText();
			if(/sel$/i.test(evt.data.value)){
				interactiveText.activateForSelection();
				if(interactiveText.estadosSel.length>0){
					//en caso de haber datos de reconstrucción.
					interactiveText.triggerSelection();	
				}
			}
		} else
		if(/faseExcl/.test(evt.data.name)){
			$('#'+evt.data.name).html(evt.data.value);
		} else
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica
				interactiveText.fase = 'faseFinal';
				interactiveText.showText();
			} else {
				//lo que se tenga que hacer con base en historial
				interactiveText.estadosSel = evt.data.value.split(',');
				
			}
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		} 
		
		
	}
}
