var opcionesInicio = ["Desde el primer capítulo","Seleccionar un capítulo","Retomar mi última sesión"];

var chapters = {
    cap1: {
	'title': 'Dos posturas',
	'description': 'Conocerás dos posturas ante un proyecto para mejorar las instala- ciones de una escuela.',
	'firstQuestion': 'cap1_preg1',
	'src': 'cap1.jpg',
	'microworlds': []
    },
    cap2: {
	'title': 'En busca de argumentos',
	'firstQuestion': 'cap2_preg1',
	'description': 'Buscarás argumentos a favor de ambas posturas. ',
	'src': 'cap2.jpg',
	'microworlds': ['cap1_escuela']
    },
    cap3: {
	'title': 'Recabando datos',
	'firstQuestion': 'cap3_puente',
	'description': 'Escogerás los datos que mejor fundamentan los argumentos.',
	'src': 'cap3.jpg',
	'microworlds': ['cap1_escuela','cap2_mapa']
    },
    cap4: {
	'title': 'Y tú, ¿de qué lado estás?',
	'firstQuestion': 'cap4_puente',
	'description': 'Elaborarás un cartel en apoyo a la postura que favoreces.',
	'src': 'cap4.jpg',
	'microworlds': ['cap1_escuela','cap2_mapa','cap3_encuesta','cap3_datos','cap3_datos_bando2']
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

