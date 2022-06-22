var lite = lite || {}; 

/**
 *  Constructor y prototipo
 */
lite.AdivinaQuien = function (elementId,config){

	this.classBtnListoChange = 'label-changed';


	var defaultCfg	= this.getDefaultConfing();	
	this.config		= $.extend(true,defaultCfg , config);
	this.element	= $('#'+elementId);
	this.adapter = null;
	
	this.init();
};

var protoAQ = lite.AdivinaQuien.prototype;




/**
* Configuración por omisión del juego.
*/
protoAQ.getDefaultConfing = function(){
	var noCFG = 'NO CONFIGURADO';
	var defRetro = {
		perfecto	: noCFG,
		errorneo	: noCFG,
		bien		: noCFG,
		final_error : noCFG,
	};
	return { 
		cardTag : {
			name 	: 'aq-opt',
			right	: 'aq-retro-bien',
			wrong	: 'aq-retro-bien'
		},
		retros_txt : {
			unico		: $.extend({},defRetro),
			categoricas	: $.extend({},defRetro),
			relativas	: $.extend({},defRetro),	 						
		},

		messageCfg : {width : 400, height : 300 },
		imagesDir : 'imgs',
		btnLabel : ['No quiero eliminar nada', '¡ Listo !'],
		llamadaUnicoFinPerfecto : false,
		llamadaUltimoErroneo : false,
	};
}

/**
 * 
 */
protoAQ.init = function(){
	
	this.filtros = {};
	this.correct = false;
	this.enunciados = [];
	
	var cardClassS = "."+this.config.cardTag.name; 
	var cards = $(cardClassS,this.elemen);
	var imgDir = this.config.imagesDir;
	
	cards.each(function(idx,elem){
		var $ele = $(this);
	
		var cfg = $ele.attr('data-object');
		var eleId = $ele.attr('id');
		try{
			eval("cfg = " +cfg) ;
			this.optProp = cfg;
		} catch (e) {
			console.log(e);
			alert("No se pudo decodificar la configuración de : "+eleId+'\nVer la consola para más detalles');	
		}
		
		var flipper = $("<div>", {'class':'flipper'});
		var back	= $("<div>", {'class':'back'});
		var front	= $("<div>", {'class':'front'});
		var image	= $("<img>", {'src':imgDir+'/'+eleId+'.jpg'});
		
		flipper.appendTo($ele);
		front.appendTo(flipper);
		image.appendTo(front);
		back.appendTo(flipper);
	});
	
	
	
	var enabledCards = $(cardClassS+':not(.disabled)',this.elemen);
	enabledCards.on('click',$.proxy(function(event){
		var $tar = $(event.currentTarget);
		var parent = $tar.closest(cardClassS)
		if(parent.is('.flipped, .disabled'))
			return;
		
		
		var filters_len = Object.keys(this.filtros).length;
		if(filters_len<=0){
			alert("No se ha asignado ningún filtro !!!!!!!!!!!!!!!!");
			return;
		}			
		
		var optCfg = $tar[0].optProp;

		var mustFlip = !this.matchFiltros(optCfg);
		var volteaAux = $.proxy( function(){
				parent.addClass('flipped');
				this.volteados++;
				if(!this.btnListo.hasClass(this.classBtnListoChange) && this.volteados > 0){
					this.setLabelIndexBtnListo(1);
				}
				this.checkLastCard();
			},this);	

		if(mustFlip){
			volteaAux();
		} else {
			var fType		= this.lastFilter.type;
			var retroMal 	= this.config.retros_txt[fType];
			retroMal 		= retroMal.errorneo;

			retroMal = retroMal.replace('@transporte_seleccionado@',$tar.attr('id'));
			retroMal = retroMal.replace('@transporte_correcto@',this.correct.attr('id'));


			if(fType == 'relativas'){
				retroMal	= $("<div>",{html : retroMal});
				$btnCont	= $("<div>",{'class' : 'btn-container'});
				$btnSi		= $('<button>', {'class' : 'btn-siNo', html:'Sí'});
				$btnNo		= $('<button>', {'class' : 'btn-siNo', html:'No'});

				$btnCont.append($btnSi);
				$btnCont.append($btnNo);
				$btnCont.appendTo(retroMal);

				var thisWrap = this; 
				$btnSi.on('click', function(){
					$.modal.close();
					volteaAux();
				});

				$btnNo.on('click', function(){
					$.modal.close();
				});

			}

			this.showMessage(false,retroMal,'error');

			if(fType == 'relativas'){
				var btnClose = $('#simplemodal-container a.modalCloseImg')
				btnClose.hide();
			}

		}
	},this));
	
	
	this.conterText = $('<span>',{'class':'counter',html:'CUANTOS POR QUITAR'});
	this.btnListo = $('<button>' , {'class' : 'btn-listo',html: this.config.btnLabel[0]});

	this.btnListo.on('click',$.proxy(this.listoPressed,this));

	this.conterText.appendTo(this.element);
	this.btnListo.appendTo(this.element);
	this.setCorrectOption($(cards[0]).attr('id'));
	this.reInit();
	
}



