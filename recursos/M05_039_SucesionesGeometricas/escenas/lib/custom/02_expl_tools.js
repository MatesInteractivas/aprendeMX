var proto = aprendeMx.SucesionAritmetica.prototype;
proto.oldOptionClick = proto.onOptionClick;
proto.oldInit = proto.init;
proto.oldSetNivel = proto.setNivel;
proto.oldInitEjercicio = proto.initEjercicio;


/**
*/
proto.initEjercicio = function(event){
  this.oldInitEjercicio();
  this.showHelpBtn(false);
  this.errores = 0;
}

/**
*/
proto.onOptionClick = function(event){

  if(!event.data.isCorrect){
    this.errores ++;
    console.log("Error = ",this.errores,",",this.maxErrores);
    if(this.errores >= 1)
      this.showHelpBtn(true);
  }
  
  this.oldOptionClick(event); 

  if(!event.data.isCorrect){
    $('.option.correcto').removeClass('correcto');  
  }

  



}

proto.onHelpClick = function(envent){
  alert('Not implement yet!');
}




/**
*/
proto.showHelpBtn = function(isVisible){
  var bId = 'btnHelp';
  var btnHelp = $('#'+bId);

  if(btnHelp.length < 1 && isVisible){
    //Construimos el boton;
    var btnHelp = $('<button>',{'class': 'btnAprendeMx amarillo nota', id : bId,'text':'', html:'Nota' });
    btnHelp.on('click',$.proxy(this.onHelpClick,this));
    var cont = $('.activity-container #DISP_container');
    btnHelp.appendTo(cont);
  }
  if(isVisible)
    btnHelp.show();
  else{
    btnHelp.hide();
  }
    
}



proto.cleanAnswers = function(){
  var options = $('#INST div.option');
  options.removeClass('selected');
  options.removeClass('correcto');
}


/**
*/
proto.showModalMsg = function(message){
  console.log("Mostramos mensaje modal");
  var mask = $('<div>',{id:'message-mask'}); 
  var win  = $('<div>',{id:'message'}); 
  var btnClose = $('<div>',{id:'close_msg'}); 
  
  win.append(btnClose);
  mask.append(win);


  btnClose.one('click',function(){
    mask.remove(); 
    parent.postMessage({type : 'exec' , name:'onModalWindowClose', value: 0  }, '*'); 
    parent.postMessage({type : 'update',},'*');
  });
  win.append(message);

  $('body').append(mask);
  parent.postMessage({type : 'exec' , name:'onModalWindowOpen', value: 0  }, '*');  
  parent.postMessage({type : 'update',},'*');
}


proto.receiveMessage2 = function(event){  
  // data = {name : '<functionToExec>',type : '<exec|update>', value: '<coma.separated-params>'}
  if(!event.data || !event.data.type )
     return;
  if(event.data.type = 'exec'){
    switch (event.data.name){
      case 'showHelpBtn' :
        var val = string.match(/^(true|yes|t|y|1)$/i);
        this.showHelpBtn(val);
        break;
        case 'cleanAnswers':
        this.cleanAnswers();
        break;
      default:
        console.log('No se reconoce el mensaje : ',event.data);
    }
  }
} 






proto.init = function(){
  this.errores = 0;
  this.maxErrores = 2;

  window.addEventListener("message", $.proxy(this.receiveMessage2,this), false);
  this.oldInit(); 
}

