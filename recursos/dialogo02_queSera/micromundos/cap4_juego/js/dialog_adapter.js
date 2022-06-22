//NAME SPACE
lite.AdivinaQuien = lite.AdivinaQuien || {}

/**
 * Constructor 
 */
lite.AdivinaQuien.DialogAdapter = function(AdivinaQuienInstance,cfg){
	
	var defaultCfg = {
		micromundoId		: 'juego',
		reinitQuestId		: 'cap4_volverAJugar', 
		unsuccessSuffix		: '_sinExito',
		unsuccessQuestId	: 'cap4_sinExito',
		gameOverId		: 'cap4_preg4_fin',
		maxPreguntas 		: 6,
		forceCardIdx		: false,
		forceCardLength		: 4
	}
	
	defaultCfg = $.extend(defaultCfg,cfg);
	
	this.micromundoId		= defaultCfg.micromundoId;
	this.reinitQuestId		= defaultCfg.reinitQuestId; 
	this.unsuccessSuffix		= defaultCfg.unsuccessSuffix;
	this.unsuccessQuestId		= defaultCfg.unsuccessQuestId;
	this.gameOverId			= defaultCfg.gameOverId;
	this.maxPreguntas		= defaultCfg.maxPreguntas;
	
	this.config = defaultCfg;
	this.rondaDePrueba = true;

	this.game = AdivinaQuienInstance;
	
	
	this.game.element.on('allFlipped',$.proxy(function(){
		this.readyForNewQuestion();
	},this));
	
	
	this.game.element.on('allDone',$.proxy(function(){
		this.finished_withSuccess();
	},this));
	
	
	this.game.setDisabled(true);
	
	// Escuchamos paso de mensajes
	var reciverL = $.proxy(this.receiveMessage,this);
	if (window.addEventListener){
		window.addEventListener("message", reciverL, false);
	} else {
		window.attachEvent("onmessage", reciverL, false);
	}
	
	// INFORMAMOS AL DIALOGO QUE ESTAMOS LISTOS
	this.reciver = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: this.micromundoId } };
	this.reciver.postMessage(mensajeTipoSet, "*");	
	
	
};
//PROTOTYPE
var protoAQ_Ad = lite.AdivinaQuien.DialogAdapter.prototype;


/**
 * Hacemos que el micromondo quede inactivo o activo segun el valor
 * del parámetro bool
 */
protoAQ_Ad.disableImages = function(bool){
	this.game.setDisabled(bool);
}


/**
 *  Seleccionamos de manera aleatoria uno de los transportes para 
 *  arcarlo como el correcto.
 */
protoAQ_Ad.chooseTransport = function(){
	
	var transports = this.game.getOpciones();
	//var i = parseInt(Math.random()*transports.length);
	var i;
	if(this.config.forceCardIdx.length==this.config.forceCardLength){
		i=0;
	} else {
		this.rondaDePrueba = false;
		i=parseInt(Math.random()*this.config.forceCardIdx.length);
	}
	var numTransp = this.config.forceCardIdx[i];
	//if(this.config.forceCardIdx !== false)
	//	i=parseInt(this.config.forceCardIdx); //AUTO
	this.config.forceCardIdx.splice(i,1);

	var objTrans = transports[numTransp];
	this.chosenTransport = objTrans.id;
	this.game.setCorrectOption(this.chosenTransport);
	this.game.reInit();
	if(this.config.forceCardIdx.length==3){
		this.setQuestionInDialog(this.chosenTransport,2500);
	} else {
		this.setQuestionInDialog(this.chosenTransport,6000);
	}
	
	this.game.setDisabled(true);
}				


// ******************************************************************
// ** POST MESSAGES
// ******************************************************************

/**
 * Forzamos a que el dialogo pase a otra pregunta segun el transporte que se 
 * selecciono. Se asume que el ID del transporte es el mismo que el ID de la pregunta a
 * la cual se debe redireccionar el dialogo
 */
