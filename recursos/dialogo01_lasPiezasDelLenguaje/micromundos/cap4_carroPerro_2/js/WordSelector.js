/*
 * Requirements:
 * 	+ JQuery
 * 	+ stringjs
 */

function WordSelector(fromJqElement, intoJqElement, options){
	
	this.scrJqElement = fromJqElement;
	this.targetJqElement = intoJqElement;
	this.totalWords = 0;
	this.currentState = WordSelector.SELECTED_NONE;
	this.currentFirst = -1;
	this.currentLast = -1;
	this.wordWrapper = new WordWrapper(fromJqElement,intoJqElement);
	this.settings = WordSelector.DEFAULT_SETTINGS;
	this.allWords;

	$.extend(this.settings, options);
	
	this.init();
	
}

//Constants
WordSelector.SELECTED_NONE = 0;
WordSelector.SELECTED_FIRST = 1;
WordSelector.SELECTED_COMPLETE = 2;
WordSelector.DEFAULT_SETTINGS = {
	highlightSelectionClass: "highlightSelection",
	multipleSelection: false,
	currentSelectionClass: "highlightSelection",
	continuousSelection: true,
	ignorePunctuationAtEnd: true,
	ignoreAllPunctuation: false,
	selectedWordClass:"selWord",
	onClick:null //Custom click, receive the eventObject & this WordSelector object as parameter
}; 

//Functions
WordSelector.prototype = {
	
		init: function(){
			
			//this.processElement(this.scrJqElement, this.targetJqElement);
			this.wordWrapper.init();
			this.allWords = this.targetJqElement.find("."+this.wordWrapper.settings.wordClassName);
			this.allWords.on('click', $.proxy(this.clickOnWord, this));
			
		},
		
		setCurrentSelectionClass: function(selectionClass){
			if(selectionClass != null){
				this.settings.highlightSelectionClass = selectionClass;
			}
		},
			
		clearSelection:function(selectionClass){
			this.currentState = WordSelector.SELECTED_NONE;
			this.currentFirst = -1;
			this.currentLast = -1;
			
			if(selectionClass != null){
				$("."+selectionClass, this.targetJqElement).removeClass(selectionClass+ " " +this.settings.selectedWordClass);
				return;
			}			
			
			$("."+this.settings.highlightSelectionClass, this.targetJqElement)
				.removeClass(this.settings.highlightSelectionClass+" "+this.settings.selectedWordClass);
			
			this.targetJqElement.find(".highlightFirst").removeClass("highlightFirst");
		},
		
		clearAllSelection:function(){
			this.currentState = WordSelector.SELECTED_NONE;
			this.currentFirst = -1;
			this.currentLast = -1;
		},
		
		highlightSelection: function(selectionClass){
			var swap;
			var from = this.currentFirst;
			var to = this.currentLast;
			if(to < from){
				from = to;
				to = this.currentFirst;
			}
			
			var className = this.settings.highlightSelectionClass;
			if(selectionClass != null){
				className = selectionClass;
			}
	
			for(var i=from; i<=to; i++){
				
				this.allWords.filter('[data-'+this.wordWrapper.settings.customDataAttrName+'="'+i+'"]')
					.addClass(className + " " +this.settings.selectedWordClass)
			}
		},
		
		getSelectionWordRange: function(selectionClass){
			
			
			if(this.currentState != WordSelector.SELECTED_COMPLETE){
				return null;
			}
			
			var resultObject = {};
			var className = this.settings.highlightSelectionClass;
			if(selectionClass != null){
				className = selectionClass;
			}
			
			var _this = this;
			var wr = $("."+className, this.targetJqElement);
			
			return new WordRange(wr, this.wordWrapper.settings.customDataAttrName);
		},
		
		
		getWordRangeIn: function(CSSselector){
			
			var resultObject = {};
			var _this = this;
			var elem = $(CSSselector + " ."+this.wordWrapper.settings.wordClassName, this.targetJqElement);
			
			return new WordRange(elem, this.wordWrapper.settings.customDataAttrName);
			
		},
		
		getWordRangeInElement: function(jqElement){
			
			var resultObject = {};
			var _this = this;
			var elem = jqElement.find("."+this.wordWrapper.settings.wordClassName);
			
			return new WordRange(elem, this.wordWrapper.settings.customDataAttrName);
			
		},
		
		getWordRangeFrom: function(jqElems){
			
			var resultObject = {};
			var _this = this;
			var wr = jqElems;
			
			resultObject[WordSelector.WORD_COUNT] = wr.length;
			resultObject[WordSelector.SELECTION_TEXT] = "";
			var currStr = "";
			var currMin = 10000;
			var currMax = -10000;
			var text = "";
			var currJqElem = null;
			var currWordIndex = null;
			wr.each(function(index, domElem){
				currJqElem = $(domElem);
				currStr = S(currJqElem.text()).trim().collapseWhitespace();
				text += currStr.s + " ";
				currWordIndex = currJqElem.attr("data-"+_this.wordWrapper.settings.customDataAttrName)*1; 
				if( currWordIndex < currMin){
					currMin = currWordIndex;
				}
				
				if( currWordIndex > currMax){
					currMax = currWordIndex;
				}
				
				resultObject[WordSelector.MIN_WORD_INDEX] = currMin;
				resultObject[WordSelector.MAX_WORD_INDEX] = currMax;
				
			});
			
			resultObject[WordSelector.SELECTION_TEXT] += S(text).trim().s;

			return resultObject;
			
		},
		
		getCurrentState: function() {
			return this.currentState;
		},
		
		clickOnWord: function(evt){
			
			
			
			if(this.settings.onClick != null){
				this.settings.onClick(evt, this);
				return;
			}
			
			
			var currTarget = $(evt.currentTarget);
			var wordIndex = currTarget.attr("data-"+this.wordWrapper.settings.customDataAttrName);
			
			
			console.log("CLICKED::::"+$(evt.currentTarget).text()+ "::: "+this.currentState);
			
			switch(this.currentState){
				
				case WordSelector.SELECTED_NONE:
					this.currentFirst = wordIndex * 1;
					this.currentState = WordSelector.SELECTED_FIRST;
					console.log("[data-"+this.wordWrapper.settings.customDataAttrName+"='"+wordIndex+"']");
					console.log(this.targetJqElement.find("[data-"+this.wordWrapper.settings.customDataAttrName+"='"+wordIndex+"']"));
					this.targetJqElement.find("[data-"+this.wordWrapper.settings.customDataAttrName+"='"+wordIndex+"']").addClass("highlightFirst");
				break;
			
				case WordSelector.SELECTED_FIRST:
					this.currentLast = wordIndex * 1;
					this.currentState = WordSelector.SELECTED_COMPLETE;
					
					this.targetJqElement.find(".highlightFirst").removeClass("highlightFirst");
					this.highlightSelection();
				break;
				
				case WordSelector.SELECTED_COMPLETE:
					
					if(this.settings.continuousSelection){
						this.clearSelection();
					}
					
					this.currentFirst = wordIndex * 1;
					this.currentState = WordSelector.SELECTED_FIRST;
					this.targetJqElement.find("[data-"+this.wordWrapper.settings.customDataAttrName+"='"+wordIndex+"']").addClass("highlightFirst");
					
					break;
			}			
			
		}
	
}; //WordSelector.prototype


