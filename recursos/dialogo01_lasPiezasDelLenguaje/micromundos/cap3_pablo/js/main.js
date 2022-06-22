
var mwOptions = {

};

var FEEDBACK = {
	step_1 : {
		frag_1 : {
			ok : 'De acuerdo.',
			notok : 'Te faltó esta parte.',
			common : 'Aquí está hablando de los animales que tiene su tío, yo sólo le pedí que me dijera cuál era su preferido.'
		},
		frag_2 : {
			ok : 'Coincido contigo.',
			notok : 'Esta parte también la podríamos eliminar.',
			common : 'Esta idea está relacionada con la pregunta, pero no la está respondiendo totalmente.'
		},
		frag_3 : {
			ok : '¡Sí!',
			notok : '¡Esto lo tenemos que eliminar!',
			common : 'Nos está contando una historia pero no nos dice nada de nada sobre su animal preferido.'
		},
		complete: 'Sigamos, todavía tenemos mucho trabajo por hacer.',
		moreFragments: '¡Oh no! Todavía puedes eliminar algo más.'
	},
	
	step_2 : {
		frag_4 : {
			ok : 'Así es.',
			notok : 'Yo quitaría esta parte.',
			common : 'Esta parte es sólo una anécdota, no es esencial para conocer los gustos de Pablo.'
		},
		frag_5 : {
			ok : 'Claro.',
			notok : 'También esto.',
			common : 'Los borregos son animales, eso sin duda, pero yo no le pregunté nada sobre su tío y el rancho.'
		},
		frag_6 : {
			ok : 'Bien.',
			notok : 'También eliminaría esto.',
			common : 'Está bien saber que le gustan los pasteles de chocolate, pero no fue eso lo que le pregunté.'
		},
		complete: 'Sigamos, quizá aún podamos eliminar más fragmentos.'
	},
	step_3 : {
		frag_7 : {
			ok : 'De acuerdo, a medias.',
			notok : 'De acuerdo, pero tengo una sugerencia.',
			common : 'Esta parte agrega un detalle sobre el tipo de perros que le gustan a Pablo. Está muy relacionada con la pregunta, pero no es indispensable. La vamos a quitar para dejar la esencia nada más.'
		},
		frag_8 : {
			ok : 'En efecto.',
			notok : 'Debo decir nada más que ...',
			common : 'A menos que conozcamos a Rafa, esta parte agrega un detalle que no es tan útil. Podríamos eliminarla.'
		},
		frag_9 : {
			ok : 'Claro.',
			notok : 'Un momento',
			common : 'Esta parte es una pequeña descripción del perro de Rafa, no es indispensable para conocer los gustos de Pablo.'
		},
		complete: 'Sigamos, a ver si podemos eliminar más.'
	},
	step_4 : {
		frag_10 : {
			notok : '¿Y dejar nada más “los perros”? Ese enunciado tiene sentido si conocemos la pregunta original (“¿Cuál es tu animal preferido?”). Si no la conocemos, necesitamos conservar esta parte para que la idea quede completa y el enunciado tenga sentido.'
		},
		frag_11 : {
			notok : '¿Y dejar nada más “me gustan”? Así no tenemos la respuesta, sino sólo dos palabras juntas, sin sentido, sin contexto.'
		},
		/*frag_12 : {
			notok : '¿Y dejar "me gustan"? Así no tenemos la respuesta.'
		},*/
		complete: 'Sigamos, todavía tenemos mucho trabajo por hacer.'
	},
	general: {
		moreFragments: '¡Oh no! Todavía puedes eliminar algo más.',
		moreFragmentsAll: 'Sí puedes eliminar algunos fragmentos.',
		allComplete: '¡Claro! Si quitamos cualquier cosa del enunciado no logramos entender la idea. Esta es la versión más sencilla de la respuesta pero no es la única. '+
						'A veces necesitamos agregar detalles o ideas relacionadas para expresarnos mejor.<br/>'+
						'Por ejemplo:<ol><li>Me gustan los perros, sobre todo los grandes.</li>'+
						'<li>Me gustan los perros, sobre todos los grandes y juguetones.</li>'+
						'<li>Me gustan los perros, sobre todos los grandes y juguetones que se roban la comida.</li>'+
						'<li>Me gustan los perros, sobre todo los grandes como el de mi amigo Rafa que es muy juguetón y se roba la comida.</li></ol>'
	}
};
var MESSAGES = {
		noselection: 'Recuerda que debes seleccionar uno por uno los fragmentos que contienen un deseo o una solicitud que quieres agregar a la tabla.'	
	};

