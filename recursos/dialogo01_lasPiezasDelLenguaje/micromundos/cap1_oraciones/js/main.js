var piezas = {
	peludo: {
		clr: '#52dbd9',
		/*clr: '#e34932',*/
		pos: 1,
		oracion1: {
			pos: 3
		},
		oracion2: {
			pos: 0
		},
		oracion3: {
			pos: 0
		},
		oracion4: {
			pos: 5
		},
		oracion5: {
			pos: 5
		},
		oracion6: {
			pos: 0
		},
		oracion7: {
			pos: 4
		}
	},
	Juan: {
		/*clr: '#d70603',*/
		clr: '#7eb8f9',
		pos: 2,
		oracion1: {
			pos: 1
		},
		oracion2: {
			pos: 1
		},
		oracion3: {
			pos: 0
		},
		oracion4: {
			pos: 1
		},
		oracion5: {
			pos: 0
		},
		oracion6: {
			pos: 1
		},
		oracion7: {
			pos: 1
		}
	},
	es: {
		clr: '#73c789',
		/*clr: '#446d1f',*/
		pos: 3,
		oracion1: {
			pos: 2
		},
		oracion2: {
			pos: 3
		},
		oracion3: {
			pos: 0
		},
		oracion4: {
			pos: 0
		},
		oracion5: {
			pos: 4
		},
		oracion6: {
			pos: 2
		},
		oracion7: {
			pos: 2
		}
	},
	no: {
		clr: '#f2f173',
		/*clr: '#095b7e',*/
		pos: 4,
		oracion1: {
			pos: 0
		},
		oracion2: {
			pos: 2
		},
		oracion3: {
			pos: 0
		},
		oracion4: {
			pos: 0
		},
		oracion5: {
			pos: 3
		},
		oracion6: {
			pos: 6
		},
		oracion7: {
			pos: 0
		}
	},
	gato: {
		clr: '#8ca8e8',
		/*clr: '#121a7b',*/
		pos: 5,
		oracion1: {
			pos: 0
		},
		oracion2: {
			pos: 5
		},
		oracion3: {
			pos: 2
		},
		oracion4: {
			pos: 4
		},
		oracion5: {
			pos: 2
		},
		oracion6: {
			pos: 4
		},
		oracion7: {
			pos: 0
		}
	},
	un: {
		clr: '#edb967',
		/*clr: '#801303',*/
		pos: 6,
		oracion1: {
			pos: 0
		},
		oracion2: {
			pos: 4
		},
		oracion3: {
			pos: 1
		},
		oracion4: {
			pos: 3
		},
		oracion5: {
			pos: 1
		},
		oracion6: {
			pos: 3
		},
		oracion7: {
			pos: 3
		}
	},
	carne: {
		clr: '#67edbf',
		/*clr: '#2330a6',*/
		pos: 7,
		oracion1: {
			pos: 0
		},
		oracion2: {
			pos: 0
		},
		oracion3: {
			pos: 4
		},
		oracion4: {
			pos: 0
		},
		oracion5: {
			pos: 0
		},
		oracion6: {
			pos: 8
		},
		oracion7: {
			pos: 7
		}
	},
	de: {
		
		/*clr: '#d70603',*/
		clr: '#f987a7',
		pos: 8,
		oracion1: {
			pos: 0
		},
		oracion2: {
			pos: 0
		},
		oracion3: {
			pos: 0
		},
		oracion4: {
			pos: 0
		},
		oracion5: {
			pos: 0
		},
		oracion6: {
			pos: 0
		},
		oracion7: {
			pos: 0
		}
	},
	come: {
		/*cclr: '#58b00f',*/
		clr: '#c997ed',
		pos: 9,
		oracion1: {
			pos: 0
		},
		oracion2: {
			pos: 0
		},
		oracion3: {
			pos: 3
		},
		oracion4: {
			pos: 2
		},
		oracion5: {
			pos: 0
		},
		oracion6: {
			pos: 7
		},
		oracion7: {
			pos: 6
		}
	},
	que: {
		clr: '#67cced',
		/*clr: '#d56a01',*/
		pos: 10,
		oracion1: {
			pos: 0
		},
		oracion2: {
			pos: 0
		},
		oracion3: {
			pos: 0
		},
		oracion4: {
			pos: 0
		},
		oracion5: {
			pos: 0
		},
		oracion6: {
			pos: 5
		},
		oracion7: {
			pos: 5
		}
	}
}

