var dialogManager;

initializeDialog = function(opts,rebuild){
    var config;
	if(typeof DIALOG_CONFIG_DATA != 'undefined'){
		config = DIALOG_CONFIG_DATA;
	} else {
		config = dialogo;
	}
    var dialog = new Dialog(config, { 'swearwords': SWEARWORDS_CONFIG_DATA, 'tracking': false } );
//    var dialogUI = new AvatarDialogUITextarea( { 'charDelay': config.delay, 'userData': opts.userData } );
    
    var dialogUI = new AvatarDialogUITextarea( { 'charDelay': config.delay, 
    		'userData': opts.userData, 
    		messages: {
    			'inputChat': "Escribe tus respuestas aquí, luego pulsa ENTER.",
				'btCloseDef' : "Haz clic aquí para cerrar esta ventana."
	} } );    
    
    
    dialogManager = new DialogManager(dialog, dialogUI, config);
    dialogManager.init();
    if(rebuild){
        dialogManager.dialog.rebuild();
    } else {
        dialogManager.start( opts.startData );
    }
}

