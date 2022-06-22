function Alebrije(id){

	this.inicio = true;
	this.mwId = id;
	this.configArr = ['1','1','1'];
}

Alebrije.prototype = {
	
		init:function(){
			
			this.activateOptions();

		},
		
		activateOptions: function(){
			var _this = this;
			$('div.menu > .options > .option').on('click',function(){
				$options = $(this).closest('div.options');
				$('div.option',$options).removeClass('e-selected');
				$(this).addClass('e-selected');
				var n = $(this).data('part');
				_this.configArr[n] = $(this).data('nr');
				_this.setAlebrije();
			});	
		},
		
		setAlebrije: function(){
			var url = '../img/'+this.configArr.join('_')+'.png';
		        $('.imgAlebrije').attr('src',url);			
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

var mwId = 'cap1_alebrije';
var alebrije = new Alebrije(mwId);

$(document).ready(function(){
	
	alebrije.init();
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if(evt.data && evt.data.type === "set") {
		//antes de avanzar a cap. 2
		if(evt.data.name=='setConfig'){
				alebrije.addMwSettings('configAlebrije',alebrije.configArr.join('_'));
		} else
		
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica cuando se inicia en otro capítulo
				
			} else {
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='configAlebrije'){
						alebrije.configArr = pair[1].split('_');
						alebrije.setAlebrije();
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
