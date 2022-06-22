//$(function () {
	/**
	* @param containerId  El id del elemento donde se insertará el teclado
	* @param inputId El id del elemento donde el teclado pondrá el texto
	* @param placeholderText El texto que hará de placeholder. Si este texto esta en el input, no activamos la función de mover el caret
	*/
var initializeKeyboard = function(containerId,inputId,placeholderText){

	jsKeyboard.init(containerId);
	
	var $firstInput = $('#'+inputId);
	var pHText = (placeholderText)?$.trim(placeholderText.toLowerCase()):'escribe tu respuesta y pulsa aceptar.';

	var pClass = 'input-keyboard-processed';
	
	if(!$firstInput.hasClass(pClass)){

		//solo lo hacemos una vez
		$firstInput.setCursorPosition = function(position){
			//console.log("Se llamo a cambiar el carret : ",position);
			var originalText = this.text();
			originalText = originalText.trim()
			originalText = originalText.substring(0,position) + "<span id='caret'></span>"+originalText.substring(position);
			this.html(originalText);
		}

		/**
		*/
		$firstInput.click(function(e){
			
			jsKeyboard.currentElement 				= $firstInput;

			var txt = $firstInput.text().toLowerCase();
			txt = $.trim(txt);
			
			if(
				$firstInput.attr('id') == 'text_alumno' &&  //Solo verificamos en el teclado del dialogo
				(
					$firstInput.hasClass('txt_alumno_erased') ||
					!$firstInput.hasClass('txt_alumno_writing') ||
					(txt == pHText) 
				)// Es el texto que sirve de placeholder y se borra
			) {

				return; // El teclado está desactivado
			} 
			
			var el = $firstInput[0];
			var elemnt = $(el);
			var origText = elemnt.text();
			var text = origText;
			var idxCarret = 0;
			while(text.length > 1){
				var lMed	= Math.floor(text.length/2);
				var textIz  = text.substring(0,lMed); 
				var textDer = text.substring(lMed); 
				textIz 	= $('<span>',{text: textIz, 'class' : 'markerSpan'});
				textDer = $('<span>',{text: textDer,'class' : 'markerSpan'});


				elemnt.html('');
				elemnt.append(textIz);
				elemnt.append(textDer);

				elemnt = $(document.elementFromPoint(e.clientX,e.clientY));

				if(el == elemnt[0]){
					idxCarret = origText.length;
					break;
				}

				var esDer = elemnt[0] == textDer[0]; 
				if(esDer){
					idxCarret += textIz.text().length;
				}
				text = elemnt.text();
			}


			//console.log(idxCarret+" La letra sobre el click es : ",elemnt.text());

			$(el).html(origText);

			/*
			var idxCarret = 0;
			if(document.selection){ //IE Support 
				$firstInput.focus();
				var oSel = document.selection.createRange();
				oSel.moveStart('character',-txt.lenght);
				idxCarret = oSel.text.lenght;
				console.log("FUE IE : ",oSel,idxCarret);
			} else {
				var s = window.getSelection();

				var range		= s.getRangeAt(0);
				var node		= s.anchorNode;
				var txtFocus	= s.focusNode.data;
				var offSet 		= s.anchorOffset;


				console.log("Que tenemos ", s,range);
				alert("Que tenemos "+
					"\n RANGE \t : "+range+
					"\n NODE \t : "+node+
					"\n TXTFOCUS \t : "+txtFocus+
					"\n TXT : \t "+txt+
					"\n Offset \t : " +offSet);
				idxCarret 	= txt.indexOf(txtFocus)+offSet;
			}
			*/
			jsKeyboard.currentElementCursorPosition = idxCarret;
			jsKeyboard.updateCursor();
		});

		// MArcamos que lo procesamos 
		$firstInput.addClass(pClass);
		
		/**
			ADD AUDIO FX
		*/
		var $keyboardElemnt =  $("#" + jsKeyboard.keyboardLayout);
		var $keys = $('div.key',$keyboardElemnt); 
		var audioEle = 
			'<audio>'+
				'<source src="audio/keyboard/write.mp3" type="audio/mp3">'+
				'<source src="audio/keyboard/write.wav" type="audio/wav">'+
			'</audio>';
		audioEle = $(audioEle).get(0);
		var playSound = function(urlSound){
			var fx = new Audio();
			fx.src = urlSound;
			fx.play();
			fx.onended = function(){delete(fx)};
		};

		$keys.each(function(idx,element){
			var fxURL = '';
			var $ele = $(element);
			
			if($ele.hasClass('key_del')){
				fxURL = 'audio/keyboard/supr.mp3';
			} else if($ele.hasClass('key_enter')){
				fxURL = 'audio/keyboard/enter.mp3';
			} else {
				fxURL = 'audio/keyboard/write.mp3';
			}

			$ele.on('mousedown',function(){
				var tt = $(this).closest('div.button');
				if(!tt.hasClass('disabled')){
					playSound(fxURL);
					$ele.blur();
				}
			});

			$ele.on('mouseleave',function(e){
				var $btn = $(e.target);
			});

		});
	}

	jsKeyboard.currentElement = $firstInput;
	jsKeyboard.currentElementCursorPosition = 0;
}