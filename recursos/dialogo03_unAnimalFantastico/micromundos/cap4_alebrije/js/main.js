var blanks = {
	nombre: {
		opt1:{
			text: 'Él es [nombre], mi mejor amigo. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt2:{
			text: 'Él es [nombre], caballero de la noche. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt3:{
			text: 'Él es [nombre], un ser misterioso de un mundo lejano. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt4:{
			text: 'Él es [nombre], ... (Prefiero hacer otra propuesta.)',
			feedback: null,
			correct: true,
			action: 'setAnswer'
		}
	},
	sinNombre: {
		opt1:{
			text: 'Él es el Alebrije sin Nombre, mi mejor amigo. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt2:{
			text: 'Él es el Alebrije Anónimo, la criatura más rara de la región. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt3:{
			text: 'Él es el Alebrije Misterioso, el que no tiene nombre. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt4:{
			text: 'Él es ... (Prefiero hacer otra propuesta.)',
			feedback: null,
			correct: true,
			action: 'setAnswer'
		}
	},
	cabeza1: {
		opt1:{
			text: 'Es la trompa más rara del mundo. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt2:{
			text:'Puedo ver la trompa por horas y horas, ¡es tan hermosa! ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt3:{
			text: 'Su trompa es la más fuerte y resistente de todos los alebrijes. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt4:{
			text: 'Su trompa ... (Prefiero hacer otra propuesta.)',
			feedback: null,
			correct: true,
			action: 'setAnswer'
		}
	},
	cabeza2: {
		opt1:{
			text: 'Es la boca más rara de todo el mundo. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt2:{
			text:'Puedo ver la boca por horas y horas, ¡es tan aterradora! ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt3:{
			text: 'Su boca es la más fuerte y resistente de todos los alebrijes. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt4:{
			text: 'Su boca ... (Prefiero hacer otra propuesta.)',
			feedback: null,
			correct: true,
			action: 'setAnswer'
		}
	},
	cabeza3: {
		opt1:{
			text: 'Es el pico más raro de todo el mundo. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt2:{
			text:'Puedo ver el pico por horas y horas, ¡es tan aterrador! ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt3:{
			text: 'Su pico es el más fuerte y resistente de todos los alebrijes. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt4:{
			text: 'Su pico ... (Prefiero hacer otra propuesta.)',
			feedback: null,
			correct: true,
			action: 'setAnswer'
		}
	},
	color1: {
		opt1:{
			text: 'como si estuviera enfermo de varicela. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt2:{
			text:'parecidas en forma a las piedras que encuentras en un río. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt3:{
			text: 'como las piezas desordenadas de un rompecabezas. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt4:{
			text: '... (Prefiero hacer otra propuesta.)',
			feedback: null,
			correct: true,
			action: 'setAnswer'
		}
	},
	color2: {
		opt1:{
			text: 'como si tuviera diamantes esparcidos en su cuerpo. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt2:{
			text:'parecidas a las piedras que se acumulan en las orillas de un río. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt3:{
			text: 'como si un pez le hubiera regalado parte de su piel. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt4:{
			text: '... (Prefiero hacer otra propuesta.)',
			feedback: null,
			correct: true,
			action: 'setAnswer'
		}
	},
	color3: {
		opt1:{
			text: 'como si estuviera enfermo de varicela. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt2:{
			text:'como si alguien le hubiera puesto sellos en todo el cuerpo. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt3:{
			text: 'parecidos a las marcas que aparecen en el cuerpo de las ballenas. ',
			feedback: null,
			correct: true,
			action: 'gotoNextQuestion'
		},
		opt4:{
			text: '... (Prefiero hacer otra propuesta.) ',
			feedback: null,
			correct: true,
			action: 'setAnswer'
		}
	}
}


function Alebrije(blanks, id){
	
	this.inicio = true;
	this.mwId = id;
	this.blanks = blanks;
	this.configArr = ['1','1','1'];
	this.blankSpan;
	this.hasChosen = false;
}

