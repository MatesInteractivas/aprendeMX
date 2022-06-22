//NAME SPACE
lite = lite || {};
lite.OpcionMultiple = lite.OpcionMultiple || {};


/**
 * 
 * @param OpcionMultipleInstance
 * @param config
 */
lite.OpcionMultiple.DialogAdapter = function(OpcionMultipleInstance, config){
	
	this.opInstance = OpcionMultipleInstance;
	var defaultCfg = {
		micromundoId		: 'cap2_preg3_opcMult',
		nextQuestion		: 'cap2_preg4_estructura', 
	}
	
	this.config = $.extend(defaultCfg,config);

    this.init();

    // INFORMAMOS AL DIALOGO QUE ESTAMOS LISTOS
	this.reciver = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: this.config.micromundoId } };
	this.reciver.postMessage(mensajeTipoSet, "*");	

}

//PROTOTYPE
var protoOM_AD = lite.OpcionMultiple.DialogAdapter.prototype;


/**
 * Inicializamos las cosas para poder comunicarnos con el dialogo
 */
protoOM_AD.init = function(){
	// Escuchamos paso de mensajes
	var reciverL = $.proxy(this.receiveMessage,this);
	if (window.addEventListener){
		window.addEventListener("message", reciverL, false);
	} else {
		window.attachEvent("onmessage", reciverL, false);
	}
	

	var onFinshCall = function(){
		//this.setQuestionInDialog(this.config.nextQuestion);
		this.nextQuestionInDialog();
		this.addMwSettings('finished','true');
	}

	onFinshCall = $.proxy(onFinshCall,this); // Para que "this", tenga el scope adecuado
	this.opInstance.element.on('OpcionMultiple.end', onFinshCall);


	//Prueba del listener de nueva pregunta , no se está ocupando por ahora
	var onNewQCall = function(){
		//this.addMwSettings('nQ','1');
	}
	onNewQCall = $.proxy(onNewQCall,this); // Para que "this", tenga el scope adecuado
	this.opInstance.element.on('OpcionMultiple.nextQuestion', onNewQCall);
}



/**
* Mandamos el mensaje de que el micromundo se pase a otra pregunta. 
* 	@param idPreg El identificador de la pregunta a donde queremos mandar al dialogo 
*/
protoOM_AD.setQuestionInDialog = function(idPreg){
	var mensajeTipoSet = {command: "gotoQuestion", params: { id: this.config.micromundoId, value: idPreg } };
	console.log("Vamos a enviar el mensajes",mensajeTipoSet);
	this.reciver.postMessage(mensajeTipoSet, "*");
}
protoOM_AD.nextQuestionInDialog = function(){
	var mensajeTipoSet = {command: "gotoNextQuestion", params: { id: this.config.micromundoId } };
	//console.log("Vamos a enviar el mensajes",mensajeTipoSet);
	this.reciver.postMessage(mensajeTipoSet, "*");
}
protoOM_AD.addMwSettings = function(name,value){
	var mensajeTipoSet = {command: "addMicroworldSettings", params: { id: this.config.micromundoId , name: name, value: value } };
	//console.log("Vamos a enviar el mensajes",mensajeTipoSet);
	this.reciver.postMessage(mensajeTipoSet, "*");
}



