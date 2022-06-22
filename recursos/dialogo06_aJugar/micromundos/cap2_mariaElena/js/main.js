var oraciones = {
	'velocidad': [
			'',
		      'Es la más rápida de las tres candidatas. ',
		      'Corre más rápido que las otras dos candidatas. ',
		      'Alcanza la mayor velocidad de las tres candidatas. ',
		      'Fue la mejor en la prueba de velocidad. ',
		      'La velocidad de esta candidata es la mayor de las tres. ',
		      'La velocidad de esta chica es superior a la de las otras dos. '
		],
	'condicion': {
		    'excelente': 'tiene una excelente condición física. ',
		    'extraordinario': 'tiene una condición física extraordinaria. ',
		    'excepcional': 'tiene una condición física excepcional. ',
		    'sublime': 'tiene una condición física sublime. ',
		    'magnífico': 'tiene una condición física magífica. ',
		    'superior': 'tiene una condición física superior. ',
		    'admirable': 'tiene una condición física admirable. ',
		    'superlativo': 'tiene una condición física superlativa. ',
		    'insuperable': 'tiene una condición física insuperable. ',
		    'sobresaliente': 'tiene una condición física sobresaliente. ',
		    'soberbio': 'tiene una condición física soberbia. ',
		    'óptimo': 'tiene una condición física óptima. ',
		    'estupendo': 'tiene una estupenda condición física. ',
		    'fenomenal': 'tiene una condición física fenomenal. ',
		    'bueno': 'tiene una muy buena condición física. ',
		    'punto': 'Otro punto a favor es su gran condición física. ',
		    'aspecto': 'Otro aspecto a favor es su gran condición física. ',
		    'segundo': 'es la segunda mejor en condición física. ',
		    'dos': 'es la segunda mejor en condición física. ',
		    '2': 'es la segunda mejor en condición física. '
		},
	'conectores': {
		'además': 'Además, ',
		'asimismo': 'Asimismo, ',
		'así': 'Así mismo, ',
		'también': 'También ',
		'y': '<y ',
		'pero': '<<pero ',
		'embargo': 'Sin embargo, '
	},
	'capGol': 'Su capacidad goleadora es buena. ',
	'habilidad': {
		'bueno': 'su habilidad con el balón no es tan buena. ',
		'fuerte': 'su habilidad con el balón no es su fuerte. ',
		'inferior': 'su habilidad con el balón es inferior a la de las otras dos. ',
		'regular': 'su habilidad con el balón es muy regular. ',
		'aceptable': 'su habilidad con el balón es sólo aceptable. ',
		'suficiente': 'su habilidad con el balón es apenas suficiente. ',
		'pasable': 'su habilidad con el balón es sólo pasable. ',
		'ordinario': 'su habilidad con el balón es muy ordinaria. ',
		'mediana': 'su habilidad con el balón es mediana. ',
		'común': 'su habilidad con el balón es bastante común. ',
		'mediocre': 'su habilidad con el balón es un poco mediocre. ',
		'promedio': 'su habilidad con el balón no es superior al promedio. ',
		'más': 'su habilidad con el balón no sólo más o menos. ',
		'peor': 'su habilidad con el balón no es tan buena como las otras candidates. ',
		'malo': 'su habilidad con el balón es bastante mala. ',
		'pobre': 'su habilidad con el balón es más bien pobre. ',
		'bajo': 'su habilidad con el balón está por debajo de las demás. ',
		'debajo': 'su habilidad con el balón está por debajo de las demás. ',
		'abajo': 'su habilidad con el balón está por debajo de las demás. ',
		'desear': 'su habilidad con el balón deja un poco que desear. ',
		'mejorar': 'su habilidad con el balón se puede mejorar. ',
		'trabajar': 'conviene trabajar en su habilidad con el balón. ',
		'desarrollar': 'conviene trabajar en su habilidad con el balón. ',
		'perfeccionar': 'su habilidad con el balón se debe perfeccionar. '
	},
	defaultText: 'Es la más rápida de las tres candidatas. Además, tiene una excelente condición física. Su capacidad goleadora es buena, pero su habilidad con el balón es sólo aceptable. '
}

