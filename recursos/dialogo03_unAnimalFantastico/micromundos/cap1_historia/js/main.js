var textos = {
		"txt1": "Cuentan que estos seres aparecieron en un sueño.",
		"txt2": "Eran las visiones de Pedro Linares, un artesano enfermo que luchaba entre la vida y la muerte.",
		"txt3": "Nunca había visto nada similar, pero al mismo tiempo le resultaban familiares de alguna forma.",
		"txt4": "Había un carnero con lengua de fuego, alas gigantescas y cola de largarto.",
		"txt5": "Una serpiente con patas de gallo que se movía como lo hacen los peces en el agua.",
		"txt6": "Y muchos más. Todos gritaban “¡Alebrije!, ¡alebrije!” o al menos eso entendió Pedro.",
		"txt7": "Pedro, al recuperarse de su enfermedad, decidió hacer una reproducción de los seres que había visto en su sueño.",
		"txt8": "Lo hizo con el saber que había heredado de su familia: la cartonería.",
		"txt9": "Aparecieron así los primeros alebrijes de papel y alambre.",
		"txt10": "Este trabajo se mezcló con otras tradiciones. En Oaxaca, por ejemplo, se retomó el estilo colorido para pintar piezas hechas de madera, en las que se representa a un solo animal."
	}

function Animacion(textos,id){
	
	this.textos = textos;
	this.mwId = id;
	this.numFig = 1;
	this.totFigs = 10;
	this.inicio = true;
}

Animacion.prototype = {
	
		init:function(){
			
			var _this = this;
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
		    
			/*$('.js-btn-instr').on('click', function(){
				$('.js-instrucciones').removeClass('e-oculto');
				_this.overlay.removeClass('e-oculto');
			});*/
	    
		    
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
			
			this.showFigura();
			this.activarBtSig();
		},

		showFigura: function(){
			$('.oacontext').removeClass('img1 img2 img3 img4 img5 img6 img7 img8 img9 img10');
			$('.oacontext').addClass('img'+this.numFig);
			//$('div.content').attr('style','background-image: url("../img/'+this.numFig+'".jpg)');
			var key = 'txt' + this.numFig;
			$('p.texto').html(this.textos[key]);
		},

		activarBtSig: function(){
			var _this = this;
			$('.js-btn-sig').on('click', function(){
				_this.numFig++;
				_this.showFigura();
				if(_this.numFig==10){
					$(this).off();
					$(this).addClass('e-inactivo');
					if(_this.inicio){
						_this.inicio = false;
						_this.addMwSettings('inicio','false');
						_this.gotoNextQuestion(5000);
					}
				}
				if($('.js-btn-ant').hasClass('e-inactivo')){
					$('.js-btn-ant').removeClass('e-inactivo');
					_this.activarBtAnt();
				}
			});
		},
		
		activarBtAnt: function(){
			var _this = this;
			$('.js-btn-ant').on('click', function(){
				_this.numFig--;
				_this.showFigura();
				if(_this.numFig==1){
					$(this).off();
					$(this).addClass('e-inactivo');
				}
				if($('.js-btn-sig').hasClass('e-inactivo')){
					$('.js-btn-sig').removeClass('e-inactivo');
					_this.activarBtSig();
				}
			});
		},
		
		
		/** mensajes a chat **/
		
		setAnswer: function(str){
			var padre = window.parent;
			var mensajeTipoSet = { command: "setAnswer", params: {id: this.mwId, value: str } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		showTutorIntervention: function(text,emotion){
			var padre = window.parent;
			var mensajeTipoSet = { command: "showTutorIntervention", params: {id: this.mwId , text: text, emotion: emotion } };
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
			var mensajeTipoSet = { command: "addMicroworldSettings", params: {id: this.mwId, name: name, value: value } };
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

var mwId = 'cap1_historia';
var animacion = new Animacion(textos,mwId);

$(document).ready(function(){
	
	animacion.init();
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if (evt.data && evt.data.type === "set") {
		if(evt.data.name=="activar"){
			if(evt.data.value==1){
				//animacion.disableChat();
				animacion.activate();
			}
		} else
		if(evt.data.name=="figura"){
			animacion.numFig=evt.data.value;
			animacion.showFigura();
			if(animacion.numFig>8){
				//cuadrado y piezas separadas sin bts
				$('.js-btn-ant').off();
				$('.js-btn-ant').addClass('e-inactivo');
				$('.js-btn-ant').addClass('e-oculto');
				$('.js-btn-sig').off();
				$('.js-btn-sig').addClass('e-oculto');
			} else if(animacion.numFig==0){
				$('.js-btn-ant').off();
				$('.js-btn-ant').addClass('e-inactivo');
			} else if(animacion.numFig==8){
				$('.js-btn-sig').off();
				$('.js-btn-sig').addClass('e-inactivo');
			}
			//animacion.gotoNextQuestion(2000);
		} else
		if(evt.data.name=="desdeInicio"){
			animacion.numFig=0;
			$('.js-btn-ant').removeClass('e-oculto');
			$('.js-btn-sig').removeClass('e-oculto e-inactivo');
			animacion.activarBtSig();
		} else
		if(evt.data.name=="inicio"){
			if(evt.data.value == 0 && animacion.inicio){
				animacion.inicio = false;
				animacion.addMwSettings('inicio','false');
			}
		} else
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica del localstorage
				// Sucede cuando se inicia desde un capítulo determinado y el micromundo debe encontrarse en cierto estado
				animacion.inicio = false;
			} else {
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='inicio' && pair[1]=='false'){
						animacion.inicio = false;
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
