var opcionesInicio = ["Desde el primer capítulo","Seleccionar un capítulo","Retomar mi última sesión"];

var chapters = {
    cap1: {
	'title': '¿Te resulta familiar?',
	'description': 'Escucharás unas quejas que quizá te resulten familiares.',
	'firstQuestion': 'cap1_preg1',
	'src': 'cap1.jpg',
	'microworlds': []
    },
    cap2: {
	'title': '¡A la defensa!',
	'firstQuestion': 'cap2_puente',
	'description': 'Ordenarás los fragmentos de un testimonio de defensa.',
	'src': 'cap2.jpg',
	'microworlds': ['cap1_audios','cap1_viejita']
    },
    cap3: {
	'title': '¿Y tu testimonio?',
	'firstQuestion': 'cap3_preg1',
	'description': 'Empezarás a elaborar tu propio texto de autodefensa.',
	'src': 'cap3.jpg',
	'microworlds': ['cap1_audios','cap1_viejita','cap2_testimonio','cap2_cuadro']
    },
    cap4: {
	'title': 'Argumentando',
	'firstQuestion': 'cap4_puente',
	'description': "Elegirás argumentos a favor de tu caso y darás los toques finales a tu argumentación.",
	'src': 'cap4.jpg',
	'microworlds': ['cap1_audios','cap1_viejita','cap2_testimonio','cap2_cuadro','cap3_argumentacion']
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

