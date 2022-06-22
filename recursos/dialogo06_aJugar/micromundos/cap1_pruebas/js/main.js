var pruebas = {
	'obligatorio': {
		'habilidadBalon': {
			'txt': 'Habilidad con el balón',
			'ya': false
		},
		'condicion': {
			'txt': 'Condición física',
			'ya': false
		}
	},
	'opcional': {
		'cabeceo': {
			'txt': 'Cabeceo',
			'ya': false
		},
		'punteria': {
			'txt': 'Puntería',
			'ya': false
		},
		'colocacion': {
			'txt': 'Colocación en el campo',
			'ya': false
		},
		'recuperacion': {
			'txt': 'Recuperación del balón',
			'ya': false
		},
		'posición': {
			'txt': 'Habilidad para ganar una posición',
			'ya': false
		}
	}
}

function Lista(pruebas, id){
	
	this.pruebas = pruebas;
	this.inicio = true;
	this.mwId = id;
}

Lista.prototype = {
	
		init:function(){

		},
		
		showOblig: function(){
			for(var prueba in this.pruebas.obligatorio){
				var $div = $("<div>", { 'id': prueba , 'class':'prueba obligatorio' });
				$div.html(this.pruebas.obligatorio[prueba]['txt']);
				$div.appendTo($('#lista'));
				this.pruebas.obligatorio[prueba]['ya'] = true;
			}
		},
		
		showPrueba: function(infoPrueba){
			//$('.prueba').removeClass('e-marcado');
			var arr = infoPrueba.split('_');
			var type = arr[0];
			var prueba = arr[1];
			if(this.pruebas[type][prueba]['ya'] == false){
				var $div = $("<div>", { 'id': prueba , 'class':'prueba e-marcado '+type });
				$div.html(this.pruebas[type][prueba]['txt']);
				$div.appendTo($('#lista'));
				this.pruebas[type][prueba]['ya'] = true;
			}
		},
		
		/** mensajes a chat **/
		
		setAnswer: function(str){
			var padre = window.parent;
			var mensajeTipoSet = { command: "setAnswer", params: {id:this.mwId , value: str } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		showTutorIntervention: function(text,emotion){
			var padre = window.parent;
			var mensajeTipoSet = { command: "showTutorIntervention", params: {id:this.mwId , text: text, emotion: emotion } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		gotoNextQuestion: function(delay){
			setTimeout(function(){
				var padre = window.parent;
				var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: this.mwId } };
				padre.postMessage(mensajeTipoSet, "*");	
			},delay);
		},
		
		addMwSettings: function(name,value){
			//alert('setting name: '+name+'& value: '+value);
			var padre = window.parent;
			var mensajeTipoSet = { command: "addMicroworldSettings", params: {id:this.mwId, name: name, value: value } };
			padre.postMessage(mensajeTipoSet, "*");	
		}
		

};

var mwId = 'cap1_pruebas';
var lista = new Lista(pruebas,mwId);

$(document).ready(function(){
	
	lista.init();
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if(evt.data && evt.data.type === "set") {
		
		if(evt.data.name=="fan"){
			if(evt.data.value=='no'){
				lista.showOblig();
			}
		} else
		if(evt.data.name=="prueba"){
			lista.showPrueba(evt.data.value);
		} else
		if(evt.data.name=="noPrueba"){
			$('.prueba').removeClass('e-marcado');
		} else
		if(evt.data.name=="cuestionario"){
			if(evt.data.value=='true'){
				$('#cuestionario').removeClass('e-oculto');
				$('#lista').addClass('e-oculto');
			}
		} else
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica cuando se inicia en otro capítulo
				lista.showOblig();
			} else {
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='inicio' && pair[1]=='false'){
						animacion.inicio = false;
						//alert('inicio false');
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
