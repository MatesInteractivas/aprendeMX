var retrosDatos = {
	dato1: 'Ése es un dato (que ubica a México como el país con mayor obesidad infantil en el mundo). Proviene de una encuesta realizada por el Instituto Nacional de Salud Pública en el 2012. Observa la diferencia:\
		<ul>\
		<li>Tengo la impresión de que ahora hay más niños con sobrepeso (impresión que necesita comprobarse).</li>\
		<li>No creo que tener unos kilos de más sea un problema (opinión).</li></ul>\
		Prueba con otro enunciado.',
	dato2: ' ¡Buena elección! Esta idea proviene de una forma particular de ver el mundo, es una impresión de lo que “debe ser”. Alguien puede decir: “Yo no estoy de acuerdo: los seres humanos formamos parte de la naturaleza y nuestro deber es protegerla”. ¿Cuál de las dos posturas tiene la razón? ¡Tendríamos que empezar otro debate! Como puedes ver, esta afirmación no es un dato que nos permita apoyar algún argumento, es una idea o creencia que debe defenderse.',
	dato3: '',
	dato4: 'Quienes están a favor de las canchas fueron de casa en casa preguntando: “¿Qué tipo de actividad física prefieres hacer (o preferirías hacer)?” Presiona aquí para consultar los resultados. Claramente, este enunciado representa un dato: la mayoría de los entrevistados (el 69%) dijo que prefiere el fut y el basquet. Intenta con otro enunciado.',
	dato5: 'Ése es un dato. Está reportando cuál es la recomendación de una organización internacional experta en materia de salud. La cifra proviene de estudios realizados en diferentes países. Observa la diferencia: \
		<br>60 minutos al día es mucho, ¿no se te hace?  (opinión).\
		<br>La recomendación de la OMS es irreal, no hay niños que hagan tanto ejercicio (impresión que necesita comprobarse).',
	dato6: ' ¡Así es! Las ideas sobre lo que está bien o mal provienen de nuestros valores y creencias. Alguien podría pensar lo contrario: “Cortar árboles no está bien”. Como puedes ver, esta afirmación no es un dato que nos permita apoyar algún argumento, es una idea o creencia que debe defenderse.',
	dato7: 'Éste es un dato. Proviene del último censo poblacional que hizo el Instituto Nacional de Estadística y Geografía (INEGI). Es una de las fuentes más utilizadas para obtener información sobre la población en México y sus características.',
	dato8: '¡Híjole! Este enunciado no es una opinión (no habla de alguna preferencia, ni hace una valoración). Pero tampoco es un dato. ¿Qué podría ser? Vamos a trabajar con esto más adelante. Por ahora, busca un enunciado que sí sea una opinión.',
	dato9: 'Éste es un dato, no una opinión. De hecho, es un dato muy útil porque ataca el argumento principal del otro bando. Observa la diferencia: Son muy pocos árboles los que hay que cortar (opinión). A mí de todos modos los árboles no me gustan (opinión). Intenta con otro enunciado.',
	dato10: 'Éste es un dato, no una opinión. Observa la diferencia: Caminar 30 minutos es demasiado (opinión). Yo prefiero tener la cancha más cerca (opinión). Intenta con otro enunciado.'
}

var retrosIrrelevante = [
		'Este enunciado sí está vinculado con el debate en la escuela. Recuerda: estamos buscando información que <em>no</em> sea pertinente para la discusión.',
		'Yo creo que sí podemos utilizar esta información. Te doy una pista: busca un enunciado que hable sobre México o Veracruz pero que <em>no</em> tenga nada que ver con el ejercicio o los bosques.',
		'Estoy en desacuerdo. Yo creo que este enunciado está relacionado con el debate de la escuela. Intenta con otro más.',
		'Intento con otro.'
]


function Infograma(id,retrosDatos,retrosIrrelevante){
	
	this.mwId = id;
	this.retrosDatos = retrosDatos;
	this.retrosIrrelevante = retrosIrrelevante;
	this.inicio = true;
	this.dataType = "";
	this.intento = 0;
}

Infograma.prototype = {
	
		init:function(){
			
			var _this = this;
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
			
		    
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
		
		activate: function(dataType){
			
			//$('li.dato').removeClass('e-resaltado');
			this.disableChat();
			
			this.dataType = dataType;
			this.found = 0;
			this.toBeFound = $('li.dato:not(.e-resaltado)[data-'+dataType+'="true"]').length;
			//alert(this.toBeFound);
			
			var _this = this;
			$('li.dato:not(.e-resaltado)').addClass('e-activo').on('click',function(){
				$(this).removeClass('e-activo').off();
				if($(this).data(_this.dataType)==true){
					$(this).addClass('e-correcto');
					_this.found++;
					_this.addMwSettings('selected',$(this).data('id'));
					_this.checkFound();
				} else {
					$(this).addClass('e-incorrecto');
				}
			});
		},
		
		deactivate: function(){
			$('li.dato').removeClass('e-activo').off();
			setTimeout(function(){
				$('li.dato.e-correcto').removeClass('e-correcto').addClass('e-resaltado');
				$('li.dato').removeClass('e-incorrecto');
			},2000);
		},
		
		checkFound: function(){
			if(this.found == this.toBeFound){
				this.gotoNextQuestion(500);
				this.deactivate();
			}	
		},
		
		changeStyle: function(dataValue){
			//estilo=resaltado_dato8;
			var arr = dataValue.split('_');
			var dataId = arr[0];
			var estilo = arr[1];
			$('li[data-id="'+dataId+'"]').addClass('e-'+estilo);
			//$('.dato').off();
		},
		
		show: function(id){
			$('li.dato[data-id="'+id+'"]').removeClass('e-oculto');
			$('li.dato').removeClass('e-resaltado');
			$('li.dato[data-id="'+id+'"]').addClass('e-resaltado');
		},
		
		resaltar: function(dataType){
			$('li.dato[data-'+dataType+'="true"]').addClass('e-resaltado');
		},
		
		/** mensajes a chat **/
		
		setAnswer: function(str){
			var padre = window.parent;
			var mensajeTipoSet = { command: "setAnswer", params: {id: this.mwId, value: str } };
			padre.postMessage(mensajeTipoSet, "*");	
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
		
		addMwSettings:function(name,value){
			//alert('setting name: '+name+'& value: '+value);
			var padre = window.parent;
			var mensajeTipoSet = { command: "addMicroworldSettings", params: {id: mwId, name: name, value: value } };
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

var mwId = 'cap3_datos';
var infograma = new Infograma(mwId,retrosDatos,retrosIrrelevante);

$(document).ready(function(){
	
	infograma.init();
	
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
			infograma.changeStyle(evt.data.value);
		} else
		if(evt.data.name=="show"){
			infograma.show(evt.data.value);
		} else
		if(evt.data.name=="resaltar"){
			infograma.resaltar(evt.data.value);
		} else
		if(evt.data.name=="activar"){
			infograma.activate(evt.data.value);
                } else
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				//alert('default');
				//lo que se tenga que hacer en este mm cuando NO hay historial
				//$('.js-vntn-player[data-player="elena"] p').html(defaultText);
				$('li.dato').removeClass('e-oculto');
			} else {
				//lo que se tenga que hacer con base en historial
				//lo que se tenga que hacer con base en historial
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='selected'){
						$('li.dato[data-id="'+pair[1]+'"]').addClass('e-resaltado');
						//$('#next').addClass('e-inactivo');
					}
				}
			}
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		}
	}
}