/**
* Reinicia el juego con la misma carta marcada como 
* correcta.
*/
protoAQ.reInit = function(){
	
	this.filtros = {};
	this.enunciados = [];
	this.volteados=0;
	var cardClassS = "."+this.config.cardTag.name; 
	var cards = $(cardClassS,this.elemen);
	cards.removeClass('flipped');
	//this.updateCuantosFaltan();
	
	this.setLabelIndexBtnListo(0);
	this.btnListo.hide();
	
	this.numQuestion = 0;
}


/**
*
*/
protoAQ.setLabelIndexBtnListo = function(labelIdx){
	var label;
	var clsChg = this.classBtnListoChange;

	
	this.btnListo.hide();

	if(labelIdx == 1 ){
		label = this.config.btnLabel[1];
		this.btnListo.addClass(clsChg);	
	} else {
		label = this.config.btnLabel[0];
		this.btnListo.removeClass(clsChg);	
	}

	this.btnListo.html(label);
	this.btnListo.show(1000);
	
}



/**
 * 
 */
protoAQ.updateCuantosFaltan  = function(){
	
	var cardClassS = "."+this.config.cardTag.name+":not(.flipped)"; 
	var $cards = $(cardClassS);
	
	var cuantos = 0;
	
	var optCorrectId = this.correct.attr('id');
	var matchF = $.proxy(this.matchFiltros,this);
	// console.log("**************************************\nCUNATOS FALTAN : ",$cards);
	$cards.each(function(idx,element){
		var currObj = $(this); 
		if(optCorrectId == currObj.attr('id'))
			return;
		
		var optCfg = element.optProp;
		
		var mustFlip = !matchF(optCfg); 
		
		if(mustFlip)
			cuantos++;	
		
		// console.log("** DEBE QUITAR :  : "+idx,optCfg,mustFlip,cuantos);
	});
	var textHTML = "Faltan "+cuantos+" por voltear";
	//console.log("*********** "+textHTML+" **********");
	this.conterText.html(textHTML);
	return cuantos;
}


/**
 * Se busca la propiedad 'propName' las propiedades de la carta que se marco como 
 * correcta y se agrega a la lista de filtros. 
 * 
 * @param propName La propiedad por la cual se quiere filtrar las cartas
 */
protoAQ.addPropToSearch  = function(propName){
	if(!propName || propName == 'null' )
		return;
	
	
	var propType = this.getTipoPropiedad(propName,false);
	var propTypeUnic = this.getTipoPropiedad(propName,true);
	
	var corrP = this.correct[0].optProp;
	var propVal = 'SIN ASIGNAR !!!!';
	
	if(propType == 'INDETERMINADA'){

		var correctID = this.correct.attr('id');
		console.log("* El Filtro no se encontró en la opción correcta : ["+propName+"]");
		console.log("* Las propiedades de [",correctID,"]:\n",corrP);
		alert("Error al asignar propiedad del transportes. Ver Consola para más detalles");
		
		this.lastFilter =  {
			name	: propName,
			value	: 'NO ENCONTRADO',
			type	: 'relativas',
		};
		return;
	} else {
		propVal = corrP[propType][propName];
	}

	//Tine
	this.addEnunciado(propName);

	var param = {
		value : propVal,
		type :  propTypeUnic,
	}

	if(
		true ||  // AHora quremos que cada que se agregue un filtro, solo este ese.
		!this.filtros.hasOwnProperty(propName))
		this.filtros[propName] = [];


	this.filtros[propName].push(param);
	this.lastFilter = param;
	this.lastFilter.name = propName;
	this.volteados = 0;
	//console.log("*** Como queda los filtros (1) :", propName,propVal,this.filtros);

	this.setLabelIndexBtnListo(0);
		
	//this.updateCuantosFaltan();
	this.checkLastCard();
} 


/**
 * 
 */
