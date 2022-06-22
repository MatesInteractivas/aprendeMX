
var FEEDBACK = {
		
	player_1: {
		win:'Terminaste de armar el párrafo y ... ¡ganaste el primer tiempo! <br />Sigue con la tercera candidata.',
		lose:'¡Felicidades, terminaste el párrafo! Pero... ¡perdiste la cáscara! <br />Aún tienes una oportunidad contra la tercera candidata.',
		tie:'¡Felicidades! Terminaste bien el párrafo, pero... ¡hubo un empate! <br />Tienes otra oportunidad para ganar contra la tercera candidata.'
	},
	player_2: {
		win:'¡Lograste armar la tercera descripción y ... ganaste el segundo tiempo! <br />¡Bien! Ya podemos regresar al <em>chat</em>.',
		lose:'¡Completaste correctamente la última descripción! ¡Bien hecho! <br />Sin embargo, en el fut te ganaron... <br />Ni modo, se trata de jugar, no de ganar. Sigamos dialogando...',
		tie: '¡Empataron! <br />Pero tú ganaste por armar la descripción. ¡Bien hecho!  <br /> Ya podemos regresar al <em>chat</em>.'
	},
	error: [
		'Para poder anotar, fíjate en lo siguiente: <ul>\
		<li>Empieza con las fortalezas.</li>\
		<li>Agrega una <strong>coma</strong> después de los conectores que la requieren.</li>\
		<li>Termina las oraciones con un <strong>punto final</strong>.</li></ul>',
		'También asegúrate de usar los conectores adecuados según la relación que se necesita expresar. Por ejemplo, las dos fortalezas se deben unir mediante algún conector de adición. Luego, para contrastarlas con las debilidades, emplea un conector de oposición o contraste.',
		'Veo que te está costando trabajo.<br><br>Puedes presionar esta pestaña: <img src="../../img/dialogo/thumbsMicromundos/cap2_mariaElena.png" /> en la parte de arriba para volver a leer el párrafo que redactamos juntos.\
	          Fíjate bien en su estructura, incluyendo los conectores, las comas y los puntos finales.\
	          Luego regresa aquí y construye este párrafo siguiendo el ejemplo de María Elena.'
	],
	playerIncomplete: 'Aún no has terminado de construir el párrafo completo.'
	
};


