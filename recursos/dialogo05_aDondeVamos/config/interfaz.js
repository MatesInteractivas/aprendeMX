var opcionesInicio = ["Desde el primer capítulo","Seleccionar un capítulo","Retomar mi última sesión"];

var chapters = {
    mochila: {
	'title': 'La mochila',
	'description': 'Entenderás la impor- tancia de comparar características.',
	'firstQuestion': 'cap1_intro_a',
	'src': 'mochila.jpg',
	'microworlds': []
    },
    mapa: {
	'title': 'El mapa',
	'firstQuestion': 'cap2_preg1',
	'description': 'Revisarás los deseos de viaje de la familia Pérez y explorarás un mapa del Bajío.',
	'src': 'mapa.jpg',
	'microworlds': ['cap1_comic']
    },
    finalistas: {
	'id': '',
	'title': 'Los tres finalistas',
	'firstQuestion': 'cap3_preg1',
	'description': 'Leerás más sobre los lugares que cubren las peticiones más impor- tantes de los Pérez.',
	'src': 'finalistas.jpg',
	'microworlds': ['cap1_comic','cap2_losPerez','cap2_tabla','cap2_mapa']
    },
    ganador: {
	'title': 'El ganador',
	'firstQuestion': 'cap4_preg1',
	'description': 'Analizarás qué lugar sería el indicado para el abuelo, Trini, Lucía y Toño.',
	'src': 'ganador.jpg',
	'microworlds': ['cap1_comic','cap2_losPerez','cap2_tabla','cap2_mapa','cap3_mapa']
    }
}

var indicaciones = {
    ayuda: {
	'2': "Este recurso tiene una duración aproximada de cincuenta minutos. Está dividido en cuatro capítulos que se pueden consultar por separado.<br><br>Si es la primera vez que consultas este diálogo, elige la opción 'Desde el primer capítulo'.<br><br>Si ya trabajaste con el diálogo pero no lo terminaste, elige la opción 'Seleccionar un capítulo'. Identifica el capítulo donde te quedaste y elígelo presionando sobre él.",
        '3': "¡Bienvenid@ de regreso a este recurso!<br><br>Si quieres volver a realizar el diálogo completo, elige la opción 'Desde el primer capítulo'.<br><br>Si quieres retomar desde donde te quedaste la vez pasada, elige 'Retomar mi última sesión'.<br><br>También puedes reanudar el diálogo a partir de uno de sus cinco capítulos. Presiona 'Seleccionar un capítulo', identifica el capítulo donde te quedaste y elígelo presionando sobre él."
    },
    instrucciones: "En este recurso dialogarás con un tutor. Del lado derecho de la pantalla se mostrarán sus preguntas y tú podrás contestarlas escribiendo con ayuda del teclado.\
		    <br><br>Del lado izquierdo encontrarás textos y actividades diversas. El tutor te indicará qué hacer en cada momento. Para volver a consultar una actividad que ya realizaste, presiona sobre su ícono en la parte izquierda superior de la pantalla.\
		    <br><img src='img/general/instrucciones/actividades.jpg'/>\
		    <br><br>Empieza por leer qué dice el tutor y continúa con las actividades, así hasta terminar el diálogo."
}