protoAQ.removePropToSearch  = function(propName){
	
	if(this.filtros.hasOwnProperty(propName)){
		delete this.filtros[propName];  	
	} else {
		console.log('La propiedad '+propName+' no existe en la lista, ',this.filtros);
	}
}




/**
 * 
 */
protoAQ.setCorrectOption = function(optionId){
	this.correct = $('#'+optionId);
}


/**
 * 
 */

/*
protoAQ.matchFiltros = function (object){
	for (var propN in this.filtros) {
		var fValArray	= this.filtros[propN];
		for (var i = 0; i < fValArray.length; i++) {
			var fValue =  fValArray[i];
			if(!this.matchPropOnObject(object,propN,fValue.type,fValue.value)){
				return false;
			}
		}	
	}
	
	return true;
}
*/

//Cambio Tine dic 2015
protoAQ.matchFiltros = function (object){
	var propName = this.lastFilter.name;
	//alert(this.lastFilter.name);
	var fValArray = this.filtros[propName];
	var fValue =  fValArray[0];
	if(!this.matchPropOnObject(object,propName,fValue.type,fValue.value)){
		return false;
	}
	return true;
}



/**
 * 
 */
protoAQ.matchPropOnObject = function(object,propName,propType,propVal){
	if(propType == 'unico'){
		var corrP = this.correct[0].optProp;
		return corrP == object;
	}

	var error  = !(
		object.hasOwnProperty(propType) && 
		object[propType].hasOwnProperty(propName)
	)
		

	if(error){
		console.log("No se encontró la propiedad ",object,propType,propName,propVal);
		//alert("No se encontró la propiedad : "+propType+'-'+propName+' en el objeto');
		return false;
	}

	var searchVal =  object[propType][propName];
	var res = searchVal == propVal;
	return 	res;
}

/**
 * 
 */
protoAQ.sendEndGameMessage = function(endGame){
	var eventName = (endGame)?'allDone':'allFlipped';
	this.element.trigger(eventName);
}

/**
 * 
 */
protoAQ.setDisabled = function (isDisabled){
	var cardClassS = "."+this.config.cardTag.name; 
	var cards = $(cardClassS);	
	if(isDisabled){
		cards.attr('disabled','disabled');
		cards.addClass("disabled");	
		this.element.addClass("disabled");	
		this.btnListo.attr('disabled','disabled');
		this.btnListo.hide();
	} else {
		cards.removeAttr('disabled','');
		cards.removeClass("disabled");
		this.element.removeClass("disabled");
		this.btnListo.removeAttr('disabled');
		this.btnListo.show();
	}
	
}



/**
 * 
 */
protoAQ.getOpciones = function (){
	var cardClassS = "."+this.config.cardTag.name; 
	var cards = $(cardClassS);
	var list = [];
	cards.each(function(){
		var optObj = {};
		
		optObj.id = $(this).attr('id');
		optObj.cfg = this.optProp;
		list.push(optObj);
	});
	return list;
}


protoAQ.addEnunciado = function(propName){
	
	var corrP = this.correct[0].optProp;
	var enunc = corrP['enunciados'];
	for(var rubro in enunc){
		var object = enunc[rubro];
		var propNames = object['claves'];
		if(propNames.indexOf(propName)!=-1){
			this.enunciados.push(object['enunciado']);
			object['claves'] = [];
		}
	}
}

/**
 * 
 */
protoAQ.getTipoPropiedad = function (propName, searchUnique){
	var corrP = this.correct[0].optProp;
	var propVal = 'NO DETERMINADO';
	var propType = 'INDETERMINADA';
	
	var categoricas = corrP['categoricas'];
	var reativas = corrP['relativas'];

	if(categoricas.hasOwnProperty(propName)){
		propType	= 'categoricas';
		
	} else if(reativas.hasOwnProperty(propName)){
		propType = 'relativas';
	} else {
		return 'INDETERMINADA';
	} 

	if(searchUnique){ 
		var esUnica = 'true';
		propVal		= corrP[propType];
		propVal		= propVal[propName];

		var optCorrectId = this.correct.attr('id');
		var cardClassS = "."+this.config.cardTag.name+":not(#"+optCorrectId+")"; 
		var $cards = $(cardClassS);
		
		$cards.each(function(idx,element){
			var currObj = $(this); 
			if(optCorrectId == currObj.attr('id'))
				return; //Continue
			
			var optCfg = element.optProp;
			
			if(!(optCfg.hasOwnProperty(propType) && optCfg[propType].hasOwnProperty(propName) ) ){
				console.log("No tiene las propiedades del tipo ",propType,propName,optCfg,'\nOBJECTO',currObj);
				//alert(
				//	"Encontre un objeto que no tiene propiedades de tipo ["+propType+"] o no tiene la propiedad ["+propName+"]"
				//	+"\nVer la consola para más detalles");
				return;//Continue

			}
			
			var optVal = optCfg[propType][propName];

			if(optVal == propVal){
				esUnica = false;
				return false; //break
			}
		});

		if(esUnica)
			return 'unico';
	}
	
	return propType;
}