var mwOptions = {
	feedback : FEEDBACK,
	status: {
		claudia: {
			name: 'Claudia',
			solved: false,
			options: {
				s1: {
					text: 'Su capacidad goleadora es excelente',
					type: 'sentence'
				},
				s2: {
					text: 'Tiene una excelente habilidad con el balón',
					type: 'sentence'
				},
				s3: {
					text: 'Su condición física es sólo aceptable',
					type: 'sentence'
				},
				s4: {
					text: 'No corre muy rápido',
					type: 'sentence'
				},
				c1: {
					text:'Sin embargo',
					type: 'connector'
				},
				/*c2: {
					text:'En cambio',
					type: 'connector'
				},
				c3: {
					text:'Además',
					type: 'connector'
				},*/
				c4: {
					text:'Asimismo',
					type: 'connector'
				},
				c5: {
					text:'y',
					type: 'conj',
					repeat: 'p1'
				},
				p1: {
					text:',',
					type: 'punct'
				},
				p2: {
					text:'.',
					type: 'punct',
					nextUpper: true
				}
			},
			
			paths: {
				common: ['s1|s2'],
				p1: ['c5','s1|s2','p2','c1|c2','p1','s3|s4','c5','s3|s4','p2'],
			        p2: ['p2','c3|c4','p1','s1|s2','p2','c1|c2','p1','s3|s4','c5','s3|s4','p2']
			},
			
			solutionPaths: {
				'A': {opts: ['s1|s2'], next:['B1', 'B2']},
				'B1': {opts: ['c5','s1|s2','p2','c1|c2','p1','s3|s4'], next:['C1', 'C2']},
				'C1': {opts: ['c5','s3|s4','p2'], next:null},
				'C2': {opts: ['p2','c3|c4','p1','s3|s4','p2'], next:null},
				'B2': {opts: ['p2','c3|c4','p1','s1|s2','p2','c1|c2','p1','s3|s4'], next:['C3', 'C4']},
				'C3': {opts: ['c5','s3|s4','p2'], next:null},
				'C4': {opts: ['p2','c3|c4','p1','s3|s4','p2'], next:null}
				
			}
		},
		ana: {
			name: 'Ana María',
			solved: false,
			options: {
				s1: {
					text: 'Tiene una excelente condición física',
					type: 'sentence'
				},
				s2: {
					text: 'Corre muy rápido',
					type: 'sentence'
				},
				s3: {
					text: 'Su capacidad goleadora es sólo aceptable',
					type: 'sentence'
				},
				s4: {
					text: 'Su habilidad con el balón es mediana',
					type: 'sentence'
				},
				/*c1: {
					text:'Sin embargo',
					type: 'connector'
				},*/
				c2: {
					text:'En cambio',
					type: 'connector'
				},
				c3: {
					text:'Además',
					type: 'connector'
				},
				/*c4: {
					text:'Asimismo',
					type: 'connector'
				},*/
				c5: {
					text:'y',
					type: 'conj',
					repeat: 'p1'
				},
				p1: {
					text:',',
					type: 'punct'
				},
				p2: {
					text:'.',
					type: 'punct',
					nextUpper: true
				}
			},
			
			paths: {
				common: ['s1|s2'],
				p1: ['c5','s1|s2','p2','c1|c2','p1','s3|s4','c5','s3|s4','p2'],
			    p2: ['p2','c3|c4','p1','s1|s2','p2','c1|c2','p1','s3|s4','c5','s3|s4','p2']
			},
			
			solutionPaths: {
				'A': {opts: ['s1|s2'], next:['B1', 'B2']},
				'B1': {opts: ['c5','s1|s2','p2','c1|c2','p1','s3|s4'], next:['C1', 'C2']},
				'C1': {opts: ['c5','s3|s4','p2'], next:null},
				'C2': {opts: ['p2','c3|c4','p1','s3|s4','p2'], next:null},
				'B2': {opts: ['p2','c3|c4','p1','s1|s2','p2','c1|c2','p1','s3|s4'], next:['C3', 'C4']},
				'C3': {opts: ['c5','s3|s4','p2'], next:null},
				'C4': {opts: ['p2','c3|c4','p1','s3|s4','p2'], next:null}
				
			}
		}
	}
};

var defaultText = 'María Elena tiene once años y cuatro jugando futbol. Es la más rápida de las tres candidatas. Además, tiene una excelente condición física. Su capacidad goleadora es buena, pero su habilidad con el balón es sólo aceptable. ';

function MWMain(id,options){
	
	this.mwId = id;
	this.settings = $.extend({}, options);
	this.playerWindows = {};
	this.currentStatus = {
			playersCompleted : 0
	};
}

