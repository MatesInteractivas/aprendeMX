/*
 * Requirements:
 * 	+ JQuery
 * 	+ stringjs
 */
 //12/02/2015 Mario H.

function WordWrapper(fromJqElement, intoJqElement, options){
	this.scrJqElement = fromJqElement;
	this.targetJqElement = intoJqElement;
	this.totalWords = 0;
	this.settings = WordWrapper.DEFAULT_SETTINGS;

	$.extend(this.settings, options);
}

//Constants
WordWrapper.DEFAULT_SETTINGS = {
	wordClassName : "word",
	customDataAttrName : "word",
	wrapperElementName: "span",
	punctuationClass: "punct",
	signArray: ['¿', '¡', '(', '“']
}; 

//Functions
WordWrapper.prototype = {
		init: function(){
			this.processElement(this.scrJqElement, this.targetJqElement);
		},

		processElement: function(jqElementToProcess, jqTargetElement){
			var _this = this;
			var currStr;
			var currWordArray;
			var currWord;

			if(jqElementToProcess.length <=0 || jqTargetElement.length <= 0){
				return;
			}

			var newJqElem= $("<"+jqElementToProcess.get(0).tagName+" />");
			
			//obtiene los atributos y los asigna
			$(jqElementToProcess[0].attributes).each(function(index) {
				newJqElem.attr(this.nodeName, this.value);
			});
			
			jqTargetElement.append(newJqElem);
			
			var currW = "";
			var currLetter = "";
			var endWithPunct = false;
			var currEndPunct = null;
			var currInitPunct = null;
			
			jqElementToProcess.contents().each(function(index, domElem){
				// Is TextNode
				if ($(domElem).hasClass('resetCount')) {
					_this.totalWords = 0;
				}

				if (domElem.nodeType==3) {
					currStr = S($(domElem).text()).trim().collapseWhitespace();
					
					//Not empty
					if (!currStr.isEmpty()) {
						currWordArray = currStr.split(" ");
			
						// is TEXT
						//Append every word
						for (var i=0; i<currWordArray.length; i++) {
							endWithPunct = false;
							currEndPunct = null;
							currInitPunct = null;
							
							//separate init or final punctuation
							currW = S(currWordArray[i]);
							
							if (currW.isAlphaNumeric()) { //es una palabra normal
								currWord = _this.wrapWord(currW.s, true);
								newJqElem.append(currWord);
								_this.totalWords++;
									
							} else {
								if (currW.s.length==1) {
									if (_this.settings.signArray.indexOf(currW.s)<0) {
										_this.prevWordRtrim(jqTargetElement);
									}
									
									newJqElem.append(_this.wrapWord(currW.s, _this.signWithSpace(currW.s)).addClass(_this.settings.punctuationClass));
									_this.totalWords++;
								} else {
									var initPunctData = _this.removeInitPuntuation(currW.s);
									var endPunctData = _this.removeEndPuntuation(initPunctData.word);
									var wordNotPunct = endPunctData.word;
									
									for (var j=0; j<initPunctData.signs.length; j++) {
										newJqElem.append(_this.wrapWord(initPunctData.signs[j], _this.signWithSpace(initPunctData.signs[j])).addClass(_this.settings.punctuationClass));
										_this.totalWords++;
									}
	
									if (wordNotPunct.length>0) {
										newJqElem.append(_this.wrapWord(wordNotPunct, true));
										_this.totalWords++;
									}
									
									for (var j=0; j<endPunctData.signs.length; j++) {
										_this.prevWordRtrim(jqTargetElement);
										newJqElem.append(_this.wrapWord(endPunctData.signs[j], _this.signWithSpace(endPunctData.signs[j])).addClass(_this.settings.punctuationClass));
										_this.totalWords++;
									}									
								}
							} // if
						} // for			
					}// !currStr.isEmpty
				} else { // NodeType==3
					// is ELEMENT
					_this.processElement($(domElem), newJqElem);
				}
			}); //.contents.each	
		}, // processElement
		
		removeInitPuntuation:function(word) {
			var returnData = {'signs':[], 'word':''};
			var sword = S(word).trim().collapseWhitespace(); 
			
			while (sword.s.length>0 && !S(sword.s.charAt(0)).isAlphaNumeric()) {
				returnData.signs.push(sword.left(1).s);
				sword = S(sword.s.substring(1));
			}
			
			returnData.word = sword.s;
			
			return returnData;
		},
		
		removeEndPuntuation:function(word) {
			var returnData = {'signs':[], 'word':''};
			var sword = S(word).trim().collapseWhitespace();
			
			while (sword.s.length>0 && !S(sword.s.charAt(sword.s.length-1)).isAlphaNumeric()) {
				returnData.signs.unshift(sword.right(1).s);
				sword = S(sword.s.substring(0, sword.s.length-1));
			}
			
			returnData.word = sword.s;
			
			return returnData;
		},
		
		prevWordRtrim:function(targetElement) {
			var prevWord = targetElement.find('[data-'+ this.settings.customDataAttrName + '="'+(this.totalWords-1)+'"]');

			if (prevWord.length > 0) {
				prevWord.html(S(prevWord.html()).trimRight().s);
			}
		},
		
		signWithSpace:function(sign) {
			if (this.settings.signArray.indexOf(sign)>=0) {
				return false;
			}
			
			return true;
		},
		
		wrapWord:function(word, withSpace) {
			var space = '';
			
			if (withSpace!=null && withSpace == true) {
				space = ' ';
			}
			
			return $('<'+this.settings.wrapperElementName+
					' class="'+this.settings.wordClassName+'" '+
					' data-'+this.settings.customDataAttrName+'="'+
					this.totalWords+'" >'+
						word+space+
				'</'+this.settings.wrapperElementName+'>');
		},
} //WordWrapper.prototype
