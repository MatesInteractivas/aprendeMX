var secciones = {
	presentacion: {
		opciones: [
			"¿Cuántas veces hemos escuchado la palabra “no” después de pedir un permiso? ",
			"Hay diferentes razones que los padres dan cuando no te quieren dar permiso. ",
			"La negación de permisos es un fenómeno bien conocido para la infancia mexicana. "
		],
		chosen: false,
		rebuildValue: ""
	},
	presentacion_2: {
		opciones: [
			"A veces no conseguimos ninguna explicación, pero cuando lo logramos es común escuchar “no puedes ir porque...”.",
			"Entre ellas, hay una que destaca por su popularidad: “no puedes ir porque...”.",
			"Con frecuencia, las niñas y los niños de nuestro país escuchan “no puedes ir porque...”."
		],
		chosen: false
	},
	porque: {
		cuarto: 'no has arreglado tu cuarto',
		calificaciones: 'tienes malas calificaciones',
		obedecer: 'no obedeces',
		comportamiento: 'te portaste mal',
		peligroso: 'es muy peligroso',
		ayudar: 'tienes trabajo que hacer en casa',
		tarea: 'tienes tarea',
		vida: 'así es la vida',
		yo: 'lo digo yo',
		caro: 'es muy caro',
		no: 'no'
	},
	postura: {
		frases: {
			'opinion': ' <span class="blank mrcdr opinion" data-blank="1">En mi opinión, </span>...',
			'opino': ' <span class="blank mrcdr opinion" data-blank="1">Yo opino que </span>...',
			'creo': ' <span class="blank mrcdr opinion" data-blank="1">Yo opino que </span>...',
			'considero': ' <span class="blank mrcdr opinion" data-blank="1">Yo opino que </span>...',
			'pienso': ' <span class="blank mrcdr opinion" data-blank="1">Yo opino que </span>...',
			'segun': ' <span class="blank mrcdr opinion" data-blank="1">Según yo, </span>...',
			'opino': ' <span class="blank mrcdr opinion" data-blank="1">Yo opino que </span>...',
			'para': ' <span class="blank mrcdr opinion" data-blank="1">Para mí, </span>...',
			'parecer': ' <span class="blank mrcdr opinion" data-blank="1">A mi parecer, </span>...',
			'manera': ' <span class="blank mrcdr opinion" data-blank="1">A mi manera de ver, </span>...',
			'punto': ' <span class="blank mrcdr opinion" data-blank="1">Desde mi punto de vista, </span>...',
			'parece': ' <span class="blank mrcdr opinion" data-blank="1">Me parece que </span>...',
			'perspective': ' <span class="blank mrcdr opinion" data-blank="1">Desde mi perspectiva, </span>...'
		},
		posturas: {
			noEsJusto: "no es justo negarnos el derecho a salir con nuestros amigos. ",
			noConviene: "no les conviene a los padres negarnos el derecho a salir con nuestros amigos. ",
			afectaLaSalud: "el negarnos permiso de salir afecta nuestra salud y desarrollo. "
		},
		chosen: false,
		key: "noEsJusto" //defaultValue
	},
	enlace: {
		opciones: [
			"<span class='blank oracion introArg' data-blank='2'>Para probar esto, voy a presentar tres argumentos.</span><br><br>",
			"<span class='blank oracion introArg' data-blank='2'>A continuación presento tres argumentos que apoyan esta idea.</span><br><br>",
			"<span class='blank oracion introArg' data-blank='2'>Enseguida mencionaré tres ideas que muestran la validez de esta apreciación.</span><br><br>"
		],
		chosen: false,
		rebuildValue: ""
	},
	argumentos: {
		opciones: {
			noEsJusto: [
				"no hay relación entre salir con tus amigos y mejorar en la escuela o ayudar en casa. ",
				"todos tenemos derecho a divertirnos, niños y adultos por igual. ",
				"influye en la relación que tenemos con la gente de nuestra edad. ",
				"nos niegan la oportunidad de aprender a cuidarnos por nosotros. "
			],
			noConviene: [
				"los amigos te pueden enseñar cosas valiosas. ",
				"los amigos te pueden proteger y escuchar de formas que los papás no pueden. ",
				"nos niegan la oportunidad de aprender a cuidarnos por nosotros. ",
				"seremos menos sociables. "
			],
			afectaLaSalud: [
				"el quedarse en casa impide la realización de actividades físicas. ",
				"los amigos te pueden proteger y escuchar de formas de los papás no pueden. ",
				"el descanso y la diversión son indispensables para la salud. ",
				"seremos menos sociables. "	
			]	
		},
		datos: {
			noEsJusto: [
				"<span class='conector'>Por ejemplo,</span> Sandra y Ana son hermanas y salen todo el tiempo juntas. Sandra tiene buenas calificaciones y Ana no. <span class='conector'>También</span> está el caso de Alonso y Alberto. Ellos trabajan en el taller mecánico de su papá todas las tardes. Uno tiene las mejores calificaciones del salón y el otro las peores. ",
				"Todo mundo sabe que los adultos que trabajan tienen derecho por ley a varios días de vacaciones al año. El caso de los niños es parecido. En la Constitución dice que tenemos derecho al descanso y al esparcimiento (artículo 13). ",
				"<span class='conector'>Por ejemplo,</span> cuando vas de fiesta o de viaje con amigos, tienes muchas anécdotas nuevas que contar. <span class='conector'>En cambio,</span> si nunca sales no aprendes a convivir en grupo y puede ser más difícil hacer amigos. ",
				"Toño es el ejemplo perfecto. Su mamá le enseñó cómo tomar el camión y qué hacer si se pierde. Ahora él se regresa solo a casa. <span class='conector'>En cambio,</span> Pedro se perdió el otro día en la calle y no pudo regresar a su casa. Nadie le había enseñado. "
			],
			noConviene: [
				"<span class='conector'>Por ejemplo,</span> los papás de Sebastián no sabían manejar y él aprendió con un amigo suyo. <span class='conector'>También</span> está el caso de Mariana. Sus amigas siempre le ayudan a estudiar para su examen de matemáticas. ",
				"Es un hecho que los papás no pueden estar contigo todo el tiempo. Si te pasa algo malo en la escuela, tus amigos te pueden proteger. <span class='conector'>Además</span> cuando estás triste, no siempre quieres hablar con tus papás pero sí con tus amigos. ",
				"<span class='conector'>Por ejemplo,</span> está el caso de Toño. Su mamá le enseñó cómo tomar el camión y qué hacer si se pierde. Ahora él se regresa solo a casa. <span class='conector'>En cambio,</span> Pedro se perdió el otro día en la calle y no pudo regresar a su casa. Nadie le había enseñado. ",
				"Está probado que un niño que no convive con gente de su edad, tendrá dificultades de integrarse a un equipo de trabajo. <span class='conector'>También</span> se ha visto que quien convive con más gente en la infancia podrá encontrar pareja más fácilmente cuando sea grande. "
			],
			afectaLaSalud: [
				"<span class='conector'>Por ejemplo,</span> se ha demostrado que los niños que se quedan en casa ven la tele o juegan en la computadora. Esto va en contra de las recomendación de los doctores de hacer cuando menos 60 minutos de ejercicio al día. ",
				"Es un hecho que los papás no pueden estar contigo todo el tiempo. Si te pasa algo malo en la escuela, tus amigos te pueden proteger. <span class='conector'>También</span> cuando estás triste, no siempre quieres hablar con tus papás pero sí con tus amigos. ",
				"<span class='conector'>Por ejemplo,</span> se ha probado que los niveles de estrés bajan considerablemente después de un ataque de risa. <span class='conector'>En cambio,</span> se ha estudiado que las personas que no se relajan en sus trabajos tienen mayores probabilidades de enfermarse. ",
				"Está probado que un niño que no convive con gente de su edad, tendrá dificultades de integrarse a un equipo de trabajo. <span class='conector'>Además</span> se ha visto que quien convive con más gente en la infancia podrá encontrar pareja más fácilmente cuando sea grande. "	
			]	
		},
		chosen: 0,
		rebuildValue: []
	},
	conclusion: {
		opciones: [
			" deben darme permiso. Es lo más justo, correcto y conveniente para todos. La salida con mis amigos me permitirá crecer sano y feliz.",
			" un permiso aprobado tiene mejores resultados que un permiso negado. Las salidas de casa contribuyen al desarrollo pleno de las niñas y los niños.",
			" el desarrollo infantil se ve favorecido con la diversión y el esparcimiento. Impedir lo anterior podría traer consecuencia negativas de largo plazo para las niñas y los niños."
		],
		chosen: false,
		rebuildValue: ""
	}
}