Alebrije.prototype = {
	
		init:function(){
			
			//por mientras, o si entras directo al capítulo
			
			this.showParrafo();
			this.setAlebrije();
			this.crearZonasSensibles();
			
			this.getMwSettings('cap1_alebrije');
			this.getMwSettings('cap3_alebrije');
			
			this.$parrafo = $('div.fondoParrafo p.parrafo');
		},
	
		
		setAlebrije:function(){
			var url = '../img/'+ this.configArr.join('_') + '.png';
			$('.imgAlebrije').attr('src',url);
		},
		
		setText: function(str){
			this.$parrafo.empty();
			str = str.replace(/__/g,',')
			this.$parrafo.html(str);
			$('span.e-activo',this.$parrafo).removeClass('e-activo');
		},
			
		showParrafo: function(){
			$('div#contenedor .imgAlebrije').addClass('e-small');
			$('div#contenedor div.fondoParrafo').removeClass('e-oculto');
		},
		
		
		crearZonasSensibles: function(){
			var $span;
			//nombre
			$span = $('span[data-rubro="nombre"]');
			$span.addClass('blank');
			//$span.data( "blank", "blank1" );
			
			//trompa/boca/pico
			var numCabeza = this.configArr[0];
			if(numCabeza==1){
				$span = $('span[data-detalle="trompa"]');
			} else
			if(numCabeza==2){
				$span = $('span[data-detalle="dientes"],span[data-detalle="lengua"]');
			} else
			if(numCabeza==3){
				$span = $('span[data-detalle="pico"]');
			}
			$span.addClass('blank');
			//$span.data( "blank", "blank2" );
			
			//color
			$span = $('span[data-rubro="color"]');
			$span.addClass('blank');
			//$span.data( "blank", "blank3" );
			
			//this.activarZona('nombre');
		},


		activarZona: function(rubro){
			
			//rubro: nombre / cabeza / color
			
			this.hasChosen = false;
			$('span.blank').removeClass('e-activo');
			$('span.e-resaltado').removeClass('e-resaltado');
			$('.imgAlebrije').removeClass('e-oculto');
			$('.js-options').addClass('e-oculto');
			$('.fondoParrafo').removeClass('arriba');
			
			var _this = this;
		    	this.blankSpan = $('span.blank[data-rubro="'+rubro+'"]',this.$parrafo);
			this.blankSpan.addClass('e-activo');
		    	this.blankSpan.on('click',function(){
				_this.showOptions(rubro);
				//$('span.blank').removeClass('e-seleccionado');
				//_this.blankSpan.addClass('e-seleccionado');
				if(rubro=='color'){
					_this.blankSpan.html(_this.blankSpan.html().replace(/\./,','));
				}
			});	
		},

		showOptions: function(rubro){
			
			var optionDiv = $('#contenedor .js-options');
			optionDiv.empty();
			
			var key;
			if(rubro=='cabeza'){
				key = 'cabeza' + this.configArr[0];
			} else
			if(rubro=='color'){
				key = 'color' + this.configArr[2];
			} else
			if(rubro=='nombre'){
				key=rubro;
				var nombre = this.getName();
				if(nombre=='anónimo'){
					key='sinNombre';
				}
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
				//currOptSpan.data('blankSpan', blankSpan);
				
				var texto = currOptConfig.text;
				if(rubro=='nombre'){
					texto = texto.replace(/\[nombre\]/,this.getName());
				}
				currOptSpan.html(texto);
				
				if(!this.hasChosen){
					currOptSpan.on('click', function(){
						_this.optionChosen(rubro, $(this));
					});
				} else {
					currOptSpan.addClass('e-inactivo');
				}
				
				optionDiv.append(currOptSpan);
			}
			
			$('.imgAlebrije').addClass('e-oculto');
			$('.js-options').removeClass('e-oculto');
			$('.fondoParrafo').addClass('arriba');
		
		},
		
		optionChosen: function(rubro, $option){
			
			//var $blankSpan = $option.data('blankSpan');
			var texto = $option.html();
			texto = texto.replace(/\(Prefiero hacer otra propuesta.\)/,'');
			if(rubro=='color'){
				texto = this.blankSpan.html() + texto;
			}
			
			if(rubro!='cabeza'){
				this.blankSpan.html(texto);
			} else {
				$span = $("<span>", { class: 'hiperbole e-resaltado'});
				$span.html(texto);
				$span.insertBefore($('span[data-rubro="cuerpoIntro"]'));
			}
			
			
			if($option.data('id')=='opt4'){
				this.setAnswer('Prefiero hacer otra propuesta.');
			} else {
				this.gotoNextQuestion(3000);
				this.addMwSettings('optionChosen_'+rubro,texto.replace(/,/g,'__'));
			}
			
			$('.imgAlebrije').removeClass('e-oculto');
			$('.js-options').addClass('e-oculto');
			$('.fondoParrafo').removeClass('arriba');
			
			/*if(rubro=='cabeza'){
				$span = $("<span>", {});
				$span.html('Tiene ');
				$span.insertAfter(this.blankSpan);
			}*/
			
			//this.blankSpan.off();
			this.hasChosen = true;
		},
		
		changeSentence: function(rubro,vlr){

			var text;
			if(rubro=='cabeza2'){
				text = this.upperFirst(vlr);
			} else {
				text = this.blankSpan.html().replace(/\.\.\./,vlr);
			}
			text = text.replace(/[\s\.]+$/,'');
			text += '. ';
			if(!/cabeza/.test(rubro)){
				this.blankSpan.html(text);
			} else {
				$('span.hiperbole').html(text);
			}
			
		},
		
		
		getName:function(){
			var name;
			var re = /(Se llama |Su nombre es |Todos lo conocen como )/g;
			var orNombre = $('span[data-rubro="nombre"]').text();
			if(re.test(orNombre)){
				name = orNombre.replace(/(Se llama |Su nombre es |Todos lo conocen como |[\s\.]+$)/g,'');
			} else {
				name = 'anónimo';
			}
			return name;
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

var mwId = 'cap4_alebrije';
var alebrije = new Alebrije(blanks,mwId);

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
		
		if(evt.data.name=='start'){
			if(evt.data.value=='default'){
				alebrije.showParrafo();
				alebrije.setAlebrije();
				alebrije.crearZonasSensibles();
			}
		} else 
		if(evt.data.name=='get'){
			if(evt.data.value=='configAlebrije'){
				alebrije.getMwSettings('cap1_alebrije');
			} else
			if(evt.data.value=='configText'){
				alebrije.getMwSettings('cap3_alebrije');
			} else
			if(evt.data.value=='nombre'){
				alebrije.getName();
			}
		} else
		if(evt.data.name=="microworldSettings"){
			//alert('value mwSettings en alebrije_cap4:'+evt.data.value);
			var arrPairs = evt.data.value.split(',');
			for(var i=0;i<arrPairs.length;i++){
				var pair = arrPairs[i].split(':');
				if(pair[0]=='configAlebrije'){
					//alert('config recibido in cap2 ' + pair[1]);
					alebrije.configArr = pair[1].split('_');
					alebrije.setAlebrije();
				} else
				if(pair[0]=='configText'){
					//alert(pair[1]);
					alebrije.setText(pair[1]);
					alebrije.crearZonasSensibles();
				}
			}
		} else
		if(evt.data.name=='activar'){
			alebrije.activarZona(evt.data.value);
		} else
		if(/(nombre|cabeza|color)/.test(evt.data.name)){
			alebrije.changeSentence(evt.data.name,evt.data.value);
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
					if(/optionChosen_/.test(pair[0])){
						var rubro = pair[0].split('_')[1];
						var $blankSpan = $('span.blank[data-rubro="'+rubro+'"]');
						var txt = pair[1].replace(/__/g,',');
						if(rubro!='cabeza'){
							$blankSpan.html(txt);
						} else {
							$span = $("<span>", {class: 'e-resaltado'});
							$span.html(txt);
							$span.insertBefore($('span[data-rubro="cuerpoIntro"]'));
						}
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
