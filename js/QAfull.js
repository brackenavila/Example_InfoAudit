$(function(){
	j=i=s=f=0, I=[[11,14,15,16,29,31,34],['25 (FORMATO)'],['(TBA)... Cartilla 3 sera publicada el 8 de noviembre'],['(TBA)... Cartilla 4 sera publicada el 15 de noviembre']], d=[,'A','B','C','D']
	H=[[[['complete la formula para llegar a la auditoria de sistemas','liste 5 caracteristicas de un buen auditor'],['haga una lista de 5 objetivos que pretende alcanzar la auditoria planeada en la organizacion'],['defina 2 funciones basicas que cimpliria una auditoria en cualquier organizacion'],['escribe 5 actividades, que usted como auditor haria previamente a la realizacion de una auditoria.'],['mencione y explique al menos dos de los casos posible que se pueden presentar en las solicitud de informacion en una auditoria','escriba 4 recomendaciones para un buen auditor'],['defina en sus propias palabras lo que es un control.','escriba 2 ejemplos de alguno de los tipos de controles.'],['ESCOGER 1 DE LAS 4 fuentes propuestas<br><br>1: entrevista,<br>2: observacion,<br>3: encuesta,<br>4:muestreo<br><br>dise&ntilde;arla para un caso de auditoria particular que usted quisiera.']],[['(normas, controles, sistemas de informacion, funciones, procedimientos)<br>+<br>(contabilidad, seguridad, oportunidad, eficiencia/eficacia, asesoria, recomendaciones, toma de decisiones)<br>=<br>Auditoria de Sistemas','idetificador de posibles problemas<br>proponedor de soluciones<br>analizador para alcanzar la maxima eficafia<br>establecedor de requisitos para la funciones para que cumplan con lo requrido<br>facilitador de la confianza <br>e iniciativa del personal'],['identificar todos los factores que puedan verse involucrados en la planeacion de la auditoria.<br>manejar con una estrategia diferente teniendo en cuenta el alcance de la misma.<br>para lograr una efectiva planeacion de la auditoria, es muy necesario obtener la informaci\u00F3n necesaria pero de manera selectiva, haciendo uso de mecanismos como las entrevistas encuestas.<br>plantea el esquema de la entrevista, haciendo el formulario de esta.<br>ulitizacion de la tecnica estadistica del muestreo.'],['verificar que las actividades de sistemas informaticos se desarrollen bajo las normas.<br>verificar que las actividades de sistemas informaticos se desarrollen bajo las normas.'],['Analizar cuando y como los medios de la organizaci\u00F3n auditada pueden conseguir su m\u00E1xima eficacia.<br>establecer aquellos requisitos m\u00EDnimos, para poder que se puedan adecuar y por ende permitir las funciones para las cuales fue dise&ntilde;ado dicho sistema y \u00E9ste pueda cumplir con lo requerido.<br>procura una  auditor\u00EDa haciendo uso de las posibilidades a nuestro alcance (medios), pero siempre  asegurando  un trabajo  ejercido con toda idoneidad.<br>en caso de una  auditor\u00EDa en el cual se considere que nuestros  conocimientos no son los suficientes para la materia en evaluaci\u00F3n,  deberemos  buscar un experto en la materia y remitir su informe para poder analizarlo en condiciones id\u00F3neas y as\u00ED poder reforzar la calidad de la auditor\u00EDa.<br>facilitar e incentivar la confianza con el/los auditados bas\u00E1ndose en una actuaci\u00F3n enteramente transparente, y manejando un perfil humilde que le permita al auditado mostrar sus resultados sin ning\u00FAn temor, y as\u00ED asegurar un proceso de auditor\u00EDa con calidad.'],['la informacion solicitada no la tiene la organizacion, y esta se necesita.<br>2la informacion solicitada no se tiene y No se necesita.<br>la organizacion cuenta con la informacion, pero esta esta incompleta, desactualizada, inadecuada, no se usa.<br>la informacion con la que se cuenta es la requerida, esta actualizada, y es necesaria.','sea involucrado en un caso de sistemas con alta complejidad.<br>conocimientos, pr\u00E1ctica y profesionalismo.<br>experto bien sea den Telem\u00E1tica, Bases de Datos, u otras \u00E1reas afines.<br>altamente capacitado, con valores \u00E9ticos para ejercer su trabajo.'],['con el fin de conseguir los objetivos las actividades, se hace una correccion OPORTUNA de las que sean ineficientes.','PREVENTIVOS{backup USB, OnCloud, mailBox, zoolz, rapidShare, zippyshare, MEGA, 4shared)}'],['la informacion solicitada no la tiene la organizacion, y esta se necesita.<br>como esta constituida la empresa?.<br>con que tipos de equipos cuenta la empresa?.<br>alguien de la empresa a estado involucrado con el desarrollo de las aplicaciones?.<br>en la empresa existe un manual de procedimientos?.<br>algunos de los proceso que ejecuta se bloquean durante la ejecucion?']]],
		 [[['Sistema de prueba online por DATEV SINFOPAC<br><br>www.datevsinfopac.com/category.php?id_category=31#label7<br><br>nos conectamos a un escritorio remoto mediante el explorador (IE)<br>iniciando sesion; usuario=Invitado contrase\u00F1a=datev<br>luego dentro de la aplicacion "DATEV SINFOPAC Audit virtual" (apariencia office 2007) podemos generar y exportar el reporte en WORD, PDF y/o plantilla.<embed src=WP.pdf height='+(window.innerHeight*5.7)+'x width=100%>','para ver un formato en www.gerencie.com de click <a href=http://www.gerencie.com/auditoria-de-sistemas.html target=_blank>aqui</a>']],[['','']]],
		 [[[]],[[]]],
		 [[[]],[[]]]]
	setTimeout(function(){p(B.scrollLeft/1345)},1000)
	B.style.height=window.innerWidth+'px', $(window).keypress(function(e){if((E=e.keyCode)>48&&E<53)B.scrollLeft=P=(B.scrollWidth/4*(E-=49)),p(E)})
	while(i++<4) $(B).append('<nav><sup title="Click para cambiar de cartilla (acceso directo '+(3-i)+')">'+i+'</sup></nav><div></div'); p(0)
	$('sup').click(function(){B.scrollLeft=1345*(s=s==0?1:0),p(s)})
	while((l=H[j++])[0]){f=0
	  while(l[0][f]){i=I[j-1][f], q=l[0][f], a=l[1][f], o=0, c=''
			while(q[o])c+=((o+1)+') '+q[o]+'<article>'+a[o++]+'</article>'); $('body>div:nth-of-type('+j+')').append('<div id='+d[j]+i+'><h1>PG '+i+'</h1>'+c), $('nav:nth-of-type('+j+')').append(' <a href=#'+d[j]+i+'>'+i),f++}}})

function p(E){$('nav:nth-of-type('+(++E)+')').removeClass('h').siblings('nav').addClass('h')}