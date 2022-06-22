var opcionesInicio = ["Desde el primer capítulo","Seleccionar un capítulo","Retomar mi última sesión"];

var chapters = {
    gato: {
	'title': '¿Qué es eso que ves?',
	'description': 'Platicaremos un poco sobre unas divertidas caricaturas.',
	'firstQuestion': 'cap1_preg1',
	'src': 'gato.jpg',
	'microworlds': []
    },
    losPerez: {
	'title': 'Los Pérez',
	'firstQuestion': 'cap2_preg1',
	'description': 'Conocerás a la familia Pérez y sus deseos para un futuro viaje.',
	'src': 'losPerez.jpg',
	'microworlds': ['cap1_comic']
    },
    tabla: {
	'id': '',
	'title': '¿Importa mucho?',
	'firstQuestion': 'cap3_preg1',
	'description': 'Analizarás la impor- tancia de las peticiones de cada quien.',
	'src': 'tabla.jpg',
	'microworlds': ['cap1_comic','cap2_losPerez','cap2_actividad']
    },
    tuLista: {
	'title': '¿Y tu lista?',
	'firstQuestion': 'cap4_preg1',
	'description': 'Elaborarás tu propia lista para encontrar tu destino de viaje ideal.',
	'src': 'tuLista.jpg',
	'microworlds': ['cap1_comic','cap2_losPerez','cap2_actividad','cap3_tabla']
    }
}

var indicaciones = {
    ayuda: {
	'2': "Este recurso tiene una duración aproximada de cincuenta minutos. Está dividido en cuatro capítulos que se pueden consultar por separado.<br><br>Si es la primera vez que consultas este diálogo, elige la opción 'Desde el primer capítulo'.<br><br>Si ya trabajaste con el diálogo pero no lo terminaste, elige la opción 'Seleccionar un capítulo'. Identifica el capítulo donde te quedaste y elígelo presionando sobre él.",
        '3': "¡Bienvenid@ de regreso a este recurso!<br><br>Si quieres volver a realizar el diálogo completo, elige la opción 'Desde el primer capítulo'.<br><br>Si quieres retomar desde donde te quedaste la vez pasada, elige 'Retomar mi última sesión'.<br><br>También puedes reanudar el diálogo a partir de uno de sus cuatro capítulos. Presiona 'Seleccionar un capítulo', identifica el capítulo donde te quedaste y elígelo presionando sobre él."
    },
    instrucciones: "En este recurso dialogarás con un tutor. Del lado derecho de la pantalla se mostrarán sus preguntas y tú podrás contestarlas escribiendo con ayuda del teclado.\
		    <br><br>Del lado izquierdo encontrarás textos y actividades diversas. El tutor te indicará qué hacer en cada momento. Para volver a consultar una actividad que ya realizaste, presiona sobre su ícono en la parte izquierda superior de la pantalla.\
		    <br><img src='img/general/instrucciones/actividades.jpg'/>\
		    <br><br>Empieza por leer qué dice el tutor y continúa con las actividades, así hasta terminar el diálogo."
}