function Parrafo(oraciones, id){
	this.oraciones = oraciones;
	this.oracion = "";
	this.inicio = true;
	this.mwId = id;
}

Parrafo.prototype = {
	
		init:function(){

		},
		
		addOracion: function(){
			this.removeColors();
			this.oracion = '<span class="e-nuevo">' + this.oracion + '</span>';
			$('.parrafo').html($('.parrafo').html()+this.oracion);
			this.oracion = "";
		},
		
		removeColors: function(){
			$('.parrafo span.e-nuevo').removeClass('e-nuevo');
			$('.parrafo span.e-morado').removeClass('e-morado').addClass('estilo');
			$('.parrafo span.e-azul').removeClass('e-azul').addClass('estilo');
		},
		
		upperFirst: function(string){
			return string.charAt(0).toUpperCase() + string.substr(1);	
		},
		
		lowerFirst: function(string){
			return string.charAt(0).toLowerCase() + string.substr(1);
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
			var padre = window.parent;
			var mensajeTipoSet = { command: "addMicroworldSettings", params: { id:this.mwId, name: name, value: value } };
			padre.postMessage(mensajeTipoSet, "*");	
		}
};

var mwId = 'cap2_mariaElena';
var parrafo = new Parrafo(oraciones,mwId);

$(document).ready(function(){
	
	parrafo.init();
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if(evt.data && evt.data.type === "set") {
		
		if(evt.data.name=="velocidad"){
			if(/\d/.test(evt.data.value)){
				var i = parseInt(evt.data.value);
				parrafo.oracion = parrafo.oraciones.velocidad[i];
			} else {
				parrafo.oracion = evt.data.value;
			}
			parrafo.addOracion();
		} else
		if(evt.data.name=="condicionCnctr"){
			var arr = evt.data.value.split(',');
			for(var i=0;i<arr.length;i++){
				var clave = arr[i];
				if(parrafo.oraciones.condicion[clave]){
					parrafo.oracion = parrafo.oraciones.condicion[adj];
					break;
				}
			}
			if(parrafo.oracion==""){
				parrafo.oracion = 'tiene una excelente condición física. ';
			}
			for(i=0;i<arr.length;i++){
				var cnctr = arr[i];
				if(parrafo.oraciones.conectores[cnctr]){
					var fraseCnctr = parrafo.oraciones.conectores[cnctr];
					//sólo el caso de 'y'
					if(fraseCnctr.charAt(0)=='<'){
						fraseCnctr = fraseCnctr.substr(1);
						var lastSpan = $('.parrafo span:not(.estilo):last-child');
						var oracionAnt = lastSpan.html();
						oracionAnt = oracionAnt.replace(/\./,'');
						lastSpan.html(oracionAnt);
					} 
					parrafo.oracion = fraseCnctr + parrafo.oracion;
					break;
				}
			}
			parrafo.addOracion();
		} else
		if(evt.data.name=="condicion"){
			var arr = evt.data.value.split(',');
			for(var i=0;i<arr.length;i++){
				var adj = arr[i];
				if(parrafo.oraciones.condicion[adj]){
					parrafo.oracion = parrafo.oraciones.condicion[adj];
					break;
				}
			}
			if(parrafo.oracion==""){
				parrafo.oracion = 'tiene una excelente condición física. ';
			}
			parrafo.oracion = parrafo.upperFirst(parrafo.oracion);
			parrafo.addOracion();
		} else
		if(evt.data.name=="habilidad"){
			var arr = evt.data.value.split(',');
			for(var i=0;i<arr.length;i++){
				var adj = arr[i];
				if(parrafo.oraciones.habilidad[adj]){
					parrafo.oracion = parrafo.oraciones.habilidad[adj];
					break;
				}
			}
			if(parrafo.oracion==""){
				parrafo.oracion = 'su habilidad con el balón es sólo aceptable. ';
			}
		} else
		if(evt.data.name=="cnctr1"){
			//var arr = evt.data.value.split(',');
			//for(var i=0;i<arr.length;i++){
				//var cnctr = arr[i];
				var cnctr = evt.data.value;
				var fraseCnctr = parrafo.oraciones.conectores[cnctr];
				var lastSpan = $('.parrafo span:last-child');
				var lastOracion = lastSpan.html();
				if(fraseCnctr.charAt(0)=='<'){
					var n = $('.parrafo span:not(.estilo)').length-1;
					var prevSpan = $('.parrafo span:not(.estilo):nth-child('+n+')');
					var oracionAnt = prevSpan.html();
					if(fraseCnctr.charAt(1)!='<'){
						fraseCnctr = fraseCnctr.substr(1);
						oracionAnt = oracionAnt.replace(/\./,'');
					} else
					if(fraseCnctr.charAt(1)=='<'){
						fraseCnctr = fraseCnctr.substr(2);
						oracionAnt = oracionAnt.replace(/\./,',');
					}
					prevSpan.html(oracionAnt);
				}
				var oracion = fraseCnctr + parrafo.lowerFirst(lastOracion);
				lastSpan.html(oracion);
		} else
		if(evt.data.name=="cnctr2"){
			var cnctr = evt.data.value;
			var fraseCnctr = parrafo.oraciones.conectores[cnctr];
			//pero
			if(fraseCnctr.charAt(0)=='<' && fraseCnctr.charAt(1)=='<'){
				fraseCnctr = fraseCnctr.substr(2);
				var lastSpan = $('.parrafo span:not(.estilo):last-child');
				var oracionAnt = lastSpan.html();
				oracionAnt = oracionAnt.replace(/\./,',');
				lastSpan.html(oracionAnt);
			}
			parrafo.oracion = fraseCnctr + parrafo.oracion;
			parrafo.addOracion();
			//alert($('.parrafo').text());
			var txtMariaElena = $('.parrafo').text().replace(/,/g,"__");
			parrafo.addMwSettings('txtMariaElena',txtMariaElena);
		} else
		if(evt.data.name=="color"){
			parrafo.removeColors();
			if(evt.data.value=='y'){
				var prevSpan = $('.parrafo span:not(.estilo):nth-child(2)');
				prevSpan.addClass('e-azul');
				var lastSpan = $('.parrafo span:last-child');
				var lastOracion = lastSpan.html();
				lastOracion = lastOracion.replace(/y/,'<span class="e-morado">y</span><span class="e-azul">');
				lastOracion = lastOracion + '</span>';
				lastSpan.html(lastOracion);
			} else
			if(evt.data.value=='coma'){
				var lastSpan = $('.parrafo span:not(.estilo):last-child');
				var lastOracion = lastSpan.html();
				lastOracion = lastOracion.replace(/,/,'<span class="e-morado">,</span>');
				lastSpan.html(lastOracion);
			} else
			if(evt.data.value=='pero'){
				//var n = $('.parrafo span:not(.estilo)').length-1;
				//var prevSpan = $('.parrafo span:not(.estilo):nth-child('+n+')');
				var prevSpan = $('.parrafo span:not(.estilo):nth-child(4)');
				var prevOracion = prevSpan.html();
				prevOracion = prevOracion.replace(/,/,'<span class="e-morado">,</span>');
				prevSpan.html(prevOracion);
			} else
			if(evt.data.value=='none'){
				//nada
			}
		} else
		if(evt.data.name=="capGol"){
			parrafo.oracion = parrafo.oraciones.capGol;
			parrafo.addOracion();
		} else
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica cuando se inicia en otro capítulo
				$('.parrafo').html($('.parrafo').html()+parrafo.oraciones.defaultText);
				var txt = $('.parrafo').text().replace(/,/g,"__");
				parrafo.addMwSettings('txtMariaElena_default',txt);
			} else {
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='txtMariaElena_default'){
						var txt = pair[1].replace(/__/g,",");
						$('.parrafo').html(txt);
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
