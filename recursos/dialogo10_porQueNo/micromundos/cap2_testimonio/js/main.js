var retros = {}

var fases = {
	1: {
		oraciones: [1,6,7],
		idCorrect: 1
	},
	2: {
		oraciones: [2,3,5],
		idCorrect: 2
	},
	3: {
		oraciones: [4,5,6,7],
		retros4: {
			4: '¡Bien elegido! El argumento comienza a tomar más forma.<br><br>Ahora selecciona el enunciado que debe seguir a éste.',
			5: 'Te estás adelantando un poco en la argumentación. Este enunciado habla del caso particular de Pedro. Antes, es necesario explicar de forma general la relación entre la felicidad y el rendimiento escolar. ¿Cuál es la oración que hace esto?',
			6: 'La expresión <em>por la tanto</em> sirve para introducir la conclusión del argumento, ¡te estás saltando varios pasos! Intenta con otra oración.',
			7: 'Esta oración no tiene sentido en esa posición, nos estamos saltando muchos pasos de la argumentación. Intenta con otra.'
		},
		retros5: {
			5: 'Magnífica elección. Estamos a la mitad de este argumento: primero se habló de ideas generales (el rendimiento en la escuela y los estados de ánimo) y ahora pasamos a lo particular, es decir, al caso de Pedro.<br><br>Selecciona el siguiente enunciado.',
			6: '¡Te estás saltando un paso! La expresión por lo tanto sirve para introducir la conclusión del argumento, pero aún no hemos llegado ahí. Intenta con otra oración.',
			7: 'Aún no está terminado el argumento y necesitamos ideas para continuarlo. Ésa no nos funciona.'
		},
		retros6: {
			6: '¡Claro que sí! Ésa es la conclusión del argumento.',
			7: 'Es momento de cerrar el argumento y esta oración no nos funciona. Prueba con la otra (como dicen por ahí, "si no es chano es chana").'
		}
	}
}


function MWMain(id,fases,retros){
	
	this.mwId = id;
	this.fases = fases;
	this.retros = retros;
	this.finished = false;
	this.fase = 0;
	this.faseAfterReconstruction = 0;
	this.intento = 0;
	this.reconstruyendo = false;
	this.clicks = [];
}

