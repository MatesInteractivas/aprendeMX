var lite = lite || {}; 



lite.cuadrosinoptico = function (elementId,cfgRetros,cfg) {
	
	var defCfg = {
		message : {
			width : 700,
			height: 400,
		},
	}
	
	

	this.cfg = {} ;
	$.extend(this.cfg,defCfg,cfg);
	
	this.optElementName = 'cs-opt';
	
	this.elementId = elementId;
	this.retros = cfgRetros;
	this.element = $('#'+this.elementId);
	this.optionsCont = $('.distractor',this.element);
	this.init();

};

var protoCS = lite.cuadrosinoptico.prototype;

/**
 * 
 */
protoCS.init = function(){
	var spanList = $('.cuadro_sinoptico '+this.optElementName, this.element);
	
	var thisScope = this;

	spanList.each(function (idx,element){
		var $element = $(element);
		var $newSpan = $('<span>',{ 'class': 'correct', html : $element.html() });
		var newSpan = $newSpan.get(0);
		thisScope.optionsCont.append($newSpan);
		
		var level = $element.parents('ul');
		
		$element.addClass('gap-to-fill');
		
		var data = {level : level.length, index : $element.closest('li').index()};
		
		var p = $element.parents('li');
		tt=[$element.index()];
		p.each(function(i,element){
			tt.push($(element).index());
		});
		tt.reverse();

		$element.data('position',tt);
		$newSpan.data('position',tt);
		
		$element.on('click', function(){
			thisScope.gapSelected(element);
		});
		
		var oldId = $element.attr('id');
		if(oldId && oldId.length > 0){
			$newSpan.attr('id',oldId);
			$element.attr('id','');
		}
		
	});

	var $optList = $('> span',this.optionsCont);
	$optList.each(function(idx,element){
		var $element = $(element);
		var idStr = $element.attr('id'); 
		
		if(!idStr || idStr.length <=0){
			idStr = 'opt_'+((idx<10)?'00':(idx<100)?'0':'')+idx;
			$element.attr('id',idStr); 
		}
		
		$element.data('id',idStr);			
		if(!$element.data('position')){
			$element.data('position',[]);
		}
		
		$element.attr('opt-id',idStr);
		$element.on('click',function(){
			thisScope.optionSelected($element[0]);
		});
	});
	
	$optList.shuffle();
	
}


/**
 * 
 */
protoCS.optionSelected = function(selectedElement){
	var $element = $(selectedElement);
	var spansSel = this.getSelectedOption();
	
	
	
	spansSel.removeClass('selected');
	$element.addClass('selected');
	
	var selectedGap = this.getSelectedGap();
	if(selectedGap.length > 0 ){
		this.setOptionOnGap($element,selectedGap);
	}
	
}



/**
 * 
 */
protoCS.gapSelected = function(selectedElement){
	var $element = $(selectedElement);
	
	if($element.hasClass('right')){ // No se permite modificar una que ya es correcta
		return;
	}
	
	var spansSel = this.getSelectedGap();
	spansSel.removeClass('selected');
	$element.addClass('selected');
	
	var selectedOpt = this.getSelectedOption();
	if(selectedOpt.length > 0 ){
		this.setOptionOnGap(selectedOpt,$element);
	} else {
		var gapDom = $element.get(0);
		
		if(gapDom.cover_element){
			var prevCover = $(gapDom.cover_element);
			prevCover.show(400);
			$element.removeClass('error right cover');
			gapDom.cover_element = false;
		}
	}
}





protoCS.isGameFinished = function() {
	$allGaps = $(this.optElementName);
	var isFinished = true;
	$allGaps.each(function(i, element){
		var $ele = $(element);
		isFinished = isFinished && $ele.hasClass('right');
	});
	
	return isFinished;
};

/**
 * 
 */
protoCS.setOptionOnGap = function(optElement,gapElement){
	
	optElement.removeClass('selected');
	gapElement.removeClass('selected');
	
	
	
	var gapDom = gapElement.get(0);
	
	if(gapDom.cover_element){
		var prevCover = $(gapDom.cover_element);
		prevCover.show(400);
		
		gapElement.removeClass('error');
		gapElement.removeClass('right');
	}
	
	
	
	gapDom.cover_element = optElement.get(0);
	
	gapElement.addClass('cover');
	gapElement.html(optElement.html());
	
	gapElement.hide();
	gapElement.show(400);
	optElement.hide(400);
	
	var posOpt = optElement.data('position');
	var posGap = gapElement.data('position');
	

	var levelOpt = posOpt.join('');
	var levelGap = posGap.join('');

	

	/*
	console.log("Que tenemos opt, gap\n",
			posOpt,posGap,"\n",
			optElement,gapElement
			);
	*/
	if(levelGap == levelOpt){
		gapElement.addClass('right');
	
		if(this.isGameFinished()){
			this.element.trigger('cs.gameended');
		}
		
		return;
	}
	
	gapElement.addClass('error');
	
	
	var msg = this.getRestroMessage(optElement,gapElement,posOpt,posGap);
	this.showMessage('',msg,'error',null,this.cfg.message.width,this.cfg.message.height);
	
}



