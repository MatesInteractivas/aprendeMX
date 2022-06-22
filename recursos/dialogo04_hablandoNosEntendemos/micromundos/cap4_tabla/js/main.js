var deseos = {
	//naturaleza
	'deporteAcuatico': 'Que se puedan hacer deportes acuáticos.',
	'buceo': 'Que se pueda hacer snorkel o buceo.',
	'arrecife': 'Que haya arrecifes.',
	'faunaSubmarina': 'Que se pueda observar la fauna y flora subacuática.',
	'playa': 'Que esté en la playa.',
	'escalar': 'Que se pueda escalar.',
	'caminar': 'Que se pueda caminar.',
	'montanya': 'Que haya montaña.',
	'desierto': 'Que esté en el desierto.',
	'flora': 'Que haya mucha flora.',
	'fauna': 'Que haya muchos animales.',
	'animalesSalvajes': 'Que haya animales salvajes.',
	'rio': 'Que tenga lagos y ríos.',
	'cascada': 'Que haya cascadas.',
	'nieve': 'Que haya nieve.',
	'acampar': 'Que se pueda acampar.',
	'nadar': 'Que se pueda nadar.',
	//cultura
	'musica': 'Que sea un lugar con mucha música.',
	'bailar': 'Que se pueda bailar.',
	'teatro': 'Que se presenten obras de teatro y danza.',
	'arquitectura': 'Que tenga belleza arquitectónica.',
	'artesPlasticas': 'Que tenga una rica oferta en artes plásticas.',
	'literatura': 'Que haya donde conseguir buenos libros.',
	'acuario': 'Que haya un acuario.',
	'indigena': 'Que sea un lugar con identidad indígena.',
	'artesania': 'Que haya muchas artesanías.',
	'ruinas': 'Que haya yacimientos históricos.',
	'pintoresco': 'Que sea un lugar pintoresco, con mercados, iglesias, ...',
	'museo': 'Que haya museos.',
	//social
	'buenaGente': 'Que haya gente simpática.',
	'bulicio': 'Que haya buen ambiente.',
	'amistad': 'Que pueda hacer amigos.',
	'llevarAmigo': 'Que pueda llevar a un amigo o primo.',
	'echarNovio': 'Que pueda echar novi@.',
	'novio': 'Que pueda llevar a mi novi@.',
	'jovenes': 'Que haya otros jóvenes.',
	//Otros
	'tren': 'Que se pueda ir en tren.',
	'metro': 'Que se pueda ir en metro.',
	'avión': 'Que se pueda ir en avión.',
	'tranvía': 'Que se pueda pasear en tranvía.',
	'teleferico': 'Que haya un teleférico.',
	'barco': 'Que se puedan hacer paseos en barco.',
	'compras': 'Que haya donde ir de compras.',
	'seguridad': 'Que no haya mucha inseguridad.',
	'familia': 'Que se esté en familia.',
	'cerca': 'Que esté cerca.',
	'comida': 'Que haya rica comida.'
}

function InteractiveTable(id,deseos){
	
	this.mwId = id;
	this.deseos = $.extend({}, deseos);
	this.arrClicks = [];
	this.rebuilding = false;
}

