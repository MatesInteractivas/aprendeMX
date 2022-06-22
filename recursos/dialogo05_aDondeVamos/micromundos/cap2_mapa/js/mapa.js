var clicked = [];
var inicio = true;
var info = 'descripcion';

var rondaElim = 0;
var nElim = 0;
var activeDst = "";

var mwId = 'cap2_mapa';
var arrPairs = [];
var rebuilding = false;


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
                eliminar: 0
        },
        tamasopo: {
                nombre: 'Tamasopo',
                descripcion: 'Municipio pequeño con un balneario natural, ubicado en las faldas de la Sierra Madre Oriental.',
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
                descripcion: 'Capital del estado de Zacatecas. Ciudad colonial fundada en el año 1546 a partir del descubrimiento de ricas minas de plata.',
                _x: 91,
                _y: 141,
                posInfo: [-20,30],
                posCruz: [65,35],
                posDist: [140,92],
                posCosto: [80,40],
                eliminar: 0
        }
}



function showDestinos(){
        
        for(var lugar in destinos){
                
                var $icon = $("<a>", { id: lugar, class: 'lugar', style: 'top : ' + destinos[lugar]['_y'] + 'px ; left: ' + destinos[lugar]['_x'] + 'px'});
                if(lugar=='SLP'){
                        $icon.addClass('slp');
                }
                $('#contenedor').append($icon);
                
                var xInfo = destinos[lugar]['_x']  + destinos[lugar]['posInfo'][0]; 
                var yInfo = destinos[lugar]['_y']  + destinos[lugar]['posInfo'][1]; 

                var $info = $("<a>", { id: 'info_'+lugar, 'data-lugar': lugar, class: 'btInfo', style: 'top : ' + yInfo + 'px ; left: ' + xInfo + 'px'});
                if(/(real14|tamasopo|zacatecas)/.test(lugar)){
                        $info.addClass('finalista');
                }
                $('#contenedor').append($info);
                $info.on('click',function(){
                        var lugar = $(this).attr('data-lugar');
                        var localInfo = destinos[lugar][info]==null?destinos[lugar]['descripcion']:destinos[lugar][info];
                        $('#ficha .foto').attr('src','img/'+lugar+'.jpg');
                        $('#ficha .nombre').html(destinos[lugar]['nombre']);
                        $('#ficha .info').html(localInfo);
                        $('#ficha').removeClass('oculto');
                        $('#plasta').removeClass('oculto');
                });
                
                xInfo = destinos[lugar]['_x']  + destinos[lugar]['posCruz'][0]; 
                yInfo = destinos[lugar]['_y']  + destinos[lugar]['posCruz'][1]; 
                var $cruz = $("<a>", { id: 'cruz_'+lugar, 'data-lugar': lugar, class: 'btEliminar oculto', style: 'top : ' + yInfo + 'px ; left: ' + xInfo + 'px'});
                $('#contenedor').append($cruz);
        }
}

function eliminarLugar(lugar){
        $('#'+lugar).addClass('inactivo');
        $('#info_'+lugar).remove();
        $('#cruz_'+lugar).remove();
        nElim--;
        if(nElim==0){
                $('.btEliminar').addClass('oculto');
                $('.btEliminar').off();
        }
}

function reconstructElim(){
        rebuilding = true;
        for(var i=0;i<arrPairs.length;i++){
                var pair = arrPairs[i].split(':');
                if(pair[1]=='inactivo'){
                        $cruz = $('.btEliminar[data-lugar="'+pair[0]+'"]');
                        $cruz.trigger('click');
                }
        }
        rebuilding = false;
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


function nextQuestion(){
        setTimeout(function(){
                //if(inicio){
                        //inicio = false;
                        var padre = window.parent;
                        var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: mwId } };
                        padre.postMessage(mensajeTipoSet, "*");	
                //}
        },1000);
}

function addMwSettings(name,value){
        //alert('setting name: '+name+'& value: '+value);
        var padre = window.parent;
        var mensajeTipoSet = { command: "addMicroworldSettings", params: {id: mwId, name: name, value: value } };
        padre.postMessage(mensajeTipoSet, "*");	
}

function mwReconstructed(){
        var padre = window.parent;
        var mensajeTipoSet = { command: "mwReconstructed", params: {id: mwId } };
        padre.postMessage(mensajeTipoSet, "*");	
}


