var clicked = [];
var inicio = true;
var info = 'descripcionMas';

var rondaElim = 0;
var nElim = 0;
var activeDst = "";

var deseosOrdered = [];
var mwId = 'cap3_mapa';
var rebuilding = false;
var rebuildSettings = {
	tamasopo: [],
	real14: [],
	zacatecas: []
}

var destinos = {
        
        aguascalientes: {
                nombre: 'Aguascalientes',
                descripcion: 'Ciudad capital del estado de Aguascalientes. Conocida por su Feria Nacional de San Marcos y sus balnearios.',
                _x: 24,
                _y: 272,
                posInfo: [86,35],
                posCruz: [50,37],
                eliminar: 1
        },
        guadalajara: {
                nombre: 'Guadalajara',
                descripcion: 'Capital del estado de Jalisco y segunda ciudad más grande de nuestro país. Fundada en la época colonial, en el año 1532.',
                _x: 1,
                _y: 472,
                posInfo: [55,0],
                posCruz: [94,2],
                posDist: [56,232],
                posCosto: [52,300],
                eliminar: 3
        },
        guanajuato: {
                nombre: 'Guanajuato',
                descripcion: 'Capital del estado de Guanajuato. Ciudad universitaria con una intensa vida cultural, famosa por el Cervantino, un festival con artistas de distintos lugares del mundo.',
                _x: 241,
                _y: 411,
                posInfo: [84,40],
                posCruz: [4,42],
                eliminar: 1
        },
        lagosDeMoreno: {
                nombre: 'Lagos de Moreno',
                descripcion: 'Hermosa ciudad ubicada en la región de Los Altos de Jalisco. Fue declarada Patrimonio Cultural de la Nación en 1989.',
                _x: 49,
                _y: 362,
                posInfo: [190,30],
                posCruz: [190,-2],
                eliminar: 1
        },
        queretaro: {
                nombre: 'Santiago de Querétaro',
                descripcion: 'Capital del estado de Querétaro, célebre por su importante papel en la historia de México y su monumental acueducto.',
                _x: 257,
                _y: 472,
                posInfo: [180,25],
                posCruz: [215,27],
                eliminar: 1
        },
        real14: {
                nombre: 'Real de Catorce',
                descripcion: 'Pequeño pueblo minero y lugar sagrado para los indígenas huicholes. Recién declarado "pueblo mágico".',
                descripcionMas: '<p><span class="forjado context">Real de Catorce es un pueblo <span class="forjado word">forjado</span> a partir de la riqueza minera y la cultura de los indígenas huicholes.</span> Hace algún tiempo fue declarado “pueblo mágico”.</p>\
		<p>La magia comienza al entrar al Túnel de Ogarrio, el único acceso a este pueblo de piedra. En sus calles angostas y empinadas hay tiendas, galerías y locales con diversas artesanías típicas de la región. Además <span class="cabuches context">hay una variedad de guisos tradicionales, como los tacos de <span class="cabuches word">cabuches</span></span>.</p>\
		<p><span class="peregrinar context">Cientos de turistas llegan</span> para explorar las ruinas, pasear a caballo, disfrutar de los cielos nocturnos con millones de estrellas o <span class="peregrinar context">para <span class="peregrinar word">peregrinar</span> a Wirikuta, la tierra sagrada de los huicholes.</span></p>',
                _x: 299,
                _y: 11,
                posInfo: [-16,40],
                posCruz: [70,42],
                posDist: [297,80],
                posCosto: [297,80],
                eliminar: 0
        },
        SLP: {
                nombre: 'San Luis Potosí',
                descripcion: 'Ciudad capital del estado de San Luis Potosí. Es una importante ciudad industrial localizada en una rica región agrícola, ganadera y minera.',
                _x: 307,
                _y: 227,
                posInfo: [54,40],
                posCruz: [94,42],
                eliminar: 4
        },
        tamasopo: {
                nombre: 'Tamasopo',
                descripcion: 'Municipio pequeño con un balneario natural, ubicado en las faldas de la Sierra Madre Oriental.',
                descripcionMas: '<p><span class="balneario context">En el <span class="balneario word">Balneario</span> de las Cascadas de Tamasopo, todo es tranquilidad. <span class="contemplar context">Uno puede <span class="contemplar word">contemplar</span> las tres caídas de agua durante horas, es una maravilla de la naturaleza</span>.</span></p>\
				<p>El sitio es ideal para disfrutar unas vacaciones relajadas en plena naturaleza, <span class="faldas context"><span class="faldas word">en las faldas de</span> la Sierra Madre Oriental</span>, ¡con una alberca cien por ciento natural!</p>\
				<p>Hay una zona para acampar, donde se puede disfrutar de la sombra que proporcionan los árboles frutales que ahí se encuentran. También hay un pequeño restaurante de comida casera. En el pueblo, hay un buen hotel y una posada.</p>',
                _x: 491,
                _y: 263,
                posInfo: [0,35],
                posCruz: [85,37],
                posDist: [332,202],
                posCosto: [340,173],
                eliminar: 0
        },
        xilitla: {
                nombre: 'Xilitla',
                descripcion: 'Municipio ubicado en la región montañosa de la Huasteca, en el estado de San Luis Potosí. Recién nombrado "Pueblo mágico".',
                _x: 440,
                _y: 362,
                posInfo: [162,28],
                posCruz: [88,18],
                posDist: [338,197],
                eliminar: 2
        },
        zacatecas: {
                nombre: 'Zacatecas',
                descripcion: 'Capital del estado de Zacatecas. Ciudad colonial fundada en el año 1546 a partir del descubrimiento de las ricas minas de plata.',
                descripcionMas: '<p><span class="cantera context">“Zacatecas tiene piel de <span class="cantera word">cantera</span> y corazón de plata"</span>, es la frase con la que sus habitantes describen esta hermosa ciudad colonial. La Catedral, la Mina el Edén y la antigua Plaza de Toros San Pedro son sólo algunos de los sitios que vale la pena visitar.</p>\
		<p>También <span class="gozar context">es uno de los mejores destinos para <span class="gozar word">gozar</span> del arte</span>, <span class="huichol context">desde el popular como máscaras y coloridas figuras <span class="huichol word">huicholes</span></span>, hasta la obra de conocidos pintores mexicanos como Manuel Felguérez y Pedro Coronel.</p>\
		<p>Además, la ciudad está rodeada por una naturaleza impresionante. <span class="teleferico context">Puedes subirte al <span class="teleferico word">teleférico</span> que va del Cerro del Grillo hasta el Cerro de la Bufa</span>, podrás disfrutar de caminatas en un entorno boscoso, tanto en el ascenso como descenso de los cerros.</p>',
		_x: 86,
                _y: 141,
                posInfo: [-20,30],
                posCruz: [65,35],
                posDist: [140,92],
                posCosto: [80,40],
                eliminar: 0
        }
}