InteractiveTable.prototype = {
	
		init:function(){
			
			var _this = this;
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
			
			//this.getMwSettings('cap3_tabla');
		    
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
			
			
			$('td.clickCell').on('click',function(){
				var $tr = $(this).closest('tr');
				$tr.removeClass('empty');
				$('td.clickCell',$tr).removeClass('paloma').html('');
				$(this).html('<img src="css/img/paloma.png" />');
				$(this).addClass('paloma');
				_this.checkPalomas();
			});

		},
		
		checkPalomas: function(){
			var _this = this;
			var emptyCells = $('tr.empty').length;
			var $btnListo = $('.js-btn-listo');
			if(emptyCells==0 && $btnListo.hasClass('e-inactivo')){
				if(_this.rebuilding){
					$('.js-btn-listo').remove();
					this.quitarDeseos(1);
				} else {
					$btnListo.removeClass('e-inactivo');
					$btnListo.on('click',function(){
						_this.msgToChat();
					});
				}
				return;
			}
			if(emptyCells>0 && !$btnListo.hasClass('e-inactivo')){
				$btnListo.addClass('e-inactivo');
				$btnListo.off();
			}
		},
		
		msgToChat: function(){
			var nrNoImporta = $('table.solicitudes .clickCell.noImporta.paloma').length;
			var msg;
			if(nrNoImporta==0){
				msg = "[No se eliminó ningún deseo.]";
			} else
			if(nrNoImporta==1){
				msg = "[Se eliminó un deseo.]";
			} else
			if(nrNoImporta>1){
				msg = "[Se eliminaron varios deseos.]";
			}
			this.setAnswer(msg);
			this.saveClicks();
			$('.js-btn-listo').remove();
			this.quitarDeseos(3000);
		},
		
		quitarDeseos: function(delay){
			setTimeout(function(){
				var $tr = $('table.solicitudes .clickCell.noImporta.paloma').closest('tr');
				$tr.remove();
				$('table.solicitudes .espacio,.importa,.noImporta').remove();
				$('table.solicitudes').addClass('colUn');
			},delay);
		},
		
		saveClicks:function(){
			var arr = [];
			$('table.solicitudes tr').each(function(){
				var $clickedCell = $('.clickCell.paloma',$(this));
				if($clickedCell.hasClass('noImporta')){
					arr.push('noImporta');
				} else if($clickedCell.hasClass('importa')){
					arr.push('importa');
				}
			});
			var str = arr.join('_');
			this.addMwSettings('clicks',str);
		},
		
		reconstructClicks: function(){
			this.rebuilding = true;
			$trs = $('table.solicitudes tr');
			for(var i=0;i<this.arrClicks.length;i++){
				var clase = this.arrClicks[i];
				$tr = $trs[i+1];
				var $td = $('.clickCell.'+clase,$tr);
				$td.trigger('click');
			}
			this.rebuilding = false;
		},
		
		/**** FASE 2: agregar deseos del alumno ****/
		addDeseo: function(str){
			var $tBody = $('table.solicitudes tbody');
			var $tRow = $("<tr>", {});
			$tRow.appendTo($tBody);
			var $td = $("<td>", { class: 'solicitud'});
			$td.html(str);
			$td.appendTo($tRow);
		},
		
		checkDeseo: function(str){
			if($('table.solicitudes .solicitud[data-id="'+str+'"]').length==0){
				this.addDeseo(this.deseos[str]);
			}
		},
		
		/******* FASE 3: agregar diseño y columna importancia *****/
		
		addDisenyo: function(n){
			$('table.solicitudes').removeClass('colUn').addClass('disenyo').addClass('d'+n);
			$trs = $('table.solicitudes tr');
			for(var i=0;i<$trs.length;i++){
				$tr = $trs[i];
				var $td = $("<td>", { class: 'importancia' });
				if(i==0){ //thead
					$td.html('Importancia');
				} else { //tbody
					var str = '<div class="icono"></div><div class="icono"></div><div class="icono"></div>';
					$td.html(str);
				}
				$td.appendTo($tr);
			}
			this.activarIcons();
		},
		
		
		activarIcons: function(){
			$('div.icono').addClass('e-inactivo');
			$('div.icono').on('click',function(){
				if($(this).hasClass('e-inactivo')){
					$(this).removeClass('e-inactivo');
					return;
				}
				$(this).addClass('e-inactivo');
			});
		},
		
		/** mensajes a chat **/
		
		setAnswer: function(str){
			var padre = window.parent;
			var mensajeTipoSet = { command: "setAnswer", params: {id: this.mwId , value: str } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		showTutorIntervention: function(text,emotion){
			var padre = window.parent;
			var mensajeTipoSet = { command: "showTutorIntervention", params: {id: this.mwId , text: text, emotion: emotion } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		gotoNextQuestion: function(str){
			var padre = window.parent;
			var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: this.mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		addMwSettings: function(name,value){
			var padre = window.parent;
			var mensajeTipoSet = { command: "addMicroworldSettings", params: {id: this.mwId, name: name, value: value } };
			padre.postMessage(mensajeTipoSet, "*");	
		}
		

};

var mwId = "cap4_tabla";
var interactiveTable = new InteractiveTable(mwId,deseos);

$(document).ready(function(){
	
	interactiveTable.init();
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: { id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if (evt.data && evt.data.type === "set") {
		if(evt.data.name=="deseo"){
			var deseo = deseos[evt.data.value];
			interactiveTable.addDeseo(deseo);
		} else
		if(evt.data.name=="deseoLibre"){
			interactiveTable.addDeseo(evt.data.value);
		} else
		if(evt.data.name=="disenyo"){
			interactiveTable.addDisenyo(evt.data.value);
		} else
		if(evt.data.name=="checkDeseo"){
			interactiveTable.checkDeseo(evt.data.value);
		} else
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			console.log('evt.data.name in mw = mwReconstruction');
			console.log('evt.data.value = '+evt.data.value);
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica
			} else {
				//lo que se tenga que hacer con base en historial
				
				// guardar todos en array
				//alert(evt.data.value);
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='clicks'){
						interactiveTable.arrClicks = pair[1].split('_');
						interactiveTable.reconstructClicks();
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