protoAQ.checkLastCard = function(){
	var cardClassS = "."+this.config.cardTag.name+":not(.flipped)"; 
	var $cards = $(cardClassS);

	if($cards.length > 1) // Aun faltan por voltear 
		return;
	
	var lastId = $($cards[0]).attr('id');
	var correctId = $(this.correct[0]).attr('id');
	var error = lastId != correctId;
	
	var lastFilter = this.lastFilter;
	var fType =  lastFilter.type;

	var retrosProv = this.config.retros_txt[fType];
	
	if(error) { //FUE LA ULTIMA Y NO ES LA CORRECTA
		retroMal = retrosProv.final_error;
		retroMal = retroMal.replace('@transporte_seleccionado@','NO ASIGNADO');
		retroMal = retroMal.replace('@transporte_correcto@',correctId);

		retroMal		= $("<div>",{html : retroMal});
		var $btnCont	= $("<div>",{'class' : 'btn-container',});
		var $btnSi		= $('<button>', {html:'Continuar'});
		
		retroMal.append($btnCont);
		$btnCont.append($btnSi);

		var callBack = this.config.llamadaUltimoErroneo;
		$btnSi.on('click',function(evt){
			$.modal.close();
			if($.isFunction(callBack))
				callBack(lastFilter,$cards[0]);
			
		});
		this.showMessage(false,retroMal,'error');
		$('#simplemodal-container a.modalCloseImg').hide();
	
		return ;
	} else { //FUE LA ULTIMA Y ESTA CORRECTA
		
		// Solo queda la ultima carta boca arriba, entonces consideramos que la 
		// característica que señala el filtro es 'unica'
		this.btnListo.hide();
		
		retrosProv = this.config.retros_txt.unico;
		var retroBien = retrosProv.perfecto;
		retroBien = retroBien.replace('@transporte_seleccionado@','NO ASIGNADO');
		retroBien = retroBien.replace('@transporte_correcto@',correctId);
		//Tine
		retroBien = this.showEnunciados(retroBien);

		var callBack = function(){
			this.sendEndGameMessage(true);	
		};
		var _this = this;
		callBack = $.proxy(callBack,this);
		setTimeout(function(){
			_this.showMessage(false,retroBien,'success',callBack);
		},3000);
		return ;
	}
}
/**
*
*/
protoAQ.listoPressed = function(event){

	var fType		= this.lastFilter.type;
	var retroProv = this.config.retros_txt[fType];


	var cardClassS = "."+this.config.cardTag.name+":not(.flipped)"; 
	var $cards = $(cardClassS);

	var cuantosPorVoltear = this.updateCuantosFaltan ();
	/*
	* ELIMINACION PERFECTA. Todas las cartas que no casan con los filtros
	* fueron seleccionadas.
	*/
	if(cuantosPorVoltear <= 0){
		
		var retroTXT = retroProv.perfecto;
		var callBack = false;
		
		var thisWrap = this;
		if(fType == 'unico'){ // CallBack externo 
			callBack = function(){
				//thisWrap.btnListo.hide();
				var fNext =  thisWrap.config.llamadaUnicoFinPerfecto;
				if($.isFunction(fNext))
					fNext();
			}
			//Tine
			thisWrap.btnListo.hide();
			retroTXT = this.showEnunciados(retroTXT);
			setTimeout(function(){
				thisWrap.showMessage(false,retroTXT,'success',callBack);	
			},2000);
		} else {
			if(this.numQuestion == thisWrap.adapter.maxPreguntas){
				this.noSuccess(true);			
			} else {
				callBack = function(){
					thisWrap.btnListo.hide();
					thisWrap.sendEndGameMessage(false);
				}
				this.showMessage(false,retroTXT,'success',callBack);
			}
		}
		return;
	}


	// Se eliminaron por lo menos 2. Si no el boton no aparece y no le pueden dar click.
	
	if(this.numQuestion == this.adapter.maxPreguntas){
		this.noSuccess(true);
		return;
	}
	
	var messageHtml = retroProv.bien;

	var nextQ = $.proxy(function(){
		this.sendEndGameMessage(false); // Mandamos el evento de que terminamos de voltear
	},this);

	if(fType != 'relativas'){
		messageHtml = $('<span>',{html: messageHtml});
		var btnCont = $('<div>',{'class':'btn-container'})
		var btnSi 	= $('<button>', {html:'Hacer otra pregunta'} );
		var btnNo 	= $('<button>', {html:'Eliminar más transportes'} );

		
		messageHtml.append(btnCont);
		btnCont.append(btnSi);
		btnCont.append(btnNo);

		var nextQ2 = nextQ;
		btnSi.on('click',function(){
			$.modal.close();
			nextQ2();
		});

		btnNo.on('click',function(){
			$.modal.close();
		});
	
		nextQ = undefined;
	} 

	this.showMessage(false,messageHtml,'success',nextQ);

	if (fType != 'relativas') {
		$('#simplemodal-container a.modalCloseImg').hide();
	};
}