var deseos = {
	goyo2: {
                txt: 'Rica comida',
                importancia: 'importante',
                tamasopo: {
                        cumple: 'TBC',
                        retro: ''
                },
                real14: {
                        cumple: 'TBC',
                        retro: ''
                },
                zacatecas: {
                        cumple: 'TBC',
                        retro: ''
                }
	},
        trini1: {
                txt: 'Pintoresco',
                importancia: 'importante',
                tamasopo: {
                        cumple: false,
                        retro: 'Tamasopo no parece contar con un centro histórico interesante para pasear y disfrutar de la cultura local. No podemos "palomear" esta solicitud.'
                },
                real14: {
                        cumple: true,
                        retro: 'Real de Catorce es un <em>lugar pintoresco</em>, con tiendas, galerías, artesanías y… ¡muchas ruinas! No olvides palomear esa petición.'
                },
                zacatecas: {
                        cumple: true,
                        retro: 'Zacatecas es un lugar <em>muy</em> pintoresco: es una pequeña ciudad colonial con muchos sitios de interés y harta cultura. Olvidaste palomearlo.'
                }
	},
        trini2: {
                txt: 'Museos',
                importancia: 'deseable',
                tamasopo: {
                        cumple: false,
                        retro: '¿Dónde leíste que hay museos en Tamasopo? ¡¿Verdad que no?!'
                },
                real14: {
                        cumple: false,
                        retro: '¿Dónde leíste que hay museos en Real de Catorce? ¡No lo sabemos!'
                },
                zacatecas: {
                        cumple: true,
                        retro: '¡Hay muchos museos en Zacatecas! ¡No olvides palomearlo en la lista!'
                }
	},
        lucia1: {
                txt: 'Otros jóvenes',
                importancia: 'importante',
                tamasopo: {
                        cumple: 'TBC',
                        retro: ''
                },
                real14: {
                        cumple: 'TBC',
                        retro: ''
                },
                zacatecas: {
                        cumple: 'TBC',
                        retro: ''
                }
	},
        tonyo2: {
                txt: 'Naturaleza',
                importancia: 'importante',
                tamasopo: {
                        cumple: true,
                        retro: '¡Se me hace que se te olvidó seleccionar la característica "naturaleza", ya que definitivamente sí se cumple en Tamasopo!'
                },
                real14: {
                        cumple: true,
                        retro: 'Se te olvidó seleccionar la característica "naturaleza". ¡Definitivamente se cumple en Real de Catorce, donde puedes hacer paseos a caballo y peregrinar en las montañas!'
                },
                zacatecas: {
                        cumple: true,
                        retro: '¡Fíjate bien en el último párrafo del texto! Zacatecas está rodeada de una impresionante <strong>naturaleza</strong> y cerros donde se pueden hacer caminatas. Se te olvidó seleccionar esta característica.'
                }
	},
        tonyo3: {
                txt: 'Nadar',
                importancia: 'deseable',
                tamasopo: {
                        cumple: true,
                        retro: 'En Tamasopo hay una alberca "cien por ciento natural". ¡Olvidaste palomear la petición de <em>nadar</em>!'
                },
                real14: {
                        cumple: false,
                        retro: '¿Nadar en Real de Catorce? Todo parece indicar que no (es un lugar árido, semidesértico).'
                },
                zacatecas: {
                        cumple: false,
                        retro: '¿Nadar en Zacatecas? No parece tan obvio. En todo caso, no tenemos certeza de que se pueda.'
                }
	}
}


