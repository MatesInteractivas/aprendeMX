var opcionesInicio = ["Desde el primer capítulo","Seleccionar un capítulo","Retomar mi última sesión"];

var chapters = {
    cap1: {
	'title': 'Por el correo temprano',
	'description': 'Escucharás una canción y conocerás la historia que cuenta una carta.',
	'firstQuestion': 'cap1_preg1',
	'src': 'cap1.jpg',
	'microworlds': []
    },
    cap2: {
	'title': 'Mi amiga y el bicho',
	'firstQuestion': 'cap2_puente',
	'description': 'Leerás una carta que le escribe una amiga al tutor sobre la enfer- medad que ella tiene.',
	'src': 'cap2.jpg',
	'microworlds': ['cap1_notita']
    },
    cap3: {
	'title': '¿Podemos hacer algo?',
	'firstQuestion': 'cap3_preg1',
	'description': 'Conocerás qué se dice en algunos medios sobre esa enfermedad.',
	'src': 'cap3.jpg',
	'microworlds': ['cap1_laCarta','cap2_carta','cap2_tabasco']
    },
    cap4: {
	'title': '¡A divulgar!',
	'firstQuestion': 'cap4_preg1',
	'description': "Contribuirás a elaborar mensajes para difundir información vital acerca de la enfermedad.",
	'src': 'cap4.jpg',
	'microworlds': ['cap1_laCarta','cap2_carta','cap2_tabasco','cap3_cancion','cap3_blog','cap3_datos']
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

