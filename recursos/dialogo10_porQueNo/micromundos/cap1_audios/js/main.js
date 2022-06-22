var audios = {
	fase1: {
		chavo1: {
			url: "audio/chavo1_1.mp3",
			reproduced: false
		},
		chavo2: {
			url: "audio/chavo2_1.mp3",
			reproduced: false
		},
		chava1: {
			url: "audio/chava1_1.mp3",
			reproduced: false
		},
		chava2: {
			url: "audio/chava2_1.mp3",
			reproduced: false
		}
	},
	fase2: {
		chavo1: {
			url: "audio/chavo1_2.mp3",
			reproduced: false
		},
		chavo2: {
			url: "audio/chavo2_2.mp3",
			reproduced: false
		},
		chava1: {
			url: "audio/chava1_2.mp3",
			reproduced: false
		},
		chava2: {
			url: "audio/chava2_2.mp3",
			reproduced: false
		}
	},
	status_finished: {
		fase1: false,
		fase2: false
	}
}


function MWMain(id,audios){
	
	this.mwId = id;
	this.audios = audios;
	this.fase = "fase1";
	this.audio;
}

MWMain.prototype = {
	
		init:function(){
			
			var _this = this;
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
			
			this.activarAudios();
			
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
		
		
		activarAudios: function(){
			var _this = this;
			$('div.chavo').on('click',function(){
				$('div.chavo.e-selected').removeClass('e-selected');
				$(this).addClass('e-selected');
				var idChavo = $(this).data('id');
				var urlSound = _this.audios[_this.fase][idChavo].url;
				if(_this.audio){
					_this.audio.pause();
					delete(_this.audio);
				}
				_this.audio = new Audio();
				_this.audio.src = urlSound;
				_this.audio.play();
				_this.audios[_this.fase][idChavo].reproduced = true;
				_this.audio.onended = function(){
					delete(_this.audio);
					_this.checkIfAll()
				};
			});
			
		},
		
		checkIfAll: function(){

			var obj = this.audios[this.fase];
			for(var chavo in obj){
				if(!obj[chavo].reproduced){
					return;
				}
			}
			if(!this.audios.status_finished[this.fase]){
				this.audios.status_finished[this.fase] = true;
				this.gotoNextQuestion(1000);
				this.addMwSettings(this.fase, "finished");
			}
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

var mwId = 'cap1_audios';
var mwMain = new MWMain(mwId,audios);

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
		if(evt.data.name=="fase"){
			mwMain.fase = evt.data.value;
			$('div.chavo.e-selected').removeClass('e-selected');
		} else
		if(evt.data.name=="reset"){
			mwMain.audios.status_finished.fase1 = false;
			mwMain.audios.status_finished.fase2 = false;
		} else
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				mwMain.audios.status_finished['fase1'] = true;
				mwMain.audios.status_finished['fase2'] = true;
			} else {
				//lo que se tenga que hacer con base en historial
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(/^fase/.test(pair[0])){
						var fase = pair[0];
						mwMain.audios.status_finished[fase] = true;
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