var activarOpcMult = function(){
	activeDst = $(this).attr('data-lugar');
	if(deseosOrdered.length==0){
		sortDeseos();
	}
	showOpcMult(activeDst);
	if(!rebuilding){
		addMwSettings(activeDst,'clicked');
	}
}

function highlightFragment(palabra){
	var $infoDiv = $('#ficha .info');
	$('.e-highlight',$infoDiv).removeClass('e-highlight');
	$('.word.'+palabra,$infoDiv).addClass('e-highlight');
	$('.context.'+palabra,$infoDiv).addClass('e-highlight');
}

function showDestinos(){
        
        for(var lugar in destinos){
                
                var $icon = $("<a>", { id: lugar, class: 'lugar', style: 'top : ' + destinos[lugar]['_y'] + 'px ; left: ' + destinos[lugar]['_x'] + 'px'});
                if(lugar=='SLP'){
                        $icon.addClass('slp');
                }
                $('#contenedor').append($icon);
                
		if(destinos[lugar]['eliminar'] > 0 && destinos[lugar]['eliminar'] < 4){
			$icon.addClass('inactivo');
		}
		
		if(destinos[lugar]['eliminar']===0){
		
			var xInfo = destinos[lugar]['_x']  + destinos[lugar]['posInfo'][0]; 
			var yInfo = destinos[lugar]['_y']  + destinos[lugar]['posInfo'][1]; 
	
			var $info = $("<a>", { id: 'info_'+lugar, 'data-lugar': lugar, class: 'btInfo', style: 'top : ' + yInfo + 'px ; left: ' + xInfo + 'px'});
			$info.addClass('finalista');
			$('#contenedor').append($info);
			
			$info.on('click',function(){
				var lugar = $(this).attr('data-lugar');
				var localInfo = destinos[lugar][info]==null?destinos[lugar]['descripcion']:destinos[lugar][info];
				if($('#ficha').hasClass('opcMult')){
					$('#ficha .foto').attr('src','img/'+lugar+'.jpg');
				} else {
					$('#ficha .foto').attr('src','img/'+lugar+'_mas.jpg');
				}
				$('#ficha .nombre').html(destinos[lugar]['nombre']);
				$('#ficha .info').html(localInfo);
				$('#ficha').removeClass('oculto');
				$('#plasta').removeClass('oculto');
			});
		}
                
        }
}