protoAQ_Ad.setQuestionInDialog = function(transport, delay){
	//alert("ADIVINAQUIEN : Vamos a la pregunta : "+transport);
	var _this = this;
	setTimeout(function(){
		var padre = window.parent;
		var mensajeTipoSet = {command: "gotoQuestion", params: { id: _this.micromundoId, value: transport } };
		padre.postMessage(mensajeTipoSet, "*");	
	},delay);
}


/**
 * Mandamos el mensaje de que se bloquee el teclado
 */
protoAQ_Ad.disableChat = function(){
	var mensajeTipoSet = {
		command: "disableChat", 
		params: { 
			id: this.micromundoId,
		}
	};
	var padre = window.parent;
	padre.postMessage(mensajeTipoSet, "*");
}


/**
 * Ya se seleccionaron todas las cartas que se eliminaban por su pregunta y
 * ahora se le indica que debe hacer una nueva pregunta.
 */
protoAQ_Ad.readyForNewQuestion = function(){
	
	this.disableImages(true);
	var padre = window.parent;
	
	//Oscar: agregué estas líneas
	//alert('this.rondaDePrueba: '+this.rondaDePrueba);
	if(!this.rondaDePrueba){
		var mensajeTipoSet = {
			command: "showTutorIntervention", 
			params: { 
				id: this.micromundoId,
				text: 'Adelante con tu pregunta.',
				emotion: 'anfitrion'
			}
		};
		padre.postMessage(mensajeTipoSet, "*");
	}
	
	
	mensajeTipoSet = {
		command: "enableChat", 
		params: { 
			id: this.micromundoId,
		}
	};
	padre.postMessage(mensajeTipoSet, "*");
  }


/**
 * Mandamos el mensaje de que se terminaron las preguntas y que no logro 
 * encontrar la carta correcta.
 */
protoAQ_Ad.finished_withoutSuccess = function(){
		
	var vlr;
	if(this.config.forceCardIdx.length > 0){
		vlr = this.unsuccessQuestId;
	} else {
		vlr = this.gameOverId;
	}
	
	this.disableImages(true);
	var mensajeTipoSet = { 
		command: "gotoQuestion", 
		params : { 
			id	: this.micromundoId, 
			value	: vlr
		} 
	};
	var padre = window.parent;
	padre.postMessage(mensajeTipoSet, "*");
  }


/**
 *  Mandamos el mensaje de que termino el juego y encontro la carta correcta
 */
protoAQ_Ad.finished_withSuccess = function(){
	
	var vlr;
	if(this.rondaDePrueba){
		vlr = 'coche_final';
	} else 
	if(this.config.forceCardIdx.length > 0){
		vlr = this.reinitQuestId;
	} else {
		vlr = this.gameOverId;
	}
	
	this.disableImages(true);
	var mensajeTipoSet = { 
		command: "gotoQuestion", 
		params : { 
			id	: this.micromundoId, 
			value	: vlr
		} 
	};
		
	var padre = window.parent;
	padre.postMessage(mensajeTipoSet, "*");
  }
  
  
  
// ****************************************************
// ** RECEIVE MESSAGES
// ****************************************************
/**
 * Escucha de los mensajes del padre
 */
protoAQ_Ad.receiveMessage = function(evt) {
	
	if (evt.data && evt.data.type != "set")
		return; // No mensaje tipo set
	
	if(evt.data.name=="nT"){ 	//new transport
		this.chooseTransport();
		return;
	} 
	
	if(evt.data.name=="nQ"){ //new question
		this.game.numQuestion++;
		return;
	}  
	
	if(evt.data.name == "rQ"){ //relevant question
		//console.log('Relevant question: ',evt.data);
		this.game.addPropToSearch(evt.data.value);
		
		if(evt.data.value == 'null'){
			this.disableImages(true);
		} else {
			this.disableImages(false);
			this.disableChat();
		}
	}
	
	if(evt.data.name=="failure"){ //ya no hay más pistas ni RNR en el chat
		this.game.noSuccess();
		return;
	}  
}