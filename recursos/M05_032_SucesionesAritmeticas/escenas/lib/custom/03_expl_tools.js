/**
*/
Math.mcd = function(a,b){
   var r0 = a,
   r1 = b;
   while(r1> 0){
      var rTmp = r1
      r1 = (r0%r1)
      r0 = rTmp
   }
   return r0;
}


/**
*/
Math.mcm = function(a, b){
   return (a/Math.mcd(a,b))*b;
}


/*
*****************************************************************************************************
* APP CLASS     *
*****************************************************************************************************
*/
var aprendeMx = aprendeMx || {};
aprendeMx.SucesionAritmetica = function(functDispl, textosCustom){
   this.displayEjercicio = functDispl;
   this.nivel = 0;
   this.sucesion = {};
   this.options = [];
   this.textos = textosCustom   || [
      "Se suma [opt.k] a cada término y el primer elemento es [opt.n]",
      "Se inicia con [opt.n] y la sucesión aumenta de [opt.k] en [opt.k]",
      "La sucesión aumenta constantemente [opt.k] y comienza en [opt.n]",
      "Inicia en [opt.n] y la diferencia entre dos números consecutivos es [opt.k]"
   ]; 
}

var proto = aprendeMx.SucesionAritmetica.prototype;
/**
*/
proto.initEjercicio =  function (){
   this.options = this.initOpciones();
   this.sucesion = this.options[0];
   this.displayEjercicio(this.sucesion,this.options,this.textos);    
}


/**
*/
proto.receiveMessage = function(event){
  // data = {name : '<functionToExec>',type : '<exec|update>', value: '<coma.separated-params>'}
  if(!event.data || !event.data.type )
     return;
  if(event.data.type = 'exec'){
     switch (event.data.name){
        case 'setNivel' : 
           this.setNivel(event.data.value);
     }
  }
} 


/**
*/
proto.init = function(){
   this.initEjercicio();
   window.addEventListener("message", $.proxy(this.receiveMessage,this), false);

   parent.postMessage({type:'ready', value:window.location.href}, '*');
   parent.postMessage({type:'exec' , name:'onReady', value: 0  }, '*'); 
}

/**
*/
proto.onOptionClick = function(event) {
   var isCorrect = event.data.isCorrect;
   var $ele = $(event.currentTarget);
   $ele.addClass('selected');
   if(isCorrect){
      $ele.addClass('correcto');
   } else {
      $('div.option').each(function(idx,element){
         if(element.correcto){
            $(element).addClass('correcto');
            return false;
         }
      });
   }

   parent.postMessage({
      type : 'exec',
      name : 'doPlay',
      value : 0,
   },'*');

   isCorrect = (isCorrect)?'1':'0'; 
   parent.postMessage({
      type : 'exec',
      name : 'wasRigthAnswer',
      value : isCorrect,
   },'*');

   parent.postMessage({
      type : 'update',
   },'*');
}


/**
*/
proto.setNivel = function(idxNivel){
   this.nivel = Math.floor(idxNivel);
   this.initEjercicio();
}


/**
*/
proto.initOpciones= function(){   
   
   var kn,kd,nn,nd,i,optAct;
   var numRndAux;
   var options = [];
   /*
      Nv1 -> enteros menores a 10
      Nv2 -> enteros mayores a 10 y menos a 25.
      Nv3 -> Fracciones de {1/2, 1/4} o con denominador común pequeño < 4
      Nv4 -> Cualquier fracción con denominador <= a 16 
   */


   switch(this.nivel){
      case 1:
         numRndAux = this.shuffle([10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]);
         kn = numRndAux[0];
         kd =1
         nn = numRndAux[1];
         nd =1
         break;
      case 2:
         deno = this.shuffle([2,3,4,5,6]).shift();
         numRndAux = this.shuffle([2,3,4]).shift();
         var tmp = (Math.random()>0.5)
         
         kn =1
         kd =(tmp)?deno:(deno*numRndAux)
         nn =1
         nd =(!tmp)?deno:(deno*numRndAux);
         break;            
      case 3:
         numRndAux = this.shuffle([2,3,5,7]);
         kd = numRndAux.shift();
         kn = Math.floor(1+(kd-1)*Math.random());
         numRndAux = this.shuffle(numRndAux);
         nd = numRndAux[0];
         nn = Math.floor(1+(nd-1)*Math.random());
         break;
      case 0:
      default:
         numRndAux = this.shuffle([1,2,3,4,5,6,7,8,9]);
         kn = numRndAux[0];
         kd =1
         nn = numRndAux[1];
         nd =1
         break;
   }

   i = 0 ;
   optAct = {
      n : {numerador: nn, denominador : nd},
      k : {numerador: kn, denominador : kd},
   };
   options[i] = optAct;

   i = 1;
   optAct = {
      n : {numerador: kn, denominador : kd},
      k : {numerador: nn, denominador : nd},
   };
   options[i] = optAct;
   
   i = 2 ;
   optAct = {
      n : {numerador: nn, denominador : nd},
      k : {numerador: kn+1, denominador : nd},
   };
   options[i] = optAct;
    

   i = 3 ;
   optAct = {
      n : {numerador: nn+1, denominador : nd},
      k : {numerador: kn,   denominador : kd},
   };
   options[i] = optAct;
   return options;
}


/**
*/
proto.getSucesionHTML = function(initElement, incrFact, nDisplay) {
  
  var maxI = (nDisplay-1);
  var htmlDisp = '';
  for (var i = 0; i < nDisplay ; i++) {
     var kn,kd;
     kn = i * incrFact.numerador ;
     kd = incrFact.denominador ;

     kn = initElement.numerador*kd  +  initElement.denominador*kn;
     kd = kd * initElement.denominador;

     htmlDisp += this.getNumberHtml(kn,kd);
     if(i < maxI)
        htmlDisp += '<span class="coma">,</span> ';
  }
  return htmlDisp;
}


/**
*/
proto.getNumberHtml = function(numerador, denominador){
   var parteEnt   = Math.floor(numerador/denominador);
   numerador      = numerador-(parteEnt*denominador);
   var mcd        = Math.mcd(numerador,denominador);

   numerador      = numerador/mcd;
   denominador    = denominador/mcd;


   var htmlDisp = '';
   if(denominador>1 && numerador > 0 ){
      htmlDisp += ((parteEnt>0)?parteEnt:'') + 
      "<span class='fracction'> \
         <span class='numerador'>"+numerador+"</span> \
         <span class='denominador'>"+denominador+"</span> \
      </span>";
   } else {
      htmlDisp += parteEnt;
   }
   return "<span class='termino'>"+htmlDisp+"</span>";
}


/**
*/
proto.shuffle = function(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


/**
*/
proto.getShuffleArray = function(length) {
  var idxT = [];
  for (var i = 0; i < length; i++) {
     idxT.push(i);
  }
  idxT = this.shuffle(idxT);

  console.log("EL array random es : "+idxT);
  return idxT;
}