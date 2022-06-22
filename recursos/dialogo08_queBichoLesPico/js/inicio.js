var nombre_alumno = "";
var avatar_alumno = "";
var reconstruir = false;
var numAvatars = 8;
var numStartOptions = 2;
var storage;

function aInicio(){
    
    hide('#portada');
    show('#bt_home');
    if(hayLS()){
        checkStoredData();
    } else {
        //console.log("localstorage not available");
	editarPerfil(true);
    }
}


function showKeyboard(idInput){
    initializeKeyboard('virtualKeyboardInicio',idInput);
    show('#virtualKeyboardInicio');
}

function hideKeyboard(){
    $('#virtualKeyboardInicio').empty();
    hide('#virtualKeyboardInicio');
    checkUsrData();
}

function hayLS(){

    var lsOK = true;
    if(window.localStorage){
	try {
	    var testKey = 'test';
	    storage = window.localStorage;
	    storage.setItem(testKey, '1');
	    storage.removeItem(testKey);
	} catch (error){
	      lsOK = false;
	}
    } else {
	lsOK = false;
    }
    return lsOK;
}

function checkStoredData(){

    if(storage && storage.getItem("usrName") && storage.getItem("usrAvatar")){
	showInicioCr();
    } else {
	editarPerfil(true);
    }
}

function showInicioCr(){
    
    show('#arranque');
    
    if(storage && storage.getItem("usrName") && storage.getItem("usrAvatar")!=""){
	setUsrData(storage.getItem("usrName"),storage.getItem("usrAvatar"));
    }
    showUsrData();
    
    if($('.optionInicio').length==0){
    
	var config;
	if(typeof DIALOG_CONFIG_DATA != 'undefined'){
		config = DIALOG_CONFIG_DATA;
	} else {
		config = dialogo;
	}
	
	var item = config.title+config.version+"_respuestas";
	if(storage && storage.getItem(item) && storage.getItem(item)!=""){
	    //console.log("Hay historial");
	    numStartOptions = 3;
	    for(var i=0;i<opcionesInicio.length;i++){
		addOption(opcionesInicio[i], 320 + (65*i), i );
	    }
	} else {
	    //console.log("No hay historial");
	    for(var i=0;i<opcionesInicio.length-1;i++){
		addOption(opcionesInicio[i], 350 + (75*i), i );
	    }
	}
	
	setOptions();
    }
}

function showChapters(){
    show("#capitulos");
    if($("#capitulos").children().length==0){
        addChapters();
   }
   $('#arranque').addClass('conCapitulos');
}

function aInicioDialogo(name,avatar,showInstr,questionId){

    hide('#arranque');
    setUsrData(name,avatar);
    
    var delay;

    if(!reconstruir){
        showDialogElements();
	delay = 1;
	if(showInstr){
	    showInfo('instrucciones');
	}
    } else {
	show('.cargador');
	delay = 1000;
    }
    
    var mwArray = [];
    if(questionId){
	for(var chapter in chapters){
	    if(chapters[chapter]['firstQuestion']==questionId){
		mwArray = chapters[chapter]['microworlds'];
		break;
	    }
	}
    }
    
    var options = {
        'userData' : {
            'userName': nombre_alumno,
            'userAvatar': avatar_alumno
        } ,
        'startData' : {
            'startFrom': questionId,
            'startMicroworlds' : mwArray
        }
    };
    
    setTimeout(function(){
	    initializeDialog(options,reconstruir);
    },delay);
}

function showDialogElements(){
    show('#chat');
    show('#micromundos');
    show('#btHistorial');
    show('.bt_instrucciones');
}

function chooseChapter(){
    setUsrData($('#usrname_input').text(),getAvatar());
    showChapters();
}


function editarPerfil(inactive){
    
    if(inactive){
	$('.bt_continuar').addClass('inactive');
    } else {
	 activateContinuar();
    }
    
    if(nombre_alumno){
	$('#usrname_edit').text(nombre_alumno);
    }
    $('#usrname_edit').on('click',function(){
        showKeyboard('usrname_edit');
    });
    
    hide('#arranque');
    if($('.slider').children().length == 0){
        setSlider();
    }
    show('#editarPerfil');
}

function closeEdit(){
    setUsrData($('#usrname_edit').text(),getAvatar());
    showUsrData();
    hide('#editarPerfil');
    show('#arranque');
}

function checkUsrData(){
    if( /[a-zA-Z]/.test($('#usrname_edit').text()) && getAvatar()!=""){
	if($('.bt_continuar').hasClass('inactive')){
	    $('.bt_continuar').removeClass('inactive');
	    activateContinuar();
	}
    } else {
	$('.bt_continuar').addClass('inactive');
	$('.bt_continuar').unbind('click');
    }
}