var mwOptions = {
	feedback : FEEDBACK
};

function MWMain(options){
	this.settings = $.extend({}, options);
	this.currentStep = 1;
	this.mainTextContainer;
	this.mwId = 'cap3_pablo';
}

MWMain.prototype = {
		init:function(){
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
			this.feedbackWindow = $('.js-vntn-feedback');
			
			var _this = this;
		    
		    $('.js-btn-instr').on('click', function(){
				$('.js-instrucciones').removeClass('e-oculto');
				_this.overlay.removeClass('e-oculto');
			});
		    		    
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
		    
		    this.mainTextContainer = $('.js-main-text');
		    this.initStep(this.currentStep);
		    
		    $('.js-btn-finish').on('click', function(){
				_this.overlay.removeClass('e-oculto');
				_this.verifyCompleted();
			});
		    
		    
		    
		},
		
		verifyCompleted: function(){
			
			
			if(this.currentStep == 4){
				this.showFeedback(this.settings.feedback.general.allComplete, true);
				this.finishExercise();
				return;
			}
			
			var status = this.getCompletedStatus();
			//console.log(status);
			if(status.completed){
				this.showFeedback(this.settings.feedback['step_'+this.currentStep].complete, true);
				this.currentStep++;
				this.initStep(this.currentStep);
				return;
			}
			
			if(status.fragsLeft > 1){
				if(/^No quiero/.test($('.js-btn-finish').html())){
					this.showFeedback(this.settings.feedback.general.moreFragmentsAll, false);
				} else {
					this.showFeedback(this.settings.feedback.general.moreFragments, false);
				}
				
				return;
			}
			
			var fragFeedback = this.settings.feedback['step_'+this.currentStep]['frag_'+status.fragMissing];
			//console.log(fragFeedback);
			//Add click
			var btnClose = this.feedbackWindow.find('.vntn--btn-cerrar');
			var fragMissing = this.mainTextContainer.find('[data-frag="'+status.fragMissing+'"]'); 
			//console.log(fragMissing);
			fragMissing.addClass('e-missing');
			var clickToRemove = $.proxy(this.advanceStepOnClick, this, this.mainTextContainer.find('[data-frag="'+status.fragMissing+'"]'));
			btnClose.data('clickToRemove', clickToRemove);
			btnClose.on('click', clickToRemove);
			this.showFeedback(fragFeedback.notok +'<br/>'+ fragFeedback.common+ '<br/>'+ this.settings.feedback['step_'+this.currentStep].complete );
			
		},
		
		advanceStepOnClick: function(frag, evt){
			//console.log(arguments);
			var target = $(evt.currentTarget);
			if(this.currentStep < 4){
				//console.log("CurrentTarget: "+target);
				//console.log(target);
				target.off('click', target.data('clickToRemove'));
				this.currentStep++;
				var _this = this;
				this.eliminateFragment(frag, function(){
					_this.initStep(_this.currentStep);
				});
				
			}
		},
		
		initStep: function(stepNumber){
			
			var frags = this.mainTextContainer.find('[data-step="'+stepNumber+'"]');
			var _this = this;
			var currFrag;
			
			var btnFinish = $('.js-btn-finish');
			btnFinish.html('No quiero eliminar nada');
			
			//console.log("Init step (1)"+stepNumber);
			//console.log(frags);
			//Step 4
			if(stepNumber==4){
				frags.addClass('e-highlight');
				frags.on('click', function(){
					currFrag = $(this);
					btnFinish.html('&iexcl;Ya acab&eacute;!');
					var fragFeedback = _this.settings.feedback['step_'+stepNumber]['frag_'+currFrag.data('frag')];
					_this.showFeedback(fragFeedback.notok, false);
				});
				return;
			}
			
			//console.log("Init step "+stepNumber);
			
			frags.addClass('e-highlight')
				.on('click', function(){
					currFrag = $(this);
					
					btnFinish.html('&iexcl;Ya acab&eacute;!');
					
					//currFrag.addClass('e-inactivo');
					
					//currFrag.fadeOut(1000, function(){currFrag.remove();} );
					_this.eliminateFragment(currFrag);
					
					var fragFeedback = _this.settings.feedback['step_'+stepNumber]['frag_'+currFrag.data('frag')];
					
					var message = fragFeedback.ok+' <br /> '+fragFeedback.common;
					
					
					var stepFrags = _this.mainTextContainer.find('[data-step="'+_this.currentStep+'"]');
					//console.log("STEP::::"+_this.currentStep + ' ? ' +stepFrags.length);
					if(stepFrags.filter('.js-eliminated').length==stepFrags.length){
						message += ' <br /> '+ _this.settings.feedback['step_'+stepNumber].complete;
						
						//Add click111
						var btnClose = _this.feedbackWindow.find('.vntn--btn-cerrar'); 
						var clickToRemove = $.proxy(_this.advanceStepComplete, _this);
						btnClose.data('clickToRemove', clickToRemove);
						btnClose.on('click', clickToRemove);
						
					}
					
					_this.showFeedback(message , true);
					
				});
		},
		
		advanceStepComplete: function(evt){
			//console.log(arguments);
			var target = $(evt.currentTarget);
			if(this.currentStep < 4){
				//console.log("CurrentTarget: "+target);
				//console.log(target);
				target.off('click', target.data('clickToRemove'));
				this.currentStep++;
				this.initStep(this.currentStep);
			}
		},
		
		eliminateFragment: function(fragment, callback){
			fragment.addClass('js-eliminated');
			fragment.fadeOut(1000, function(){
				fragment.remove();
				if(callback){
					callback();
				}
			});
		},
		
		getCompletedStatus: function(){
			
			var frags = this.mainTextContainer.find('[data-step="'+this.currentStep+'"]');
			//console.log("ETAPA "+ this.currentStep+": "+ (frags.filter('.e-inactivo').length == frags.length));
			var fLeft = frags.length - frags.filter('.e-inactivo').length;
			var fMiss = 0;
			if(fLeft == 1){
				fMiss = frags.not('.e-inactivo').data('frag');
			}
			
			var completedStatus = {
					'completed': (fLeft == 0),
					fragsLeft: fLeft,
					fragMissing: fMiss
			};
			
			return completedStatus;
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
		
		finishExercise: function(){
			$('.js-btn-finish').addClass('e-inactivo').off('click');
			this.gotoNextQuestion(5000);
			this.addMwSettings('finished','true');
			//alert("Exercise complete");
		},
		
		gotoNextQuestion: function(delay){
			var _this = this;
			setTimeout(function(){
				var padre = window.parent;
				var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: _this.mwId } };
				padre.postMessage(mensajeTipoSet, "*");	
			},delay);
			
		},
		
		addMwSettings: function(name,value){
			//alert('setting name: '+name+'& value: '+value);
			var padre = window.parent;
			var mensajeTipoSet = { command: "addMicroworldSettings", params: {id: this.mwId, name: name, value: value } };
			padre.postMessage(mensajeTipoSet, "*");	
		}
		
		
		

};

var mwMain = new MWMain(mwOptions);
$(document).ready(function(){
	mwMain.init();
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwMain.mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if (evt.data && evt.data.type === "set") {
		if(evt.data.name=="final"){
			$('.js-main-text').html('<span class="js-frag"><strong>M</strong>e gustan los perros<strong>.</strong></span>');
		} else
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica
				//nada, que lo vuelvan a hacer
				
			} else {
				//lo que se tenga que hacer con base en historial
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='finished' && pair[1]=='true'){
						$('.js-btn-finish').addClass('e-inactivo').off('click');
						var html = '<span class="js-frag e-highlight">me gustan </span><span class="js-frag e-highlight">los perros</span>';
						$('.js-main-text').html(html);
					}
				}
			}
								
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwMain.mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		} 
		
		
	}
}

