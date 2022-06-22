var argumentos = {
	bando1: {
		arg_princ: {
			id: "ejercicio",
			arg: "Para hacer <strong>ejercicio</strong> y jugar.",
			apoyo: {
				'salud': 'Es <strong>saludable</strong>.',
				'diversion': {
					'algunos': 'Les <strong>gusta</strong> a algunos niñ@s.',
					'considerable': 'Les <strong>gusta</strong> a una buena candidad de niñ@s.',
					'muchos': 'Les <strong>gusta</strong> a muchos niñ@s.',
					'mayoria': 'Les <strong>gusta</strong> a la mayoría de niñ@s.'
				},
				'seguridad': 'Canchas = lugar <strong>seguro</strong>.',
				'valores': 'Promueve el <strong>compañerismo</strong>.',
				'delincuencia': 'Contribuye a prevenir la <strong>delincuencia</strong>.',
				'habilidades': 'Permite el desarrollo de <strong>habilidades</strong>.'
			}
		},
		arg_comunidad: "Útil para toda la <strong>comunidad</strong>.",
		arg_esparcimiento: "Sirve para <strong>otras actividades</strong>."
	},
	bando2: {
		arg_princ: {
			id: "arboles",
			arg: "Para conservar los árboles.",
			apoyo: {
				'aire': 'Producen <strong>oxígeno</strong>.',
				'suelo': 'Mantienen sano el <strong>suelo</strong>.',
				'especies': 'Hogar de miles de <strong>especies</strong>.',
				'frescura': 'Dan <strong>frescura</strong>.'
			}
		},
		arg_otrosDeportes: "Se puede hacer ejercicio <strong>sin canchas</strong>.",
		arg_falacia: "¿Por qué necesitamos canchas, si siempre hemos vivido bien sin ellas?",
		arg_comunidad: {
			'otroLugar': 'Se pueden construir en <strong>otro lugar</strong>, para no talar árboles.',
			'usoExclusivo': 'Deberían ser para <strong>uso exclusivo</strong> de la comunidad educativa. También por seguridad.'
		},
		arg_esparcimiento: {
			'bosque': 'El <strong>bosque</strong> también es un buen lugar para <strong>otras actividades</strong>.',
			'masImportantes': 'Hay <strong>cosas más importantes</strong> para la escuela (por ej. libros, computadoras).'
		},
		arg_delincuencia: {
			'otrasActividades': 'Frente a la delincuencia, se pueden fomentar <strong>otras actividades</strong>.',
			'noObligacion': 'No es obligación de la escuela combatir la delincuencia.'
		},
		arg_valores: {
			'companerismo': 'El compañerismo se puede fomentar con otras actividades en grupo.',
			'otrasBondades': 'Otro tipo de actividades brindarán otras bondades.',
			'conocimiento': 'Con los árboles se pueden hacer actividades que fomenten el conocimiento (por ej. botánica).'
		}
	}
}

var datos = {
	diversion:  '<ul><li class="contra">A 58% de los estudiantes no les gusta hacer ejercicio.</li></ul>'
}

function Mapa(id,argumentos,datos){
	
	this.inicio = true;
	this.mwId = id;
	this.argumentos = argumentos;
	this.datos = datos;
	this.bando = 'bando1';
}

Mapa.prototype = {
	
		init:function(){
			this.setBando('1');
		},
		
		setBando: function(n){
			this.bando = 'bando'+n;
			this.divBando = $('div.bando.'+this.bando);		
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
				if(arr.length==3){ //bando3, contraargumento: argumento_comunidad_otroLugar
					var subArg = arr[2];
					txt = this.argumentos['bando2'][arg][subArg];
					$div = $("<div>", { class: 'argumento e-morado', 'data-id': subArg });
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
			if(estilo=="resaltado"){
				$('div.e-resaltado').removeClass('e-resaltado');
			}
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
		
		defaultSettings: function(){
			$('#contenedor .e-oculto').removeClass('e-oculto');
			this.add("apoyo_salud");
			this.add("apoyo_diversion_muchos");
			this.add("apoyo_valores");
			this.add("argumento_esparcimiento");
			this.add("argumento_comunidad");
			this.changeEstilo("rojo_falacia");
			this.changeEstilo("tachado_falacia");
			this.changeEstilo("morado_otrosDeportes");
			this.setBando(2);
			this.add("apoyo_aire");
			this.add("apoyo_suelo");
			this.add("apoyo_especies");
			this.add("argumento_otrosDeportes");
			this.changeEstilo("morado_otrosDeportes");
			this.add("argumento_esparcimiento_bosque");	
		},
		
		save: function(){
			var str = $('#contenedor').html();
			str = str.replace(/,/g,"__COMA__");
			this.addMwSettings('configMapa',str);	
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
		}
		

};

var mwId = 'cap2_mapa';
var mapa = new Mapa(mwId,argumentos,datos);

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
			
		if(evt.data.name=="show"){
			if(/(argumento|apoyo)/.test(evt.data.value)){
				mapa.showPorClass(evt.data.value);
			} else {
				mapa.showPorDataID(evt.data.value);
			}
			
		} else
		if(evt.data.name=="hide"){
			//$('div[data-id="'+evt.data.value+'"]').addClass('e-oculto');
			$('div[data-id="'+evt.data.value+'"]').remove();
		} else
		if(evt.data.name=="add"){
			mapa.add(evt.data.value);
		} else
		if(evt.data.name=="bando"){
			mapa.setBando(evt.data.value);
		} else
		if(evt.data.name=="dato"){
			if(evt.data.value=="hide"){
				$('li.contra').addClass('e-oculto');
			} else {
				mapa.addDato(evt.data.value);
			}
		} else
		if(evt.data.name=="estilo"){
			mapa.changeEstilo(evt.data.value);
		} else
		//cap2_mapa:get=argsBando1
		if(evt.data.name=="get"){
			if(evt.data.value=='argsBando1'){
				mapa.getArgs('bando1');
			}
		} else
		if(evt.data.name=="save"){
			if(evt.data.value=='true'){
				mapa.save();
			}
		} else
		if(evt.data.name=="reiniciar"){
			location.reload();
		} else
		if(evt.data.name=="inicializar"){
			if(evt.data.value=='cap3'){
				//location.reload();
				mapa.defaultSettings();
			}
		} else
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				mapa.defaultSettings();
				mapa.save();
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
