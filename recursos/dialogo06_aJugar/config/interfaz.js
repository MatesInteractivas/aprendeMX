var opcionesInicio = ["Desde el primer capítulo","Seleccionar un capítulo","Retomar mi última sesión"];

var chapters = {
    candidatas: {
	'title': 'Eligiendo candidatas',
	'description': 'Ayudarás a diseñar una prueba para encontrar una nueva delantera.',
	'firstQuestion': 'cap1_preg1',
	'src': 'candidatas.jpg',
	'microworlds': []
    },
    parrafo: {
	'title': 'Un buen párrafo',
	'firstQuestion': 'cap2_preg1',
	'description': 'Describirás las fortalezas y los puntos débiles de la primera candidata.',
	'src': 'parrafo.jpg',
	'microworlds': ['cap1_pruebas','cap1_candidatas']
    },
    duelo: {
	'title': 'Duelo futbolero',
	'firstQuestion': 'cap3_preg1',
	'description': 'Te enfrentarás a las otras dos chicas en la cancha para completar el reporte.',
	'src': 'duelo.jpg',
	'microworlds': ['cap1_pruebas','cap1_candidatas','cap2_grafica','cap2_mariaElena']
    },
    estilo: {
	'title': 'Otras formas de redacción',
	'firstQuestion': 'cap4_preg1',
	'description': 'Harás cambios de estilo al reporte para que quede más a tu gusto.',
	'src': 'estilo.jpg',
	'microworlds': ['cap1_pruebas','cap1_candidatas','cap2_grafica','cap2_mariaElena','cap3_conectores','cap3_duelo']
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