function initWindows(){
	  
	$('.js-btn-instr').on('click', function(){
		$('.js-instrucciones').removeClass('oculto');
		$('#plasta').removeClass('oculto');
	});

        var vntns = $('.vntn').addClass('oculto');
        var vntnsNumber = vntns.length;
        
        for(var i=0; i<vntnsNumber; i++){
                
            var vtn = $(vntns.get(i));

            var closeBtn = $('<button class="vntn--btn-cerrar">X</button>');
            closeBtn.on('click', function(){
                    var vtn = $(this).closest('.vntn');
                    vtn.removeClass('verde');
                    vtn.addClass('oculto');
                    $('#plasta').addClass('oculto');                    
            });
            vtn.append(closeBtn);
        }
}

function showOpcMult(lugar){
        if($('.vntn-opcMult[data-lugar="'+lugar+'"]').length==0){
                var $vntn = $("<div>", {'class':'vntn-opcMult','data-lugar': lugar});
                $vntn.appendTo($('#contenedor'));
                //for(var deseo in deseos){
                for(var i=0;i<deseosOrdered.length;i++){
                        var deseo = deseosOrdered[i];
                        $line = $("<div>", {'class':'div-opcMult '+deseos[deseo]['importancia'],'data-lugar': lugar, 'data-deseo': deseo});
                        $line.appendTo($vntn);
                        $radio = $("<a>", {'class':'radio-opcMult','data-lugar': lugar, 'data-deseo': deseo });
                        $radio.on('click',function(){
                                var dst = $(this).attr('data-lugar');
                                var deseo = $(this).attr('data-deseo');
                                $(this).off();
                                if(deseos[deseo][dst]['cumple'] === true){
                                        $(this).addClass('correcto');
                                        $(this).append( $("<img>", {'src':'css/img/paloma.png','class':'centered'}) );
                                } else
                                if(deseos[deseo][dst]['cumple']=== false){
                                       $(this).addClass('incorrecto');
                                       $('.vntn--contenido').html(deseos[deseo][dst]['retro']);
				       if(!rebuilding){
						$('.vntn-feedback').removeClass('oculto');
				       }
                                } else
                                if(deseos[deseo][dst]['cumple']=='TBC'){
                                        if($('.radio-opcMult.apagado[data-deseo="'+deseo+'"]').length>0){
                                                $(this).addClass('incorrecto');
                                                var retro;
                                                if(deseo=='goyo2'){
                                                        retro = 'Si estás suponiendo que en los otros destinos <strong>no</strong> hay rica comida, entonces habrá que hacer lo mismo para ' + destinos[dst]['nombre'] + '.';
                                                } else if(deseo=='lucia1'){
                                                       retro = 'Si estás suponiendo que en los demás destinos <strong>no</strong> hay otros jóvenes, entonces habrá que hacer lo mismo para ' + destinos[dst]['nombre'] + '.';
                                                }
                                                $('.vntn--contenido').html(retro);
						if(!rebuilding){
							$('.vntn-feedback').removeClass('oculto');
						}
                                        } else {
                                                $(this).addClass('correcto');
                                                $(this).append( $("<img>", {'src':'css/img/paloma.png','class':'centered'}) );
                                        }
                                }
				if(!rebuilding){
					addMwSettings(dst,deseo);
				}
                        });
                        $radio.appendTo($line);
                        $span = $("<span>", {'class':'txt-opcMult'});
                        $span.html(deseos[deseo]['txt']);
                        $span.appendTo($line);
                        
                }
                $bt = $("<a>", {'class':'bt-listo','data-lugar': lugar});
                $bt.html('¡Listo!');
                $bt.on('click',function(){
                        var dst = $(this).attr('data-lugar');
                        for(var deseo in deseos){
                                if(deseos[deseo][dst]['cumple']===true && !$('.radio-opcMult[data-lugar="'+dst+'"][data-deseo="'+deseo+'"]').hasClass('correcto')){
                                        $('.vntn--contenido').html(deseos[deseo][dst]['retro']);
					if(!rebuilding){
						$('.vntn-feedback').removeClass('oculto');
					}
                                        return;
                                }
                                if(deseos[deseo][dst]['cumple']=="TBC"
                                   && $('.radio-opcMult.correcto[data-deseo="'+deseo+'"]').length>0
                                   && !$('.radio-opcMult[data-lugar="'+dst+'"][data-deseo="'+deseo+'"]').hasClass('correcto')){
                                        var retro;
                                        if(deseo=='goyo2'){
                                                retro = 'Si estás suponiendo que en los otros destinos hay <strong>rica comida</strong>, entonces habrá que hacer lo mismo para ' + destinos[dst]['nombre'] + '.';
                                        } else if(deseo=='lucia1'){
                                               retro = 'Si estás suponiendo que en los demás destinos hay <strong>otros jóvenes</strong>, entonces habrá que hacer lo mismo para ' + destinos[dst]['nombre'] + '.';
                                        }
                                        $('.vntn--contenido').html(retro);
					if(!rebuilding){
						$('.vntn-feedback').removeClass('oculto');
					}
                                        return;
                                }
                        }
                        
                        $('.radio-opcMult[data-lugar="'+dst+'"]:not(.correcto)').each(function(){
                               $(this).removeClass('incorrecto').addClass('apagado');
                               var line = $(this).closest('.div-opcMult');
                               line.addClass('apagado');
                        });
                        var ventanita = $(this).closest('.vntn-opcMult');
                        ventanita.addClass('terminado '+dst);
                        $(this).remove();
                        $('#ficha').addClass('oculto');
                        $('#plasta').addClass('oculto');
                        $flecha = $("<img>", {'class':'flecha '+dst, 'src': 'css/img/flecha_' + dst + '.png'});
                        $flecha.appendTo($('#contenedor'));
                        
                        var retro;
                        switch(dst) {
                                case 'tamasopo':
                                    retro = '¡Muy bien! Continúa con Real de Catorce.';
				    $('.btInfo[data-lugar="tamasopo"]').off('click',activarOpcMult);
				    $('.btInfo[data-lugar="real14"]').on('click',activarOpcMult);
                                    break;
                                case 'real14':
                                    retro = '¡Muy bien! Continúa con Zacatecas.';
				    $('.btInfo[data-lugar="real14"]').off('click',activarOpcMult);
				    $('.btInfo[data-lugar="zacatecas"]').on('click',activarOpcMult);
                                    break;
                                case 'zacatecas':
                                    retro = '¡Bien hecho! Regresemos al diálogo.';
				    $('.btInfo[data-lugar="zacatecas"]').off('click',activarOpcMult);
				    nextQuestion(3000);
                                    break;
                            } 
                        $('.vntn-feedback').addClass('verde');
                        $('.vntn--contenido').html(retro);
			if(!rebuilding){
				$('.vntn-feedback').removeClass('oculto');
				addMwSettings(dst,'listo');
			}

                });
                $bt.appendTo($vntn);
        } else {
                $('.vntn-opcMult[data-lugar="'+lugar+'"]').removeClass('oculto');
        }
}

