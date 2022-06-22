var info = {
	adicion : [
		{
			conector: 'y',
			funcion: 'Conjunción para expresar adición, suma o continuación.',
			ejemplo: 'Son las que hicieron la señal de la cruz en nuestra frente <span class="e-highlight">y</span> las que hicieron florecer el trigo en racimos de tortillas. ',
			fuente: '(fragmento de <em>Las manos de mamá</em>, novela de Nellie Campobello)'
		},
		{
			conector: 'además',
			funcion: 'Indica suma. Sirve como sinónimo del conector “también”. Cuando se usa en escritura, por lo general va seguido de una coma.',
			ejemplo: 'Teníamos como estancada la guerra. <span class="e-highlight">Además,</span> yo empezaba a aburrirme. Me parecía estar solo en el llano.',
			fuente: '(fragmento de <em>El sol que estás mirando</em>, novela de Jesús Gardea)'
		},
		{
			conector: 'asimismo / así mismo',
			funcion: 'Se usa como conector de suma, al igual que "y". También para establecer relaciones de semejanza o comparación, o de énfasis en una idea. Es más formal y se usa sobre todo en textos escritos. Siempre va seguido de una coma.',
			ejemplo: 'Niñas, niños y adolescentes tienen derecho a no ser sujetos de discriminación alguna ni de limitación o restricción de sus derechos, en razón de su origen étnico, nacional o social, idioma o lengua, edad, género, preferencia sexual, […]. <span class="e-highlight">Asimismo,</span> las autoridades están obligadas a llevar a cabo medidas especiales para prevenir, atender y erradicar la Discriminación Múltiple de la que son objeto niñas, niños y adolescentes en situación de exclusión social, […]',
			fuente: '(Artículo 39 de la Ley General de los Derechos de Niñas, Niños y Adolescentes)'
		}	
	],
	contraste: [
		{
			conector: 'pero',
			funcion: 'Conector muy común para objetar, precisar, aclarar y matizar.',
			ejemplo: 'Ya mirará usted ese viento que sopla sobre Luvina. Es pardo. Dicen que porque arrastra arena de volcán; <span class="e-highlight">pero</span> lo cierto es que es un aire negro.',
			fuente: '(fragmento de <em>Luvina</em>, cuento de Juan Rulfo)'
		},
		{
			conector: 'sin embargo',
			funcion: 'Sirve para precisar, objetar, aclarar. Su uso es más elegante, no es tan frecuente como el conector "pero". Cuando se usa en texto escrito, siempre va seguido de una coma.',
			ejemplo: 'Y <span class="e-highlight">sin embargo,</span> cuando duermo sin ti, contigo sueño. ',
			fuente: '(fragmento de <em>Y sin embargo</em>, canción de Joaquín Sabina)'
		},
		{
			conector: 'en cambio',
			funcion: 'Sirve para contrastar o contra- poner una cosa a otra. Se puede usar al inicio de la oración o después de la parte que está siendo contrastada. Suele ir seguido de una coma.',
			ejemplo: '[Hayden] Me tranquilizó un poco, no totalmente, pero en fin, sentí que la naturaleza podía conspirar en contra nuestra. Zadkin <span class="e-highlight">en cambio</span> me dijo algo terrible: “Angelina, ¿qué no sabes que el amor no puede forzarse a través de la compasión?”',
			fuente: '(fragmento de <em>Querido Diego, te abraza Quiela</em>, novela de Elena Poniatowska)'
		}	
	]
}

function Infograma(info,id){
	
	this.info = $.extend({}, info);
	this.mwId = id;
	this.inicio = true;
	this.numCnctr = 0;
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
			
			this.activate();
			this.showInfo();
		    
		},
		
		activate: function(){
			this.activarBtSig();	
		},
		
		activarBtSig: function(){
			$('.js-btn-sig').removeClass('e-inactivo');
			var _this = this;
			$('.js-btn-sig').on('click', function(){
				_this.numCnctr++;
				_this.showInfo();
				if(_this.numCnctr==1){
					_this.activarBtAnt();
				} else 
				if(_this.numCnctr==2){
					_this.desactivarBtSig();
					if(_this.inicio){
						_this.inicio = false;
						_this.addMwSettings('inicio','false');
						_this.gotoNextQuestion(5000);
					}
				}
			});
		},
		
		desactivarBtSig: function(){
			$('.js-btn-sig').addClass('e-inactivo');
			$('.js-btn-sig').off();
		},
		
		activarBtAnt: function(){
			var _this = this;
			$('.js-btn-ant').removeClass('e-inactivo');
			$('.js-btn-ant').on('click', function(){
				_this.numCnctr--;
				_this.showInfo();
				if(_this.numCnctr==1){
					_this.activarBtSig();
				} else 
				if(_this.numCnctr==0){
					_this.desactivarBtAnt();
				}
			});
		},
		
		desactivarBtAnt: function(){
			$('.js-btn-ant').addClass('e-inactivo');
			$('.js-btn-ant').off();
		},
		
		showInfo: function(){
			$('.info').empty();
			for(var type in this.info){
				var $div = $('.info.'+type);
				var infoObj = this.info[type][this.numCnctr];
				for(var key in infoObj){
					var $p = $("<p>", {'class': key });
					var txt;
					if(key=='ejemplo'){
						txt = "Ejemplo: <em>" + infoObj[key] + "</em>";
					} else {
						txt = infoObj[key];
					}
					$p.html(txt);
					$p.appendTo($div);	
				}
				
			}
			
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
		
		addMwSettings: function(name,value){
			//alert('setting name: '+name+'& value: '+value);
			var padre = window.parent;
			var mensajeTipoSet = { command: "addMicroworldSettings", params: {id: this.mwId, name: name, value: value } };
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

var mwId = 'cap3_conectores';
var infograma = new Infograma(info,mwId);

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
		/*if(evt.data.name=="activar"){
			if(evt.data.value==1){
				infograma.activate();
			}
		} else*/
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			
			if(evt.data.value=='default'){
				infograma.inicio = false;
				//lo que se tenga que hacer por omisión / sin info específica del localstorage
				// Sucede cuando se inicia desde un capítulo determinado y el micromundo debe encontrarse en cierto estado
				
			} else {
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='inicio' && pair[1]=='false'){
						infograma.inicio = false;
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