function activateContinuar(){
    $('.bt_continuar').bind('click',function(){
	setUsrData($('#usrname_edit').text(),getAvatar());
	hide('#editarPerfil');
	showInicioCr();
    });
}

function setUsrData(name,avatar){
    
    nombre_alumno = name.strToLc().capitalizeFirstLetters();
    avatar_alumno = avatar;
    if(hayLS()){
        storage.setItem("usrName",nombre_alumno);
        storage.setItem("usrAvatar",avatar_alumno);
    }
}
    

function showUsrData(){
    if($('#hola').html() === undefined){
        jQuery('<p/>', { id: 'hola', class:'txtInicio', html: "¡Hola " + nombre_alumno + "!", style: "padding-left: 130px; padding-top: 130px; font-size: 50px !important; max-width: 250px; height: auto; line-height: 50px;" } ).appendTo($('#inicio_cr'));
    } else {
        $('#hola').html("¡Hola " + nombre_alumno + "!");
    }
    if($('#hola').height()>55){
        $('#hola').css("padding-top",95);
    }
    
    if($('#img_alumno').attr('src')  === undefined){
        jQuery('<img/>', { id: 'img_alumno', src: 'img/alumno/' + avatar_alumno + '.png' , style: 'position: absolute; top: 84px; left: 392px;' } ).appendTo($('#inicio_cr'));
    } else {
        $('#img_alumno').attr('src','img/alumno/' + avatar_alumno + '.png');
    }
}


function addOption(txt, _y, ind){
    jQuery('<a/>', { id: 'option' + ind, class: 'optionInicio', style: "top: " + _y + "px;" } ).appendTo($('#inicio_cr'));
    jQuery('<p/>', { class:'txtInicio', html: txt, style: "position: absolute; left: 250px; top: " + (_y+10) + "px;" } ).appendTo($('#inicio_cr'));
}

function setOptions(){
    $('.optionInicio').each(function () {
        $(this).bind("click", function(){
             if($("#eleccion").attr('src') === undefined){
                jQuery('<img/>', { id: 'eleccion', src: 'img/general/eleccion.png' , style: "position: absolute;" } ).appendTo($('#inicio_cr'));
             }
             $("#eleccion").css("top",parseInt($(this).css("top"))+5);
             $("#eleccion").css("left",parseInt($(this).css("left"))+15);
             if(/[02]$/.test($(this).attr('id'))){
                show(".bt_seguir_inicio");
                hide("#capitulos");
		$('#arranque').removeClass('conCapitulos');
                if(/2$/.test($(this).attr('id'))){
                    reconstruir=true;
                } else {
                    reconstruir=false;
                }
             } else {
                showChapters();
                hide(".bt_seguir_inicio");
                reconstruir=false;
             }
         });
     });
}

function addChapters(){
    
    var _l = Object.keys(chapters).length; 
    var _h = parseInt( (550 - (6*_l-1) ) / _l );
    
    for(var chapterID in chapters){
	
	var chapter = chapters[chapterID];
	var src = chapter['src'];
	
	var chapterDiv = jQuery('<div/>');
	chapterDiv.attr({
	    id: chapterID,
	    class: 'capitulo',
	    style: 'height: '+ _h + 'px'
	});
	$("#capitulos").append(chapterDiv);
	chapterDiv.bind('click',function(){
	    var chapId = $(this).attr('id');
	    aInicioDialogo(nombre_alumno,avatar_alumno,false,chapters[chapId]['firstQuestion']); 
	});
	
	var imgDiv = jQuery('<div/>');
	imgDiv.attr({
	    class: 'capitulo_img_div'
	});
	chapterDiv.append(imgDiv);
	
	var img = jQuery('<img/>');
	img.attr({
	    class: 'centered',
	    src: 'img/general/chapters/'+src,
	    style: 'margin-top: auto !important'
	});
	imgDiv.append(img);
	
	var txtDiv = jQuery('<div/>');
	txtDiv.attr({
	    class: 'capitulo_txt_div'
	});
	chapterDiv.append(txtDiv);
	
	var txt = jQuery('<p/>');
	txt.attr({
	    class: 'capitulo_txt'
	});
	txt.html('<span class="capitulo_titulo"><strong>'+chapter['title']+'</strong></span><br><span class="capitulo_info">'+chapter['description']+'</span>');
	txtDiv.append(txt);
    }
}


