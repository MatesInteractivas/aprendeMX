var configDeseos = {
	esencial : {
		goyo1: true,
		goyo2: false,
		trini1: false,
		trini2: false,
		trini3: true,
		lucia1: false,
		tonyo1: false,
		tonyo2: false,
		tonyo3: false
	},
	importante : {
		goyo1: false,
		goyo2: true,
		trini1: true,
		trini2: false,
		trini3: false,
		lucia1: true,
		tonyo1: false,
		tonyo2: true,
		tonyo3: false
	},
	deseable : {
		goyo1: false,
		goyo2: true,
		trini1: false,
		trini2: true,
		trini3: false,
		lucia1: true,
		tonyo1: false,
		tonyo2: false,
		tonyo3: true
	},
	desechable : {
		goyo1: false,
		goyo2: true,
		trini1: false,
		trini2: false,
		trini3: false,
		lucia1: false,
		tonyo1: true,
		tonyo2: false,
		tonyo3: false
	}
}

var retros = {
	esencial : {
		goyo1: '',
		goyo2: 'Recuerda que únicamente hay dos cosas que son indispensables: que sea un lugar cercano (por el bien del abuelo) y que esté dentro del presupuesto familiar.',
		trini1: 'Recuerda que únicamente hay dos cosas que son indispensables: que sea un lugar cercano (por el bien del abuelo) y que esté dentro del presupuesto familiar.',
		trini2: 'Recuerda que únicamente hay dos cosas que son indispensables: que sea un lugar cercano (por el bien del abuelo) y que esté dentro del presupuesto familiar.',
		trini3: '',
		lucia1: 'Recuerda que únicamente hay dos cosas que son indispensables: que sea un lugar cercano (por el bien del abuelo) y que esté dentro del presupuesto familiar.',
		tonyo1: '',
		tonyo2: 'Recuerda que únicamente hay dos cosas que son indispensables: que sea un lugar cercano (por el bien del abuelo) y que esté dentro del presupuesto familiar.',
		tonyo3: 'Recuerda que únicamente hay dos cosas que son indispensables: que sea un lugar cercano (por el bien del abuelo) y que esté dentro del presupuesto familiar.'
	},
	importante : {
		goyo1: '',
		goyo2: '¿Tú tienes buen diente, como don Goyo?<br>Estoy de acuerdo contigo en que es importante comer rico... ¡y sano!',
		trini1: 'Por supuesto que hay que tomar en cuenta este deseo de mamá Trini. Es lo que más se le antoja a ella.',
		trini2: 'Lee nuevamente los comentarios de Trini. ¿Te parece que le importa muuucho poder visitar un museo? Mejor elige otro valor.',
		trini3: '',
		lucia1: '¡Totalmente de acuerdo! Parece ser lo único que va a tener contenta a Lucía, así que más vale que se cumpla.',
		tonyo1: '',
		tonyo2: '¡¿Verdad que esto sí es importante?! A mí también me lo parece: es el principal deseo de Toño.',
		tonyo3: 'Toño es el único que expresó el deseo de nadar, y lo mencionó sólo como una de varias actividades. Yo no le daría tanta importancia…'
	},
	deseable : {
		goyo1: '',
		goyo2: 'Difícil, ¿no? Hay que considerar los deseos de los demás, pero éste en particular no parece tan importante porque en nuestro país, ¡se come bien en todos lados!<br>Así que a mí también me parece que deseable es una categoría adecuada.',
		trini1: 'Creo que hay que darle más importancia a este deseo de Trini, porque es su principal deseo.',
		trini2: 'En efecto, este deseo no es tan importante. A Toño le aburren los museos y tampoco Trini parece darle tanta importancia, porque dijo que <em>quizá</em> podían visitar uno.',
		trini3: '',
		lucia1: 'Yo le daría más importancia a esta petición, porque fue la única cosa que pidió Lucía, así no lo dijera de manera directa. Pero no me opongo a tu elección.',
		tonyo1: '',
		tonyo2: 'Hay que darles su lugar a todos los miembros de la familia, ¡incluso a los más pequeños! A Toño le interesa mucho esto: es su principal deseo. Por eso yo le daría más importancia.',
		tonyo3: '¡De acuerdo! La posibilidad de darse un chapuzón es sólo "deseable".'
	}
}

