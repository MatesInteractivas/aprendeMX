var pruebas = {
	'velocidad': {
		'txt': 'Velocidad',
		'ya': false
	},
	'goles': {
		'txt': 'Capacidad goleadora',
		'ya': false
	},
	'habilidadBalon': {
		'txt': 'Habilidad con el balón',
		'ya': false
	},
	'condicion': {
		'txt': 'Condición física',
		'ya': false
	},
	'cabeceo': {
		'txt': 'Cabeceo',
		'ya': false
	},
	'punteria': {
		'txt': 'Puntería',
		'ya': false
	},
	'colocacion': {
		'txt': 'Colocación en el campo',
		'ya': false
	},
	'recuperacion': {
		'txt': 'Recuperación del balón',
		'ya': false
	},
	'posición': {
		'txt': 'Habilidad para ganar una posición',
		'ya': false
	}
}

var datos = {
	mariaElena : {
		foto: 'img/mariaElena_2.png',
		nombre: 'María Elena Córdova Montoya',
		edad: 'Edad: 11 años',
		experiencia: 'Tiempo jugando futbol: 4 años',
		pruebas: {
			velocidad: 'Velocidad: 70m en 10seg.',
			goles: 'Capacidad goleadora: 8/10 goles metidos',
			condicion: 'Condición física: 85 saltos a la cuerda (en 1 minuto)',
			habilidadBalon: 'Habilidad con el balón: Logró burlar una compañera.',
			cabeceo: 'Cabeceo: 2/5 remates logrados',
			punteria: 'Puntería: 2/5 buenos pases',
			colocacion: 'Colocación en el campo: No se hizo la prueba.',
			recuperacion: 'Recuperación del balón: No se hizo la prueba.',
			posicion: 'Habilidad para ganar una posición: No se hizo la prueba.'
		},
		cuestionario: {
			preg1: '<strong>¿Qué es lo que más te gusta del futbol?</strong><br>Me encanta la sensación de ganar y triunfar.',
			preg2: '<strong>¿Qué esperas de tu equipo y tus compañeras? </strong><br>Que se esfuercen para defender la portería y meter goles. ',
			preg3: '<strong>¿Cuáles son tus dos cualidades más importantes?</strong><br>Tengo mucha fuerza de voluntad y no me doy por vencida fácilmente.'
		}
	},
	claudia : {
		foto: 'img/claudia_2.png',
		nombre: 'Claudia Nieto Estrada',
		edad: 'Edad: 12 años',
		experiencia: 'Tiempo jugando futbol: 2 años',
		pruebas: {
			velocidad: 'Velocidad: 50m en 10seg.',
			goles: 'Capacidad goleadora: 10/10 goles metidos',
			condicion: 'Condición física: 58 saltos a la cuerda (en 1 minuto)',
			habilidadBalon: 'Habilidad con el balón: Logró burlar cuatro compañeras.',
			cabeceo: 'Cabeceo: 4/5 remates logrados',
			punteria: 'Puntería: 4/5 buenos pases',
			colocacion: 'Colocación en el campo: No se hizo la prueba.',
			recuperacion: 'Recuperación del balón: No se hizo la prueba.',
			posicion: 'Habilidad para ganar una posición: No se hizo la prueba.'
		},
		cuestionario: {
			preg1: '<strong>¿Qué es lo que más te gusta del futbol?</strong><br>Estar en el campo y jugar.',
			preg2: '<strong>¿Qué esperas de tu equipo y tus compañeras? </strong><br>Que nos apoyemos mutuamente y que haya compañerismo.',
			preg3: '<strong>¿Cuáles son tus dos cualidades más importantes?</strong><br>Soy decidida y alegre.'
		}
	},
	anaMaria : {
		foto: 'img/anaMaria_2.png',
		nombre: 'Ana María Bautista Hernández',
		edad: 'Edad: 11 años',
		experiencia: 'Tiempo jugando futbol: 3 meses',
		pruebas: {
			velocidad: 'Velocidad: 65m en 10seg.',
			goles: 'Capacidad goleadora: 6/10 goles metidos',
			condicion: 'Condición física: 92 saltos a la cuerda (en 1 minuto)',
			habilidadBalon: 'Habilidad con el balón: Logró burlar dos compañeras.',
			cabeceo: 'Cabeceo: 3/5 remates logrados',
			punteria: 'Puntería: 2/5 buenos pases',
			colocacion: 'Colocación en el campo: No se hizo la prueba.',
			recuperacion: 'Recuperación del balón: No se hizo la prueba.',
			posicion: 'Habilidad para ganar una posición: No se hizo la prueba.'
		},
		cuestionario: {
			preg1: '<strong>¿Qué es lo que más te gusta del futbol?</strong><br>Aún no lo sé, pero me atrae mucho.',
			preg2: '<strong>¿Qué esperas de tu equipo y tus compañeras? </strong><br>Que sean buena onda.',
			preg3: '<strong>¿Cuáles son tus dos cualidades más importantes?</strong><br>Me encantan los retos y soy muy luchona. Me gusta trabajar en equipo.'
		}
	}
}