/***** funciones de chat ***/

function receiveMessage(evt) {
// mensaje tipo set
        if (evt.data && evt.data.type === "set") {
                if(evt.data.name=="eliminar"){
                        rondaElim = evt.data.value;
                        nElim = 0;
                        for(var lugar in destinos){
                                if(destinos[lugar]['eliminar']==rondaElim){
                                        nElim++;
                                }
                        }
                } else
                if(evt.data.name=="info"){
                        if(evt.data.value==0){
                                $('#infoAdicional').addClass('oculto');
                        }
                } else
                if(evt.data.name=="cruz"){
                     $('.btEliminar').removeClass('oculto');
                     $('.btEliminar').on('click',function(){
                        var lugar = $(this).attr('data-lugar');
                        if(destinos[lugar]['eliminar']==rondaElim){
                                eliminarLugar(lugar);
                                if(!rebuilding){
                                        addMwSettings(lugar,'inactivo');
                                        if(nElim==0){
                                                if(rondaElim==1){
                                                        nextQuestion();
                                                } else
                                                if(rondaElim==2){
                                                        var nombre = destinos[lugar]['nombre'];
                                                        setAnswer(nombre);
                                                } else
                                                if(rondaElim==3){
                                                        nextQuestion();
                                                }
                                        }
                                }
                        } else {
                                if(!rebuilding){
                                        if(rondaElim==1){
                                                var txt = 'Los Pérez aún no han visitado '+ destinos[lugar]['nombre'] + '. Los lugares que debes eliminar son: <br>(Santiago de) Querétaro<br>Guanajuato<br>Lagos de Moreno<br>Aguascalientes';
                                                showTutorIntervention(txt,'catedratico');
                                        } else 
                                        if(rondaElim==2){
                                                var nombre = destinos[lugar]['nombre'];
                                                setAnswer(nombre);
                                        } else
                                        if(rondaElim==3){
                                                var txt = 'Ups, ¡te equivocaste de lugar! Es Guadalajara la que se debe eliminar.';
                                                showTutorIntervention(txt,'apenado');
                                        }
                                }
                        }
                     });
                     if(arrPairs.length>0){
                           reconstructElim();
                     }
                }  else
                if(evt.data.name=="lugares"){
                        //prender/apagar lugares como botón
                        if(evt.data.value>0){
                                $('.lugar:not(.inactivo,.slp)').addClass('activo');
                                var nClicked = 0;
                                $('.lugar:not(.inactivo,.slp)').on('click',function(){
                                        var id = $(this).attr('id');
                                        if(evt.data.value==1){  //para simplemente comunicar el nombre del lugar elegido al chat
                                                var nombre = destinos[id]['nombre'];
                                                setAnswer(nombre);
                                        }  else
                                        if(evt.data.value==2){ // para consultar las distancias y tiempos de traslado
                                                var $info = $('#infoAdicional');
                                                $info.removeClass('oculto');
                                                $info.attr('src','css/img/dist_' + id + '.png');
                                                $info.css( { 'left': destinos[id]['posDist'][0], 'top': destinos[id]['posDist'][1]} );
                                        } else
                                        if(evt.data.value==3){ // para consultar los costos
                                                var $info = $('#infoAdicional');
                                                $info.removeClass('oculto');
                                                $info.attr('src','css/img/costo_' + id + '.png');
                                                $info.css( { 'left': destinos[id]['posCosto'][0], 'top': destinos[id]['posCosto'][1]} );
                                                nClicked++;
                                                if(nClicked+1==$('.activo:not(".slp")').length){
                                                        nextQuestion();
                                                }
                                        }
                                        
                                });
                        } else {
                                $('.lugar').removeClass('activo');
                                $('.lugar').off();
                        }
                } else
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica
                                //NO HACE FALTA HACER NADA AQUÍ
			} else {
				//lo que se tenga que hacer con base en historial
                                arrPairs = evt.data.value.split(',');
                        }
                        mwReconstructed();
                }
        }
}

window.addEventListener("message", receiveMessage, false);

$(document).ready(function(){
        
        showDestinos();

        var padre = window.parent;
        var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
        padre.postMessage(mensajeTipoSet, "*");	
});