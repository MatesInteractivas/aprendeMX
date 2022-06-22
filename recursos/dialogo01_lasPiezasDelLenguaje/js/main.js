var dialogManager;

initializeDialog = function(opts,rebuild){
    var config;
	if(typeof DIALOG_CONFIG_DATA != 'undefined'){
		config = DIALOG_CONFIG_DATA;
	} else {
		config = dialogo;
	}
    var dialog = new Dialog(config, { 'swearwords': SWEARWORDS_CONFIG_DATA, 'colloquialisms': COLLOQUIALISMS_CONFIG_DATA ,'tracking': false } );
    var dialogUI = new AvatarDialogUI( { 'charDelay': config.delay, 'userData': opts.userData } );
    dialogManager = new DialogManager(dialog, dialogUI, config);
    dialogManager.init();
    if(rebuild){
        dialogManager.dialog.rebuild();
    } else {
        dialogManager.start( opts.startData );
    }
    
}