var info = {
	velocidad: '<strong>Velocidad</strong><br><br>Este número indica cuántos metros pudo correr la candidata en sólo diez segundos.',
	goles: '<strong>Capacidad goleadora</strong><br><br>Aquí se indica cuántos goles anotaron en diez intentos, contra la misma portera.',
	condicion: '<strong>Condición física</strong><br><br>Para medir la condición física de las candidatas, las pusimos a brincar la cuerda y contamos cuántos saltos aguantaron en un minuto.',
	habilidadBalon: '<strong>Habilidad con el balón</strong><br><br>Para evaluar la habilidad con el balón de cada candidata, le dimos cinco intentos para llegar con el balón a la portería desde el medio campo, y contamos cuántas oponentes pudo esquivar en su mejor intento.'
}

function MWMain(mwId,datos,info){
	this.mwId = mwId;
	this.datos = $.extend({}, datos);
	this.info = info;
	this.pruebasRealizadas = ['velocidad','goles','condicion','habilidadBalon'];
	this.playerWindows = {};
	this.currentStatus = {
			playersCompleted : 0
	};
	this.reconstructionMsgs = false;
}

MWMain.prototype = {
	
		init:function(){

			var _this = this;
			this.overlay = $('.js-overlay').addClass('e-oculto');
			this.getMwSettings('cap1_pruebas');
			
			$('.candidata').on('click',function(){
				
				$('.candidata').addClass('e-oculto');
				var name = $(this).attr('data-name');
				var $infoDiv = $('.info');
				$infoDiv.attr('data-name',name);
				$('.foto',$infoDiv).attr('src',_this.datos[name]['foto']);
				$('.nombre',$infoDiv).html(_this.datos[name]['nombre']);
				$('.edad',$infoDiv).html(_this.datos[name]['edad']);
				$('.experiencia',$infoDiv).html(_this.datos[name]['experiencia']);
				$infoDiv.removeClass('e-oculto');
				
				for(var i=0;i<_this.pruebasRealizadas.length;i++){
					var prueba = _this.pruebasRealizadas[i];
					var $div = $("<div>", {'class':'resultado','data-name': name });
					$div.html(_this.datos[name]['pruebas'][prueba]);
					$div.appendTo($('.resultados'));
					if(/(condicion|habilidad|goles|velocidad)/.test(prueba)){
						var $bt = $("<a>", {'class':'infoBt','data-prueba': prueba });
						$bt.on('click',function(){
							$('.js-vntn-info').removeClass('e-oculto');
							var pr = $(this).attr('data-prueba');
							$('.js-vntn-info .vntn--contenido').html(_this.info[pr]);
						});
						$bt.appendTo($div);
					}
				}
				
				for(var pregunta in _this.datos[name]["cuestionario"]){
					var $div = $("<div>", {'class':'pregunta','data-name': name });
					$div.html(_this.datos[name]['cuestionario'][pregunta]);
					$div.appendTo($('.cuestionario'));
				}
			});
			
			$('.js-btn-cuest').on('click',function(){
				$('.resultados').addClass('e-oculto');
				$('.cuestionario').removeClass('e-oculto');
			});
			
			$('.js-btn-prueba').on('click',function(){
				$('.cuestionario').addClass('e-oculto');
				$('.resultados').removeClass('e-oculto');
			});
			
			$('.js-btn-todas').on('click',function(){
				$('.info').addClass('e-oculto');
				$('.candidata').removeClass('e-oculto');
				$('div').remove('.resultado');
				$('div').remove('.pregunta');
			});
				    
			this.initWindows();

		    //$('.vntn-inst').removeClass('e-oculto');

		},
		
		initWindows: function(){
			
			var _this = this;
			// init windows
			var vntns = $('.vntn').addClass('e-oculto');
			var vtn;
			for(var i=0; i<vntns.length; i++){
				vtn = $(vntns.get(i));
				var closeBtn = $('<button class="vntn--btn-cerrar">X</button>');
				closeBtn.on('click', function(){
					var vtn = $(this).closest('.vntn');
					vtn.addClass('e-oculto');
					_this.overlay.addClass('e-oculto');
					
				});
				vtn.append(closeBtn);
			}	
		    
		},
		
		
		// comunicación chat
		
		 define: function(termino){
			var padre = window.parent;
			var mensajeTipoSet = { command: "showDefinition", params: {id: this.mwId , value: termino } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
			
		nextQuestion: function(delay){
			setTimeout(function(){
				var padre = window.parent;
				var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: this.mwId } };
				padre.postMessage(mensajeTipoSet, "*");	
			},delay);
		},
		
		getMwSettings:function(target){
			var padre = window.parent;
			var mensajeTipoSet = { command: "getMicroworldSettings", params: {id: this.mwId, targetId: target, src: 'chat' } }; //src = mw/chat
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		
		setAnswer: function(str){
			if(!this.reconstructionMsgs){
				var padre = window.parent;
				var mensajeTipoSet = { command: "setAnswer", params: { id:this.mwId , value: str } };
				padre.postMessage(mensajeTipoSet, "*");
			}
		}
					  
};

var mwId = 'cap1_candidatas';
var mwMain = new MWMain(mwId,datos,info);

$(document).ready(function(){
	
	mwMain.init();
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: { id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if (evt.data && evt.data.type === "set") {
		
		if(evt.data.name=='reconstructionMsgs'){
			mwMain.reconstructionMsgs = evt.data.value;
		} else 
                if(evt.data.name=="microworldSettings"){
			//alert(evt.data.value);
                        var arr = evt.data.value.split(',');
                        for(var i=0;i<arr.length;i++){
                                var arr2 = arr[i].split(':');
                                var nomVar = arr2[0];
				var valVar = arr2[1];
				if(nomVar=='prueba'){
					valVar = valVar.replace(/(obligatorio|opcional)_/,'');
					if(mwMain.pruebasRealizadas.indexOf(valVar)==-1){
						mwMain.pruebasRealizadas.push(valVar);
					}
				}
                        }
                } else
		if(evt.data.name=="get"){
				if(evt.data.value=='pruebas'){
					var string = "";
					for(var i=0;i<mwMain.pruebasRealizadas.length;i++){
						var prueba = mwMain.pruebasRealizadas[i];
						string += pruebas[prueba]['txt'] + ", ";
					}
					string = string.substring(0,string.length-2);
					mwMain.setAnswer(string);
				}
		} else
		if(evt.data.name=='mostrar'){
			$('.js-btn-prueba').trigger('click');
			$('.js-btn-todas').trigger('click');
			$('.candidata[data-name="'+evt.data.value+'"]').trigger('click');
		} else 
		if(evt.data.name=="mwReconstruction"){
			
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica
				//nada, que lo vuelvan a hacer; de todos mods mw=inactive-->setAnswer no se pela
				//mwMain.pruebasRealizadas.push('habilidadBalon');
				//mwMain.pruebasRealizadas.push('condicion');
			} else {
				
			}
								
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		} 
		
	}
}

