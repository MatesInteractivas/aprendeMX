var datos = {
	1: {
		bando1: {
			salud: ['beforePro','afterPro'],
			diversion: ['beforeContra','afterPro'],
			otroLugar: ['beforeContra']
		},
		bando2: {
			ecologia: ['beforeContra']
		}
	},
	2: {
		bando1: { },
		bando2: {
			ecologia: ['afterPro'],
			aire: ['beforePro'],
			plantar: ['beforeContra'],
			especies: ['beforePro']
		}
	}
}


function Mapa(id,datos){
	
	this.inicio = true;
	this.mwId = id;
	this.bando = 'bando1';
	this.datos = datos;
}

Mapa.prototype = {
	
		init:function(){
			this.getMwSettings('cap2_mapa');
		},
				
		setBando: function(n){
			this.bando = 'bando'+n;
			this.divBando = $('div.bando.'+this.bando);		
		},
		
		agregarIni: function(content){
			
			//alert(content);

			if(this.inicio){
				this.inicio = false;
			
				$('div.mapaOrig').html(content);
				
				$('div.e-resaltado').removeClass('e-resaltado');
			
				this.setBando('1');
				var $arg = $("<div>", { class: 'argumento e-morado', 'data-id': 'plantar' });
				$arg.html('Se pueden <strong>plantar más árboles</strong>.');
				$arg.appendTo(this.divBando);
				
				if($('div.ideaDeApoyo[data-id="especies"]').length==0){
					var $div = $("<div>", { class: 'ideaDeApoyo', 'data-id': 'especies' });
					$div.html('Hogar de miles de <strong>especies</strong>.');
					$div.insertBefore($('div[data-id="otrosDeportes"]'));
				}
				this.agregarDatos(1);
			}
		},
		
		agregarDatos: function(n){
			for(var bando in this.datos[n]){
				//this.divBando = $('div.bando.'+bando);
				var datosObj = this.datos[n][bando];
				for(var dataId in datosObj){
					$('div[data-id="'+dataId+'"]').addClass('conDato');
					var arr = datosObj[dataId];
					for(var i=0;i<arr.length;i++){
						$('div[data-id="'+dataId+'"]').addClass(arr[i]);
					}
				}
			}
		},

		
		showPorClass:function(slctr){
			if(/argumentos/.test(slctr)){
				$('.'+slctr).removeClass('e-oculto');
			} else {
				$('.'+slctr,this.divBando).removeClass('e-oculto');
			}
		},
		
		showPorDataID:function(slctr){
			$('div[data-id="'+slctr+'"]',this.divBando).removeClass('e-oculto');
		},
		
		add: function(vlr){
			var txt;
			var arr = vlr.split('_');
			if(arr[0]=='apoyo'){
				var idea = arr[1];
				if(arr.length==2){
					txt = this.argumentos[this.bando]['arg_princ']['apoyo'][idea];
				} else
				if(arr.length==3){
					var cuantos = arr[2];
					txt = this.argumentos[this.bando]['arg_princ']['apoyo'][idea][cuantos];
				}
				var $li = $("<div>", { class: 'ideaDeApoyo', 'data-id': idea });
				$li.html(txt);
				$li.appendTo(this.divBando);
			} else 
			if(arr[0]=='argumento'){
				var arg = 'arg_'+arr[1];
				var $div;
				if(arr.length==2){ //bando1 o bando2
					txt = this.argumentos[this.bando][arg];
					$div = $("<div>", { class: 'argumento', 'data-id': arr[1] });
				} else
				if(arr.length==3){ //bando3, contraargumento
					var subArg = arr[2];
					txt = this.argumentos['bando2'][arg][subArg];
					$div = $("<div>", { class: 'argumento e-morado' });
				}
				$div.html(txt);
				$div.appendTo(this.divBando);
			}
		},
		
		addDato: function(dataId){
			var txt = this.datos[dataId];
			var $div = $('div[data-id="'+dataId+'"]',this.divBando);
			txt = $div.html() + txt;
			$div.html(txt);
		},
		
		changeEstilo: function(dataValue){
			//estilo=rojo_falacia; estilo=morado_otrosDeportes; estilo=tachado_falacia; estilo=resaltado_diversion
			var arr = dataValue.split('_');
			var estilo = arr[0];
			var dataId = arr[1];
			$('div[data-id="'+dataId+'"]').addClass('e-'+estilo);
		},
		
		getArgs: function(bando){
			//var $li = $("<li>", { 'data-id': idea }); data-id = valores, habilidades, delincuencia
			//var $divBando = ('div.bando.'+bando);
			var arr = ['comunidad','esparcimiento'];
			$('.ideaDeApoyo',this.divBando).each(function(){
				//alert($(this).data('id'))
				if(/(valores|habilidades|delincuencia)/.test($(this).data('id'))){
					arr.push($(this).data('id'));
				}
			});
			this.setAnswer(arr.join(', '),6000);
		},

		/** mensajes a chat **/
		
		setAnswer: function(str,delay){
			var _this = this;
			setTimeout(function(){
				var padre = window.parent;
				var mensajeTipoSet = { command: "setAnswer", params: {id:_this.mwId , value: str } };
				padre.postMessage(mensajeTipoSet, "*");	
			},delay);

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
		},
		
		getMwSettings:function(target){
			var padre = window.parent;
			var mensajeTipoSet = { command: "getMicroworldSettings", params: {id: this.mwId, targetId: target, src: 'mw' } }; //src = mw/chat
			padre.postMessage(mensajeTipoSet, "*");	
		}
		

};

var mwId = 'cap3_mapa_fullscreen';
var mapa = new Mapa(mwId,datos);

$(document).ready(function(){
	
	mapa.init();
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if(evt.data && evt.data.type === "set") {
		
		if(evt.data.name=="microworldSettings"){
			var vlr = evt.data.value.replace(/__COMA__/g,",");
			var arrPairs = vlr.split(',');
			for(var i=0;i<arrPairs.length;i++){
				var pair = arrPairs[i].split(':');
				if(pair[0]=='configMapa'){
					mapa.agregarIni(pair[1]);
				}
			}
                } else
		if(evt.data.name=="addDatos"){
			mapa.agregarDatos(evt.data.value);
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
					if(pair[0]=='inicio' && pair[1]=='false'){
						mapa.inicio = false;
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
