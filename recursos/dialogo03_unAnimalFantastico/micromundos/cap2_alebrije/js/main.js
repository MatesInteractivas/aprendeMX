/*var oraciones = {
	cabeza : [
		{},
		// cabeza 1: elefante/caracol
		{
			id: 'cabeza1',
			trompa: {
				'oso': 'Tiene trompa de oso hormiguero.',
				'elefante': 'Tiene trompa de elefante.',
				'tapir': 'Tiene trompa de tapir.',
				'largo': 'Tiene una trompa larga y delgada.',
				'delgado': 'Tiene una trompa larga y delgada.',
				'tubo': 'Tiene la cara en forma de tubo.',
				'ese': 'Tiene la cara en forma de ese.',
				'nada': 'Tiene una trompa de lo más normal.',
				'recta': 'Tiene la trompa recta.',
				'curvada': 'Tiene la trompa curvada.',
				'default': 'Tiene trompa de elefante.'
			},
			ojos: {
				'caracol': 'Tiene ojos parecidos a los de un caracol.',
				'insecto': 'Tiene ojos de insecto.',
				'palo': 'Tiene los ojos sobre palitos.',
				'bola': 'Tiene los ojos de bolita.',
				'redondo': 'Tiene los ojos redondos.',
				'circular': 'Tiene los ojos redondos.',
				 'boliche': 'Tiene los ojos de bola de boliche.',
				'saltones': 'Tiene los ojos saltones.',
				'canica': 'Tiene los ojos de canica.',
				'extraterrestre': 'Tiene ojos de extraterrestre.',
				 'naranja': 'Tiene los ojos de color naranja.',
				 'cebolla': 'Tiene ojos de cebolla.',
				'nada': 'Tiene unos ojos totalmente normales.',
				'default': 'Tiene ojos parecidos a los de un caracol.'

			},
			cuerno: {
				'amarillo': 'Tiene dos cuernos amarillos con rayitas.',
				'curvado': 'Tiene dos cuernos curvados.',
				'raya': 'Tiene dos cuernos amarillos con rayitas.',
				'anillo': 'Tiene dos cuernos amarillos con anillos.',
				'default': 'Tiene dos cuernos amarillos con rayitas.'
			}
		},
		// cabeza 2: pez
		{
			id: 'cabeza2',
			dientes: {
				'puntiagudo': 'Tiene muchos dientes puntiagudos.',
				'filoso': 'Tiene muchos dientes filosos.',
				'colmillo' : 'Tiene dos colmillos y muchos dientecitos.',
				'dientecito' : 'Tiene muchos dientecitos.',
				'tiburón': 'Tiene dientes de tiburón',
				'piraña': 'Tiene dientes de piraña',
				'tigre': 'Tiene dientes de tigre.',
				'serpiente': 'Tiene dientes de serpiente.',
				'cocodrilo': 'Tiene dientes de cocodrilo.',
				'monstruo': 'Tiene dientes de monstruo.',
				'default': 'Tiene muchos dientes puntiagudos.'
			},
			lengua: {
				'fuera': 'Tiene la lengua de fuera.',
				'punto': 'Tiene la lengua roja con puntos blancos.',
				'sacar': 'Tiene la lengua de fuera.',
				'camaleón': 'Tiene lengua de camaleón.',
				'iguana': 'Tiene lengua parecida a la de una iguana.',
				'reptil': 'Tiene lengua de reptil.',
				'lenguota': 'Tiene una lenguota.',
				'grande': 'Tiene una lengua muy grande.'
				'largo': 'Tiene una lengua larga.',
				'puntiagudo': 'Tiene la lengua puntiaguda.',
				'default': 'Tiene la lengua de fuera.'
			},
			cabeza: {
				//grandísimo, globo, redondo, bola, deforme, raro
				'grande': 'Tiene una cabeza muy grande.',
				'grandísimo': 'Tiene una cabeza muy grande.',
				'pez': 'Tiene una cabeza de pez.',
				'globo': 'Tiene una cabeza en forma de globo.',
				'bola': 'Tiene una cabeza en forma de bola.',
				'redondo': 'Tiene una cabeza redonda.',
				'deforme': 'Tiene una cabeza deforme.',
				'enorme': 'Tiene una cabeza enorme.',
				'raro': 'Tiene una cabeza rara.',
				'default': 'Tiene una cabeza redonda.'
			},
			ojos: {
				'grande': 'Tiene los ojos grandes.',
				'pez': 'Tiene los ojos de pez.',
				'verde': 'Tiene los ojos verde con azul.',
				'azul': 'Tiene los ojos verde con azul.',
				'cebolla': 'Tiene los ojos de cebolla.',
				'default': 'Tiene los ojos grandes.'
			},
			cuerno: {
				'verde': 'Tiene un cuerno verde en la frente.',
				'default': 'Tiene un cuerno verde en la frente.'
			}
		},
		// cabeza 3: ave
		{
			id: 'cabeza3',
			pico: {
				//grande,enorme,alargado,puntiagudo
				'naranja' : 'Tiene el pico naranja.',
				'rojo': 'Tiene un pico con la punta roja.',
				'amarillo': 'Tiene el pico amarillo.',
				'dorado': 'Tiene el pico dorado.',
				'gallo': 'Tiene pico de gallo.',
				'gallina': 'Tiene pico de gallina.',
				'pájaro': 'Tiene pico de pájaro.',
				'ave': 'Tiene pico de pájaro.',
				'águila': 'Tiene pico de águila.',
				'halcón': 'Tiene pico de halcón.',
				'pavorreal': 'Tiene pico de pavorreal.',
				'fénix': 'Tiene pico de fénix.',
				'grande': 'Tiene un pico grande.',
				'enorme': 'Tiene un pico enorme.',
				'gigasteco': 'Tiene un pico gigantesco.',
				'alargado': 'Tiene un pico alargado.',
				'alargada': 'Tiene un pico alargado.',
				'largo': 'Tiene un pico alargado.',
				'puntiagudo': 'Tiene un pico puntiagudo.',
				'default': 'Tiene un pico de águila.'
			},
			orejas: {
				'grande' : 'Tiene unas orejas grandes.',
				'chico' : 'Tiene unas orejas chicas.',
				'pequeño' : 'Tiene unas orejas pequeñas.',
				'mediano' : 'Tiene unas orejas medianas.'
				'alargado' : 'Tiene dos orejas alargadas.',
				'largo' : 'Tiene dos orejas alargadas.',
				'delgado' : 'Tiene dos orejas largas y delgadas.',
				'burro' : 'Tiene orejas de burro.',
				'conejo' : 'Tiene orejas de conejo.',
				'raya' : 'Tiene dos orejas con rayas blancas.',
				'rojo' : 'Tiene dos orejas rojas con rayas blancas.',
				'default': 'Tiene orejas de conejo.'
			},
			ojos: {
				//adorno,tatuaje,negro,línea,círculo, inescrutable,serio
				'pájaro' : 'Tiene ojos de pájaro.',
				'naranjo' : 'Tiene ojos naranjas.',
				'grande' : 'Tiene ojos grandes.',
				'chico' : 'Tiene ojos chicos.',
				'pequeño' : 'Tiene ojos pequeños.',
				'mediano' : 'Tiene ojos medianos.'
				'ovalados' : 'Tiene ojos ovalados.',
				'alargado' : 'Tiene ojos alargados.',
				'tatuaje' : 'Tiene un tatuaje en los ojos.',
				'adorno' : 'Tiene un adorno en los ojos.',
				'misterioso' : 'Tiene unos ojos misteriosos.',
				'inescrutable' : 'Tiene unos ojos misteriosos.',
				'serio' : 'Tiene unos ojos muy serios.',
				'default': 'Tiene ojos de pájaro.'
			},
			cabeza: {
				//redondo,circular,redondeado,ovalada,larga,chico,pequeño,mediano
				//pájaro,ave,pajarito,águila,halcón,gallina,gallo, pollo
				'redondo' : 'Tiene una cabeza redonda.',
				'circular' : 'Tiene una cabeza circular.',
				'redondeado' : 'Tiene una cabeza redondeada.',
				'ovalado' : 'Tiene una cabeza ovalada.',
				'largo' : 'Tiene una cabeza alargada.',
				'alargado' : 'Tiene una cabeza alargada.',
				'chico' : 'Tiene la cabeza de un ave chica.',
				'pequeño' : 'Tiene la cabeza de un ave pequeña.',
				'mediano' : 'Tiene la cabeza de un ave mediana.',
				'pájaro' : 'Tiene cabeza de pájaro.',
				'pajarito' : 'Tiene cabeza de un pajarito.',
				'ave' : 'Tiene cabeza de ave.',
				'águila' : 'Tiene cabeza de águila.',
				'halcón' : 'Tiene cabeza de halcón.',
				'gallina' : 'Tiene cabeza de gallina.',
				'pollo' : 'Tiene cabeza de gallina.',
				'gallo' : 'Tiene cabeza de gallo.',
				'pavorreal' : 'Tiene cabeza de pavorreal.',
				'fénix' : 'Tiene cabeza de fénix.',
				'default': 'Tiene cabeza de pájaro.'
			}
		}
	],
	cuerpo: [
		{},
		{
			id: 'cuerpo1',
			cuerpo: {
				'largo': 'Tiene un cuerpo largo y delgado.',
				'default': 'Tiene un cuerpo largo y delgado.'
			},
			patas: {
				'gecko': 'Tiene cuatro patas, parecidas a las de un gecko.',
				'default': 'Tiene cuatro patas, parecidas a las de un gecko.'
			},
			alas: {
				'mariposa': 'Tiene alas de mariposa.',
				'default': 'Tiene alas de mariposa.'
			},
			poder: {
				'nada': 'Sus alas son lindas, pero no sirven para nada.',
				'rápido': 'Sus alas le permiten volar muy rápido.',
				'secretos': 'Sus alas le permiten volar y conocer los secretos del planeta.',
				'escapar': 'Sus alas le permiten volar y escapar de animales peligrosos.',
				'mariposa': 'Sus alas le permiten volar y [alumno].',
				'nadie': 'Nadie sabe para qué usa las alas.',
				'default': 'Sus alas son lindas, pero no sirven para nada.'
			}
		},
		{
			id: 'cuerpo2',
			cuerpo: {
				'redondo': 'Tiene un cuerpo redondo.',
				'default': 'Tiene un cuerpo redondo.'
			},
			cola: {
				'pez': 'Tiene un cuerpo redondo con cola de pez.',
				'default': 'Tiene un cuerpo redondo con cola de pez.'
			},
			patas: {
				'ave': 'Tiene patas de ave y dos garras.',
				'default': 'Tiene patas de ave y dos garras.'
			}
		},
		{
			id: 'cuerpo3',
			cuerpo: {
				'plumas': 'Tiene plumas de pavorreal en la parte de atrás.',
				'hormiga': 'Tiene cuerpo de hormiga gigante.',
				'default': 'Tiene plumas de pavorreal en la parte de atrás.'
			},
			patas: {
				'elefante': 'Tiene cuatro patas, parecidas a las de un elefante.',
				'default': 'Tiene cuatro patas, parecidas a las de un elefante.'
			}
		}
	],
	color: [
		'',
		'Tiene la piel azul con algunas pecas.',
        'Tiene la piel roja y piedras verdes en diferentes partes del cuerpo.'
		'Tiene la piel verde con círculos amarillos.'
	]
}*/

