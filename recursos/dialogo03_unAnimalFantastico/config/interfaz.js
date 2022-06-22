var opcionesInicio = ["Desde el primer capítulo","Seleccionar un capítulo","Retomar mi última sesión"];

var chapters = {
    cap1: {
	'title': 'Un sueño inspirador',
	'description': 'Construirás tu propio alebrije.',
	'firstQuestion': 'c1_p1_alebrije',
	'src': 'cap1.jpg',
	'microworlds': []
    },
    cap2: {
	'title': '¿Cómo es tu alebrije?',
	'firstQuestion': 'c2_p0_puente',
	'description': 'Le darás vida y personalidad a tu alebrije.',
	'src': 'cap2.jpg',
	'microworlds': ['cap1_telon','cap1_historia','cap1_alebrije']
    },
    cap3: {
	'id': '',
	'title': 'Orden en el desorden',
	'firstQuestion': 'c3_p0_puente',
	'description': 'Elaborarás un párrafo ordenado.',
	'src': 'cap3.jpg',
	'microworlds': ['cap1_telon','cap1_historia','cap1_alebrije','cap2_alebrije']
    },
    cap4: {
	'title': 'Un toque poético',
	'firstQuestion': 'c4_p1_intro',
	'description': 'Le darás un toque literario a tu descripción.',
	'src': 'cap4.jpg',
	'microworlds': ['cap1_telon','cap1_historia','cap1_alebrije','cap2_alebrije']
    }
}

var indicaciones = {
    ayuda: {
	'2': "Este recurso tiene una duración aproximada de una hora. Está dividido en cuatro capítulos que se pueden consultar por separado.<br><br>Si es la primera vez que consultas este diálogo, elige la opción  'Desde el primer capítulo'.<br><br>Si ya trabajaste con el diálogo pero no lo terminaste, elige la opción 'Seleccionar un capítulo'. Identifica el capítulo donde te quedaste y elígelo presionando sobre él.",
        '3': "¡Bienvenid@ de regreso a este recurso!<br><br>Si quieres volver a realizar el diálogo completo, elige la opción 'Desde el primer capítulo'.<br><br>Si quieres retomar desde donde te quedaste la vez pasada, elige 'Retomar mi última sesión'.<br><br>También puedes reanudar el diálogo a partir de uno de sus cuatro capítulos. Presiona 'Seleccionar un capítulo', identifica el capítulo donde te quedaste y elígelo presionando sobre él."
    },
    instrucciones: "En este recurso dialogarás con un tutor. Del lado derecho de la pantalla se mostrarán sus preguntas y tú podrás contestarlas escribiendo con ayuda del teclado.\
		    <br><br>Del lado izquierdo encontrarás textos y actividades diversas. El tutor te indicará qué hacer en cada momento. Para volver a consultar una actividad que ya realizaste, presiona sobre su ícono en la parte izquierda superior de la pantalla.\
		    <br><img src='img/general/instrucciones/actividades.jpg'/>\
		    <br><br>Empieza por leer qué dice el tutor y continúa con las actividades, así hasta terminar el diálogo."
}