function Animacion(piezas,id){
	
	this.piezas = $.extend({}, piezas);
	this.etapa = 0;
	this.totEtapas = 7;
	this.marginXOraciones = 30;
	this.marginYOraciones = 280;
	this.marginXPalabras = 100;
	this.marginYPalabras = 30;
	this.piezasW = 75;
	this.piezasH = 35;
	this.inicio = true;
	this.mwId = id;
}

Animacion.prototype = {
	
		init:function(){
			

			var _this = this;
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
		    
			 $('.js-btn-instr').on('click', function(){
				$('.js-instrucciones').removeClass('e-oculto');
				_this.overlay.removeClass('e-oculto');
			});
		    	
		
			$('.js-btn-reini').on('click', function(){
				_this.reiniciar();
			});
		    		
			$('.js-btn-todas').on('click', function(){
				_this.showAll();
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
			
			this.buildPiezas();
		    
		},
		
		activate: function(){
			
			var _this = this;
			
			$('.js-btn-otra').removeClass('e-oculto');
			$('.js-btn-otra').on('click', function(){
				_this.nextPhrase();
			});	
		},
		
		buildPiezas: function(){
			for(var palabra in this.piezas){
				var xIni, yIni;
				var pos = piezas[palabra]['pos'];
				if(pos<6){
					xIni = this.marginXPalabras + (pos-1)*(this.piezasW+20);
					yIni = this.marginYPalabras;
				} else {
					xIni = this.marginXPalabras + (pos-6)*(this.piezasW+20);
					yIni = this.marginYPalabras + this.piezasH + 40;
				}
				
				var $pal = $("<div>", {
					id: palabra,
					class: 'palabra',
					'data-xIni': xIni,
					'data-yIni': yIni,
					style: 'top : ' + yIni + 'px ; left: ' + xIni + 'px; background-color: '+ this.piezas[palabra]['clr']
				});
				$pal.html(palabra);
				$('.content').append($pal);
			}
		},
		
		nextPhrase: function(){
			this.etapa++;
			var key = 'oracion'+this.etapa;
			for(var palabra in this.piezas){
				var $pal = $('#'+palabra);
				var pos = this.piezas[palabra][key]['pos'];
				var yIni = parseInt($pal.attr('data-yIni'));
				var xIni = parseInt($pal.attr('data-xIni'));
				var top = pos==0?yIni:this.marginYOraciones;
				var left = pos==0?xIni:(this.marginXOraciones+((pos-1)*this.piezasW));
				$pal.css( { 'top' : top, 'left': left } );
			}
			if(this.etapa==this.totEtapas){
				$('.js-btn-otra').off();
				$('.js-btn-otra').addClass('e-oculto');
				$('.js-btn-reini').removeClass('e-oculto');
				//$('.js-btn-todas').removeClass('e-oculto');
				if(this.inicio){
					this.inicio = false;
					this.gotoNextQuestion(2500);
					this.addMwSettings('inicio','false');
				}
			}	
		},
		
		reiniciar: function(){
			var _this = this;
			this.etapa = 0;
			for(var palabra in this.piezas){
				var $pal = $('#'+palabra);
				var top = parseInt($pal.attr('data-yIni'));
				var left = parseInt($pal.attr('data-xIni'));
				$pal.css( { 'top' : top, 'left': left } );
			}
			$('.oraciones').addClass('e-oculto');
			$('.js-btn-otra').removeClass('e-oculto');
			$('.js-btn-otra').on('click', function(){
				_this.nextPhrase();
			});
			$('.js-btn-reini').addClass('e-oculto');
		},
		
		showAll: function(){
			for(var palabra in this.piezas){
				var $pal = $('#'+palabra);
				var top = parseInt($pal.attr('data-yIni'));
				var left = parseInt($pal.attr('data-xIni'));
				$pal.css( { 'top' : top, 'left': left } );
			}
			$('.oraciones').removeClass('e-oculto');
			$('.js-btn-otra').addClass('e-oculto');
			$('.js-btn-otra').off();
			$('.js-btn-reini').addClass('e-oculto');
			$('.js-btn-reini').off();
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

var mwId = 'cap1_oraciones';
var animacion = new Animacion(piezas,mwId);

$(document).ready(function(){
	
	animacion.init();
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if(evt.data && evt.data.type === "set") {
		
		if(evt.data.name=="all"){
			animacion.showAll();
		} else
		if(evt.data.name=="activar"){
			animacion.activate();
		} else
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica cuando se inicia en otro capítulo
				animacion.activate();
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
