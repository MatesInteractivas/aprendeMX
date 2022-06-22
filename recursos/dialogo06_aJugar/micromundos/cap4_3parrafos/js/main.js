function Infograma(id){
	
	this.mwId = id;
	this.inicio = true;
}

Infograma.prototype = {
	
		init:function(){
			
			var _this = this;
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
			
			this.getMwSettings('cap2_mariaElena');
			this.getMwSettings('cap3_duelo');
		    
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
		
		gotoQuestion: function(qId){
			var padre = window.parent;
			var mensajeTipoSet = { command: "gotoQuestion", params: {id: this.mwId, value: qId } };
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

var mwId = 'cap4_3parrafos';
var favorita = "";
var infograma = new Infograma(mwId);

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
			if(/txtMariaElena/.test(evt.data.value)){
				arrME = evt.data.value.match(/txtMariaElena:[\s]*[a-z-áéíóúüñ_,\.\s]+(,txtMariaElena)?/i);
				if(arrME && arrME.length>0){
					var str = arrME[0];
					str = str.replace(/[,\s]?txtMariaElena[:\s]?/g,"");
					str = str.replace(/__/g,",");
					$('.candidata[data-player="mariaElena"] .parrafo').html(str);
				}
			} else
			if(/txtClaudia/.test(evt.data.value)){
				var arrC = evt.data.value.match(/txtClaudia:[\s]*[a-z-áéíóúüñ_,\.\s]+(,(txtClaudia|txtAnaMaria))?/i);
				if(arrC && arrC.length>0){
					var str = arrC[0];
					str = str.replace(/[,\s]?(txtClaudia|txtAnaMaria)[:\s]?/g,"");
					str = str.replace(/__/g,",");
					$('.candidata[data-player="claudia"] .parrafo').html(str);
				}
				var arrAM = evt.data.value.match(/txtAnaMaria:[\s]*[a-z-áéíóúüñ_,\.\s]+(,(txtClaudia|txtAnaMaria))?/i);
				if(arrAM && arrAM.length>0){
					var str = arrAM[0];
					str = str.replace(/[,\s]?(txtClaudia|txtAnaMaria)[:\s]?/g,"");
					str = str.replace(/__/g,",");
					$('.candidata[data-player="anaMaria"] .parrafo').html(str);
				}
			}
			
                } else
		if(evt.data.name=="favorita"){
			favorita = evt.data.value;
		} else
		if(evt.data.name=="activar"){
			if(evt.data.value){
				$('.foto').addClass('e-activo');
				$('.foto').on('click',function(){
					var $div = $(this).closest('div');
					var qId = 'cap4_actividad_' + $div.attr('data-player');
					infograma.gotoQuestion(qId);	
				});
			}
		} else
		if(evt.data.name=="elena"){
			var $div = $('.candidata[data-player="mariaElena"]');
			$('.parrafo',$div).html(evt.data.value);
		} else
		if(evt.data.name=="claudia"){
			var $div = $('.candidata[data-player="claudia"]');
			$('.parrafo',$div).html(evt.data.value);
		} else
		if(evt.data.name=="ana"){
			var $div = $('.candidata[data-player="anaMaria"]');
			$('.parrafo',$div).html(evt.data.value);
		} else
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				//lo que se tenga que hacer en este mm cuando NO hay historial
				//$('.js-vntn-player[data-player="elena"] p').html(defaultText);
			} else {
				//lo que se tenga que hacer con base en historial
				//lo que se tenga que hacer con base en historial
				/*var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='' && pair[1]==''){
						//$('#next').addClass('e-inactivo');
					}
				}*/
			}
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		}
	}
}