MWMain.prototype = {
	
		init:function(){
			
			var _this = this;
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
			
			this.testimonio = $('div.seccion.texto div.testimonio');
			/*$('.js-btn-instr').on('click', function(){
				$('.js-instrucciones').removeClass('e-oculto');
				_this.overlay.removeClass('e-oculto');
			});*/
	    
		    
			// init windows
			/*var vntns = $('.vntn').addClass('e-oculto');
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
			}*/

		},
		
		setFase: function(n){
			if(n==1){
				$('div.seccion').removeClass('e-inicio');
			} else
			if(n==3){
				$('span',this.testimonio).removeClass('e-resaltado');
			}
			this.fase = n;
			this.disableChat();
			this.activarOraciones();
		},
		
		activarOraciones: function(){
			$('li.oracion').removeClass("e-oculto e-active e-resaltado e-incorrecto");
			$('li.oracion').off();
			var _this = this;
			var arr = this.fases[this.fase]['oraciones'];
			for(var i=0; i<arr.length; i++){
				var id = arr[i];
				$('li.oracion[data-id="'+id+'"]').addClass('e-active');
			}
			$('li.oracion:not(.e-active)').addClass('e-oculto');
			$('li.oracion.e-active').on('click',function(){
				var $li = $(this);
				var idLi = $li.data('id');
				if(_this.fase<3){
					if(!_this.reconstruyendo){
						_this.setAnswer($li.text(),1000);
						_this.addMwSettings(_this.fase+"_"+idLi,"clicked");
					}
					if(_this.fases[_this.fase]['idCorrect'] == idLi){
						$li.addClass("e-correcto");
						_this.moveOracion($li,1500);
						if(_this.fase==1){
							$('li.oracion.e-active').off();
						}
					} else {
						$li.off();
						if(_this.fase==2 && idLi==3){
							$li.addClass("e-resaltado");
							_this.moveOracion($li,1500);
						} else {
							$li.addClass("e-incorrecto");
						}
					}
				} else { //fase 3
					var lastSpanId = $('span:last-child',_this.testimonio).data('id');
					var currentId = lastSpanId+1;
					var key = 'retros'+currentId;
					var retro = _this.fases[_this.fase][key][idLi];
					var emotion;
					if(idLi==currentId){
						emotion = 'guinyo';
						$li.addClass("e-correcto");
						_this.moveOracion($li,1500);
						if(currentId==6){
							_this.textoCompleto();
						} else {
							$('li.oracion').removeClass("e-incorrecto");
						}
					} else {
						emotion = 'catedratico';
						//$('li.oracion').removeClass("e-incorrecto");
						$li.addClass("e-incorrecto");
						//$li.off();
						//$li.removeClass('e-active');
					}
					_this.showTutorIntervention(retro,emotion,500);
				}
			});
		},
		
		resolveFase: function(fase){
			var id = this.fases[fase]['idCorrect'];
			var $li = $('li.oracion[data-id="'+id+'"]');
			this.moveOracion($li,100);
			$('li.oracion.e-active').off();
		},
		
		moveOracion: function($li,delay,$spanPrev){
			$('span.e-resaltado',this.testimonio).removeClass('e-resaltado');
			var id = $li.data('id');
			if($('span[data-id="'+id+'"]',this.testimonio).length==0){
				var $span = $("<span>", { class:'e-resaltado e-oculto', 'data-id': id });
				$span.html($li.html());
				if($spanPrev){
					$span.insertAfter($spanPrev);
				} else {
					$span.appendTo(this.testimonio);
				}
				setTimeout(function(){
					$li.remove();
					$span.removeClass('e-oculto');
				},delay);
			}
		},
		
		insertOracion: function(idLi){
			var $li = $('li.oracion[data-id="'+idLi+'"]');
			var idPrev = idLi-1;
			var $spanPrev = $('span[data-id="'+idPrev+'"]',this.testimonio);
			this.moveOracion($li,100,$spanPrev);
		},
		
		textoCompleto:function(){
			var _this = this;
			var $li = $('li.oracion[data-id="7"]');
			$li.off();
			this.addMwSettings("finished","true");
			setTimeout(function(){
				_this.moveOracion($li,10);
				$('div.seccion.oraciones').addClass('e-oculto');
				$('div.seccion.texto').addClass('e-final');
				//$('span.e-resaltado',this.testimonio).removeClass('e-resaltado');
				_this.gotoNextQuestion(2000);
			},4500);
		},
		
		changeStyle: function(dataValue){
			//estilo=resaltado_dato8;
			var arr = dataValue.split('_');
			var estilo = arr[0];
			var dataId = arr[1];
			$('li[data-id="'+dataId+'"]').addClass('e-'+estilo);
			$('.dato').off();
		},
		
		show: function(slctr){
			$('.'+slctr).removeClass('e-oculto');	
		},
		
		reconstruct: function(){
			
			if(this.finished){
				
				this.solveAll();
				
			} else {
						
				this.reconstruyendo = true;
				
				for(var i=0;i<this.clicks.length;i++){
					var vlr = this.clicks[i];
					var idLi = vlr.replace(/^[\d]_/,"");
					this.fase = vlr.replace(/_[\d]$/,"");
					this.activarOraciones();
					$('li.oracion.e-active[data-id="'+idLi+'"]').trigger('click');
				}
				
				this.reconstruyendo = false;
				this.fase = this.faseAfterReconstruction;
			}
		},
		
		solveAll: function(){
			for(var i=1;i<8;i++){
				this.moveOracion($('li.oracion[data-id="'+i+'"]'),1);
			}
			$('div.seccion.oraciones').addClass('e-oculto');
			$('div.seccion.texto').removeClass('e-inicio');
			$('div.seccion.texto').addClass('e-final');
		},
		
		/** mensajes a chat **/
		
		setAnswer: function(str,delay){
			setTimeout(function(){
				var padre = window.parent;
				var mensajeTipoSet = { command: "setAnswer", params: {id: this.mwId, value: str } };
				padre.postMessage(mensajeTipoSet, "*");
			}, delay);
		},
		
		showTutorIntervention: function(text, emotion, delay){
			var _this = this;
			setTimeout(function(){
				var padre = window.parent;
				var mensajeTipoSet = { command: "showTutorIntervention", params: {id: _this.mwId , text: text, emotion: emotion } };
				padre.postMessage(mensajeTipoSet, "*");	
			},delay);
		},
		
		gotoNextQuestion: function(delay){
			setTimeout(function(){
				var padre = window.parent;
				var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: this.mwId } };
				padre.postMessage(mensajeTipoSet, "*");	
			},delay);
		},
		
		gotoQuestion: function(qId){
			var padre = window.parent;
			var mensajeTipoSet = { command: "gotoQuestion", params: {id: this.mwId, value: qId } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		addMwSettings: function(name,value){
			var padre = window.parent;
			var mensajeTipoSet = { command: "addMicroworldSettings", params: {id: this.mwId, name: name, value: value } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		getMwSettings:function(target){
			var padre = window.parent;
			var mensajeTipoSet = { command: "getMicroworldSettings", params: {id: this.mwId, targetId: target, src: 'mw' } }; //src = mw/chat
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		disableChat: function(){
			var mensajeTipoSet = {
				command: "disableChat", 
				params: { 
					id: this.mwId
				}
			};
			var padre = window.parent;
			padre.postMessage(mensajeTipoSet, "*");
		}
		

};

var mwId = 'cap2_testimonio';
var mwMain = new MWMain(mwId,fases,retros);

$(document).ready(function(){
	
	mwMain.init();
	//mwMain.setFase(1);
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);
			
function receiveMessage(evt) {
// mensaje tipo set
	if (evt.data && evt.data.type === "set") {
		if(evt.data.name=="microworldSettings"){
			
                } else
		if(evt.data.name=="estilo"){
			mwMain.changeStyle(evt.data.value);
		} else
		if(evt.data.name=="fase"){
			if(!mwMain.reconstruyendo){
				mwMain.setFase(evt.data.value);
			} else {
				mwMain.faseAfterReconstruction = evt.data.value;
			}
		} else
		if(evt.data.name=="resolve"){
			mwMain.resolveFase(evt.data.value);
		}
		else
		if(evt.data.name=="insert"){
			mwMain.insertOracion(evt.data.value);
		}
		else
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				mwMain.solveAll();
				//lo que se tenga que hacer en este mm cuando NO hay historial
				//$('.js-vntn-player[data-player="elena"] p').html(defaultText);
			} else {
				//lo que se tenga que hacer con base en historial
				//lo que se tenga que hacer con base en historial
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[1]=='clicked'){
						var vlr = pair[0];
						if(mwMain.clicks.indexOf(vlr)==-1){
							mwMain.clicks.push(vlr);
						}
					} else
					if(pair[0]=="finished"){
						mwMain.finished = true;
					}
				}
				mwMain.reconstruct();
			}
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		}
	}
}