function Argumentacion(id,secciones){
	
	this.inicio = true;
	this.mwId = id;
	this.secciones = secciones;
	this.seccion = "presentacion";
	this.seccionChat = "presentacion";
	this.rebuilding = false;
	this.completo = false;
}

Argumentacion.prototype = {
	
		init:function(){
			
			//por mientras, o si entras directo al capítulo
			
			
			this.$parrafo = $('div.divParrafo div.parrafo');
			this.$opciones = $('div.divOpciones div.opciones');
			
			var _this = this;
			$('div.pestanya').on("click",function(){
				var seccion = $(this).data('id');
				if(seccion == "argumentos"){
					_this.setSeccion($(this).data('id'),false);
				} else {
					_this.setSeccion($(this).data('id'),true);
				}
				
				$('div.divParrafo').addClass('e-navegando');
			});
			
			this.setSeccion("presentacion",true);
		},
		
		setSeccion: function(seccion,showOptions){
			
			$('span.e-resaltado').removeClass('e-resaltado');
			this.seccion = seccion;
			$('div.pestanya').removeClass('e-selected');
			$('div.pestanya[data-id="'+seccion+'"]').removeClass("e-oculto").addClass('e-selected');
			$('div.divParrafo').removeClass("presentacion postura enlace argumentos conclusion").addClass(seccion);
			$('div.divOpciones').removeClass("presentacion postura enlace argumentos conclusion").addClass(seccion);
			if(showOptions===true || showOptions=="true"){
				this.showOptions();
			} else {
				this.$opciones.empty();
			}
			
			if(!this.completo){
				
				var $par1 = $('span[data-id="presentacion"],span[data-id="presentacion_2"],span[data-id="porque"],span[data-id="postura"],span[data-id="enlace"]',this.$parrafo);
				var $par2 = $('span[data-id="argumentos"],span[data-id="datos"]',this.$parrafo);
				var $par3 = $('span[data-id="frase_conclusion"],span[data-id="conclusion"]',this.$parrafo);
				
				if(this.seccion=="argumentos"){
					$par1.addClass('e-oculto');
					$par2.removeClass('e-oculto');
					$par3.addClass('e-oculto');
				} else
				if(this.seccion=="conclusion"){
					$par1.addClass('e-oculto');
					$par2.addClass('e-oculto');
					$par3.removeClass('e-oculto');
				} else {
					$par1.removeClass('e-oculto');
					$par2.addClass('e-oculto');
					$par3.addClass('e-oculto');
				}
			}
		},
	
		showOptions: function(nomArr){
			this.$opciones.empty();
			var _this = this;
			var optionsArr;
			if(this.seccion=="argumentos"){
				var key = this.secciones.postura.key;
				optionsArr = this.secciones.argumentos['opciones'][key];
			} else {
				optionsArr = this.secciones[this.seccion]['opciones'];
			}
			if(optionsArr && optionsArr.length>0){
				//this.disableChat();
				for(var i=0;i<optionsArr.length;i++){
					var html = optionsArr[i];
					var $opcion = $("<div>", { class: 'opcion', 'data-index': i });
					$opcion.html(html);
					$opcion.appendTo(this.$opciones);
					$opcion.addClass("e-active");
					$opcion.on('click',function(){
						_this.addSpan($(this));
						if(_this.seccion=="presentacion" && _this.secciones.presentacion_2.chosen){
							_this.addPres2();
						}
					});
				}
			}
			
			
			//reconstruccion secciones posteriores a presentacion
			if(this.seccion!="presentacion"){
				this.reconstruct(this.seccion);
			}
		},
		
		addSpan: function($div){
			
			$('span.e-resaltado').removeClass('e-resaltado');
			$('div.divParrafo').removeClass('e-navegando');
			
			var html = $div.html();
			var $span;
			if(this.seccionChat==this.seccion && !this.rebuilding){
				this.setAnswer(html,100);
				this.addMwSettings(this.seccion,this.convertStr(html));
			}
			if(this.seccion!="argumentos"){
				if(!this.secciones[this.seccion].chosen){
					this.secciones[this.seccion].chosen = true;
					$span = $("<span>", { 'data-id': this.seccion });
					$span.appendTo(this.$parrafo);
				} else {
					$span = $('span[data-id="'+this.seccion+'"]',this.$parrafo);
					$("div.opcion",this.$opciones).removeClass("e-selected");
				}
			} else {
				this.secciones.argumentos.chosen=this.secciones.argumentos.chosen+1;
				$span = $('span[data-num="'+this.secciones.argumentos.chosen+'"]',this.$parrafo);
				html = $span.html().replace(/\.\.\./,"") + html;
				$div.removeClass('e-active').off();
				if(this.secciones.argumentos.chosen==2){
					$('div.opcion').off();
				}
			}
			$span.html(html);
			$span.addClass('e-resaltado');
			$div.addClass("e-selected");
			//$("div.opcion",this.$opciones).off();
			
			if(this.seccion=="argumentos"){
				var $datoSpan = $("<span>", { 'data-id': 'datos', class: 'e-oculto' });
				var i = $div.data('index');
				var key = this.secciones.postura.key;
				html = this.secciones.argumentos.datos[key][i];
				$datoSpan.html(html);
				$datoSpan.insertAfter($span);
			}
		},
		
		addPres2: function(){
			var htmlPres = 	$('span[data-id="presentacion"]').html();
			var optionsArr = this.secciones.presentacion.opciones;
			for(var i=0;i<optionsArr.length;i++){
				if(optionsArr[i]==htmlPres){
					var html = this.secciones.presentacion_2.opciones[i];
					break;
				}
			}
			var $span;
			if(!this.secciones.presentacion_2.chosen){
				this.secciones.presentacion_2.chosen = true;
				$span = $("<span>", { 'data-id': "presentacion_2", class: "e-resaltado" });
				$span.appendTo(this.$parrafo);
			} else {
				$span = $('span[data-id="presentacion_2"]',this.$parrafo);
			}
			$span.html(html);
		},
		
		addPorque: function(key){
			var txt = this.secciones.porque[key];
			if(!txt){
				txt = key;
				txt = txt.replace(/(porque |por que )/i,"");
			}
			var $spanPres2 = $('span[data-id="presentacion_2"]',this.$parrafo);
			$spanPres2.html($spanPres2.html().replace(/\.\.\.”\./," "));
			var $span = $("<span>", { 'data-id': "porque", class: 'e-resaltado' });
			$span.html(txt + "”.");
			$span.appendTo(this.$parrafo);
		},
		
		addFrasePostura: function(key){
			var txt = this.secciones.postura.frases[key];
			var $span = $("<span>", { 'data-id': "postura", class: 'e-resaltado' });
			$span.html(txt);
			$span.appendTo(this.$parrafo);	
		},
		
		addPostura: function(key){
			var txt = this.secciones.postura.posturas[key];
			this.secciones.postura.key = key;
			var $span = $('span[data-id="postura"]',this.$parrafo);
			var html = $span.html().replace(/\.\.\./,"") + txt;
			$span.html(html);
		},
		
		addConectores: function(){
			var $span = $("<span>", { 'data-id': "argumentos", 'data-num': "1", class: 'e-resaltado' });
			$span.html("Por un lado, ... ");
			$span.appendTo(this.$parrafo);	
			$span = $("<span>", { 'data-id': "argumentos", 'data-num': "2", class: 'e-resaltado' });
			$span.html("<br><br>Por el otro, ... ");
			$span.appendTo(this.$parrafo);	
		},
		
		
		showDatos: function(){
			$('span.e-resaltado').removeClass('e-resaltado');
			this.$opciones.empty();
			$('span[data-id="datos"]').removeClass('e-oculto').addClass('e-resaltado');
		},
		
		showConectores: function(){
			$('span.conector').addClass('e-blue');
		},
		
		addFraseConclu: function(txt){
			var $span = $("<span>", { 'data-id': "frase_conclusion", class: 'e-resaltado' });
			$span.html(txt);
			$span.appendTo(this.$parrafo);
		},
		
		textoFinal: function(){
			this.completo = true;
			$('div.divParrafo').addClass('e-final');
			$('span',this.$parrafo).removeClass('e-oculto');
			$('div.divOpciones').remove();
			$('span[data-id="frase_conclusion"]').html("<br><br>"+ $('span[data-id="frase_conclusion"]').html());
		},
		
		reconstruct: function(section){
			var rebuildValue = this.secciones[section].rebuildValue;
			if(section!="argumentos"){
				if(rebuildValue && rebuildValue!=""){
					this.rebuilding=true;
					var optionsArr = this.secciones[section].opciones;
					for(var i=0;i<optionsArr.length;i++){
						if(optionsArr[i]==rebuildValue){
							var $opcion = $('div.opcion:eq('+i+')',this.$opciones);
							this.addSpan($opcion);
							break;
						}
					}
					this.rebuilding=false;
				}
			} else {
				if(rebuildValue.length > 0){
					this.rebuilding=true;
					var key = this.secciones.postura.key;
					var optionsArr = this.secciones.argumentos['opciones'][key];
					for(var i=0;i<optionsArr.length;i++){
						for(var j=0;j<rebuildValue.length;j++){
							if(optionsArr[i]==rebuildValue[j]){
								var $opcion = $('div.opcion:eq('+i+')',this.$opciones);
								this.addSpan($opcion);
							}
						}
					}
					this.rebuilding=false;
				}
			}
		},
		
		reconstructDefault: function(){
			this.rebuilding = true;
			$('div.opcion:eq(0)',this.$opciones).trigger('click');
			this.addPres2();
			this.addPorque("calificaciones");
			this.addFrasePostura("opinion");
			this.addPostura("noEsJusto");
			this.setSeccion("postura",false);
			this.setSeccion("enlace",true);
			$('div.opcion:eq(0)',this.$opciones).trigger('click');
			this.addMwSettings("defaultSettings",true);
			//this.$opciones.empty();
			this.rebuilding = false;
		},
		
			
		/*** general **/
		
		upperFirst: function(string){
			return string.charAt(0).toUpperCase() + string.substr(1);	
		},
		
		lowerFirst: function(string){
			return string.charAt(0).toLowerCase() + string.substr(1);
		},
		
		convertStr: function(str){
			str = str.replace(/,/g,"___");
			return str;
		},
		revertStr: function(str){
			str = str.replace(/___/g,",");
			return str;
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

var mwId = 'cap3_argumentacion';
var argumentacion = new Argumentacion(mwId,secciones);

$(document).ready(function(){
	
	argumentacion.init();
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if(evt.data && evt.data.type === "set") {
		
		if(evt.data.name=='seccion'){
			var arr = evt.data.value.split("_");
			argumentacion.setSeccion(arr[0],arr[1]);
		} else
		if(evt.data.name=='seccionChat'){
			argumentacion.seccionChat = evt.data.value;
		}
		else
		if(evt.data.name=='options'){
			argumentacion.showOptions();			
		} else 
		if(evt.data.name=='pres2'){
			argumentacion.addPres2();
		} else
		if(evt.data.name=='porque'){
			argumentacion.addPorque(evt.data.value);
		}
		else
		if(evt.data.name=='frasePostura'){
			argumentacion.addFrasePostura(evt.data.value);
		} else
		if(evt.data.name=='postura'){
			argumentacion.addPostura(evt.data.value);
		} else
		if(evt.data.name=='conectores'){
			if(evt.data.value=="agregar"){
				argumentacion.addConectores();
			} else {
				argumentacion.showConectores();
			}
		} else
		if(evt.data.name=='datos'){
			argumentacion.showDatos();
		}  else
		if(evt.data.name=='fraseConclu'){
			argumentacion.addFraseConclu(evt.data.value);
		} else
		if(evt.data.name=='final'){
			argumentacion.textoFinal();
		} else
		if(evt.data.name=="microworldSettings"){
			/*var arrPairs = evt.data.value.split(',');
			for(var i=0;i<arrPairs.length;i++){
				var pair = arrPairs[i].split(':');
				if(pair[0]==''){
					//alert('config recibido in cap2 ' + pair[1]);

				} 
			}*/
		} else
		if(evt.data.name=='activar'){
			
		} else
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){	
				//lo que se tenga que hacer por omisión / sin info específica cuando se inicia en otro capítulo
				argumentacion.reconstructDefault();
			} else {
				var arrPairs = evt.data.value.split(',');
				for(var i=arrPairs.length-1;i>0;i--){
					var pair = arrPairs[i].split(':');
					if(/(presentacion|postura|enlace|conclusion)/.test(pair[0])){
						var seccion = pair[0];
						if(argumentacion.secciones[seccion].rebuildValue==""){
							argumentacion.secciones[seccion].rebuildValue = argumentacion.revertStr(pair[1]);
						}
					} else
					if(/argumentos/.test(pair[0])){
						seccion = "argumentos";
						var str = argumentacion.revertStr(pair[1]);
						if(argumentacion.secciones[seccion].rebuildValue.indexOf(str)==-1){
							argumentacion.secciones[seccion].rebuildValue.push(str);
						}
					}
				}
				if(/presentacion/.test(evt.data.value)){
					argumentacion.reconstruct("presentacion");
				} else {
					argumentacion.reconstructDefault();
				}
			}
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: { id: mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		} 
	} 
}
