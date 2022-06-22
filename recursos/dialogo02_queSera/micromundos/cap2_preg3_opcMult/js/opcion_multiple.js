//NAME SPACE
var lite = lite || {};

/**
 * @param elementID
 * @param config
 */
lite.OpcionMultiple = function(elementID,config){
	this.defaultConfig ={
			message : {
				maxW : 600,
				maxH : 500,
				minW : 300,
				minH : 200,
			}
	} 
	
	this.config = $.extend(true,this.defaultConfig,config);
	
	this.element = $('#'+elementID);
	this.element.addClass('om-container');
	
	var $optCont =  $('.om-quest .om-options',this.element);
	
	var shuffle = this.shuffle;
	$optCont.each(function(idx, optionsCont){
		shuffle(optionsCont);	
	});
	
	var $optEnabled = $('.om-quest .om-options > .om-option',this.element);
	
	var game = this;
	var fCallBack = function(){
		// Por si hay que hacer algo siempre despues de contestar la pregunta
	};
	

	$optEnabled.on('click',function(event){
		
		var target = event.currentTarget;
		var $target = $(target);
		var $questEle = $target.closest('.om-quest');
		if($questEle.hasClass('answered'))
			return; // Ya se contesto
		
		var OM_IDX = target.hasOwnProperty('OM_IDX')?target.OM_IDX:false;
		if(OM_IDX === false){
			alert("No se determino el indice para la opcion : "+ target.innerHTML);
			return;
		}
		
		var optRetHtml = $('.om-retro',target).html();
		if(OM_IDX != 0 ){
			game.showMessage('',optRetHtml	,'error',fCallBack);
			return
		}
		
		
		var $questEle = $target.closest('.om-quest');
		ansedText = $('.om-quest-answered-text',$questEle).html();
		
		var fNextQ_Right = function(){
			$questEle.addClass('answered');
			$questEle.hide(1000,function(){
				fCallBack();
				game.registerAnswer(ansedText);
				game.nextQuestion();
			});
		};
		game.showMessage('',optRetHtml,'success',fNextQ_Right);
	});
	
	
	
	//Arrancamos
	this.init();
}


//PROTOTYPE
var protoOM = lite.OpcionMultiple.prototype;


/**
 * 
 */
protoOM.init = function(){
	var $quests = $('.om-quest',this.element);
	var $register = $('.om-answered-register',this.element);
	
	$quests.addClass('hidden');
	$quests.removeClass('answered');
	
	var toRemove = $('> :not(.static-answer)',$register);
	
	toRemove.remove();

	this.nextQuestion();
}



/**
 * 
 */
protoOM.registerAnswer = function(answeredTxt){
	var register = $('.om-answered-register',this.element);
	var newAnswer = $('<div>', {'class':'answer',html:answeredTxt});
	register.append(newAnswer);
	newAnswer.hide();
	newAnswer.show(1000);
}

/**
 * 
 */
protoOM.nextQuestion = function(){
	
	var quest = $('.om-quest.hidden',this.element).not('.answered');
	var $nextQ = $(quest[0]); 
		
	//console.log("Nueva Pregunta",$nextQ);
	$nextQ.hide();
	$nextQ.show(1000);

	if($nextQ.length==0){
		this.element.trigger('OpcionMultiple.end');
	} else {
		var evt = {
			type :  'OpcionMultiple.nextQuestion',
			question : $nextQ,
		};
		this.element.trigger(evt);
	}
}

/**
 * 
 */
protoOM.shuffle = function(elementCont){
	var $eleC = $(elementCont);
	var lista = [];
	
	
	//SACAMOS LOS ELEMENTOS
	$('> *',$eleC).each(function(idx, element){
		if(!element.hasOwnProperty('OM_IDX')){
			element.OM_IDX = idx;			
		}
		lista.push(element); 
	});
	
	var aL = lista.length;
	
	// PERMUTAMOS ALEATORIAMENTE
	for (var i = 0; i < aL; i++) {
		var idx1 = Math.floor(Math.random()*aL);
		var idx2 = Math.floor(Math.random()*aL);
		var ele1 = lista[idx1];
		var ele2 = lista[idx2];
		lista[idx1] = ele2;
		lista[idx2] = ele1;
	}
	
	//AGREGAMOS EN EL NUEVO ORDEN
	for (var i = 0; i < aL; i++) {
		var ele1 = lista[i];
		$eleC.append(ele1);
	}
	
	
}




protoOM.showMessage = function(title,htmlMessage,type,closeCallBack,width,height){
	
	var isTitle = (title != undefined) && ((title+'').length > 0);
	var msgTxt = "<div class='content'>"+htmlMessage+"</div>"; 
	if(isTitle){
		msgTxt = "<h3>"+title+"</h3>"+msgTxt; 
	}
	
	
	var cfg = this.config.message;
	var msgHtml = $('<div>').html(msgTxt);
		
	height	= (height!=undefined)?height:cfg.height;
	width	= ( width!=undefined)?width:cfg.width;
	
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
	simplemodal.css({
			height:'auto', 
			width:'auto',
			'max-width':cfg.maxW+'px',
			'min-width':cfg.minW+'px',
			'max-height':cfg.maxH+'px',
			'min-height':cfg.minH+'px',
		});
}