var oraciones = {
	cabeza : [
		{},
		// cabeza 1: elefante/caracol
		{
			trompa: {
				'oso': 'Tiene trompa de oso hormiguero.',
				'elefante': 'Tiene trompa de elefante.',
				'tapir': 'Tiene trompa de tapir.',
				'largo': 'Tiene una trompa larga y delgada.',
				'delgado': 'Tiene una trompa larga y delgada.',
				'tubo': 'Tiene la cara en forma de tubo.',
				'ese': 'Tiene la cara en forma de ese.',
				'nada': 'Tiene una trompa de lo más normal.',
				'recta': 'Tiene la trompa recta.',
				'curvada': 'Tiene la trompa curvada.',
				'cilindro': 'Tiene la trompa en forma de cilindro.',
				'cilíndrica': 'Tiene la trompa cilíndrica.',
				'redonda': 'Tiene la trompa redonda.',
				'aspiradora': 'Tiene una trompa que parece aspiradora.',
				'default': 'Tiene trompa de elefante.'
			},
			ojos: {
				'caracol': 'Tiene ojos parecidos a los de un caracol.',
				'insecto': 'Tiene ojos de insecto.',
				'palo': 'Tiene los ojos sobre palitos.',
				'bola': 'Tiene los ojos de bolita.',
				'redondo': 'Tiene los ojos redondos.',
				'circular': 'Tiene los ojos redondos.',
				 'boliche': 'Tiene los ojos de bola de boliche.',
				'saltones': 'Tiene los ojos saltones.',
				'canica': 'Tiene los ojos de canica.',
				'extraterrestre': 'Tiene ojos de extraterrestre.',
				 'naranja': 'Tiene los ojos de color naranja.',
				 'cebolla': 'Tiene ojos de cebolla.',
				'nada': 'Tiene unos ojos totalmente normales.',
				'default': 'Tiene ojos parecidos a los de un caracol.'

			},
			cuerno: {
				'amarillo': 'Tiene dos cuernos amarillos con rayitas.',
				'curvado': 'Tiene dos cuernos curvados.',
				'raya': 'Tiene dos cuernos amarillos con rayitas.',
				'anillo': 'Tiene dos cuernos amarillos con anillos.',
				'default': 'Tiene dos cuernos amarillos con rayitas.'
			}
		},
		// cabeza 2: pez
		{
			dientes: {
				'puntiagudo': 'Tiene muchos dientes puntiagudos.',
				'filoso': 'Tiene muchos dientes filosos.',
				'mucho': 'Tiene muchos dientes filosos.',
				'colmillo' : 'Tiene dos colmillos y muchos dientecitos.',
				'dientecito' : 'Tiene muchos dientecitos.',
				'delgadito' : 'Tiene muchos dientes delgaditos.',
				'tiburón': 'Tiene dientes de tiburón',
				'piraña': 'Tiene dientes de piraña',
				'tigre': 'Tiene dientes de tigre.',
				'serpiente': 'Tiene dientes de serpiente.',
				'cocodrilo': 'Tiene dientes de cocodrilo.',
				'monstruo': 'Tiene dientes de monstruo.',
				'aguja': 'Tiene dientes que parecen agujas.',
				'delgado': 'Tiene dientes delgados.',
				'largo': 'Tiene dientes largos.',
				'default': 'Tiene muchos dientes puntiagudos.'
			},
			colmillos: {
				'puntiagudo': 'Tiene muchos colmillos puntiagudos.',
				'filoso': 'Tiene muchos colmillos filosos.',
				'tiburón': 'Tiene colmillos de tiburón.',
				'piraña': 'Tiene colmillos de piraña.',
				'tigre': 'Tiene colmillos parecidos a los de un tigre.',
				'serpiente': 'Tiene colmillos de serpiente.',
				'cocodrilo': 'Tiene colmillos de cocodrilo.',
				'monstruo': 'Tiene colmillos de monstruo.',
				'mucho': 'Tiene muchos colmillos filosos.',
				'default': 'Tiene muchos colmillos filosos.'
			},
			lengua: {
				'rojo': 'Tiene la lengua roja con puntos blancos.',
				'blanco': 'Tiene la lengua roja con puntos blancos.',
				'punto': 'Tiene la lengua roja con puntos blancos.',
				'puntito': 'Tiene la lengua roja con puntitos blancos.',
				'camaleón': 'Tiene lengua de camaleón.',
				'iguana': 'Tiene lengua de iguana.',
				'reptil': 'Tiene lengua de reptil.',
				'lenguota': 'Tiene una lenguota.',
				'largo': 'Tiene una lengua muy larga.',
				'grande': 'Tiene una lengua muy grande.',
				'enorme': 'Tiene una lengua enorme.',
				'gigante': 'Tiene una lengua gigante.',
				'gigantesco': 'Tiene una lengua gigantesca.',
				'gordo': 'Tiene una lengua gorda.',
				'puntiagudo': 'Tiene la lengua puntiaguda.',
				'fuera': 'Tiene la lengua de fuera.',
				'sacar': 'Tiene la lengua de fuera.',
				'default': 'Tiene la lengua de fuera.'
			},
			boca: {
				'abierta': 'Tiene la boca abierta.',
				'grande': 'Tiene la lengua roja con puntos blancos.',
			},
			cabeza: {
				//grandísimo, globo, redondo, bola, deforme, raro
				'grande': 'Tiene una cabeza muy grande.',
				'voluminoso': 'Tiene una cabeza voluminosa.',
				'enorme': 'Tiene una cabeza enorme.',
				'grandísimo': 'Tiene una cabeza muy grande.',
				'gigante': 'Tiene una cabeza gigante.',
				'gigantesco': 'Tiene una cabeza gigantesca.',
				'enorme': 'Tiene una cabeza enorme.',
				'pez': 'Tiene una cabeza de pez.',
				'globo': 'Tiene una cabeza en forma de globo.',
				'bola': 'Tiene una cabeza en forma de bola.',
				'redondo': 'Tiene una cabeza redonda.',
				'deforme': 'Tiene una cabeza deforme.',
				'raro': 'Tiene una cabeza rara.',
				'default': 'Tiene una cabeza de pez.'
			},
			ojos: {
				'grande': 'Tiene los ojos grandes.',
				'enorme': 'Tiene los ojos enormes.',
				'gigantesco': 'Tiene los ojos gigantes.',
				'gigantesco': 'Tiene los ojos gigantescos.',
                'redondo': 'Tiene los ojos redondos.',
				'circular': 'Tiene los ojos circulares.',
				'doble': 'Tiene los ojos redondos y saltones.',
                'boliche': 'Tiene los ojos de bola de boliche.',
				'saltón': 'Tiene los ojos saltones.',
				'saltones': 'Tiene los ojos saltones.',
				'cebolla': 'Tiene los ojos de cebolla.',
				'verde': 'Tiene los ojos verdes con azul.',
				'azul': 'Tiene los ojos verdes con azul.',
				'negro': 'Tiene los ojos verdes con azul y negro.',
				'pez': 'Tiene los ojos de un pez.',
				'vidrio': 'Tiene los ojos vidriosos.',
				'vidriosos': 'Tiene los ojos vidriosos.',
				'default': 'Tiene los ojos grandes.'
			},
			cuerno: {
				'verde': 'Tiene un cuerno verde en la frente.'
			}
		},
		// cabeza 3: ave
		{
			pico: {
				//grande,enorme,alargado,puntiagudo
				'naranja' : 'Tiene el pico naranja.',
                'anaranjado' : 'Tiene el pico anaranjado.',
				'rojo': 'Tiene un pico con la punta roja.',
				'amarillo': 'Tiene el pico amarillo.',
				'dorado': 'Tiene el pico dorado.',
				'gallo': 'Tiene pico de gallo.',
				'gallina': 'Tiene pico de gallina.',
				'pájaro': 'Tiene pico de pájaro.',
				'ave': 'Tiene pico de pájaro.',
				'águila': 'Tiene pico de águila.',
				'halcón': 'Tiene pico de halcón.',
				'pavorreal': 'Tiene pico de pavorreal.',
				'fénix': 'Tiene pico de fénix.',
				'grande': 'Tiene un pico grande.',
				'enorme': 'Tiene un pico enorme.',
				'gigasteco': 'Tiene un pico gigantesco.',
				'alargado': 'Tiene un pico alargado.',
				'alargada': 'Tiene un pico alargado.',
				'largo': 'Tiene un pico largo.',
				'puntiagudo': 'Tiene un pico puntiagudo.',
				'default': 'Tiene un pico de águila.'
			},
			orejas: {
				'grande' : 'Tiene unas orejas grandes.',
				'chico' : 'Tiene unas orejas chicas.',
				'pequeño' : 'Tiene unas orejas pequeñas.',
				'mediano' : 'Tiene unas orejas medianas.',
				'alargado' : 'Tiene dos orejas alargadas.',
				'largo' : 'Tiene dos orejas largas.',
				'delgado' : 'Tiene dos orejas delgadas.',
				'burro' : 'Tiene orejas de burro.',
				'conejo' : 'Tiene orejas de conejo.',
				'raya' : 'Tiene dos orejas con rayas blancas.',
				'rojo' : 'Tiene dos orejas rojas con rayas blancas.',
				'default': 'Tiene orejas de conejo.'
			},
			ojos: {
				//adorno,tatuaje,negro,línea,círculo, inescrutable,serio
				'pájaro' : 'Tiene ojos de pájaro.',
				'naranjo' : 'Tiene ojos naranjas.',
				'grande' : 'Tiene ojos grandes.',
				'chico' : 'Tiene ojos chicos.',
				'pequeño' : 'Tiene ojos pequeños.',
				'mediano' : 'Tiene ojos medianos.',
				'ovalados' : 'Tiene ojos ovalados.',
				'alargado' : 'Tiene ojos alargados.',
				'tatuaje' : 'El adorno parece un tatuaje.',
				'tatuado' : 'El adorno parece un tatuaje.',
				'círculo' : 'Son líneas circulares.',
				'delineado' : 'Da la impresión que los tiene delineados.',
				'maquillaje' : 'Da la impresión que los tiene maquillados.',
				'maquillado' : 'Da la impresión que los tiene maquillados.',
				'adorno' : 'Tiene los ojos amarillos con un adorno.',
				'misterioso' : 'Tiene unos ojos misteriosos.',
				'inescrutable' : 'Tiene unos ojos misteriosos.',
				'serio' : 'Tiene unos ojos muy serios.',
				'default': 'Tiene ojos de pájaro.'
			},
			cabeza: {
				//redondo,circular,redondeado,ovalada,larga,chico,pequeño,mediano
				//pájaro,ave,pajarito,águila,halcón,gallina,gallo, pollo
				'redondo' : 'Tiene una cabeza redonda.',
				'circular' : 'Tiene una cabeza circular.',
				'redondeado' : 'Tiene una cabeza redondeada.',
				'ovalado' : 'Tiene una cabeza ovalada.',
				'largo' : 'Tiene una cabeza alargada.',
				'alargado' : 'Tiene una cabeza alargada.',
				'chico' : 'Tiene la cabeza de un ave chica.',
				'pequeño' : 'Tiene la cabeza de un ave pequeña.',
				'mediano' : 'Tiene la cabeza de un ave mediana.',
				'pájaro' : 'Tiene cabeza de pájaro.',
				'pajarito' : 'Tiene cabeza de un pajarito.',
				'ave' : 'Tiene cabeza de ave.',
				'águila' : 'Tiene cabeza de águila.',
				'halcón' : 'Tiene cabeza de halcón.',
				'gallina' : 'Tiene cabeza de gallina.',
				'pollo' : 'Tiene cabeza de gallina.',
				'gallo' : 'Tiene cabeza de gallo.',
				'pavorreal' : 'Tiene cabeza de pavorreal.',
				'fénix' : 'Tiene cabeza de fénix.',
				'default': 'Tiene cabeza de pájaro.'
            },
		}
	],
	cuerpo: [
		{},
		{
			cuerpo: {
				'largo': 'Tiene un cuerpo largo y delgado.'
			},
			patas: {
				'gecko': 'Tiene cuatro patas, parecidas a las de un gecko.'
			},
			alas: {
				'mariposa': 'Tiene alas de mariposa.'
			},
			poder: {
				'nada': 'Sus alas son lindas, pero no sirven para nada.',
				'rápido': 'Sus alas le permiten volar muy rápido.',
				'secretos': 'Sus alas le permiten volar y conocer los secretos del planeta.',
				'escapar': 'Sus alas le permiten volar y escapar de animales peligrosos.',
				'mariposa': 'Sus alas le permiten volar y [alumno].',
				'nadie': 'Nadie sabe para qué usa las alas.'
			}
		},
		{
			cuerpo: {
				'redondo': 'Tiene un cuerpo redondo.'
			},
			cola: {
				'pez': 'Tiene una cola de pez.'
			},
			patas: {
				'pollo': 'Tiene patas de pollo.',
				'ave': 'Tiene patas de pollo y dos garras.',
				'garra': 'Tiene dos garras.'
			}
		},
		{
			cuerpo: {
				'plumas': 'Tiene plumas de pavorreal en la parte de atrás.',
				'hormiga': 'Tiene cuerpo de hormiga gigante.'
			},
			patas: {
				'elefante': 'Tiene cuatro patas, parecidas a las de un elefante.'
			}
		}
	],
	color: [
		'',
		'Tiene la piel azul con algunas pecas.',
		'Tiene la piel roja y piedras verdes en diferentes partes del cuerpo.',
		'Tiene la piel verde con círculos amarillos.'
	]
}

