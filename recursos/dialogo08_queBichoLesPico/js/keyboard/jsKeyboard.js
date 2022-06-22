var jsKeyboard = {
    
    eraseTxtAl : true,
    settings: {
        buttonClass: "button", // default button class
        onclick: "jsKeyboard.write();", // default onclick event for button
        keyClass: "key", // default key class used to define style of text of the button
        text: {
            close: "close"
        },
        lettertodefaultkeybord : /^([^0-9^a-b^*+-\/\=\@\(\)\$]?\.?\,?)$/,
    },
    "keyboard": [], // different keyboards can be set to this variable in order to switch between keyboards easily.
    init: function(elem, keyboard) {
        jsKeyboard.keyboard["default"] = jsKeyboard.defaultKeyboard;
        jsKeyboard.keyboardLayout = elem;
        
        if (keyboard != null && keyboard != undefined)
            jsKeyboard.generateKeyboard(keyboard);
        else
            jsKeyboard.generateKeyboard("default");

        jsKeyboard.addKeyDownEvent();

         jsKeyboard.show();
         $(':input').not('[type="reset"]').not('[type="submit"]').on('focus, click', function(e)
         {
            jsKeyboard.currentElement = $(this);
            jsKeyboard.currentElementCursorPosition = $(this).getCursorPosition();
            //console.log('keyboard is now focused on '+jsKeyboard.currentElement.attr('name')+' at pos('+jsKeyboard.currentElementCursorPosition+')');
         });
         
         jsKeyboard.disableEnter(true);
    },
    disableEnter: function(disabled){
        var tt = $('.key.key_enter').closest('div.button');
        if(disabled){
            tt.addClass('disabled');
            tt.off();
        } else {
            tt.removeClass('disabled');
            tt.on('click',function(){jsKeyboard.enter();});
        }
    },
    focus: function(t) {
        jsKeyboard.currentElement = $(t);
        jsKeyboard.show();
    },
    keyboardLayout: "", // it shows the html element where keyboard is generated
    currentKeyboard: "default", // it shows the which keyboard is used. If it's not set default keyboard is used.
    currentElement: null,
    generateKeyboard: function(keyboard) {
        var bClass = "";
        var kClass = "";
        var onclick = "";
        var text = "";

        var s = "";
        s += "<div id=\"keyboard\">";
        s += "<div id=\"keyboardHeader\">";
        // s += "<div onclick=\"jsKeyboard.hide();\"><span>" + jsKeyboard.settings.text.close + "</span><span class=\"closex\"> X</span></div>"
        s += "</div>";

        /*small letter */
        s += "<div id=\"keyboardSmallLetter\">";
        $.each(jsKeyboard.keyboard[keyboard].smallLetter, function(i, key) {
            generate(key);
        });
        s += "</div>";

        /*capital letter*/
        s += "<div id=\"keyboardCapitalLetter\">";
        $.each(jsKeyboard.keyboard[keyboard].capitalLetter, function(i, key) {
            generate(key);
        });
        s += "</div>";

        /*number*/
        s += "<div id=\"keyboardNumber\">";
        $.each(jsKeyboard.keyboard[keyboard].number, function(i, key) {
            generate(key);
        });
        s += "</div>";

        /*symbols*/
        s += "<div id=\"keyboardSymbols\">";
        $.each(jsKeyboard.keyboard[keyboard].symbols, function(i, key) {
            generate(key);
        });
        s += "</div>";

        function generate(key) {
            bClass = key.buttonClass == undefined ? jsKeyboard.settings.buttonClass : key.buttonClass;
            kClass = key.keyClass == undefined ? jsKeyboard.settings.keyClass : key.keyClass;
            onclick = key.onclick == undefined ? jsKeyboard.settings.onclick.replace("()", "(" + key.value + ")") : key.onclick;

            text = (key.isChar != undefined || key.isChar == false) ? key.value : String.fromCharCode(key.value);
            /*
             //CAMBIAMOS EL EVENTO A MOUSEDOWN en lugar de onclick
            s += "<div class=\"" + bClass + "\" onclick=\"" + onclick + "\"><div class=\"" + kClass + "\">" + text + "</div></div>";
            */
            s += "<div class=\"" + bClass + "\" onmousedown=\"" + onclick + "\"><div class=\"" + kClass + "\">" + text + "</div></div>";

            bClass = ""; kClass = ""; onclick = ""; text = "";
        }

        $("#" + jsKeyboard.keyboardLayout).html(s);
    },
    addKeyDownEvent: function() {
        $("#keyboardCapitalLetter > div.button, #keyboardSmallLetter > div.button, #keyboardNumber > div.button, #keyboardSymbols > div.button").
            bind('mousedown', (function() { $(this).addClass("buttonDown"); })).
            bind('mouseup', (function() { $(this).removeClass("buttonDown"); })).
            bind('mouseout', (function() { $(this).removeClass("buttonDown"); }));

            //key focus down on actual keyboard key presses
            //todo:....

    },
    changeToSmallLetter: function() {
        $("#keyboardCapitalLetter,#keyboardNumber,#keyboardSymbols").css("display", "none");
        $("#keyboardSmallLetter").css("display", "block");
    },
    changeToCapitalLetter: function() {
        $("#keyboardCapitalLetter").css("display", "block");
        $("#keyboardSmallLetter,#keyboardNumber,#keyboardSymbols").css("display", "none");
    },
    changeToNumber: function() {
        $("#keyboardNumber").css("display", "block");
        $("#keyboardSymbols,#keyboardCapitalLetter,#keyboardSmallLetter").css("display", "none");
    },
    changeToSymbols: function() {
        $("#keyboardCapitalLetter,#keyboardNumber,#keyboardSmallLetter").css("display", "none");
        $("#keyboardSymbols").css("display", "block");
    },
    updateCursor: function()
    {
        //input cursor focus and position during typing
        jsKeyboard.currentElement.setCursorPosition(jsKeyboard.currentElementCursorPosition);
    },
    write: function(m) {
        var a = jsKeyboard.eraseTxtAl?"":jsKeyboard.currentElement.val(),
            b = String.fromCharCode(m),
            pos = jsKeyboard.eraseTxtAl?1:jsKeyboard.currentElementCursorPosition,
            output = [a.slice(0, pos), b, a.slice(pos)].join('');
        jsKeyboard.currentElement.val(output);
        jsKeyboard.currentElement.html(output);
        if(jsKeyboard.eraseTxtAl){
            jsKeyboard.currentElementCursorPosition = 1;
        } else {
            jsKeyboard.currentElementCursorPosition++; //+1 cursor
        }
        jsKeyboard.updateCursor();
        jsKeyboard.eraseTxtAl = false;
        jsKeyboard.disableEnter(false);

        if(jsKeyboard.currentElement.attr('id')=='text_alumno'){
            dialogManager.ui.checkStyleInput();
        }

        var rExpDef =  jsKeyboard.settings.lettertodefaultkeybord;
        var cambiar = rExpDef.test && rExpDef.test(b); 
        if (cambiar){
            setTimeout(function(){jsKeyboard.changeToSmallLetter()},100);
        }
    },
    del: function() {
        var a = jsKeyboard.eraseTxtAl?"":jsKeyboard.currentElement.val();
        var pos = jsKeyboard.eraseTxtAl?1:jsKeyboard.currentElementCursorPosition;

        console.log("Vamos a borrar : ",a,pos);
        
        var output = a;
        if(pos > 0)
            output = [a.slice(0, pos-1), a.slice(pos)].join('');

        jsKeyboard.currentElement.val(output);
        jsKeyboard.currentElement.html(output);
        
        if(jsKeyboard.eraseTxtAl){
                    jsKeyboard.currentElementCursorPosition = 0;
        } else {
            if(jsKeyboard.currentElementCursorPosition > 0){
                jsKeyboard.currentElementCursorPosition--; //-1 cursor
            }
        }

        jsKeyboard.updateCursor();
        jsKeyboard.eraseTxtAl = false;
        if(jsKeyboard.currentElement.attr('id')=='text_alumno'){
            dialogManager.ui.checkStyleInput();
        }
        if(output==''){
            jsKeyboard.disableEnter(true);
        }
    },
    enter: function() {
        var t = jsKeyboard.currentElement.val();
        if(jsKeyboard.eraseTxtAl || (t+'').length <= 0)
            return;
       
        t = $('<span>',{html:t}).text();
        console.log("Vamos a asignar el texto :",t);
        if(jsKeyboard.currentElement.attr('id')=='text_alumno'){
            dialogManager.ui.showInterventionStudent(t);
        } else {
            hideKeyboard(); //en inicio.js
        }
        jsKeyboard.eraseTxtAl = true;
        jsKeyboard.disableEnter(true);
    },
    space: function() {
        var a = jsKeyboard.eraseTxtAl?"":jsKeyboard.currentElement.val(),
            b = " ",
            pos = jsKeyboard.eraseTxtAl?1:jsKeyboard.currentElementCursorPosition,
            output = [a.slice(0, pos), b, a.slice(pos)].join('');
        jsKeyboard.currentElement.val(output);
         if(jsKeyboard.eraseTxtAl){
            jsKeyboard.currentElementCursorPosition = 1;
        } else {
            jsKeyboard.currentElementCursorPosition++; //+1 cursor
        }
        jsKeyboard.updateCursor();
        jsKeyboard.eraseTxtAl = false;
        if(jsKeyboard.currentElement.attr('id')=='text_alumno'){
            dialogManager.ui.checkStyleInput();
        }
        jsKeyboard.currentElement.html(output);
    },
    writeSpecial: function(m) {
        var a = jsKeyboard.eraseTxtAl?"":jsKeyboard.currentElement.val(),
            b = String.fromCharCode(m),
            pos = jsKeyboard.eraseTxtAl?1:jsKeyboard.currentElementCursorPosition,
            output = [a.slice(0, pos), b, a.slice(pos)].join('');
        jsKeyboard.currentElement.val(output);
        jsKeyboard.currentElement.html(output);
        if(jsKeyboard.eraseTxtAl){
            jsKeyboard.currentElementCursorPosition = 1;
        } else {
            jsKeyboard.currentElementCursorPosition++; //+1 cursor
        }
        jsKeyboard.updateCursor();
        jsKeyboard.eraseTxtAl = false;
        if(jsKeyboard.currentElement.attr('id')=='text_alumno'){
            dialogManager.ui.checkStyleInput();
        }
        //checkHistChat();
    },
    show: function() {
        $("#keyboard").animate({ "bottom": "0" }, "slow", function() { });
    },
    hide: function() {
        $("#keyboard").animate({ "bottom": "-350px" }, "slow", function() { });
    },
    defaultKeyboard: {
        capitalLetter:
            [
        // 1st row
               { value: 81 },{ value: 87 },{ value: 69 },{ value: 82 },{ value: 84 },{ value: 89 },{ value: 85 },{ value: 73 },{ value: 79 },{ value: 80 },
        // 2nd row
               { value: 65 },{ value: 83 },{ value: 68 },{ value: 70 },{ value: 71 },{ value: 72 },{ value: 74 },{ value: 75 },{ value: 76 },{ value: 209 },
        // 3rd row
               { value: "abc", isChar: "false", buttonClass: "button button_medium button_obscuro", onclick: "jsKeyboard.changeToSmallLetter();", keyClass: "key key_smallletter" },
               { value: 90, buttonClass: "button button_small_dash" },{ value: 88 },{ value: 67 },{ value: 86 },{ value: 66 },{ value: 78 },{ value: 77 },//{ value: 64 },
               { value: "áÁ", isChar: "false", buttonClass: "button button_small_dash button_white button_medium", onclick: "jsKeyboard.changeToSymbols();", keyClass: "key key_symbols" },
        // 4th row
               { value: "123 ?!", isChar: "false", onclick: "jsKeyboard.changeToNumber();", keyClass: "key key_number", buttonClass: "button button_numbers button_obscuro" },
               { value: "Espacio", isChar: "false", buttonClass: "button button_space", onclick: "jsKeyboard.space();", keyClass: "key key_space" },
               { value: "Suprimir", isChar: "false", onclick: "jsKeyboard.del();", buttonClass: "button button_del button_obscuro", keyClass: "key key_del" },
               { value: "ACEPTAR", isChar: "false", buttonClass: "button button_enter button_morado",  onclick: "", keyClass: "key key_enter" } //jsKeyboard.enter();
            ],
        smallLetter: [
        // 1st row
                { value: 113 },{ value: 119 },{ value: 101 },{ value: 114 },{ value: 116 },{ value: 121 },{ value: 117 },{ value: 105 },{ value: 111 },{ value: 112 },
        // 2nd row
                { value: 97 },{ value: 115 },{ value: 100 },{ value: 102 },{ value: 103 },{ value: 104 },{ value: 106 },{ value: 107 },{ value: 108 },{ value: 241 },
        // 3rd row
                { value: "ABC", isChar: "false", buttonClass: "button button_medium button_obscuro", onclick: "jsKeyboard.changeToCapitalLetter();", keyClass: "key key_capitalletterleft" },
                { value: 122, buttonClass: "button button_small_dash"},{ value: 120 },{ value: 99 },{ value: 118 },{ value: 98 },
                { value: 110 },{ value: 109 }, //{ value: 64 },
                { value: "áÁ", isChar: "false", buttonClass: "button button_small_dash button_white button_medium", onclick: "jsKeyboard.changeToSymbols();", keyClass: "key key_symbols" },
        // 4th row
                { value: "123 ?!", isChar: "false", onclick: "jsKeyboard.changeToNumber();", keyClass: "key key_number", buttonClass: "button button_numbers button_obscuro" }, 
               { value: "Espacio", isChar: "false", buttonClass: "button button_space", onclick: "jsKeyboard.space();", keyClass: "key key_space" },
               { value: "Suprimir", isChar: "false", onclick: "jsKeyboard.del()", buttonClass: "button button_del button_obscuro", keyClass: "key key_del" },
               { value: "ACEPTAR", isChar: "false", buttonClass: "button button_enter button_morado", onclick: "", keyClass: "key key_enter" } //jsKeyboard.enter();
            ],
        number: [ //números y símbolos
        // 1st row
                { value: 49 },{ value: 50 },{ value: 51 },{ value: 52 },{ value: 53 },{ value: 54 },{ value: 55 },{ value: 56 },{ value: 57 },{ value: 48 },
        // 2nd row
                { value: 43 , buttonClass: "button button_dash" }, { value: 45 },{ value: 42 },{ value: 47 },{ value: 61 },{ value: 40 },{ value: 41 },
                { value: 64 },{ value: 36 },
        //3rd row
                { value: 44 },{ value: 46 },{ value: 58 },{ value: 59 },{ value: 34 },{ value: 191 },{ value: 63 },{ value: 161 },{ value: 33 },
                { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },

        // 4th row
               { value: "abc", isChar: "false", buttonClass: "button button_larger button_white", onclick: "jsKeyboard.changeToSmallLetter();", keyClass: "key key_smallletter" },
               { value: "Espacio", isChar: "false", buttonClass: "button button_space", onclick: "jsKeyboard.space();", keyClass: "key key_space" },
               { value: "Suprimir", isChar: "false", onclick: "jsKeyboard.del()", buttonClass: "button button_del button_obscuro", keyClass: "key key_del" },
               { value: "ACEPTAR", isChar: "false", buttonClass: "button button_enter button_morado", onclick: "", keyClass: "key key_enter" }, //jsKeyboard.enter();
            ],
        symbols: [ // LO ESTOY USANDO PARA LOS CARACTERES RAROS
        // 1st row
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
            { value: 225 }, { value: 233 },{ value: 237 },{ value: 243 },{ value: 250 },{ value: 252 },
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
        // 2nd row
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
            { value: 193 }, { value: 201 },{ value: 205 },{ value: 211 },{ value: 218 },{ value:220},
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
        // 3rd row
            { value: "abc", isChar: "false", buttonClass: "button button_larger button_dash button_obscuro", onclick: "jsKeyboard.changeToSmallLetter();", keyClass: "key key_smallletter" },
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
            { value: "", isChar: "false", buttonClass: "button", onclick: "", keyClass: "key" },
            { value: "ABC", isChar: "false", buttonClass: "button button_larger button_obscuro", onclick: "jsKeyboard.changeToCapitalLetter();", keyClass: "key key_capitalletterleft" },
        // 4th row
           { value: "123 ?!", isChar: "false", onclick: "jsKeyboard.changeToNumber();", keyClass: "key key_number", buttonClass: "button button_numbers button_obscuro" }, 
               { value: "Espacio", isChar: "false", buttonClass: "button button_space", onclick: "jsKeyboard.space();", keyClass: "key key_space" },
               { value: "Suprimir", isChar: "false", onclick: "jsKeyboard.del()", buttonClass: "button button_del button_obscuro", keyClass: "key key_del" },
               { value: "ACEPTAR", isChar: "false", buttonClass: "button button_enter button_morado", onclick: "", keyClass: "key key_enter" }  //jsKeyboard.enter();
         ]
    }
}


// GET CURSOR POSITION
jQuery.fn.getCursorPosition = function(){
    if(this.lengh == 0) return -1;
    return $(this).getSelectionStart();
}

jQuery.fn.getSelectionStart = function(){
    if(this.lengh == 0) return -1;
    input = this[0];

    var pos = input.value.length;

    if (input.createTextRange) {
        var r = document.selection.createRange().duplicate();
        r.moveEnd('character', input.value.length);
        if (r.text == '')
        pos = input.value.length;
        pos = input.value.lastIndexOf(r.text);
    } else if(typeof(input.selectionStart)!="undefined")
    pos = input.selectionStart;

    return pos;
}

//SET CURSOR POSITION
jQuery.fn.setCursorPosition = function(pos) {
  this.each(function(index, elem) {
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  });
  return this;
};

