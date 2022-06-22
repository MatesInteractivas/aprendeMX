
var FEEDBACK = {
	
};


var mwOptions = {
	str: '<span class="" data-id="presentacion">Hay diferentes razones que los padres dan cuando no te quieren dar permiso. </span><span class="" data-id="presentacion_2">Entre ellas___ hay una que destaca por su popularidad: “no puedes ir porque </span><span class="" data-id="porque">tienes trabajo que hacer en casa”.</span><span class="" data-id="postura"> <span class="blank marcador opinion" data-blank="1">Yo opino que </span>no les conviene a los padres negarnos el derecho a salir con nuestros amigos. </span><span class="" data-num="1" data-id="argumentos">Por un lado___  los amigos te pueden proteger y escuchar de formas que los papás no pueden. </span><span class="" data-id="datos"><span class="blank marcador hecho" data-blank="6">Es un hecho que</span> los papás no pueden estar contigo todo el tiempo. Si te pasa algo malo en la escuela___ tus amigos te pueden proteger. <span class="blank conector adicion e-blue" data-blank="4">Además___ </span> cuando estás triste___ no siempre quieres hablar con tus papás pero sí con tus amigos. </span><span class="" data-num="2" data-id="argumentos"><br><br>Por el otro___  nos niegan la oportunidad de aprender a cuidarnos por nosotros. </span><span class="" data-id="datos"><span class="blank conector ejemplo e-blue" data-blank="3">Por ejemplo___</span> está el caso de Toño. Su mamá le enseñó cómo tomar el camión y qué hacer si se pierde. Ahora él se regresa solo a casa. <span class="blank conector contraste e-blue" data-blank="5">En cambio___</span> Pedro se perdió el otro día en la calle y no pudo regresar a su casa. Nadie le había enseñado. </span><span class="" data-id="frase_conclusion"><br><br><span class="blank oracion conclu" data-blank="7">Todo lo anterior pone en evidencia que</span></span><span class="e-resaltado" data-id="conclusion"> un permiso aprobado tiene mejores resultados que un permiso negado. Las salidas de casa contribuyen al desarrollo pleno de las niñas y los niños.</span>',
	feedback : FEEDBACK,
	instrucciones : {
		fase1: "Presiona con el dedo sobre las oraciones que te gustaría cambiar; yo te daré varias opciones de sustitución. Elige la que más te agrada.<br><br>Cuando hayas seleccionado todos los fragmentos que deseas cambiar, presiona '¡Listo!'.",
		fase2: "Con las oraciones que acabas de elegir y los otros elementos que aparecieron en pantalla, podrás reconstruir el texto para que quede más a tu gusto.\
		        <br><br>Simplemente presiona los fragmentos en el orden en que los quieres colocar. Solitos se acomodarán.\
			<br><br>Recuerda estos puntos importantes:\
			<ul><li>Procura agrupar las ideas relacionadas entre sí.</li><li>Usa correctamente los conectores según el tipo de relación que expresan.</li><li>El uso de las frases para marcar ideas ('marcadores') es opcional.</li></ul>¡Adelante con la recreación!"
	},
	config: {
		blank1:{
			opt1:{
				text: 'En mi opinión, ',
				feedback: null,
				correct: true
			},
			opt2:{
				text:'Yo considero que ',
				feedback: null,
				correct: true
			},
			opt3:{
				text: 'Desde mi perspectiva, ',
				feedback: null,
				correct: true
			},
			opt4:{
				text: 'Para mí, ',
				feedback: null,
				correct: true
			},
			opt5:{
				text: 'Desde mi punto de vista, ',
				feedback: null,
				correct: true
			},
			opt6:{
				text:'Yo pienso que ',
				feedback: null,
				correct: true
			},
			opt7:{
				text:'Yo opino que ',
				feedback: null,
				correct: true
			}

		},
		blank2:{
			opt1:{
				text: 'Para probar esto, voy a presentar tres argumentos.',
				feedback: null,
				correct: true
			},
			opt2:{
				text: 'A continuación presento tres argumentos que apoyan esta idea.',
				feedback: null,
				correct: true
			},
			opt3:{
				text: 'Enseguida mencionaré tres ideas que muestran la validez de esta apreciación.',
				feedback: null,
				correct: true
			}
		},
		blank3:{
			opt1:{
				text: 'Por ejemplo,',
				feedback: null,
				correct: true
			},
			opt2:{
				text: 'Para mencionar un ejemplo,',
				feedback: null,
				correct: true
			},
			opt3:{
				text: 'Déjame dar un ejemplo:',
				feedback: null,
				correct: true
			},
			opt4:{
				text: 'Para ilustrar mi punto,',
				feedback: null,
				correct: true
			}
		},
		blank4:{
			opt1:{
				text: 'También',
				feedback: null,
				correct: true
			},
			opt2:{
				text: 'Además,',
				feedback: null,
				correct: true
			},
			opt3:{
				text: 'Así mismo,',
				feedback: null,
				correct: true
			},
			opt4:{
				text: 'De la misma manera,',
				feedback: null,
				correct: true
			}
		},
		blank5:{
			opt1:{
				text: 'En cambio,',
				feedback: null,
				correct: true
			},
			opt2:{
				text: 'Por lo contrario,',
				feedback: null,
				correct: true
			},
			opt3:{
				text: 'No obstante,',
				feedback: null,
				correct: true
			},
			opt4:{
				text: 'Por otro lado,',
				feedback: null,
				correct: true
			},
			opt5:{
				text: 'Ahora bien, ',
				feedback: null,
				correct: true
			}
			
		},
		blank6:{
			opt1:{
				text: 'Está probado que',
				feedback: null,
				correct: true
			},
			opt2:{
				text: 'Estudios han comprobado que',
				feedback: null,
				correct: true
			},
			opt3:{
				text: 'Se ha demostrado que',
				feedback: null,
				correct: true
			},
			opt4:{
				text: 'Se ha visto que',
				feedback: null,
				correct: true
			},
			opt5:{
				text: 'Se ha estudiado que',
				feedback: null,
				correct: true
			}
		},
		blank7:{
			opt1:{
				text: 'Todo lo anterior pone en evidencia que',
				feedback: null,
				correct: true
			},
			opt2:{
				text: 'Es por todo eso que',
				feedback: null,
				correct: true
			},
			opt3:{
				text: 'Las razones expuestas nos permiten concluir que',
				feedback: null,
				correct: true
			},
			opt4:{
				text: 'Por lo tanto,',
				feedback: null,
				correct: true
			},
			opt5:{
				text: 'Por todo lo anterior,',
				feedback: null,
				correct: true
			}
		},
		blank8:{
			opt1:{
				text: 'Es un hecho que',
				feedback: null,
				correct: true
			},
			opt2:{
				text: 'Todo mundo sabe que',
				feedback: null,
				correct: true
			},
			opt3:{
				text: 'No cabe duda de que',
				feedback: null,
				correct: true
			},
			opt4:{
				text: 'Es evidente que',
				feedback: null,
				correct: true
			}
		}
			
	},
	info: {
		blank1: "Expresiones para dar a conocer tu opinión.",
		blank2: "Oraciones de enlace entre la introducción y el cuerpo de la argumentación.",
		blank3: "Conectores para introducir un ejemplo en apoyo al argumento.",
		blank4: "Conectores para expresar una relación de adición o continuación entre dos o más elementos del texto.",
		blank5: "Conectores para expresar contraste u oposición entre dos elementos del texto.",
		blank6: "Expresiones para presentar un dato.",
		blank7: "Expresiones para iniciar la conclusión de tu texto.",
		blank8: "Expresiones para introducir un hecho."
	}
};


