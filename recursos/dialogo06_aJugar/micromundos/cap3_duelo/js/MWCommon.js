function MWCommons(mwId, data){
	this.id = mwId;
	this.data = data;
	this.parentWindow = window.parent;
}

MWCommons.prototype = {
	sendMWReady:function(){
		var _this = this;
		var readyMessage = {
			command: "microworldReady", 
			params: {id: _this.id }
		};
		this.sendMessage(readyMessage)
	},
	
	sendMessage:function(messageObject){
		if(this.parentWindow){
			this.parentWindow.postMessage(messageObject, "*");
		}
		
	}
};