function prepareOpcMult(){
        
	$('.btn-instr').removeClass('oculto');
	$('.js-instrucciones').removeClass('oculto');
	$('#plasta').removeClass('oculto');
	
        getMwSettings('cap3_tabla');
        
        $('#ficha').addClass('opcMult');
	
	$('.btInfo[data-lugar="tamasopo"]').on('click',activarOpcMult);
	
        $('#ficha .bt_close').bind('click',function(){
                $('.vntn-opcMult[data-lugar="'+activeDst+'"]:not(.terminado)').addClass('oculto');
        });
	
	setTimeout(function(){
		if(rebuildSettings['tamasopo'].length>0){
			rebuilding=true;
			for(var dst in rebuildSettings){
				var settings = rebuildSettings[dst];
				var listo = false;
				for(var i=0;i<settings.length;i++){
					if(settings[i]=='clicked'){
						if(dst!='tamasopo'){
							$('.btInfo[data-lugar="'+dst+'"]').on('click',activarOpcMult);
						}
						$('.btInfo[data-lugar="'+dst+'"]').trigger('click');
					} else
					if(settings[i]=='listo'){
						listo = true;
					} else {
						$('a.radio-opcMult[data-lugar="'+dst+'"][data-deseo="'+settings[i]+'"]').trigger('click');
					}
				}
				if(listo){
					$('.bt-listo[data-lugar="'+dst+'"]').trigger('click');
				}
			}
			$('.vntn-feedback').addClass('oculto');
			$('.vntn-inst').addClass('oculto');
			rebuilding=false;
			
		}	
	},1000);
}

