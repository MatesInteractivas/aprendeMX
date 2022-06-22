var opcionesInicio = ["Desde el primer capítulo","Seleccionar un capítulo","Retomar mi última sesión"];

var chapters = {
    historieta: {
	'title': 'La ardilla',
	'description': 'Analizarás una historia de teléfono descompuesto.',
	'firstQuestion': 'cap1_preg1',
	'src': 'historieta.jpg',
	'microworlds': []
    },
    huron: {
	'title': 'El hurón',
	'firstQuestion': 'cap2_preg1a',
	'description': 'Identificarás infor- mación importante para cuidar a un hurón.',
	'src': 'huron.jpg',
	'microworlds': ['cap1_comic','cap1_comic_2']
    },
    veterinaria: {
	'title': 'La veterinaria',
	'firstQuestion': 'cap3_preg1',
	'description': 'Aclararás algunas dudas sobre el cuidado del hurón.',
	'src': 'veterinaria.jpg',
	'microworlds': ['cap1_comic','cap1_comic_2','cap2_blog','cap2_blog_conRubros']
    },
    cuadro: {
	'title': 'Cuadro sinóptico',
	'firstQuestion': 'cap4_preg1a',
	'description': 'Organizarás la infor- mación obtenida en un cuadro sinóptico.',
	'src': 'cuadro.jpg',
	'microworlds': ['cap1_comic','cap1_comic_2','cap2_blog','cap2_blog_conRubros','cap3_veterinaria']
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

