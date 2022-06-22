var defaultSettings = {
	nombre: "<span data-rubro='nombre'>No tiene nombre. </span><span data-rubro='cabezaIntro'></span>",
	cabeza1: "<span data-rubro='cabeza' data-detalle='trompa'>Tiene trompa de elefante. </span>\
		  <span data-rubro='cabeza' data-detalle='ojos'>Tiene ojos parecidos a los de un caracol. </span>\
		  <span data-rubro='cabeza' data-detalle='cuernos'>Tiene dos cuernos amarillos. </span>\
		  <span data-rubro='personalidad'>Es bonachón. </span><span data-rubro='cuerpoIntro'></span>",
	cabeza2: "<span data-rubro='cabeza' data-detalle='cabeza'>Tiene una cabeza de pez. </span>\
		  <span data-rubro='cabeza' data-detalle='dientes'>Tiene muchos dientecitos filosos. </span>\
		  <span data-rubro='cabeza' data-detalle='lengua'>Tiene la lengua de fuera. </span>\
                  <span data-rubro='cabeza' data-detalle='cuerno'>Tiene un cuerno verde en la frente. </span>\
		  <span data-rubro='personalidad'>Se ve feroz pero en el fondo no lo es. </span><span data-rubro='cuerpoIntro'></span>",
	cabeza3: "<span data-rubro='cabeza' data-detalle='pico'>Tiene un pico de águila. </span>\
		  <span data-rubro='cabeza' data-detalle='ojos'>Tiene un tatuaje en los ojos. </span>\
		  <span data-rubro='cabeza' data-detalle='orejas'>Tiene orejas de conejo. </span>\
		  <span data-rubro='personalidad'>Es un poco tímido. </span><span data-rubro='cuerpoIntro'></span>",
	cuerpo1: "<span data-rubro='cuerpo' data-detalle='cuerpo'>Tiene un cuerpo largo y delgado. </span>\
		  <span data-rubro='cuerpo' data-detalle='patas'>Tiene cuatro patas, parecidas a las de un gecko. </span>\
		  <span data-rubro='cuerpo' data-detalle='alas'>Tiene alas de mariposa. </span>",
	cuerpo2: "<span data-rubro='cuerpo' data-detalle='cuerpo'>Tiene un cuerpo redondo. </span>\
		  <span data-rubro='cuerpo' data-detalle='cola'>Tiene una cola de pez. </span>\
		  <span data-rubro='cuerpo' data-detalle='patas'>Tiene patas de ave y dos garras. </span>",
	cuerpo3: "<span data-rubro='cuerpo' data-detalle='cuerpo'>Tiene plumas de pavorreal en la parte de atrás. </span>\
		  <span data-rubro='cuerpo' data-detalle='patas'>Tiene cuatro patas, parecidas a las de un elefante. </span>",
	color1: "<span data-rubro='color'>Tiene la piel azul con algunas pecas. </span>",
	color2: "<span data-rubro='color'>Tiene la piel roja con escamas verdes en algunas partes. </span>",
	color3: "<span data-rubro='color'>Tiene la piel verde con círculos amarillos. </span>"
	//poder: "<span data-rubro='poder'>Le gusta comer insectos. </span>"
}


var opciones = {
	nombre : [
		'Se llama ',
		'Su nombre es ',
		'Todos lo conocen como '
	],
	sinNombre : [
		'No tiene nombre. ',
		'Siempre ha vivido en el anonimato. ',
		'Nadie sabe cómo se llama. '
	],
	cabezaIntro : [
		'Su cabeza es increíble. ',
		'Tengo que contarte cómo es su cabeza. ',
		'¡Nunca has visto una cabeza igual! '
	],
	cuerpoIntro : [
		'Su cuerpo es igual de extraordinario. ',
		'También su cuerpo es especial. ',
		'¿Qué te puedo decir sobre su cuerpo? '
	]
}

var ordenEnunciados = {
	cabeza1 : ['trompa','ojos','cuernos'],
	cabeza2 : ['cabeza','dientes','lengua','ojos','cuerno'],
	cabeza3 : ['cabeza','pico','ojos','orejas'],
	cuerpo1 : ['cuerpo','patas','alas'],
	cuerpo2 : ['cuerpo','patas','cola'],
	cuerpo3 : ['plumas','patas']
}