var deseos = {
	goyo1: 'Que esté cerca.',
	goyo2: 'Que haya rica comida.',
	trini1: 'Que sea pintoresco.',
	trini2: 'Que haya museos.',
	trini3: 'Que sea económico.',
	lucia1: 'Que haya otros jóvenes.',
	tonyo1: 'Que se pueda acampar.',
	tonyo2: 'Que haya mucha naturaleza.',
	tonyo3: 'Que se pueda nadar.'
}

function InteractiveTable(config,retros,deseos){
	
	this.config = $.extend({}, config);
	this.retros = retros;
	this.deseos = deseos;
	this.selCriterio = "";
	this.arrClicks = [];
	this.rebuilding = false;
}

InteractiveTable.prototype = {
	
		init:function(){
			
			var _this = this;
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
		    
			 $('.js-btn-instr').on('click', function(){
				$('.js-instrucciones').removeClass('e-oculto');
				_this.overlay.removeClass('e-oculto');
			});
		    		    
		    
			// init windows
			var vntns = $('.vntn').addClass('e-oculto');
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
			    
			}
			
			$('.foto').on('click',function(){
				var $tr = $(this).closest('tr');
				var personaje = $tr.attr('data-personaje');
				$('div.js-vntn-comment[data-personaje="'+personaje+'"]').removeClass('e-oculto');
			});
		    
		},
		
		activarSolicitudes: function(){
			var _this = this;
			$('.solicitudes--solicitud:not(.e-inactivo)').on('click',function(){
				var peticion = $(this).attr('data-peticion');
				if(_this.config[_this.selCriterio][peticion]){
					$(this).addClass('e-correcto '+_this.selCriterio);
					//if(_this.selCriterio=='desechable' && peticion=='goyo2'){
						//_this.addMwSettings(peticion,_this.selCriterio);
					//}
				} else {
					$(this).addClass('e-incorrecto');
				}
				$(this).off();
				$(this).addClass('e-inactivo');
				if(!_this.rebuilding){
					_this.setAnswer($(this).html());
					_this.addMwSettings(peticion,_this.selCriterio);
					_this.desactivarSolicitudes();
					if(peticion!='goyo1'){
						setTimeout(function(){
							_this.activarSolicitudes()
						},3000);
					}
				}
			});
		},

		desactivarSolicitudes: function(){
			$('.solicitudes--solicitud').off();
		},
		
		
		isFinished:function(){
			console.log("LENGTHHHHHHHH:::::::: "+$('.js-person-container').length +" ----- "+ $('.js-solved').length+ "--------"+ Object.keys(STATUS).length);
			return (Object.keys(STATUS).length == $('.js-solved').length);
		},
		
		showFeedback: function(message, status){
			
			var vntn = $('.js-vntn-feedback');
			vntn.attr("data-correct", "");
			if(status!=null){
				vntn.attr("data-correct", status);
			}
			
			vntn.find('.vntn--contenido').html(message);
			this.overlay.removeClass('e-oculto');
			vntn.removeClass('e-oculto');
			
		},
		
		setCriterio: function(criterio){
			this.selCriterio = criterio;
		},
		
		reactivateIncorrect: function(){
			$('.e-incorrecto').removeClass('e-inactivo e-incorrecto');
			this.desactivarSolicitudes();
		},
		
		showImportance: function(){

			var _this = this;
			$('.solicitudes--solicitud.e-incorrecto').removeClass('e-incorrecto');
			$('.solicitudes--solicitud').addClass('e-inactivo');
			$('.e-oculto:not(.vntn-inst,.overlay,.js-vntn-comment)').removeClass('e-oculto');
			$('.e-correcto.desechable').each(function(){
				var peticion = $(this).attr('data-peticion');
				$('.solicitudes td[data-peticion="'+peticion+'"]').remove();
				//$('.solicitudes td[data-peticion="'+peticion+'"]').attr( {style: 'min-height: 0px !important; height :0px !important; empty-cells: hide;'} );
			});
			$('th').addClass('small');
			$('span .quitar').addClass('e-oculto');
			$('td.e-seleccionable').on('click',function(){
				var peticion = $(this).attr('data-peticion');
				var importancia = $(this).attr('data-importance');
				var $icon;
				if(_this.config[importancia][peticion]){
					$icon = $('<img src="css/img/correcto.png" />');
					_this.showTutorIntervention(_this.retros[importancia][peticion],'contento');
					$('td[data-peticion="'+peticion+'"]').off();
					$('td.e-seleccionable[data-peticion="'+peticion+'"]:not(this)').empty();
					$('td[data-peticion="'+peticion+'"]').removeClass('e-seleccionable');
					$('tr[data-peticion="'+peticion+'"]').addClass(importancia);
					if(!_this.rebuilding){
						_this.addMwSettings(peticion,importancia);
						if($('td.e-seleccionable').length==0){
							setTimeout(function(){
								_this.gotoNextQuestion();	
							},_this.retros[importancia][peticion].length*70)
						}
					}
				} else {
					$icon = $('<img src="css/img/incorrecto.png" />');
					_this.showTutorIntervention(_this.retros[importancia][peticion],'catedratico');
				} 
				$(this).append($icon);
			});
			//alert(this.arrClicks.length);
			if(this.arrClicks.length>0){
				this.reconstructClicks();
			}
		},
		
		reconstructClicks: function(){
			this.rebuilding = true;
			for(var i=0;i<this.arrClicks.length;i++){
				var pair = this.arrClicks[i].split(':');
				var peticion = pair[0];
				var importancia = pair[1];
				if(this.selCriterio == 'esencial' && importancia == 'esencial'){
					var $span = $('span.solicitudes--solicitud[data-peticion="'+peticion+'"]');
					$span.trigger('click');
				} else if(this.selCriterio  == 'desechable' && importancia == 'desechable' ){
					var $span = $('span.solicitudes--solicitud[data-peticion="'+peticion+'"]');
					$span.trigger('click');
				} else {
					var $td = $('.solicitudes td[data-peticion="'+peticion+'"][data-importance="'+importancia+'"]');
					$td.trigger('click');
				}
			}
			this.rebuilding = false;
		},
		
		changeOrder: function(){
			
			var _this = this;
			
			$('table.solicitudes').css('display','none');
			$('table.solicitudes.enOrden').css('display','block');
			$('.js-btn-instr').css('display','none');
			
			var $tBody = $('.solicitudes.enOrden tbody');
			$('.solicitudes tr.importante').each(function(){
				var nombre = $(this).attr('data-personaje');
				var deseo = $(this).attr('data-peticion');
				var $tRow = $("<tr>", {});
				$tRow.appendTo($tBody);
				var $tHead = $("<th>", {});
				$tHead.appendTo($tRow);
				var $div = $("<div>", {'class':'foto peq '+nombre});
				$div.appendTo($tHead);
				var $tCell1 = $("<td>", {'class':'importante'});
				$tCell1.appendTo($tRow);
				var $span = $("<span>", {'class':'solicitudes--solicitud'});
				$span.html(_this.deseos[deseo]);
				$span.appendTo($tCell1);
				var $tCell2 = $("<td>", {'class':'importante'});
				$tCell2.appendTo($tRow);
				var $tCell3 = $("<td>", {'class':'importancia importante'});
				$tCell3.appendTo($tRow);
				var $img = $("<img>", {'src':'css/img/correcto_black.png'});
				$img.appendTo($tCell3);
				var $tCell4 = $("<td>", {'class':'importante'});
				$tCell4.appendTo($tRow);
			});
			$('.solicitudes tr.deseable').each(function(){
				var nombre = $(this).attr('data-personaje');
				var deseo = $(this).attr('data-peticion');
				var $tRow = $("<tr>", {});
				$tRow.appendTo($tBody);
				var $tHead = $("<th>", {});
				$tHead.appendTo($tRow);
				var $div = $("<div>", {'class':'foto peq '+nombre});
				$div.appendTo($tHead);
				var $tCell1 = $("<td>", {'class':'deseable'});
				$tCell1.appendTo($tRow);
				var $span = $("<span>", {'class':'solicitudes--solicitud'});
				$span.html(_this.deseos[deseo]);
				$span.appendTo($tCell1);
				var $tCell2 = $("<td>", {'class':'deseable'});
				$tCell2.appendTo($tRow);
				var $tCell3 = $("<td>", {'class':'deseable'});
				$tCell3.appendTo($tRow);
				var $tCell4 = $("<td>", {'class':'importancia deseable'});
				$tCell4.appendTo($tRow);
				var $img = $("<img>", {'src':'css/img/correcto_black.png'});
				$img.appendTo($tCell4);
			});
		},
		
		
		/** mensajes a chat **/
		
		setAnswer: function(str){
			var padre = window.parent;
			var mensajeTipoSet = { command: "setAnswer", params: {id: 'cap3_tabla' , value: str } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		showTutorIntervention: function(text,emotion){
			var padre = window.parent;
			var mensajeTipoSet = { command: "showTutorIntervention", params: {id: 'cap3_tabla' , text: text, emotion: emotion } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		gotoNextQuestion: function(str){
			var padre = window.parent;
			var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: 'cap3_tabla' } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		addMwSettings: function(name,value){
			//alert('setting name: '+name+'& value: '+value);
			var padre = window.parent;
			var mensajeTipoSet = { command: "addMicroworldSettings", params: {id: 'cap3_tabla', name: name, value: value } };
			padre.postMessage(mensajeTipoSet, "*");	
		}
		

};

var interactiveTable = new InteractiveTable(configDeseos,retros,deseos);

$(document).ready(function(){
	
	interactiveTable.init();
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: 'cap3_tabla' } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if (evt.data && evt.data.type === "set") {
		if(evt.data.name=="criterio"){
			interactiveTable.setCriterio(evt.data.value);
			if(interactiveTable.arrClicks.length>0){
				interactiveTable.reconstructClicks();
			}
		} else
		if(evt.data.name=="activar"){
			if(evt.data.value==1){
				interactiveTable.activarSolicitudes();
			} else {
				interactiveTable.desactivarSolicitudes();
			}

		} else
		if(evt.data.name=="reset"){
			interactiveTable.reactivateIncorrect();
		} else
		if(evt.data.name=="importancia"){
			interactiveTable.showImportance();
		} else
		if(evt.data.name=="ordenar"){
			interactiveTable.changeOrder();
		} else
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			console.log('evt.data.name in mw = mwReconstruction');
			console.log('evt.data.value = '+evt.data.value);
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica
				for(var peticion in configDeseos['importante']){
					if(configDeseos['importante'][peticion]==true){
						$('tr[data-peticion="'+peticion+'"]').addClass('importante');
					}
				}
				for(var peticion in configDeseos['deseable']){
					if(configDeseos['deseable'][peticion]==true){
						$('tr[data-peticion="'+peticion+'"]:not(".importante")').addClass('deseable');
					}
				}
				interactiveTable.changeOrder();
				
				//esto SIEMPRE debe ir
				var padre = window.parent;
				var mensajeTipoSet = { command: "mwReconstructed", params: {id: 'cap3_tabla' } };
				padre.postMessage(mensajeTipoSet, "*");	
				
			} else {
				//lo que se tenga que hacer con base en historial
				
				// guardar todos en array
				//alert(evt.data.value);
				interactiveTable.arrClicks = evt.data.value.split(',');
				
				//esto SIEMPRE debe ir
				var padre = window.parent;
				var mensajeTipoSet = { command: "mwReconstructed", params: {id: 'cap3_tabla' } };
				padre.postMessage(mensajeTipoSet, "*");	
			}
		} 
		
		
	}
}