function MWMain(mwId,options){
	this.mwId = mwId;
	this.settings = $.extend({}, options);
}

MWMain.prototype = {
	
		init:function(){
			
			this.inicio = true;
			this.getMwSettings('cap3_argumentacion');
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
			this.feedbackWindow = $('.js-vntn-feedback');
			this.$texto = $('div.div-texto');
			
			var _this = this;

			this.initWindows();
						
			$('.js-btn-instr').on('click', function(){
				$('.js-instrucciones').removeClass('e-oculto');
				_this.overlay.removeClass('e-oculto');
			});
			
			$('.js-btn-instr').trigger('click');
			
			this.setText(this.settings.str);
		},
		
		initWindows: function(){
		    var _this = this;
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
		
		setText: function(str){
			
			this.$texto.html(this.revertStr(str));
			var _this = this;
			var blanks = this.$texto.find('span.blank').each(function(){
				var currBlank = $(this);
				currBlank.on('click',function(){
					_this.showOptions(currBlank);
					_this.showInfo(currBlank);
					$('span.blank').removeClass('e-seleccionado');
					currBlank.addClass('e-seleccionado');
				});
			});
		},
	
		mostrarInstrucciones: function(txt){
			$('.vntn-inst').removeClass('e-oculto');
			$('.vntn-inst .vntn--contenido').html(txt);
			this.overlay.removeClass('e-oculto');	
		},
		
		
		
		verifyCompleted: function(){
			
				this.finishExercise();
				return;
			
		},
		
		showSolution: function(){
	
			
		},
		
		showFeedback: function(message, status){
			
			this.feedbackWindow.attr("data-correct", "");
			this.feedbackWindow.attr("data-personaje", "");
			if(status!=null){
				this.feedbackWindow.attr("data-correct", status);
			}
			this.feedbackWindow.find('.vntn--contenido').html(message);
			this.overlay.removeClass('e-oculto');
			this.feedbackWindow.removeClass('e-oculto');
			
		},

		showInfo: function(blankSpan){
			var info = this.settings.info['blank'+blankSpan.data('blank')];
			$('.js-info').html(info);
		},
	
		
		showOptions: function(blankSpan){
						
			var optionDiv = $('.js-options');
			optionDiv.empty();
			
			var clases = "marcador conector oracion";
			optionDiv.removeClass(clases);
			$('.js-info').removeClass(clases);
			var arr = clases.split(" ");
			for(var i=0;i<arr.length;i++){		
				if(blankSpan.hasClass(arr[i])){
					optionDiv.addClass(arr[i]);
					$('.js-info').addClass(arr[i]);
					break;
				}
			}

			
			
			var options = this.settings.config['blank'+blankSpan.data('blank')];
			
			//console.log(options);
			var _this = this;
			
			var optSpan = $('<span class="option"></span>');
			var currOptSpan;
			var currOptConfig;
			for(var opt in options){
				currOptConfig = options[opt];
				currOptSpan = optSpan.clone();
				currOptSpan.data('id', opt).data('blank', 'blank'+blankSpan.data('blank'));
				currOptSpan.data('blankSpan', blankSpan);
				var txt = currOptConfig.text;
				if(/^[a-z]/.test(blankSpan.text())){
					txt = _this.lowerFirst(txt);
				}
				currOptSpan.html(txt);
				
				currOptSpan.on('click', function(){
					_this.verifyAnswer($(this));
				});
				
				
				optionDiv.append(currOptSpan);
			}
		
		},
		
		verifyAnswer: function(optionSpan){
			
			console.log('Verify: '+optionSpan.data('id')+" : "+optionSpan.data('blank'));
			
			//Tine css
			var optionDiv = $('.js-options');
			jQuery('span.option',optionDiv).removeClass('e-seleccionado');
			optionSpan.addClass('e-seleccionado');
			
		
			var optionData = this.settings.config[optionSpan.data('blank')][optionSpan.data('id')];
			
			console.log(optionData);
			
			//comentado por Tine
			//optionSpan.off('click');
			//optionSpan.addClass('e-inactivo');
			
			if(optionData.correct===true){
				var blankSpan = optionSpan.data('blankSpan');
				//blankSpan.off('click');
				//blankSpan.addClass('e-resuelto');
				//blankSpan.html(optionData.text);
				blankSpan.html(optionSpan.text());
				
				
				//this.disableOptions(playerName);
			}
			
			if(optionData.feedback!=null){
				
				this.showFeedback(optionData.feedback, optionData.correct);
			}
			
		},
		
		lowerFirst: function(string){
			return string.charAt(0).toLowerCase() + string.substr(1);
		},

		addOraciones: function(){
			var _this = this;
			var $oraciones = $('.oraciones');
			$("div").remove(".oracion");
			$('.js-vntn-player[data-player="'+this.player+'"] span.blank').each(function(){
				var txt = _this.makeOracion($(this).html());
				if($(this).attr('data-blank')!=1){
					var $div = $("<div>", {'class':'txtElem oracion','data-id': 'or_'+txt.substr(0,10) });
					$div.html(txt);
					$div.appendTo($oraciones);
				} else {
					var $span = $("<span>", {'class': 'fragmento first' });
					$span.html(txt);
					$span.appendTo($('.parrafo'));
				}
			});	
		},
		
		activateTxtElems:function($slctr){
			var _this = this;
			$slctr.removeClass('e-inactivo');
			$slctr.off();
			$slctr.on('click',function(){
				$(this).off();
				$(this).addClass('e-inactivo');
				//_this.addFragment($(this).html(),$(this).attr('data-id'));
				_this.addFragment($(this));
				_this.checkFinished();
			});
		},
		
		checkFinished: function(){
			if($('.txtElem.oracion:not(.e-inactivo)').length==0){
				var par = $('.parrafo').text();
				this.setMwValue('cap4_3parrafos',this.player,par);
			}
		},
		
		//addFragment: function(txt,id){
		addFragment: function(txtElem){
			var txt = txtElem.html();
			var id = txtElem.attr('data-id');
			var _this = this;
			var $prevFrag = $('.parrafo span:last-child');
			if(/^(cntr|mrcdr)/.test($prevFrag.attr('data-id'))){
				if(!/^(María|Claudia|Ana)/.test(txt)){
					txt = txt.charAt(0).toLowerCase() + txt.substr(1);
				}
			}
			if(txt == 'y '){
				var newPrevTxt = $prevFrag.html().substr(0,$prevFrag.html().length-2) + ' ';
				$prevFrag.html(newPrevTxt);
			}
			var clases = txtElem.hasClass('conector')?'fragmento conector':(txtElem.hasClass('marcador')?'fragmento marcador':'fragmento');
			var $span = $("<span>", {'class': clases,'data-id':id });
			$span.html(txt);
			$span.appendTo($('.parrafo'));
			/*$span.on('click',function(){
				var id = $(this).attr('data-id');
				var $slctr = $('.txtElem[data-id="'+id+'"]');
				_this.activateTxtElems($slctr);
				$(this).remove();
				if($(this).html()=='y '){
					newPrevTxt = $prevFrag.html().substr(0,$prevFrag.html().length-1) + '. ';
					$prevFrag.html(newPrevTxt);
				}
			});*/
			this.activarBorrar();
		},
		 
		
		makeOracion: function(txt){
			txt = txt.charAt(0).toUpperCase() + txt.substr(1);
			txt.trim();
			if(!/\.$/.test(txt)){
				txt = txt + ". ";
			} else {
				txt = txt + " ";
			}
			return txt;
		},
		
		initPlayerStatus: function(playerName){
			this.currentStatus[playerName] = {
					completed: false
				};
		},
		
		disableOptions: function(playerName){
			var opts =  $('.js-vntn-player[data-player="'+playerName+'"]').find('.option');
			opts.off('click').addClass('e-inactivo');
		},
		
		playerFinished: function(playerName){
			console.log("END : "+playerName);
			var playerStatus = this.currentStatus[playerName];
			playerStatus.completed = true;
			
			
		},
		
		revertStr: function(str){
			str = str.replace(/___/g,",");
			return str;
		},
		
		
		// chat
		
		setMwValue:function(target,nombre,valor){
			var padre = window.parent;
			var mensajeTipoSet = { command: "setMicroworldValue", params: {id: this.mwId, targetId: target, name: nombre, value: valor } }; 
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		
		getMwSettings: function(target){
			var padre = window.parent;
			var mensajeTipoSet = { command: "getMicroworldSettings", params: {id: this.mwId, targetId: target, src: 'mw' } }; //src = mw/chat
			padre.postMessage(mensajeTipoSet, "*");
		}


};

var mwId = 'cap4_actividad';
var mwMain = new MWMain(mwId,mwOptions);

$(document).ready(function(){
	
	mwMain.init();

	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");
	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if (evt.data && evt.data.type === "set") {
		if(evt.data.name=="microworldSettings"){
			var arrPairs = evt.data.value.split(',');
			for(var i=0;i<arrPairs.length;i++){
				var pair = arrPairs[i].split(':');
				if(pair[0]=='textoCompleto'){
					mwMain.setText(pair[1]);
					//alert('config recibido in cap2 ' + pair[1]);

				} 
			}
		} else
		if(evt.data.name=='candidata'){
			//mwMain.init(evt.data.value);
			mwMain.reinit(evt.data.value);
		} else
		if(evt.data.name=="mwReconstruction"){
			
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica
				//nada, que lo vuelvan a hacer; de todos mods mw=inactive-->setAnswer no se pela
				
			} else {
				
			}
								
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		} 
		
	}
}