var blanks = {
	cuerpo1: {
		opt1:{
			text: 'Tiene forma de serpiente, alas de mariposa y cuatro patas de gecko. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt2:{
			text: 'Parece un gecko por sus patas, pero la forma es de serpiente con alas de mariposa. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt3:{
			text: 'Alargado como serpiente, luce elegante sobre cuatro patas de gecko que sostienen unas hermosas alas de mariposa. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		}
	},
	cuerpo2: {
		opt1:{
			text: 'Tiene una forma redonda, una cola de pez, patas de ave y dos garras. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt2:{
			text: 'Parece un pez redondo, pero tiene patas de ave y garras. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt3:{
			text: 'Redondo, luce elegante sobre dos patas de ave que contrastan con sus garras delanteras y su cola de pez trasera. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		}
	},
	cuerpo3: {
		opt1:{
			text: 'Tiene plumas de pavorreal en la parte de atrás y cuatro patas, parecidas a las de un elefante. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt2:{
			text: 'Parece un elefante por sus patas, pero le aparecen plumas de pavorreal en la parte de atrás. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt3:{
			text: 'Luce elegante sobre cuatro patas de elefante que sostienen un hermoso cuerpo adornado con plumas de pavorreal. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		}
	}
}


function Alebrije(defaultSettings, opciones, ordenEnunciados, blanks, id){
	
	this.inicio = true;
	this.mwId = id;
	this.defaultSettings = defaultSettings;
	this.opciones = opciones;
	this.ordenEnunciados = ordenEnunciados;
	this.blanks = blanks;
	this.configArr = ['1','1','1'];
	this.blankSpan;
	this.hasChosen = false;
}

Alebrije.prototype = {
	
		init:function(){
			this.setAlebrije();
			this.$parrafo = $('div.fondoParrafo p.parrafo');
			//ELIMINAR!!!!
			//this.showParrafo();
		},
		
		setAlebrije:function(){
			var url = '../img/'+ this.configArr.join('_') + '.png';
			$('.imgAlebrije').attr('src',url);
		},
		
		setDefaultText: function(){
			this.$parrafo.empty();
			var html = "";
			html += this.defaultSettings.nombre;
			var numCabeza = this.configArr[0];
			html += this.defaultSettings['cabeza'+numCabeza];
			var numCuerpo = this.configArr[1];
			html += this.defaultSettings['cuerpo'+numCuerpo];
			var numColor= this.configArr[2];
			html += this.defaultSettings['color'+numColor];
			//html += this.defaultSettings['poder'];
			this.$parrafo.html(html);
			this.addMwSettings('defaultText',html);
		},
		
		setText: function(str){
			this.$parrafo.empty();
			str = str.replace(/__/g,',')
			str = str.replace(/<li/g,'<span');
			str = str.replace(/<\/li>/g,' </span>');
			this.$parrafo.html(str);
			//agregar cabezaIntro/cuerpoIntro
			var $span;
			$span = $("<span>", { 'data-rubro': 'cabezaIntro' });
			$span.insertAfter( "span[data-rubro='nombre']",this.$parrafo);
			$span = $("<span>", { 'data-rubro': 'cuerpoIntro' });
			$span.insertAfter("span[data-rubro='personalidad']",this.$parrafo);
			
			//asegurar orden!!!
			var numCabeza = this.configArr[0];
			var arr = this.ordenEnunciados['cabeza'+numCabeza];
			for(var i=arr.length-1;i>=0;i--){
				var detalle = arr[i];
				$('span[data-detalle="'+detalle+'"]').insertAfter("span[data-rubro='cabezaIntro']");
			}
			
			var numCuerpo = this.configArr[1];
			var arr = this.ordenEnunciados['cuerpo'+numCabeza];
			for(var i=arr.length-1;i>=0;i--){
				var detalle = arr[i];
				$('span[data-detalle="'+detalle+'"]').insertAfter("span[data-rubro='cuerpoIntro']");
			}
			
			//$("span[data-rubro='color']").appendTo(this.$parrafo);
		},
		
	
		showParrafo: function(){
			$('div#contenedor .imgAlebrije').addClass('e-small');
			$('div#contenedor div.fondoParrafo').removeClass('e-oculto');
		},
		
		hideParrafo: function(){
			$('div#contenedor .imgAlebrije').removeClass('e-small');
			$('div#contenedor div.fondoParrafo').addClass('e-oculto');
		},
		
		getName: function(){
			var sentence = $('span[data-rubro="nombre"]',this.$parrafo).text();
			this.setAnswer(sentence,3000);
		},
		
		changeSentence:function(rubro,i){
			this.eliminarEstilos();
			var $span;
			if(rubro=='sinNombre'){
				$span = $('span[data-rubro="nombre"]',this.$parrafo);
			} else {
				$span = $('span[data-rubro="'+rubro+'"]',this.$parrafo);
			}
			
			if(rubro=='nombre'){
				var name = $span.text().replace(/(Se llama |[\s\.]+$)/g,'');
				//name = name.replace(/[\s]+$/,'');
				$span.text(this.opciones[rubro][i] + name + ". ");
			} else {
				$span.text(this.opciones[rubro][i]);
			}
			$span.addClass('e-cambiado');
		},
		
		unirFrases: function(rubro){
			var i = 0;
			var _this = this;
			this.eliminarEstilos();
			$frases = $('span[data-rubro="'+rubro+'"]',this.$parrafo);
			if(rubro == 'cabeza'){
				$frases.each(function(){
					var $span = $(this);
					var txt = $span.text();
					if(i==0){
						txt = txt.replace(/[\.\s]+$/,'<span class="coma">,</span> ');
					} else
					if(i==$frases.length-1){ //último
						txt = txt.replace(/Tiene[\s ]+/,'');
					} else
					if(i==$frases.length-2){ //penúltimo
						txt = txt.replace(/Tiene[\s ]+/,'');
						txt = txt.replace(/[\.\s]+$/,' <span class="coma">y</span> ');
					} else { //segundo, si hay 4 elems
						txt = txt.replace(/Tiene[\s ]+/,'');
						txt = txt.replace(/[\.\s]+$/,'<span class="coma">,</span> ');
					}
					$span.html(txt);
					$span.addClass('e-cambiado');
					i++;
				});
			}	
		},
		
		moverFrase: function(rubro){
			$('span',this.$parrafo).removeClass('e-space e-resaltado');	
			$span = $('span[data-rubro="'+rubro+'"]',this.$parrafo);
			$span.remove();
			if(rubro=='personalidad'){
				this.$parrafo.html(this.$parrafo.html()+'<br><br>')
			}
			$span.appendTo(this.$parrafo);
			$span.addClass('e-cambiado');
		},
		
		eliminarEstilos: function(){
			$('span',this.$parrafo).removeClass('e-cambiado e-space e-resaltado coma');	
		},
		
		showSpace: function(rubro){
			this.eliminarEstilos();
			$span = $('span[data-rubro="'+rubro+'"]',this.$parrafo);
			$span.text('...');
			$span.addClass('e-space');
		},
		
		highlightSpan: function(rubro){
			this.eliminarEstilos();
			$span = $('span[data-rubro="'+rubro+'"]',this.$parrafo);
			$span.addClass('e-resaltado');
		},
		
		crearZonaSensible: function(rubro){
			this.eliminarEstilos();
			// 1. Juntar el texto en un solo span (el primero)
			var txt = "";
			var $spans = $('span[data-rubro="'+rubro+'"]');
			$spans.each(function(){
				txt += $(this).text();
				$(this).text("");
			});
						
			//por alguna razón $('span[data-rubro="'+rubro+'"]:first-child',this.$parrafo) no funciona
			//var $span = $('span[data-rubro="'+rubro+'"]:first-child',this.$parrafo);
			var $span = $('span[data-detalle="cuerpo"]',this.$parrafo);
			$span.html(txt);
			
			//2. Add class blank
			$span.addClass('blank');
			this.blankSpan = $span;
			
			this.activarZona(rubro);
		},
		
		activarZona: function(rubro){
			this.hasChosen = false;
			//rubro: nombre / cabeza / color
			var _this = this;
			this.blankSpan.addClass('e-activo');
		    	this.blankSpan.on('click',function(){
				_this.showOptions(rubro);
			});	
		},
		
		showOptions: function(rubro){
			
			var optionDiv = $('#contenedor .js-options');
			optionDiv.empty();
			
			var key;
			if(rubro=='cuerpo'){
				key = 'cuerpo' + this.configArr[1];
			} 
			var options = this.blanks[key];
			
			var _this = this;
			
			var optSpan = $('<span class="option"></span>');
			var currOptSpan;
			var currOptConfig;
			
			for(var opt in options){
				currOptConfig = options[opt];
				currOptSpan = optSpan.clone();
				currOptSpan.data('id', opt); //opt1, opt2, ...
				currOptSpan.html(currOptConfig.text);
				
				currOptSpan.on('click', function(){
					_this.optionChosen(rubro, $(this));
				});

				optionDiv.append(currOptSpan);
			}
			
			$('.imgAlebrije').addClass('e-oculto');
			$('.js-options').removeClass('e-oculto');
			$('.fondoParrafo').addClass('arriba');
		},
		
		optionChosen: function(rubro, $option){
			
			//var $blankSpan = $option.data('blankSpan');
			var texto = $option.html();
			this.blankSpan.html(texto);
			
			if(!this.hasChosen){
				this.gotoNextQuestion(2000);
				this.hasChosen = true;
				this.addMwSettings('textoCuerpo',texto.replace(/,/g,'__'));
				this.addMwSettings('hasChosen',true);
			}
			
			$('.imgAlebrije').removeClass('e-oculto');
			$('.js-options').addClass('e-oculto');
			$('.fondoParrafo').removeClass('arriba');
			
			//this.blankSpan.off();
		},
		
		
		/*** general **/
		
		upperFirst: function(string){
			return string.charAt(0).toUpperCase() + string.substr(1);	
		},
		
		lowerFirst: function(string){
			return string.charAt(0).toLowerCase() + string.substr(1);
		},

		/** mensajes a chat **/
		
		setAnswer: function(str,delay){
			setTimeout(function(){
				var padre = window.parent;
				var mensajeTipoSet = { command: "setAnswer", params: {id:this.mwId , value: str } };
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
		
		getMwSettings:function(target){
			var padre = window.parent;
			var mensajeTipoSet = { command: "getMicroworldSettings", params: {id: this.mwId, targetId: target, src: 'mw' } }; //src = mw/chat
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		addMwSettings: function(name,value){
			var padre = window.parent;
			var mensajeTipoSet = { command: "addMicroworldSettings", params: { id:this.mwId, name: name, value: value } };
			padre.postMessage(mensajeTipoSet, "*");	
		}
};

var mwId = 'cap3_alebrije';
var alebrije = new Alebrije(defaultSettings,opciones,ordenEnunciados,blanks,mwId);

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
		
		if(evt.data.name=='get'){
			if(evt.data.value=='configAlebrije'){
				alebrije.getMwSettings('cap1_alebrije');
			} else 
			if(evt.data.value=='configLista'){
				alebrije.getMwSettings('cap2_alebrije');
			} else
			if(evt.data.value=='nombre'){
				alebrije.getName();
			}
		} else
		if(evt.data.name=='setDefaultText'){
			alebrije.setDefaultText();
		} else 
		if(evt.data.name=='setConfig'){
			var str = alebrije.$parrafo.html();
			str = str.replace(/,/g,'__');
			alebrije.addMwSettings('configText',str);
		} else 
		if(evt.data.name=="microworldSettings"){
			//alert('value mwSettings en alebrije_cap3:'+evt.data.value);
			var arrPairs = evt.data.value.split(',');
			for(var i=0;i<arrPairs.length;i++){
				var pair = arrPairs[i].split(':');
				if(pair[0]=='configAlebrije'){
					//alert('config recibido in cap2 ' + pair[1]);
					alebrije.configArr = pair[1].split('_');
					alebrije.setAlebrije();
				} else
				if(pair[0]=='configLista'){
					//alert(pair[1]);
					alebrije.setText(pair[1]);
					//nombre=Se llama Pedro.__cabeza=Tiene trompa de tapir._Tiene ojos parecidos a los de un caracol._Tiene dos cuernos amarillos.__personalidad:Es tímido.__cuerpo:Tiene un cuerpo largo y delgado._Tiene alas de mariposa._Tiene cuatro patas, parecidas a las de un gecko.__color:Tiene la piel azul con algunas pecas.__poder:Sus alas le permiten Cuerpo 1__
				}
			}
		} else
		if(evt.data.name=='show'){
			if(evt.data.value=='parrafo'){
				alebrije.showParrafo();
			} 
		} else
		if(evt.data.name=='hide'){
			if(evt.data.value=='parrafo'){
				alebrije.hideParrafo();
			} 
		} else
		if(evt.data.name=='space'){
			//por ej. space=cabezaIntro
			alebrije.showSpace(evt.data.value);
		} else
		if(evt.data.name=='resaltar'){
			//por ej. resaltar=cabeza
			alebrije.highlightSpan(evt.data.value);
		} else
		if(/(nombre|sinNombre|cabezaIntro|cuerpoIntro)/.test(evt.data.name)){
			alebrije.changeSentence(evt.data.name,parseInt(evt.data.value));
		} else
		if(evt.data.name=='cambiar'){
			//por ej. unir=cuerpo
			if(evt.data.value=='cabeza'){
				alebrije.unirFrases(evt.data.value);
			} else
			if(evt.data.value=='personalidad' || evt.data.value=='poder'){
				alebrije.moverFrase(evt.data.value);
			}
		} else
		if(evt.data.name=='showOptions'){
			alebrije.crearZonaSensible(evt.data.value);
		} else
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica cuando se inicia en otro capítulo
				//no sucede aquí porque es el último
			} else {
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='defaultText'){
						//alebrije.se
					} else
					if(pair[0]=='hasChosen'){
						alebrije.hasChosen = true;
					} else
					if(pair[0]=='textoCuerpo'){
						$('span[data-detalle="cuerpo"]').html(pair[1].replace(/__/g,','));
					}
				}	
			}
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: { id: mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		} 
	} 
}