protoAQ.noSuccess = function(addCfg){
	var thisWrap = this;
	var callBack = function(){
		thisWrap.adapter.finished_withoutSuccess();
	}
	var retroTXT = "";
	if(addCfg){
		retroTXT = this.config.messageNoSuccess;
		retroTXT = retroTXT.replace('@transporte_correcto@',this.correct.attr('id'));
	}
	retroTXT = this.showEnunciados(retroTXT);
	this.showMessage(false,retroTXT,'error',callBack);	
}

protoAQ.showEnunciados = function(txt){
	
	if(this.enunciados.length>0){
	
		txt = txt + '<br><br>Identificaste las siguientes características distintivas de este medio de transporte:';
		
		txt = txt + "<ul style='text-align:left;'>";
		for(var i=0;i<this.enunciados.length;i++){
			txt = txt  + '<li>' + this.enunciados[i] + '</li>';
		}
		txt = txt + "</ul>";
	}
	
	if(this.enunciados.length<4){
		
		var nFaltantes = 6-this.enunciados.length>4?4:6-this.enunciados.length;
		
		if(this.enunciados.length>0){
			txt = txt + 'Además, tiene estas otras características:';
		} else {
			txt = txt + 'Este transporte tiene las siguientes características:';
		}
		
		this.enunciados = [];
		var corrP = this.correct[0].optProp;
		var enunc = corrP['enunciados'];
		for(var rubro in enunc){
			var object = enunc[rubro];
			var propNames = object['claves'];
			if(propNames.length>0){
				this.enunciados.push(object['enunciado']);
				if(this.enunciados.length==nFaltantes){
					break;
				}
			}
		}
		
		txt = txt + "<ul style='text-align:left;'>";
		for(var i=0;i<this.enunciados.length;i++){
			txt = txt  + '<li>' + this.enunciados[i] + '</li>';
		}
		txt = txt + "</ul>";
	}
	
	return txt;
}
/**
 * 
 */
protoAQ.showMessage = function(title,htmlMessage,type,closeCallBack,width,height){
	
	var isTitle = (title) && ((title+'').length > 0);
	var msgTxt = $("<div>",{'class':'content'}); 
	

	if($.type(htmlMessage) == 'string'){
		msgTxt.html(htmlMessage);
	} else {
		var $html = $(htmlMessage);
		msgTxt.append($html);
	}
	

	if(isTitle){
		$title = $('<h3>',{html:title})
		msgTxt.prepend($title);
	}
	

	var msgHtml = $('<div>').append(msgTxt);
		
	height	= (height!=undefined)?height : this.config.messageCfg.height;
	width	= ( width!=undefined)?width  : this.config.messageCfg.width;
	
	var parent = $('body');
	
	msgHtml.modal({
		appendTo : parent.selector,
		autoPosition : false,
		containerCss : {position:'absolute'},
		maxHeight: parent.height()-40,
		onClose : function(){
			$.modal.close();
			var t=(closeCallBack)?closeCallBack():0;
		},
	});
	
	
	var simplemodal = $('#simplemodal-container');
	var simpleModalOverlay = $('#simplemodal-overlay');
	
	simpleModalOverlay.css({
		position:'absolute',
		width:'100%',
		height:'100%'
	});
	
	simplemodal.hide();
	simplemodal.addClass(type);
	simplemodal.show();
	simplemodal.css({height:'auto',width:'auto','max-width':width+'px'});
}