function Alebrije(oraciones, id){
	
	this.inicio = true;
	this.reconstructionMsgs = false;
	this.mwId = id;
	this.oraciones = oraciones;
	this.bodypart = "";
	this.configArr = ['1','1','1'];
	this.objOraciones = {};
	this.nombrePrel = '';
	this.volar = false;
}

Alebrije.prototype = {
	
		init:function(){
			this.setAlebrije();
			this.$lista = $('div.fondoLista ul.lista.js-lista1');
		},
		
		setAlebrije:function(){
			var url = '../img/'+ this.configArr.join('_') + '.png';
			$('.imgAlebrije').attr('src',url);
		},
		
		showNombre: function(vlr){
			
			this.showLista();
			
			var oracion;
			if(/llama/i.test(vlr)){
				var nombre = vlr.replace(/se[\]+llama[\s]+/i,'');
				nombre = nombre.replace(/\.$/,'');
				oracion = 'Se llama ' + this.processName(nombre) + '.';
			} else
			if(vlr=='sinNombre'){
				oracion = 'No tiene nombre.';
			} else {
				oracion = 'Se llama ' + this.processName(vlr) + '.';
			}
			this.showCaracteristica(oracion,'nombre');
		},
		
		processName:function(name){
			var arr = name.split(/\s+/);
			for(var i=0;i<arr.length;i++){
				arr[i] = this.upperFirst(arr[i]);
			}
			return arr.join(' ');	
		},
		
		getBodypart: function(bodypart){
			var _this = this;
			var n;
			switch(bodypart) {
				case 'cabeza':
				    n = _this.configArr[0];
				    //_this.getObjOraciones(bodypart,parseInt(n));
				    _this.setAnswer('Cabeza '+n,6000);
				    break;
				case 'cuerpo':
				    n = _this.configArr[1];
				    //_this.getObjOraciones(bodypart,parseInt(n));
				    _this.setAnswer('Cuerpo '+n,6000);
				    break;
				case 'color':
				    n = _this.configArr[2];
				    var oracion = _this.oraciones['color'][n];
				    _this.showCaracteristica(oracion,'color');
				    break;
			} 
		},
		
		
		// no funciona porque al reconstruir los msjs set no se reciben siempre en el orden adecuado
		/*getObjOraciones: function(bodypart,indice){
			console.log('getObjOraciones; bodypart:'+bodypart+"; indice:"+indice);
			this.objOraciones = this.oraciones[bodypart][indice];
		},*/
		
		getObjOraciones: function(detalle){
			var n;
			if(/trompa|ojos|cuerno|dientes|lengua|cabeza|pico|orejas/.test(detalle)){
				this.bodypart='cabeza';
				n = this.configArr[0];
			} else {
				this.bodypart='cuerpo';
				n = this.configArr[1];
			}
			this.objOraciones = this.oraciones[this.bodypart][parseInt(n)];
		},
		
		showLista: function(){
			$('div#contenedor .imgAlebrije').addClass('e-small');
			$('div#contenedor div.fondoLista').removeClass('e-oculto');
		},
		
		findCaracteristica: function(detalle,vlr){
			//detalle = trompa, cuerno, ...
			//vlr = palabra / ### (palabras separadas por coma)
			this.getObjOraciones(detalle);
			var oracion = this.objOraciones[detalle]['default'];
			var arr = vlr.split(',');
			for(var i=0;i<arr.length;i++){
				var clave = arr[i];
				if(this.objOraciones[detalle][clave]){
					oracion = this.objOraciones[detalle][clave];
					break;
				}
			}
			if(detalle=='poder'){
				this.showCaracteristica(oracion,'poder');
			} else {
				this.showCaracteristica(oracion,this.bodypart,detalle);
			}
			
		},
		
		addPersonality: function(wordType,vlr){
			var oracion;
			switch(wordType) {
				case 'adjetivo':
					oracion = 'Es ' + vlr + '.';
					this.showCaracteristica(oracion,'personalidad');
					break;
				case 'verbo':
					oracion = upperFirst(vlr) + '.';
					this.showCaracteristica(oracion,'personalidad');
					break;
				case 'miedo':
					oracion = 'Da '  + vlr + '.';
					this.showCaracteristica(oracion,'personalidad');
					break;
				case 'personalidad':
					oracion = vlr.replace(/[\s\.]+$/,'');
					oracion = oracion + '. ';
					oracion = this.upperFirst(oracion);
					this.showCaracteristica(oracion,'personalidad');
					break;
			}
		},
		
		showCaracteristica: function(str,rubro,detalle){
			//rubro: nombre,cabeza,personalidad,cuerpo,color,poder
			var _this = this;
			if(!detalle){
				detalle="";
			}
			setTimeout(function(){
				var $li = $("<li>", { 'data-rubro': rubro, 'data-detalle': detalle });
				$li.text(str);
				$li.appendTo(_this.$lista);
				_this.checkHeightLista();
			},2000);
		},
		
		checkHeightLista: function(){
			var l = $('li',this.$lista).length;
			if(l==6){
				this.$lista = $('div.fondoLista ul.lista.js-lista2');
			}
		},
		
		upperFirst: function(string){
			return string.charAt(0).toUpperCase() + string.substr(1);	
		},
		
		lowerFirst: function(string){
			return string.charAt(0).toLowerCase() + string.substr(1);
		},

		makeString:function(){
			//li[data-rubro] = nombre,cabeza,personalidad,cuerpo,color,poder
			var rubros = ['nombre','cabeza','personalidad','cuerpo','color','poder'];
			var str = "";
			for(var i=0;i<rubros.length;i++){
				var rubro = rubros[i];
				var rubroStr = rubro + "=";
				$('li[data-rubro="'+rubro+'"]').each(function(){
					rubroStr += $(this).text() + "_";
				});
				rubroStr = rubroStr.substr(0,rubroStr.length-1);
				str += rubroStr + "__";
			}
			return str;
		},
	
		/** mensajes a chat **/
		
		setAnswer: function(str,delay){
			if(!this.reconstructionMsgs){
				setTimeout(function(){
					var padre = window.parent;
					var mensajeTipoSet = { command: "setAnswer", params: {id:this.mwId , value: str } };
					padre.postMessage(mensajeTipoSet, "*");
				},delay);
			}
		},
		
		showTutorIntervention: function(text,emotion){
			var padre = window.parent;
			var mensajeTipoSet = { command: "showTutorIntervention", params: {id:this.mwId , text: text, emotion: emotion } };
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		gotoNextQuestion: function(delay){
			if(!this.reconstructionMsgs){
				setTimeout(function(){
					var padre = window.parent;
					var mensajeTipoSet = { command: "gotoNextQuestion", params: {id: this.mwId } };
					padre.postMessage(mensajeTipoSet, "*");	
				},delay);
			}
		},
		
		getMwSettings:function(target){
			var padre = window.parent;
			var mensajeTipoSet = { command: "getMicroworldSettings", params: {id: this.mwId, targetId: target, src: 'mw' } }; //src = mw/chat
			padre.postMessage(mensajeTipoSet, "*");	
		},
		
		addMwSettings: function(name,value){
			var padre = window.parent;
			var mensajeTipoSet = { command: "addMicroworldSettings", params: { id:this.mwId, name: name, value: value } };
			padre.postMessage(mensajeTipoSet, "*");	
		}
};

var mwId = 'cap2_alebrije';
var alebrije = new Alebrije(oraciones,mwId);

$(document).ready(function(){
	
	alebrije.init();
	
	var padre = window.parent;
	var mensajeTipoSet = { command: "microWorldReady", params: {id: mwId } };
	padre.postMessage(mensajeTipoSet, "*");	
});

window.addEventListener("message", receiveMessage, false);

function receiveMessage(evt) {
	// mensaje tipo set
	if(evt.data && evt.data.type === "set") {
		
		//console.log('mm albrije2 msg tipo set: '+ evt.data.name + ': ' +evt.data.value);
		
		if(evt.data.name=='reconstructionMsgs'){
			alebrije.reconstructionMsgs = evt.data.value;
		} else 
		if(evt.data.name=='get'){
			if(evt.data.value=='configAlebrije'){
				alebrije.getMwSettings('cap1_alebrije');
			}
		} else
		if(evt.data.name=="microworldSettings"){
			//alert('settings recibidos:'+evt.data.value);
			var arrPairs = evt.data.value.split(',');
			for(var i=0;i<arrPairs.length;i++){
				var pair = arrPairs[i].split(':');
				if(pair[0]=='configAlebrije'){
					//alert('config recibido in cap2 ' + pair[1]);
					alebrije.configArr = pair[1].split('_');
					alebrije.setAlebrije();
				}
			}
		} else
		if(evt.data.name=="nombre"){
			//nombre = valor / 'sinNombre'
			if(evt.data.value=='guardado'){
				alebrije.showNombre(alebrije.nombrePrel);
			} else {
				alebrije.showNombre(evt.data.value);
			}
		} else
		if(evt.data.name=="guardarNombre"){
			//nombre = valor / 'sinNombre'
			alebrije.nombrePrel = evt.data.value;
		} else
		//getBodypart=cabeza/cuerpo/...
		if(evt.data.name=="getBodypart"){
			alebrije.getBodypart(evt.data.value);
		} else
		if(evt.data.name=='volar'){
			alebrije.volar = true;
		} else
		if(evt.data.name=='poderAlumno'){
			if(alebrije.volar){
				alebrije.showCaracteristica('Sus alas le permiten volar ' + evt.data.value,'poder');
			} else {
				alebrije.showCaracteristica('Sus alas le permiten ' + evt.data.value,'poder');
			}
		} else
		//trompa=largo, ...
		if(/(trompa|ojos|cuerno|dientes|lengua|cabeza|pico|orejas|cola|patas|poder|cuerpo|alas)/i.test(evt.data.name)){
			alebrije.findCaracteristica(evt.data.name,evt.data.value);
		} else
		//PERSONALIDAD : adjetivo= ... / verbo=... / otro=...
		if(/(adjetivo|verbo|personalidad|miedo)/i.test(evt.data.name)){
			alebrije.addPersonality(evt.data.name,evt.data.value);
		} else
		// comida = ###/noCome/nadieSabe
		if(evt.data.name=='comida'){
			var txt;
			if(evt.data.value=='noCome'){
				txt = "No come.";
			} else
			if(evt.data.value=='nadieSabe'){
				txt = "Nadie sabe qué come.";
			} else {
				txt = "Se alimenta de " + evt.data.value + ".";
			}
			alebrije.showCaracteristica(txt,'poder');
		} else
		if(evt.data.name=='setConfig'){
			//var str = alebrije.makeString();
			var str = $('ul.js-lista1').html() + $('ul.js-lista2').html();
			str = str.replace(/,/g,'__');
			alebrije.addMwSettings('configLista',str);
		} else
		if(evt.data.name=='reset'){
			//alert('reset');
			//alebrije.getMwSettings('cap1_alebrije');
			$('div.fondoLista ul.lista.js-lista1').html("");
			$('div.fondoLista ul.lista.js-lista2').html("");
		} else 
		/* FUNCIÓN DE CAJÓN PARA TODOS LOS MMS CON INTERACTIVIDAD QUE SE TENGA QUE RECUPERAR
		  EVT.DATA.VALUE = '' AL INICIAR A PARTIR DE UN CAPÍTULO
		  EVT.DATA.VALUE = STRING CON NAME-VALUE PAIRS AL HABER HISTORIAL LOCALSTORAGE*/
		if(evt.data.name=="mwReconstruction"){
			if(evt.data.value=='default'){
				//lo que se tenga que hacer por omisión / sin info específica cuando se inicia en otro capítulo
				var lista1 = "<li data-rubro='nombre'>No tiene nombre.</li>\
						<li data-rubro='cabeza' data-detalle='trompa'>Tiene trompa de elefante.</li>\
						<li data-rubro='cabeza' data-detalle='ojos'>Tiene ojos parecidos a los de un caracol.</li>\
						<li data-rubro='cabeza' data-detalle='cuernos'>Tiene dos cuernos amarillos.</li>\
						<li data-rubro='personalidad'>Es bonachón.</li>\
						<li data-rubro='cuerpo' data-detalle='cuerpo'>Tiene un cuerpo largo y delgado.</li>";
				var lista2 = "<li data-rubro='cuerpo' data-detalle='patas'>Tiene cuatro patas, parecidas a las de un gecko.</li>\
						<li data-rubro='cuerpo' data-detalle='alas'>Tiene alas de mariposa.</li>\
						<li data-rubro='poder'>Le gusta comer insectos.</li>\
						<li data-rubro='color'>Tiene la piel azul con algunas pecas.</li>";
				$('div.fondoLista ul.lista.js-lista1').html(lista1);
				$('div.fondoLista ul.lista.js-lista2').html(lista2);
				alebrije.showLista();
			} else {
				var arrPairs = evt.data.value.split(',');
				for(var i=0;i<arrPairs.length;i++){
					var pair = arrPairs[i].split(':');
					if(pair[0]==''){
				
					}
				}	
			}
			//esto SIEMPRE debe ir
			var padre = window.parent;
			var mensajeTipoSet = { command: "mwReconstructed", params: { id: mwId } };
			padre.postMessage(mensajeTipoSet, "*");	
		} 
	} 
}
