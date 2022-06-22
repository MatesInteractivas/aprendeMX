var retros = {
	error: {
		datoUtil: '<span style="color:#ff0000">Frío, frío.</span> Recuerda que en esta categoría entra la información que da fuerza o le quita peso a los argumentos del mapa mental. No es el caso del enunciado que aparece en pantalla.',
		datoNoUtil: '¡Uy! <span style="color:#ff0000">Tu selección no es correcta.</span> Intenta con otra opción. Piensa: ¿El enunciado nos da un dato útil para la argumentación? ¿No será acaso una opinión?',
		opinion: 'Caray, <span style="color:#ff0000">no coincido contigo.</span> Este enunciado no habla de una valoración o creencia personal.'
	},
	acierto: {
		p1: 'En efecto. Esta información apoya el argumento de la biodiversidad.',
		p2: 'Claro. Este dato ilustra uno de los efectos positivos de los árboles en el planeta.',
		p3: 'Así es. Esto es un comentario personal (probablemente de alguien a quien le da igual el deporte).',
		p4: '¡Claro! Este dato le quita fuerza a un contraargumento de los que quieren canchas.',
		p5: 'Totalmente de acuerdo. Es interesante saber qué se come en la región, pero eso no aporta nada al debate.',
		p6: 'Buena elección. Este dato habla de la situación límite de los bosques en Veracruz, ¡refuerza la postura de los que quieren conservar los árboles!',
		p7: 'Así lo creo también yo. Es información que no sirve para este debate.',
		//p8: 'Bien. Aunque no lo creas, presentar esta idea (que apoya a los que quieren canchas) puede funcionar. Si lo mencionan los que quieren mantener los árboles, también lo pueden usar a su favor. Por ejemplo: “Nosotros reconocemos que jugar y hacer deporte es un derecho de los niños y las niñas. No nos oponemos a eso: pensamos que pueden hacer ejercicio sin talar árboles.”',
		p8: 'Bien elegido. Podemos compartir esta creencia o no, es debatible.',
		p9: 'No estaba fácil decidirse: éste es un dato vinculado con el tema, de eso no hay duda. Pero ¡no aporta información a favor o en contra de un argumento!'
	}
}


function Infograma(id,retros){
	
	this.mwId = id;
	this.retros = retros;
	this.finished = false;
	this.nP = 0;
	this.parId = 'p0';
	this.currPar;
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
		
		iniciar: function(){
			var _this = this;
			this.showNextPar();
			$('button.bt').on('click',function(){
				_this.currPar.removeClass('e-datoUtil e-datoNoUtil e-opinion');
				var retro, emotion;
				var tipoPressed = $(this).data('id');
				var tipoCurrPar = _this.currPar.data('type');
				_this.currPar.addClass('e-'+tipoPressed);
				if(tipoPressed==tipoCurrPar){
					retro = _this.retros.acierto[_this.parId];
					emotion = 'guinyo';
					setTimeout(function(){
						if(tipoPressed=='datoUtil'){
							_this.currPar.clone().appendTo($('div.datos'));
						}
						_this.showNextPar(tipoPressed);
					},5000);
				} else {
					retro = _this.retros.error[tipoPressed];
					emotion = 'catedratico';
				}
				_this.showTutorIntervention(retro,emotion,500);
			});
		},
		
		showNextPar: function(){
			$('.workArea .par').addClass('e-oculto');
			if(this.nP<9){
				this.nP++;
				this.parId = 'p'+this.nP;
				this.currPar = $('.par[data-id="'+this.parId+'"]').removeClass('e-oculto');
			} else {
				$('div.workArea').addClass('e-oculto');
				$('div.contDatos').addClass('e-final');
				this.gotoNextQuestion(6000);
				this.addMwSettings('finished','true');
			}
		},
		
		solve: function(){
			this.finished = true;
			$('p.par[data-type="datoUtil"]').each(function(){
				var $newPar = $(this).clone().removeClass('e-oculto');
				$newPar.appendTo($('div.datos'));
			});
			$('div.workArea').addClass('e-oculto');
			$('div.contDatos').addClass('e-final');
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

var mwId = 'cap3_datos_bando2';
var infograma = new Infograma(mwId,retros);

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
		if(evt.data.name=="iniciar"){
			infograma.iniciar();
                } else
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				infograma.solve();
				//lo que se tenga que hacer en este mm cuando NO hay historial
				//$('.js-vntn-player[data-player="elena"] p').html(defaultText);
			} else {
				//lo que se tenga que hacer con base en historial
				//lo que se tenga que hacer con base en historial
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='finished' && pair[1]=='true'){
						infograma.solve();
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