function setSlider(){
    
    var fctrX = 0;
    jQuery('<a/>', { class: 'sliderBt left' } ).appendTo($('.slider'));
    $('.sliderBt.left').bind('click',function(){
        var _x = parseInt($('.sliderInnerDiv').css('left'))<0?parseInt($('.sliderInnerDiv').css('left'))+fctrX:parseInt($('.sliderInnerDiv').css('left'));
        $('.sliderInnerDiv').css('left',_x);
        if(_x==0){
            $('.sliderBt.left').addClass('inactive');
        }
        $('.sliderBt.right').removeClass('inactive');
    });
    
    jQuery('<div/>', { class: 'sliderDiv' } ).appendTo($('.slider'));
    jQuery('<div/>', { class: 'sliderInnerDiv' } ).appendTo($('.sliderDiv'));
    for(var i=1;i<=numAvatars;i++){
        jQuery('<div/>', { id: 'div_alumna'  + i, class: 'avatar_div' } ).appendTo($('.sliderInnerDiv'));
        jQuery('<img/>', { class: 'avatar', src : 'img/alumno/alumna' + i + '.png' } ).appendTo($('#div_alumna'+i));
        jQuery('<div/>', { id: 'div_alumno'  + i, class: 'avatar_div' } ).appendTo($('.sliderInnerDiv'));
        jQuery('<img/>', { class: 'avatar', src : 'img/alumno/alumno' + i + '.png' } ).appendTo($('#div_alumno'+i));
    }
    
    fctrX = (parseInt($('.avatar_div').width()) + 6)*3;
    
     $('.avatar_div').each(function () {
        $(this).bind("click", function(){
            $('.avatar_div').removeClass('selected');
            $(this).addClass('selected');
            checkUsrData();
        });
    });
    
    jQuery('<a/>', { class: 'sliderBt right' } ).appendTo($('.slider'));
    $('.sliderBt.right').bind('click',function(){
        _x = parseInt($('.sliderInnerDiv').css('left'))>(numAvatars*1.6*-(fctrX/3))?parseInt($('.sliderInnerDiv').css('left'))-fctrX:parseInt($('.sliderInnerDiv').css('left'));
        $('.sliderInnerDiv').css('left',_x);
        if(_x<=(numAvatars*1.6*-(fctrX/3))){
            $('.sliderBt.right').addClass('inactive');
        }
        $('.sliderBt.left').removeClass('inactive');
    });
}


function getAvatar(){
    
    var avatar = "";
    
     $('.avatar_div').each(function () {
        if($(this).hasClass('selected')){
            avatar = $(this).attr('id').replace(/^div_/,"");
        }
     });
     
     if(avatar=="" && avatar_alumno!=""){
        avatar = avatar_alumno;
     }
     
     return avatar;
}

function showInfo(clase){
    $('.popupContent').empty();
    $('.popup').removeClass('oculto ayuda instrucciones creditos');
    $('.popup').addClass(clase);
    $('.popup').css('z-index',101);
    $('#plastaPopup').removeClass('oculto');
    $('#plastaPopup').css('z-index',100);
    if(clase=='creditos'){
	jQuery('<iframe/>', { class: 'infoIframe', src: 'docs/info.html' }).appendTo('.popupContent');
    } else {
	var txt;
	jQuery('<p/>', { class: 'txt_instrucciones centered' }).appendTo('.popupContent');
	if(clase=='instrucciones'){
	    txt = indicaciones.instrucciones;
	} else {
	    if(/alumno/.test(avatar_alumno)){
		txt = indicaciones.ayuda[numStartOptions].replace(/@/,'o');
	    } else {
		txt = indicaciones.ayuda[numStartOptions].replace(/@/,'a');
	    }
	}
	$('.txt_instrucciones').html(txt);
	
    }
}

function cerrarPopup(){
    $('.popup').addClass('oculto');
    $('#plastaPopup').addClass('oculto');
}


function hide(slctr){
    if(! $(slctr).hasClass('oculto')){
        $(slctr).addClass('oculto');
    }
}

function show(slctr){
    if($(slctr).hasClass('oculto')){
        $(slctr).removeClass('oculto');
    }
}

function aConclusion(){
    hide('#chat');
    hide('#micromundos');
    hide('#historial_micromundos');
    hide('#btHistorial');
    hide('#historial_chat');
    hide('.bt_instrucciones');
    show('#conclusion');
}

function regresarADialogo(){
    hide('#conclusion');
    show('#chat');
    show('#micromundos');
    show('#historial_micromundos');
    show('#btHistorial');
    show('#historial_chat');
    show('.bt_instrucciones');
}