/*
 * Object to handle selected elements
 */
function WordRange(jqElements, customDataAttrName){
	this.wordCount = 0;
	this.text = "";
	this.minWordIndex = 0;
	this.maxWordIndex = 0;
	
	this.ignorePunctuation = true;
	
	this.customDataAttrName = customDataAttrName;
	this.elements = jqElements;
	
	this.init(jqElements);
}

WordRange.prototype = {
	init:function(jqElements){
		
		this.wordCount = jqElements.length;
		var _this = this;
		
		var currStr = "";
		var currMin = this.wordCount>0?10000:0;
		var currMax = this.wordCount>0?-10000:0;
		var text = "";
		var currJqElem = null;
		var currWordIndex = null;
		var totalElems = jqElements.length; 
		jqElements.each(function(index, domElem){
			currJqElem = $(domElem);
			currStr = S(currJqElem.text()).trim().collapseWhitespace();
			text += currStr.s + " ";
			currWordIndex = currJqElem.attr("data-"+_this.customDataAttrName)*1; 
			
			
			// Verify without punctuation
			if( (index==0 || index==totalElems -1) && 
					currJqElem.hasClass("punct") &&
					_this.ignorePunctuation ){

				return;
			}
			
			if( currWordIndex < currMin){
				currMin = currWordIndex;
			}
			
			if( currWordIndex > currMax){
				currMax = currWordIndex;
			}

		});
		
		_this.minWordIndex = currMin;
		_this.maxWordIndex = currMax;
		
		_this.text += S(text).trim().s;
	},
	
	compareByText:function(otherWordRange){
		
		if(this.text == otherWordRange.text){
			return true;
		}
		return false;
		
	},
	compareByIndex:function(otherWordRange){
		
		var equal = false;
		
		if(this.minWordIndex == otherWordRange.minWordIndex &&
				this.maxWordIndex == otherWordRange.maxWordIndex ){
			return true;
		}
		
		return false;
		
	},
	
	containsRange:function(otherWordRange){
		
		var equal = false;
		
		if(this.minWordIndex <= otherWordRange.minWordIndex &&
				this.maxWordIndex >= otherWordRange.maxWordIndex ){
			return true;
		}
		
		return false;
		
	},
	
	getText: function(){
		return this.text;
	},
	
	getMinIndex: function(){
		return this.minWordIndex;
	},
	
	getMaxIndex: function(){
		return this.maxWordIndex;
	},
	
	toString:function(){
		return "[WR :"+this.text+"\n "+
			this.minWordIndex+"->"+this.maxWordIndex+"\n"+
			this.wordCount+"]";
	}
};