/**
 * 
 */
protoCS.getRestroMessage = function(optElement,gapElement,posOpt,posGap){
	/*
	 * retro : {
		 	rubro, 
			especificidad,
		} 
	 */
	
	
	var idOpt = optElement.data('id');
	console.log("Opteniendo el id para : ",idOpt,optElement);
	var retros = this.retros[idOpt].retros;

	var msg = 'NO ERROR MESSAGE';
	if (typeof retros === 'string' || retros instanceof String){// Is distractor ?? 
		return retros;
	}

	
	if(posOpt[0] != posGap[0]){ // Bad rubro
		msg = this.retros[idOpt].retros.rubro;// Bad rubro
	} else { // Bad epect
		msg = this.retros[idOpt].retros.especificidad;
	}
	
	return msg;
}
/**
 * 
 */
protoCS.getSelectedOption = function(){
	var spansSel = $('span.selected', this.optionsCont);
	return spansSel;
}


/**
 * 
 */
protoCS.getSelectedGap = function(){
	var spansSel = $('.cuadro_sinoptico '+this.optElementName+'.selected', this.element);
	return spansSel;
}


/**
 * 
 */
protoCS.getRetrosDataStructure  = function(){
	var structure = {};

	var $optList = $('span',this.optionsCont);
	var cfgRetros = this.retros;
	$optList.each(function(idx,element){
		var $element = $(element);
		var id = $element.data('id');
		
		var txtSin ='************************** SIN RETROALIMENTACIÓN *********************';
		var retrosCfg = (cfgRetros[id])?cfgRetros[id].retros:false;
		
	
		var isDistractor	= $element.data('position');
		isDistractor		= (!isDistractor) || (isDistractor.length <= 0);
		var retroObj = {
				text : $element.text(),
				retros : '',
		};

		
		
		if(isDistractor){
			if(!retrosCfg){ retrosCfg = txtSin; }
			
			retroObj.retros = retrosCfg;
		} else {
			if(!retrosCfg){ retrosCfg = {rubro : txtSin, especificidad : txtSin}; }
			
			retroObj.retros = {
				rubro			: retrosCfg.rubro,
				especificidad	: retrosCfg.especificidad,
			};
		}
		structure[id] = retroObj;
	});
	
	
	var orderedStructure = {};
	var keys = Object.keys(structure),
    i, len = keys.length;
	keys.sort();
	for (i = 0; i < len; i++) {
	    k = keys[i];
	    orderedStructure[k] = structure[k];
	}
	
	return orderedStructure;
	
}


/**
 * 
 */
protoCS.downloadRetrosDataStructure = function(){
	var strDw = "lite = lite || {};\nlite.cuadrosinoptico = lite.cuadrosinoptico || {};\nlite.cuadrosinoptico.retros_data = ";
	
	strDw += JSON.stringify(this.getRetrosDataStructure(),null,"\t");

	
	var textFileAsBlob = new Blob([strDw], {type:'application/javascript'});
	var fileNameToSaveAs = 'data_lite_cuadrosinoptico.js';

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null){
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}else{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = function(event){ $(downloadLink).remove();};
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}
	downloadLink.click();
}


/**
 * 
 */
protoCS.downloadMainHTML = function(){
	var textFileAsBlob = new Blob([this.element[0].outerHTML], {type:'text/html'});
	var fileNameToSaveAs = 'elementHTML.html';

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null){
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}else{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = function(event){ $(downloadLink).remove();};
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}
	downloadLink.click();
	// Remove anchor from body
	//document.body.removeChild(downloadLink);
}



/**
	@title 
	@htmlMessage,
	@type  "error", "message", "warning". Defult ("message") 
*/
protoCS.showMessage = function(title,htmlMessage,type,closeCallBack,width,height){
	
	var isTitle = (title != undefined) && ((title+'').length > 0);
	var msgTxt = "<div class='content'>"+htmlMessage+"</div>"; 
	if(isTitle){
		msgTxt = "<h3>"+title+"</h3>"+msgTxt; 
	}
	
	var msgHtml = $('<div>').html(msgTxt);
		
	height	= (height!=undefined)?height:this.cfg.message.height;
	width	= (width!=undefined)?width:this.cfg.message.width;
	
	var parent = $('body');
	
	msgHtml.modal({
		appendTo : parent.selector,
		autoPosition : false,
		containerCss : {position:'absolute'},
	
		//minWidth: width,
		//maxWidth: parent.width()-40,
	
	//	minHeight: height,
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