/**
* Escuchamos el paso de mensajes. Solo se escuchan los mensajes que tienen :  
* 	@param evt.data.type  =  "set"
* 	@param evt.data.name  =  "tele"
* 	@param evt.data.value  =  "1"
*/
protoOM_AD.receiveMessage = function(evt){

	//console.log("OptMultiple.Adapter : Recibimos : " ,evt.data);
	
	if (!evt.data || !evt.data.type || !evt.data.name || !evt.data.value || evt.data.type != "set"){
		return; // No mensaje tipo set
	}
		
	
	
	/*
	*	Si nos mandan el mensaje, agregamos la respuesta extra al registro
	*/
	var esTele = evt.data.name == "tele" && evt.data.value == 1; 
	if(esTele){ //Add last question
		
		var teleDiv = $('<div>',{'class':'answer static-answer',id:'last-question-tele'});
		//var innerHtml = '<span class="gap-filled">Una televisión</span> es ... <br><img src="imgs/television.png">';
		var innerHtml = '<span class="gap-filled">Una televisión</span> es ... ';
		teleDiv.html(innerHtml);
		var answersReg = $('.om-answered-register',this.opInstance.element);
		answersReg.append(teleDiv);

		teleDiv.hide();
		teleDiv.show(1000);
		return; // Por si queremos hacer más cosas, si se llego aquí no queremos que haga nada más
	}
	
	var esCarac = evt.data.name == "carac" && evt.data.value == 1; 
	if(esCarac){ //Subrayar características
		$('.carac').css('text-decoration','underline');
		$('.grupo').css('text-decoration','none');
		return; // Por si queremos hacer más cosas, si se llego aquí no queremos que haga nada más
	}
	
	var esGrupo = evt.data.name == "grupo" && evt.data.value == 1; 
	if(esGrupo){ //Subrayar características
		//$('.grupo').css('text-decoration','underline');
		$('.gap-filled').removeClass('gap-filled');
		$('.grupo').removeClass('grupo').addClass('grupo-highlighted');
		$('.carac').css('text-decoration','none');
		return; // Por si queremos hacer más cosas, si se llego aquí no queremos que haga nada más
	}
	
	var esAparato = evt.data.name == "aparato" && evt.data.value == 1; 
	if(esAparato){ //Subrayar características
		$('.gap-filled').removeClass('gap-filled');
		$('.grupo').removeClass('grupo').addClass('grupo-highlighted');
		$('#last-question-tele').html('<strong>Una televisión</strong> es <span class="grupo-highlighted">un aparato</span> que ... ');
		return; // Por si queremos hacer más cosas, si se llego aquí no queremos que haga nada más
	}
	
	var esFuncionTele = evt.data.name == "funcionTele";
	var funciones = [
		'',
		'sirve  para ver programas de diferente tipo.',
		'se usa para ver eventos deportivos.',
		'se puede usar para jugar y entretenerse.',
		'se usa para dar y obtener información sobre el mundo.',
		'se usa para dar información (o desinformación) sobre el mundo.',
		'se usa para vender cosas.',
		'se usa para manipular a la población.',
		'funciona con electricidad.',
		'tiene una pantalla, botones, cable, entre otras piezas.',
		'produce imágenes y sonido.',
		'tiene una forma plana y rectangular.',
		'puede ser negra, plateada o de otros colores.',
		'algunas personas usan para relajarse y dormir.',
		'que puede tener usos muy inesperados.'
	]
	if(esFuncionTele){ //Subrayar características
		$('#last-question-tele').html('<strong>Una televisión</strong> es <span class="grupo-highlighted">un aparato</span> que <span class="funcion-highlighted">' + funciones[evt.data.value] + '</span><br><img src="imgs/television.png">');
		return; // Por si queremos hacer más cosas, si se llego aquí no queremos que haga nada más
	}
	
	
	var esReconstruccion = evt.data.name == "mwReconstruction";
	if(esReconstruccion){
		if(evt.data.value=='default'){
			//lo que se tenga que hacer en este mm cuando NO hay historial
			var _this = this;
			$('.om-quest').each(function(){
				var txt = $('.om-quest-answered-text',$(this)).html();
				_this.opInstance.registerAnswer(txt);
			});
			var quest = $('.om-quest');
			$(quest[0]).hide();
			
			//add tele
			var teleDiv = $('<div>',{'class':'answer static-answer',id:'last-question-tele'});
			var innerHtml = '<span class="gap-filled">Una televisión</span> es ... <br><img src="imgs/television.png"><br>';
			teleDiv.html(innerHtml);
			var answersReg = $('.om-answered-register',this.opInstance.element);
			answersReg.append(teleDiv);
	
			teleDiv.hide();
			teleDiv.show(1000);
			
			
		} else {
			//lo que se tenga que hacer con base en historial
			var arrPairs = evt.data.value.split(',');
			for(var i=0;i<arrPairs.length;i++){
				var pair = arrPairs[i].split(':');
				if(pair[0]=='finished' && pair[1]=='true'){
					var _this = this;
					$('.om-quest').each(function(){
						var txt = $('.om-quest-answered-text',$(this)).html();
						_this.opInstance.registerAnswer(txt);
					});
					var quest = $('.om-quest');
					$(quest[0]).hide();
				}
			}
		}
		//esto SIEMPRE debe ir
		var padre = window.parent;
		var mensajeTipoSet = { command: "mwReconstructed", params: {id: this.config.micromundoId } };
		padre.postMessage(mensajeTipoSet, "*");
		
		return;
	}
	
	
}