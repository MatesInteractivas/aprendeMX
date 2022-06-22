function MWMain(id,retrosDatos,retrosIrrelevante){
	
	this.mwId = id;
	this.inicio = true;
	this.bando = "";
	this.cartel = null;
	this.arrPairs; 
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
		
				
		setBando: function(vlr){
			this.bando = vlr;
			$('div.menu.'+this.bando).removeClass('e-oculto');
			this.checkArrPairs();
		},
		
		checkArrPairs: function(){
			if(this.arrPairs){
				for(var i=0;i<this.arrPairs.length;i++){
					var pair = this.arrPairs[i].split(':');
					if(pair[0]=='cartel'){
						var idCartel = pair[1];
						this.cartel = $('div.menu:not(.e-oculto) .cartel[data-id="'+idCartel+'"]');
						this.cartel.addClass('big');
						$('.menu:not(.e-oculto) .cartel:not(.big)').addClass('e-oculto');
						$('.menu:not(.e-oculto) .cartel').off();
					}
				}
			}
		},
		
		activate: function(){
			var _this = this;
			var $carteles = $('.menu:not(.e-oculto) .cartel');
			$carteles.addClass('e-active');
			$carteles.on('click',function(){
				$carteles.off();
				_this.cartel = $(this);
				_this.cartel.addClass('big');
				$('.menu:not(.e-oculto) .cartel:not(.big)').addClass('e-oculto');
				var txtChat = 'Cartel ' + _this.cartel.data('id');
				_this.setAnswer(txtChat);
				_this.addMwSettings('cartel',_this.cartel.data('id'));
			});
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

var mwId = 'cap4_cartel';
var mwMain = new MWMain(mwId);

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
		if(evt.data.name=="bando"){
			mwMain.setBando(evt.data.value);
		} else
		if(evt.data.name=="estilo"){
			mwMain.changeStyle(evt.data.value);
		} else
		if(evt.data.name=="slogan"){
			mwMain.changeText('slogan',evt.data.value);
		} else
		if(evt.data.name=="postura"){
			mwMain.changeText('postura',evt.data.value);
		} else
		if(evt.data.name=="activar"){
			mwMain.activate(evt.data.value);
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