MWMain.prototype = {
		init:function(){
			
			this.getMwSettings('cap2_mariaElena');
			
			this.overlay = $('.js-overlay').addClass('e-oculto');
			this.feedbackWindow = $('.js-vntn-feedback');
			
			var _this = this;
		    
		    		    
			this.initWindows();
			this.prepareSounds();
		    
			$('.js-player-data').on('click', function(){
			    $('.js-vntn-player[data-player="'+$(this).data('player')+'"]').removeClass('e-oculto');
			    $('.js-marcador[data-player="'+$(this).data('player')+'"]').removeClass('e-oculto');
			    $('.js-portera[data-player="'+$(this).data('player')+'"]').removeClass('e-oculto');
			    _this.initOptions($(this).data('player'));
			})

			$('.js-btn-finish').on('click', function(){
				    _this.verifyCompleted();
			    });
	    
		},
		
		initWindows: function(){
			var _this = this;
			// init windows
		    var vntns = $('.vntn').addClass('e-oculto');
		    var vtn;
		    for(var i=0; i<vntns.length; i++){
		    	 vtn = $(vntns.get(i));
		    	
		    	var closeBtn = $('<button class="vntn--btn-cerrar">X</button>');
		    	closeBtn.on('click', function(){
		    		
		    		//Verify player finished
		    		var vtn = $(this).closest('.vntn');
		    		if(vtn.hasClass('js-vntn-player') && vtn.data("started")!=null && !_this.verifyPlayerFinished(vtn.data('player'))){
		    			_this.showFeedback(_this.settings.feedback.playerIncomplete, "");
		    			return;
		    		}
		    		
		    		vtn.addClass('e-oculto');
		    		_this.overlay.addClass('e-oculto');
		    		if(vtn.hasClass('js-vntn-player')){
					var name = vtn.data('player');
					$('.js-marcador[data-player="'+name+'"]').addClass('e-oculto');
					$('.js-portera[data-player="'+name+'"]').addClass('e-oculto');
				}
		    	});
		    	vtn.append(closeBtn);
		    	
		    	var player = vtn.data('player');
		    	if(vtn.hasClass('vntn-player')){
		    		this.playerWindows[player] = vtn;
		    		
		    		//Init currentStatus
					if(this.currentStatus[player]==null && this.settings.status[player]!=null){
						this.initPlayerStatus(player);
					}
		    	}
		    }
		    
		    $('.js-btn-instr').on('click', function(){
				$('.js-instrucciones').removeClass('e-oculto');
				_this.overlay.removeClass('e-oculto');
			});
		},
		
		verifyCompleted: function(){
			
			
				this.finishExercise();
				return;
			
			
			
			
		},
		
		showSolution: function(){
	
			
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
			
			alert("Exercise complete");
		},
		
		initOptions: function(playerName){
			
			var vntnPlayer = $('.js-vntn-player[data-player="'+playerName+'"]');
			
			if(vntnPlayer.find('.js-options').length > 0){
				return;
			}
			
			var _this = this;
			var optionsDiv = $('<div class="js-options options"></div>');
			
			if(this.settings.status[playerName]){
				var options = this.settings.status[playerName].options;
				
				var optionSpan = $('<span class="option"></span>');
				var currOptSpan;
				var currOpt;
				for(var opt in options){
					currOpt = options[opt];
					currOptSpan = optionSpan.clone();
					currOptSpan.append(currOpt.text);
					
					currOptSpan.data('active', true);
					currOptSpan.data('type', currOpt.type);
					currOptSpan.data('id', opt);
					currOptSpan.data('player', playerName);
					
					currOptSpan.on('click', function(){
						var thisOption = $(this);
						//_this.verifyAnswer(thisOption);
						_this.verifyAnswer(thisOption);
					});
					optionsDiv.append(currOptSpan);
				}
				
				
				var scoreDiv = $('<div class="player--score"></div>');
				var scoreElems = '<div class="player-score" data-player="'+playerName+'"><span class="score js-player-score" data-player="'+playerName+'">0</span>'+this.settings.status[playerName].name+'</div>'+
					'<div class="your-score" data-player="you">Tú <span class="score js-your-score">0</span></div>';
				scoreDiv.append(scoreElems);
				
				$('.js-marcador[data-player="'+playerName+'"]').append(scoreDiv);
				
				vntnPlayer.append(optionsDiv);
			}
		
		},
		
		/*New sol */
		verifyAnswer: function(option){
			var player = option.data('player');
			
			//Mark interaction
			var vntnPlayer = $('.js-vntn-player[data-player="'+player+'"]');
			console.log(vntnPlayer);
			if(vntnPlayer.data("started")==null){
				console.log("Set started : "+vntnPlayer.data("started"));
				vntnPlayer.data("started", "true");
				console.log("Set started : "+vntnPlayer.data("started"));
			}
			
			//Init currentStatus
			if(this.currentStatus[player]==null){
				this.initPlayerStatus(player);
			}
			
			var playerStatus = this.currentStatus[player];
			var optionData = this.settings.status[player].options[option.data('id')];
			var optionId = option.data('id');
			
			console.log(playerStatus);
			//Get solutionPath
			var currPath = playerStatus._currPath;
			console.log(currPath);
			var isFinalPath = this.settings.status[player].solutionPaths[playerStatus._currPathId].next==null;
			console.log("Final path ? "+isFinalPath);
			
			var currentOptions = currPath[currPath.length-1];
			console.log("last ("+(playerStatus.step-1)+")? "+(playerStatus.step-1 < currPath.length));
			//Verify is last in currPath
			var optionPath = null;
			var setPath = false;
			if(playerStatus.step-1 < currPath.length){
				
				currentOptions = currPath[playerStatus.step-1];
				
			} else {
				console.log("get next OPts");
				//Last in currPath, then verify if its finalPath
				if(!isFinalPath){
					
					currentOptions = [];
					optionPath = [];
					setPath = true;
					var nextPaths = this.settings.status[player].solutionPaths[playerStatus._currPathId].next;
					for(var i=0; i< nextPaths.length; i++ ){
						console.log(nextPaths[i] + " :::: "+this.settings.status[player].solutionPaths[nextPaths[i]].opts);
						currentOptions.push(this.settings.status[player].solutionPaths[nextPaths[i]].opts[0]);
					}
				}
				
			}
			
			console.log("CurrentOptions : "+ currentOptions);
			
			//Verify option correct
			if(currentOptions.indexOf(optionId)>=0){
				playerStatus.gf++;
				playerStatus.lastGoal = 'tu';
				
				this.addSentence(optionData.text, player, option.data('type')=='punct');
				
				if(['punct', 'conj'].indexOf(option.data('type')) < 0){
					option.off('click');
					option.data('active', false);
					option.addClass('e-inactivo');
				}
				
				
				if(setPath){
					var idx = currentOptions.indexOf(optionId);
					var newPath = this.settings.status[player].solutionPaths[playerStatus._currPathId].next[idx];
					
					console.log("ADD PATH : "+ newPath +" --> "+this.settings.status[player].solutionPaths[newPath].opts);
					
					playerStatus._currPathId = newPath;
					playerStatus._currPath = playerStatus._currPath.concat(this.settings.status[player].solutionPaths[playerStatus._currPathId].opts); 
				}
				
				playerStatus.step++;
				
			} else {
				
				playerStatus.gc++;
				playerStatus.lastGoal = 'oponente';
				if(playerStatus.gc==2){
					$('.vntn--contenido',this.feedbackWindow).html(this.settings.feedback.error[0]);
					this.feedbackWindow.removeClass('e-oculto');
				} else
				if(playerStatus.gc==4){
					$('.vntn--contenido',this.feedbackWindow).html(this.settings.feedback.error[1]);
					this.feedbackWindow.removeClass('e-oculto');
				} else
				if(playerStatus.gc==6){
					$('.vntn--contenido',this.feedbackWindow).html(this.settings.feedback.error[2]);
					this.feedbackWindow.removeClass('e-oculto');
				}
				
				

			}
			
			this.updateScore(player);
			
			
			console.log("Finished? "+this.verifyPlayerFinished(player));
			if(this.verifyPlayerFinished(player)){
				this.disableOptions(player);
				this.playerFinished(player);
			}
						
		},
		
		verifyPlayerFinished: function(player){
			
			console.log("verifyNewSol : "+player);
			var playerStatus = this.currentStatus[player];
			//Get solutionPath
			var currPath = playerStatus._currPath;
			var isFinalPath = this.settings.status[player].solutionPaths[playerStatus._currPathId].next==null;
			console.log("Final path ? "+isFinalPath +" , step: "+(playerStatus.step-1)+" / "+currPath.length);
			
			if(isFinalPath && playerStatus.step-1 == currPath.length){
				return true;
			}
			
			return false;
		},
		
		/*end new sol*/
		
		initPlayerStatus: function(playerName){
			this.currentStatus[playerName] = {
					path: -1,
					step: 1,
					commonPathEnded: false,
					gf: 0,
					gc: 0,
					nextUpper: true,
					completed: false,
					lastGoal: "tu/oponente",
					//Added
					_currPathId: 'A',
					_currPath : [].concat(this.settings.status[playerName].solutionPaths['A'].opts)
						
				};
		},
		
		disableOptions: function(playerName){
			var opts =  $('.js-vntn-player[data-player="'+playerName+'"]').find('.option');
			opts.off('click').addClass('e-inactivo');
		},
		
		playerFinished: function(playerName){
			
			var _this = this;
			
			var playerStatus = this.currentStatus[playerName];
			playerStatus.completed = true;
			this.currentStatus.playersCompleted++;
			
			//Second player add message to chat
			var messageClick = function(evt){
				_this.gotoNextQuestion(1000);
				$(this).off('click', messageClick);
				var txtClaudia = $('.js-vntn-player[data-player="claudia"] .vntn-player--text').text().replace(/,/g,"__");
				var txtAnaMaria = $('.js-vntn-player[data-player="ana"] .vntn-player--text').text().replace(/,/g,"__");
				_this.addMwSettings('txtClaudia',txtClaudia);
				_this.addMwSettings('txtAnaMaria',txtAnaMaria);
			};
			if(this.currentStatus.playersCompleted == 2){
				this.feedbackWindow.find('.vntn--btn-cerrar').on('click', messageClick);
			}
		
			
			if(playerStatus.gf > playerStatus.gc){
				this.showFeedback(this.settings.feedback['player_'+this.currentStatus.playersCompleted].win, true);
				return;
			}
			
			if(playerStatus.gf < playerStatus.gc){
				this.showFeedback(this.settings.feedback['player_'+this.currentStatus.playersCompleted].lose, false);
				return;
			}
			
			this.showFeedback(this.settings.feedback['player_'+this.currentStatus.playersCompleted].tie, false);
			
		},
		
		
		messageToChatOnClose: function(messageToChat){
			
		},
		
		addSentence: function(sentence, playerName, isPunct){
			var sentenceSpan = $('<span class="sentence e-added"></span>');
			var fisrtLetter = sentence.substring(0,1);
			var rest = sentence.substring(1);
			
			if(!isPunct){
				sentenceSpan.append(" ");
			}
			
			//Make lowercase, not only with style
			fisrtLetter = fisrtLetter.toLowerCase();
			sentenceSpan.append('<span class="first lower">'+fisrtLetter+'</span>'+rest);
			var playerStatus = this.currentStatus[playerName];
			if(playerStatus.nextUpper){
				sentenceSpan.find('.first').removeClass('lower').
					html(fisrtLetter.toUpperCase());
			}
			
			playerStatus.nextUpper = false;
			if(isPunct && sentence=='.'){
				playerStatus.nextUpper = true;
			}
			
			var promptSpan = this.playerWindows[playerName].find('.js-prompt');
			
			promptSpan.before(sentenceSpan);
		},
		
		updateScore: function(playerName){
						
			var playerStatus = this.currentStatus[playerName];
			//var playerWindow  = $('.js-vntn-player[data-player="'+playerName+'"]');
			var playerWindow  = $('.js-marcador[data-player="'+playerName+'"]');
			
			playerWindow.find('.js-player-score').html(playerStatus.gc);
			playerWindow.find('.js-your-score').html(playerStatus.gf);
			
			this.animarBalon(playerStatus.lastGoal);
			
		},
		
		animarBalon: function(goleador){
			var _this = this;
			var $balon = $('.balon');
			_this.playSound(goleador);
			if(goleador=='tu'){
				$balon.removeClass('e-desplazar');
				$balon.css('left',505);
				setTimeout(function(){
					$balon.addClass('e-desplazar');
					$balon.css('left',40);
				},300);
				return;
			}
			
			$balon.removeClass('e-desplazar');
			$balon.css('left',50);
			setTimeout(function(){
				$balon.addClass('e-desplazar');
				$balon.css('left',530);
			},300);
			
		},
		
		prepareSounds: function(){
			
			this.sound1 = document.createElement('audio');
			this.sound1.setAttribute('id','soundTu');
			var source = document.createElement('source');
			source.setAttribute('src','audio/tu.mp3');
			source.setAttribute('type','audio/mpeg');
			this.sound1.appendChild(source);
			this.sound1.load();
			
			this.sound2 = document.createElement('audio');
			this.sound2.setAttribute('id','soundOp');
			var source = document.createElement('source');
			source.setAttribute('src','audio/oponente.mp3');
			source.setAttribute('type','audio/mpeg');
			this.sound2.appendChild(source);
			this.sound2.load();
		},
		
		playSound: function(goleador){
			if(goleador=='tu' && this.sound1){
				this.sound1.play();
			} else
			if(goleador=='oponente' && this.sound2){
				this.sound2.play();
			}
		},
		
		
		// COMUNICACIÓN CHAT
		gotoNextQuestion: function(delay){
			setTimeout(function(){
				var padre = window.parent;
				var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: this.mwId } };
				padre.postMessage(mensajeTipoSet, "*");	
			},delay);
		},
		
		addMwSettings: function(name,value){
			//alert('setting name: '+name+'& value: '+value);
			var padre = window.parent;
			var mensajeTipoSet = { command: "addMicroworldSettings", params: {id: this.mwId, name: name, value: value } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		getMwSettings:function(target){
			var padre = window.parent;
			var mensajeTipoSet = { command: "getMicroworldSettings", params: {id: this.mwId, targetId: target, src: 'mw' } }; //src = mw/chat
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		disableChat: function(){
			var mensajeTipoSet = {
				command: "disableChat", 
				params: { 
					id: this.mwId
				}
			};
			var padre = window.parent;
			padre.postMessage(mensajeTipoSet, "*");
		}

};

var mwId = 'cap3_duelo';
var mwMain = new MWMain(mwId,mwOptions);

$(document).ready(function(){
	
	mwMain.init();
	
	var padre = window.parent;
				
	var mensajeTipoSet = { command: "getUserAvatar", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");

	mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");
	
});

window.addEventListener("message", receiveMessage, false);
			
function receiveMessage(evt) {
// mensaje tipo set
	if (evt.data && evt.data.type === "set") {
		if(evt.data.name=="userAvatar"){
			$('.js-alumno').attr('src','../../img/alumno/' + evt.data.value + '.png');
		} else
		 if(evt.data.name=="microworldSettings"){
			var arr = evt.data.value.match(/txtMariaElena:[\s]*[a-z-áéíóúüñ_,\.\s]+(,txt)?/i);
			if(arr && arr.length>0){
				var str = arr[0];
				str = str.replace(/[,\s]?(txtMariaElena)[:\s]?/g,"");
				str = str.replace(/__/g,",");
				$('.js-vntn-player[data-player="elena"] p').html(str);
			}
                } else
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				//lo que se tenga que hacer en este mm cuando NO hay historial
				//$('.js-vntn-player[data-player="elena"] p').html(defaultText);
			} else {
				//lo que se tenga que hacer con base en historial
				//lo que se tenga que hacer con base en historial
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='' && pair[1]==''){
						//$('#next').addClass('e-inactivo');
					}
				}
			}
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		}
	}
}


