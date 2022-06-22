var opcionesInicio = ["Desde el primer capítulo","Seleccionar un capítulo","Retomar mi última sesión"];

var chapters = {
    caricaturas: {
	'title': 'Unas caricaturas',
	'description': 'Analizarás dos imágenes en búsqueda de semejanzas y diferencias.',
	'firstQuestion': 'cap1_preg1',
	'src': 'tango.jpg',
	'microworlds': []
    },
    adivinanzas: {
	'title': 'Adivinanzas',
	'firstQuestion': 'cap2_preg1',
	'description': 'Resolverás varias adivinanzas y encontrarás pistas para construirlas.',
	'src': 'adivinanzas.jpg',
	'microworlds': ['cap1_gatoParaguas']
    },
    avion: {
	'title': 'Un avión es...',
	'firstQuestion': 'cap3_preg1_opinion',
	'description': 'Aquí construirás una buena descripción de un avión.',
	'src': 'avion.jpg',
	'microworlds': ['cap1_gatoParaguas','cap2_adivinanza','cap2_preg3_opcMult','cap2_preg5_expli']
    },
    juego: {
	'title': 'Adivina qué es',
	'firstQuestion': 'cap4_preg1_intro',
	'description': 'Jugarás un Adivina quién adaptado para los transportes.',
	'src': 'juego.jpg',
	'microworlds': ['cap1_gatoParaguas','cap2_adivinanza','cap2_preg3_opcMult','cap2_preg5_expli','cap3_preg1_avion','cap3_preg5_avion_conclu']	
    }
}

var indicaciones = {
    ayuda: {
	'2': "Este recurso tiene una duración aproximada de una hora. Está dividido en cuatro capítulos que se pueden consultar por separado.<br><br>Si es la primera vez que consultas este diálogo, elige la opción 'Desde el primer capítulo'.<br><br>Si ya trabajaste con el diálogo pero no lo terminaste, elige la opción 'Seleccionar un capítulo'. Identifica el capítulo donde te quedaste y elígelo presionando sobre él.",
        '3': "¡Bienvenid@ de regreso a este recurso!<br><br>Si quieres volver a realizar el diálogo completo, elige la opción 'Desde el primer capítulo'.<br><br>Si quieres retomar desde donde te quedaste la vez pasada, elige 'Retomar mi última sesión'.<br><br>También puedes reanudar el diálogo a partir de uno de sus cuatro capítulos. Presiona 'Seleccionar un capítulo', identifica el capítulo donde te quedaste y elígelo presionando sobre él."
    },
    instrucciones: "En este recurso dialogarás con un tutor. Del lado derecho de la pantalla se mostrarán sus preguntas y tú podrás contestarlas escribiendo con ayuda del teclado.\
		    <br><br>Del lado izquierdo encontrarás textos y actividades diversas. El tutor te indicará qué hacer en cada momento. Para volver a consultar una actividad que ya realizaste, presiona sobre su ícono en la parte izquierda superior de la pantalla.\
		    <br><img src='img/general/instrucciones/actividades.jpg'/>\
		    <br><br>Empieza por leer qué dice el tutor y continúa con las actividades, así hasta terminar el diálogo."
}
