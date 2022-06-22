var opcionesInicio = ["Desde el primer capítulo","Seleccionar un capítulo","Retomar mi última sesión"];

var chapters = {
    tangrama: {
	'title': 'Ideas geométricas',
	'description': 'Descubrirás qué es un tangrama.',
	'firstQuestion': 'cap1_preg1_tangrama',
	'src': 'tangrama.jpg',
	'microworlds': []
    },
    enunciado: {
	'title': '¡Respóndeme!',
	'firstQuestion': 'cap2_preg1_intro_c2',
	'description': 'Conocerás dos definiciones de los enunciados y elaborarás una propia.',
	'src': 'anaLaura.jpg',
	'microworlds': ['cap1_tangrama','cap1_oraciones']
    },
    pablo: {
	'title': '¿Qué contestó?',
	'firstQuestion': 'cap3_preg1_intro_c3',
	'description': 'Me ayudarás a saber qué me respondió Pablo.',
	'src': 'pablo.jpg',
	'microworlds': ['cap1_tangrama','cap1_oraciones','cap2_definicion','cap2_conversacion']
    },
    carroPerro: {
	'title': 'El párrafo accidentado',
	'firstQuestion': 'cap4_preg1_intro',
	'description': 'Rescatarás un pequeño párrafo del ataque de un perro.',
	'src': 'carroPerro.jpg',
	'microworlds': ['cap1_tangrama','cap1_oraciones','cap2_definicion','cap2_conversacion','cap3_pablo_audio','cap3_pablo']
    }
}


var indicaciones = {
    ayuda: {
	'2': "Este recurso tiene una duración aproximada de cuarenta minutos. Está dividido en cuatro capítulos que se pueden consultar por separado.<br><br>Si es la primera vez que consultas este diálogo, elige la opción 'Desde el primer capítulo'.<br><br>Si ya trabajaste con el diálogo pero no lo terminaste, elige la opción 'Seleccionar un capítulo'. Identifica el capítulo donde te quedaste y elígelo presionando sobre él.",
        '3': "¡Bienvenid@ de regreso a este recurso!<br><br>Si quieres volver a realizar el diálogo completo, elige la opción 'Desde el primer capítulo'.<br><br>Si quieres retomar desde donde te quedaste la vez pasada, elige 'Retomar mi última sesión'.<br><br>También puedes reanudar el diálogo a partir de uno de sus cuatro capítulos. Presiona 'Seleccionar un capítulo', identifica el capítulo donde te quedaste y elígelo presionando sobre él."
    },
    instrucciones: "En este recurso dialogarás con un tutor. Del lado derecho de la pantalla se mostrarán sus preguntas y tú podrás contestarlas escribiendo con ayuda del teclado.\
		    <br><br>Del lado izquierdo encontrarás textos y actividades diversas. El tutor te indicará qué hacer en cada momento. Para volver a consultar una actividad que ya realizaste, presiona sobre su ícono en la parte izquierda superior de la pantalla.\
		    <br><img src='img/general/instrucciones/actividades.jpg'/>\
		    <br><br>Empieza por leer qué dice el tutor y continúa con las actividades, así hasta terminar el diálogo."
}
