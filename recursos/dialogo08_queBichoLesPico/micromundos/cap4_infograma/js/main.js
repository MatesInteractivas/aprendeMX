var textos = {
	titulo: {
		que1: "No es chido el chikunguña",
		que2: "¡Aguas! Entérate sobre el chikunguña",
		que3: "Aprendamos sobre un bicho picador",
		que4: "Pica con gran disimulo… Entérate quién es",
		quienes1: "Abues y lepes: ¡Aguas con el chikunguña!",
		quienes2: "Cuidemos a nuestros bebés y abuelitos, ¡contra el chikunguña!",
		quienes3: "Zancudo amenaza a nuestros abuelitos y niños",
		numeros1: "El chikunguña está en México. ¡Cuidémonos!",
		numeros2: "Las cifras sobre chikunguña en México",
		numeros3: "¡Más vale estar informados!",
		numeros4: "Por dónde anda el mosquito en México"
	},
	que: {
		que1: "<strong>Síntomas:</strong><br>Fiebres altísimas y dolor de brazos y piernas.",
		que2: "La fiebre va que vuela… por el mosquito del chikunguña.<br><br>Los brazos y piernas duelen muchísimo."
	},
	adicional: {
		quienes1: "Cuidado con el chikunguña, ¡en especial los <strong>mayores de 65 años, bebés y niños</strong>! ",
		quienes2: "¿Tiene <strong>diabetes, presión alta o problemas del corazón</strong>?<br>Cuídese del mosquito que transmite el chikunguña.",
		numeros1: "<ul><li>Del 2013 a la fecha, hay más de 1 millón 300 mil casos de chikunguña en América Latina y EEUU</li><li>La fiebre del chikunguña está presente en varios lugares del país.</li></ul>"
	}
}


function MWMain(id,textos){
	
	this.mwId = id;
	this.inicio = true;
	this.textos = textos;
	this.$espacio;
}

MWMain.prototype = {
	
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
		
		addText: function(vlr){
			//titulo_text
			if(/_/.test(vlr)){
				var arr = vlr.split("_");
				var clase = arr[0];
				var key = arr[1];
				var txt = this.textos[clase][key]
				this.$espacio = $('div.espacio.'+clase);
				this.$espacio.html(txt);
			} else {
				this.$espacio.text(vlr);
			}
		},
		
		
		activate: function(){
			var _this = this;
			var $espacios = $('div.espacio');
			$espacios.addClass('e-active').on('click',function(){
				//$espacios.off();
				$espacios.removeClass('e-selected');
				_this.$espacio = $(this);
				_this.$espacio.addClass('e-selected');
				//_this.addMwSettings('cartel',_this.cartel.data('id'));
				_this.gotoQuestion('cap4_edicionInfograma');
			});
		},

		deactivate: function(){
			var $espacios = $('div.espacio');
			$espacios.removeClass('e-active e-selected').off();
		},

		changeText: function(slctr,str){

			str = this.upperFirst(str);
			str = str.replace(/[ ]+$/,"");
			if(slctr=='slogan'){
				if(!/[\.\!\?]$/.test(str)){
					str = str + '.';
				}
			}
			if(/[\?]$/.test(str) && !/[\¿]/.test(str)){
				str = "¿" + str;
			}
			if(/[\!]$/.test(str) && !/[\¡]/.test(str)){
				str = "¡" + str;
			}
			
			$('p.'+slctr,this.cartel).html(str);
		},
		
		changeStyle: function(dataValue){
			//estilo=slogan_resaltado
			var arr = dataValue.split('_');
			var clase = arr[0];
			var estilo = arr[1];
			$('p.e-'+estilo).removeClass('e-'+estilo);
			$('p.'+clase).addClass('e-'+estilo);
		},
		
		upperFirst: function(string){
			return string.charAt(0).toUpperCase() + string.substr(1);	
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

var mwId = 'cap4_infograma';
var mwMain = new MWMain(mwId,textos);

$(document).ready(function(){
		
	mwMain.init();

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
		if(evt.data.name=="info"){
			$('div.infograma').addClass(evt.data.value);
		} else
		if(evt.data.name=="addText"){
			mwMain.addText(evt.data.value);
		} else
		if(evt.data.name=="activar"){
			if(evt.data.value=="true"){
				mwMain.activate();
			} else {
				mwMain.deactivate();
			}
                } else
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				//lo que se tenga que hacer en este mm cuando NO hay historial
				//$('.js-vntn-player[data-player="elena"] p').html(defaultText);
			} else {
				//lo que se tenga que hacer con base en historial
				//lo que se tenga que hacer con base en historial
				mwMain.arrPairs = evt.data.value.split(',');
			}
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		}
	}
}