function sortDeseos(){
        for(var deseo in deseos){
                if(deseos[deseo]['importancia']=='importante'){
                        deseosOrdered.unshift(deseo);
                } else if(deseos[deseo]['importancia']=='deseable'){
                        deseosOrdered.push(deseo);
                }
        }
}

/*** funciones a chat ***/

function define(termino){
        var padre = window.parent;
        var mensajeTipoSet = { command: "showDefinition", params: {id: mwId , value: termino } };
        padre.postMessage(mensajeTipoSet, "*");	
}

function setAnswer(str){
        var padre = window.parent;
        var mensajeTipoSet = { command: "setAnswer", params: {id: mwId , value: str } };
        padre.postMessage(mensajeTipoSet, "*");	
}

function showTutorIntervention(txt,emotion){
        var padre = window.parent;
        var mensajeTipoSet = { command: "showTutorIntervention", params: {id: mwId , text: txt, emotion: emotion } };
        padre.postMessage(mensajeTipoSet, "*");	
}


function nextQuestion(delay){

	if(inicio){
		inicio = false;
		addMwSettings('inicio','false');
		setTimeout(function(){  
                        var padre = window.parent;
                        var mensajeTipoSet = { command: "gotoNextQuestion", params: { id: mwId } };
                        padre.postMessage(mensajeTipoSet, "*");	

		},delay);
	}
}

function getMwSettings(target){
        var padre = window.parent;
        var mensajeTipoSet = { command: "getMicroworldSettings", params: {id: mwId, targetId: target, src: 'mw' } }; //src = mw/chat
        padre.postMessage(mensajeTipoSet, "*");	
}

function addMwSettings(name,value){
	var padre = window.parent;
	var mensajeTipoSet = { command: "addMicroworldSettings", params: {id: mwId, name: name, value: value } };
	padre.postMessage(mensajeTipoSet, "*");	
}
  

/***** funciones de chat ***/

function receiveMessage(evt) {
// mensaje tipo set
        if (evt.data && evt.data.type === "set") {
                if(evt.data.name=="show"){
			var lugar = evt.data.value;
			//alert(lugar);
			$('#info_'+lugar).trigger('click');
		} else
		if(evt.data.name=="highlight"){
                        highlightFragment(evt.data.value);
                } else
		if(evt.data.name=="opcMult"){
                        prepareOpcMult();
                } else
                if(evt.data.name=="resaltar"){
                        $('#'+evt.data.value).addClass('e-resaltado');
                } else
                if(evt.data.name=="microworldSettings"){
                        var arr = evt.data.value.split(',');
                        for(var i=0;i<arr.length;i++){
                                var arr2 = arr[i].split(':');
                                var deseo = arr2[0];
				if(deseos[deseo]){
					deseos[deseo]['importancia'] = arr2[1];
				}
                        }
                } else
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				inicio=false;
			} else {
				//lo que se tenga que hacer con base en historial
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]=='inicio' && pair[1]=='false'){
						inicio = false;
					} else
					if(/(tama|real|zaca)/.test(pair[0])){
						var dst = pair[0];
						if(pair[1]=='clicked'){
							rebuildSettings[dst].unshift(pair[1]);
						} else {
							rebuildSettings[dst].push(pair[1]);
						}
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

window.addEventListener("message", receiveMessage, false);

$(document).ready(function(){
        
        showDestinos();
        initWindows();
        
        //prepareOpcMult(); //---> QUITAR!!!
        
        var padre = window.parent;
        var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
        padre.postMessage(mensajeTipoSet, "*");	
});