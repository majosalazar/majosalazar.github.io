btnInicio = () => {
  sectionPresentacion.style.display = 'block';
  sectionProyectos.style.display = 'block';
  sectionSobreMi.style.display = 'none';
  sectionHerramientas.style.display = 'block';
  sectionContacto.style.display = 'block';
  printProyect.style.display = 'none';
}


btnProyecto = () => {
  sectionPresentacion.style.display = 'block';
  sectionProyectos.style.display = 'block';
  sectionSobreMi.style.display = 'none';
  sectionHerramientas.style.display = 'block';
  sectionContacto.style.display = 'block';
  printProyect.style.display = 'none';
}

btnSobreMi = () => {
  sectionPresentacion.style.display = 'none';
  sectionProyectos.style.display = 'none';
  sectionSobreMi.style.display = 'block';
  sectionHerramientas.style.display = 'none';
  sectionContacto.style.display = 'block';
  printProyect.style.display = 'none';
}

btnHerramientas = () => {

}

btnCV = () => {

}

btnCorreo = () => {
  
}

//print proyecto lazarillo
lazarillo = () => {
  console.log('hola');
  
  sectionPresentacion.style.display = 'none';
  sectionProyectos.style.display = 'none';
  sectionSobreMi.style.display = 'none';
  sectionHerramientas.style.display = 'none';
  sectionContacto.style.display = 'block';
  printProyect.style.display = 'block';
  document.getElementById('printProyect').innerHTML = '';
  document.getElementById('printProyect').innerHTML = `
  <p> WENA ! </p>
  `
}


//print proyecto app financiera
appFinanciera = () => {
console.log('chao');


  sectionPresentacion.style.display = 'none';
  sectionProyectos.style.display = 'none';
  sectionSobreMi.style.display = 'none';
  sectionHerramientas.style.display = 'none';
  sectionContacto.style.display = 'block';
  printProyect.style.display = 'block';
  document.getElementById('printProyect').innerHTML = '';
  document.getElementById('printProyect').innerHTML = `
  <section class="container">
    <div id="doc" class="markdown-body container-fluid comment-enabled" style="position: relative;">
      <h1 id="Aplicación-financiera-“Tus-Finanzas”"><a class="anchor hidden-xs"
          href="#Aplicación-financiera-“Tus-Finanzas”" title="Aplicación-financiera-“Tus-Finanzas”"><span
            class="octicon octicon-link"></span></a>Aplicación financiera “Tus Finanzas”</h1>
      <h2 id="Preámbulo"><a class="anchor hidden-xs" href="#Preámbulo" title="Preámbulo"><span
            class="octicon octicon-link"></span></a>Preámbulo</h2>
      <p>La Asociación de Bancos señala que el porcentaje de usuarios en la banca online en Chile es de 38%, cifra que
        se a duplicado en los últimos 5 años. La transformación digital se está tomando la banca, y esto es gracias a la
        incursión de las Fintech o Financial Technology una nueva industria ha llegado para quedarse, las cuales buscan
        aplicar la tecnología para mejorar las actividades financieras ya sean aplicaciones, procesos, productos o
        modelos de negocios en la industria de los servicios financieros.</p>
      <h2 id="Antecedentes-previos"><a class="anchor hidden-xs" href="#Antecedentes-previos"
          title="Antecedentes-previos"><span class="octicon octicon-link"></span></a>Antecedentes previos</h2>
      <p>El banco más importante del país ha lanzado una nueva aplicación móvil al mercado para que sus usuarios puedan
        visualizar sus gastos mensuales y fomentar el ahorro. Esta fue desarrollada para IOS en un plazo de 2 meses y
        está dirigida a un segmento bastante específico, aquel usuario que tiene capacidad económica para ahorrar pero
        no lo consigue tan fácilmente debido a sus conductas.</p>
      <h3 id="El-desafío"><a class="anchor hidden-xs" href="#El-desafío" title="El-desafío"><span
            class="octicon octicon-link"></span></a>El desafío</h3>
      <p>Definir la dirección y evolución que tomara la aplicación en el futuro, a partir del análisis de resultados de
        los primeros 6 meses, teniendo en consideración el feedback recibido por medio de testeos y entrevistas a
        usuarios, con el fin de presentar una propuesta de mejora al Gerente General.</p>
      <h2 id="Objetivo-del-producto"><a class="anchor hidden-xs" href="#Objetivo-del-producto"
          title="Objetivo-del-producto"><span class="octicon octicon-link"></span></a>Objetivo del producto</h2>
      <p>Tus finanzas ha sido desarrollada para los usuarios del banco más importante del país, con el fin de ayudarles
        a tener una mejor gestión y manejo de su dinero. Por medio de esta 2da versión de la aplicación se espera
        mejorar la usabilidad e interacción de la aplicación y además validar la posibilidad de integrar nuevas
        características.</p>
      <h2 id="Definición-del-producto"><a class="anchor hidden-xs" href="#Definición-del-producto"
          title="Definición-del-producto"><span class="octicon octicon-link"></span></a>Definición del producto</h2>
      <p>Con Tus finanzas los usuarios del banco más importante del país pueden gestionar su dinero de forma clara y
        ordenada, visualizando sus gastos, ingresos y ahorros de forma rápida y atractiva. Es una aplicación para
        dispositivos móviles, es gratuita y fue desarrollada por el banco más importante del país. Se encuentra
        disponible para dispositivos IOS y en esta nueva versión también para Android, lo que permite abrirse a un
        mercado de nuevos usuarios que es 12,7 veces más grande que el actual (usuarios con Iphone).</p>
      <h2 id="Recomendaciones-de-próximos-pasos"><a class="anchor hidden-xs" href="#Recomendaciones-de-próximos-pasos"
          title="Recomendaciones-de-próximos-pasos"><span class="octicon octicon-link"></span></a>Recomendaciones de
        próximos pasos</h2>
      <p>A partir del proceso de investigación realizado, se sugiere la implementación de las siguientes acciones con el
        fin de obtener un mayor número de descargas, usuarios activos y satisfechos con la app:</p>
      <ul>
        <li>Que aplicación este disponible para IOS y Android, aumentando más de 12 veces los usuarios actuales, al
          incorporar la app a la Play Store.</li>
        <li>Desarrollar una aplicación que sea personalizable, que le permita al usuario ajustar diversos parámetros
          según sus necesidades.</li>
        <li>Mejorar la usabilidad de la app generando un flujo más intuitivo para el usuario.</li>
        <li>Generar una interfaz más dinámica para mostrar los datos al usuario.</li>
      </ul>
      <h2 id="Proceso-de-investigación"><a class="anchor hidden-xs" href="#Proceso-de-investigación"
          title="Proceso-de-investigación"><span class="octicon octicon-link"></span></a>Proceso de investigación</h2>
      <h3 id="Análisis-inicial-de-la-app"><a class="anchor hidden-xs" href="#Análisis-inicial-de-la-app"
          title="Análisis-inicial-de-la-app"><span class="octicon octicon-link"></span></a>Análisis inicial de la app
      </h3>
      <p>La aplicación solo permite ingresar una cuenta bancaria y además debe ser de un banco determinado, y cuenta con
        las siguientes pantallas/etapas:</p>
      <ol>
        <li>Registro: solicita en número de tu cuenta y número de celular, luego te envia un codigo al celular un
          código, posteriormente te solicita un correo electrónico y contraseña. Puedes agregar una fotografía a tu
          perfil y registrar tu huella para mayor seguridad.</li>
        <li>Ingreso: correo electrónico y contraseña para acceder.</li>
        <li>Inicio: te muestra una imagen de la tarjeta, el saldo disponible y las opciones disponibles movimientos,
          ahorros y gastos. Indica también el número de tarjeta.</li>
        <li>Movimientos: saldo disponible en la parte superior y luego el listado de los últimos movimientos ya sean
          gastos o ingresos, puede seleccionar el mes y visualizar detalles de cada uno; fecha, hora y descripción del
          lugar.</li>
        <li>Ahorros: muestra un listado de las metas de ahorro denominadas “cuentas de ahorro” en las que se puede
          definir; título monto, fecha y periodicidad.</li>
        <li>Gastos: muestra el lista de los gastos agrupados por área y el monto, puede seleccionar el mes.</li>
      </ol>
      <h3 id="Análisis-del-landing-page"><a class="anchor hidden-xs" href="#Análisis-del-landing-page"
          title="Análisis-del-landing-page"><span class="octicon octicon-link"></span></a>Análisis del landing page</h3>
      <ul>
        <li>La app fue desarrollada para IOS solamente en primera etapa, lo que deja a un 92,74% de usuarios que
          visitaron su landing page sin poder acceder a la app.</li>
        <li>La landing page no es lo suficientemente descriptiva al momento de detallar los servicios que entrega la
          app.</li>
        <li>Los usuarios no sienten la confianza de ingresar su cuenta bancaria a la app en primera instancia, prefieren
          simplemente desinstalar.</li>
        <li>Se autodenomina la mejor app financiera de latinoamérica sin indicar cómo se valida esta información.</li>
        <li>Describe de manera muy superficial las características y funciones de la aplicación porque lo que no queda
          lo suficientemente claro a qué dispositivos está dirigido, si es gratuita o de pago, que tipo de cuenta debes
          tener para poder ingresar, ni de qué forma funciona.</li>
        <li>La sección tu asesor financiero no entiende los iconos claramente no invita a la acción de forma clara, no
          tiene buena redacción y es demasiado estática</li>
        <li>Muestra la opinión de algunos usuarios, lo que te da un poco de certeza de que la aplicación es funcional e
          interesante.</li>
      </ul>
      <h3 id="Análisis-de-la-data"><a class="anchor hidden-xs" href="#Análisis-de-la-data"
          title="Análisis-de-la-data"><span class="octicon octicon-link"></span></a>Análisis de la data</h3>
      <p>Los resultados de los primeros 6 meses nos indican lo siguiente:</p>
      <ul>
        <li>Embudo de conversión de Facebook;<br>
          463.427.043 impresiones por facebook, 11.088.541 hicieron click al anuncio, 2,4% de los usuarios que
          reaccionaron a la publicación y de estos 0,00409% equivalente a 18.956 se registraron en la app.</li>
        <li>Landing page;<br>
          11.101.856 visitas a la landing page de estos 7,26% son usuarios con iphone, dejando al 92,74% de posibles
          usuarios fuera por no poseer un iphone, lo que Durante los primeros 6 meses equivale a 10.295.816 posibles
          usuarios que son dejados a la deriva.</li>
        <li>El total de usuarios activos fue de 49.683 durante los primeros 6 meses</li>
      </ul>
      <h3 id="Benchmark"><a class="anchor hidden-xs" href="#Benchmark" title="Benchmark"><span
            class="octicon octicon-link"></span></a>Benchmark</h3>
      <p>Se revisaron un total de 12 aplicaciones, en las cuales se encuentran app bancarias, de gestión de dinero y
        tarjetas de crédito virtuales. A continuación la tabla comparativa:</p>
      <p><img src="https://i.imgur.com/LzdYoYk.jpg" alt=""></p>
      <h3 id="User-persona"><a class="anchor hidden-xs" href="#User-persona" title="User-persona"><span
            class="octicon octicon-link"></span></a>User persona</h3>
      <p>Análisis de los User Persona entregados:</p>
      <ol>
        <li>Fiorella 18 años, Las Condes : no sabe como se le va el dinero tan rápido, le gusta salir a comer con
          amigas. casi siempre usa tarjeta de debito, es facil pagar asi pero pierde el control de sus gastos y no
          ahorra. Todas las opciones que ha probado no le ayudan a ahorrar, nada es más efectivo que su agenda.</li>
        <li>Diego 31 años, Providencia : vive solo y trabaja, siempre está atento a nuevos bares y restaurantes, quiere
          ahorrar para viajar a europa. Busca un sistema de ahorro, porque siempre se gasta lo que pensaba ahorrar,
          quiere automatizar su ahorro.</li>
      </ol>
      <p>Se desarrolló un nuevo User persona ajustando algunos detalles descubiertos en el proceso de investigación con
        los usuarios.</p>
      <p><img src="https://i.imgur.com/kVOh78O.jpg" alt=""></p>
      <h3 id="Observación-contextual"><a class="anchor hidden-xs" href="#Observación-contextual"
          title="Observación-contextual"><span class="octicon octicon-link"></span></a>Observación contextual</h3>
      <p>Se observó a 3 usuarios interactuando con el prototipo funcional, los principales aprendizajes obtenidos de
        este proceso fueron:</p>
      <ul>
        <li>La desconfianza que les genera a los usuarios que al iniciar la aplicación se les solicite ingresar el
          número, el cual no recuerdan de memoria.</li>
        <li>Están acostumbrados a ingresar a este tipo de aplicaciones utilizando su rut y una clave entregada por el
          banco inicialmente.</li>
        <li>El menú circular que se encuentra en la parte baja de la pantalla confunde.</li>
        <li>Les resulta difícil encontrar el botón volver.</li>
        <li>La interfaz es bastante simple pero hay pequeños detalles que confunden a los usuarios al momento de
          interactuar como el botón volver y el menú flotante en la parte inferior.</li>
        <li>La mayoría de los usuarios no se sabe el número de su cuenta de memoria, ya que están acostumbrados a
          acceder utilizando su rut.</li>
        <li>Uno de los principales obstáculos de los usuarios para lograr ahorrar es mantenerse constantemente atentos a
          sus gastos y conscientes de que no deben gastar de más.</li>
        <li>Hay términos que no son lo suficientemente explicativos por si mismo, como es el caso de la opción “crear
          cuenta de ahorro”.</li>
      </ul>
      <p><img src="https://i.imgur.com/wl7RuIb.jpg" alt=""></p>
      <p><a href="https://drive.google.com/drive/folders/1hwFLXI6QH6vjanxiXvo42L7nEbhKS8rY" target="_blank"
          rel="noopener">Aqui</a> puedes revisar un video en el que se ve el flujo de uso un usuario al utilizar la
        aplicación por primera vez</p>
      <h3 id="Testeo-MAZE"><a class="anchor hidden-xs" href="#Testeo-MAZE" title="Testeo-MAZE"><span
            class="octicon octicon-link"></span></a>Testeo MAZE</h3>
      <p>Se realizó un testeo de la primera versión de la app utilizando MAZE, se le solicitó a los usuarios que
        cumplieran con 6 tareas, a continuación puedes revisar los resultados obtenidos.</p>
      <p><img src="https://i.imgur.com/bAn2MC5.jpg" alt=""></p>
      <p>De las tareas solicitadas el 100% de ellas fue logradas, pero en la mayoría de las oportunidades de forma
        indirecta.</p>
      <h3 id="Encuestas"><a class="anchor hidden-xs" href="#Encuestas" title="Encuestas"><span
            class="octicon octicon-link"></span></a>Encuestas</h3>
      <p>Se realizó una encuesta a 25 usuarios de entre los 22 a los 55 años y los resultados más interesantes obtenidos
        son los siguientes:</p>
      <ul>
        <li>82,6% de los usuarios tiene un dispositivo móvil con android</li>
        <li>56% considera que tiene sus finanzas ordenadas</li>
        <li>La falta de ingresos constantes hace que sea difícil mantener las finanzas ordenadas</li>
        <li>“no gastar más de lo que se tiene”</li>
        <li>Lo más mencionado como dificultad al momento de mantener las finanzas ordenadas son; los gastos imprevistos,
          la falta de constancia al anotar los gastos, no tener claridad sobre cuánto se gasta mensualmente</li>
        <li>92% de los encuestados estaría dispuesto a usar una aplicación que monitoree sus gastos</li>
      </ul>
      <p><a href="https://drive.google.com/open?id=1_FHGoHXYI3B2Y2SVHfiUUTtLVZtWLm11QKNaVGUpjeg" target="_blank"
          rel="noopener">Aqui</a>Aqui puedes revisar los resultados completos de la encuesta.</p>
      <h3 id="Proceso-de-Ideación"><a class="anchor hidden-xs" href="#Proceso-de-Ideación"
          title="Proceso-de-Ideación"><span class="octicon octicon-link"></span></a>Proceso de Ideación</h3>
      <p>Se realizo un proceso de ideacion que consistió en 5 etapas:</p>
      <ol>
        <li>Se anotaron todos los aprendizajes recopilados por medio de las herramientas anteriormente mencionadas, esto
          con el fin de tener una visión global del proyecto y sus oportunidades de mejora.</li>
      </ol>
      <p><img src="https://i.imgur.com/Q1cgRXN.png" alt=""></p>
      <ol start="2">
        <li>En la siguiente etapa se agruparon los aprendizajes por temáticas en común.</li>
      </ol>
      <p><img src="https://i.imgur.com/7ppV1wU.png" alt=""></p>
      <ol start="3">
        <li>Para luego sintetizar estos aprendizajes en descubrimientos, puntos desde los cuales se trabajan las
          oportunidades de mejoras.</li>
      </ol>
      <p><img src="https://i.imgur.com/XR4mqmu.jpg" alt=""></p>
      <ol start="4">
        <li>Y es en base a estos descubrimientos nos preguntamos ¿cómo podríamos…? planteando una pregunta que engloba
          la problemática</li>
      </ol>
      <p><img src="https://i.imgur.com/ymY1D1j.png" alt=""></p>
      <ol start="5">
        <li>Esta es la etapa final se realiza una lluvia de ideas que proponen responder a los cómo podríamos, a partir
          de este último proceso es que se define la propuesta en la que se trabajará, considerando siempre la
          factibilidad de estas acciones para lograr un MVP.</li>
      </ol>
      <p><img src="https://i.imgur.com/o0JMolk.jpg" alt=""></p>
      <h3 id="Definición-de-la-propuesta"><a class="anchor hidden-xs" href="#Definición-de-la-propuesta"
          title="Definición-de-la-propuesta"><span class="octicon octicon-link"></span></a>Definición de la propuesta
      </h3>
      <p>Se trabaja en optimizar la visualización y control de gastos por medio de un monitor, tambien se desarrollaran
        mejoras en la seccion de ahorro creando además una sección de presupuestos, estimulando el desarrollo de metas y
        logros.</p>
      <h2 id="Prototipo-de-alta-fidelidad"><a class="anchor hidden-xs" href="#Prototipo-de-alta-fidelidad"
          title="Prototipo-de-alta-fidelidad"><span class="octicon octicon-link"></span></a>Prototipo de alta fidelidad
      </h2>
      <p>A continuación se presentarán las propuestas de la aplicación:</p>
      <h4 id="Registro"><a class="anchor hidden-xs" href="#Registro" title="Registro"><span
            class="octicon octicon-link"></span></a>Registro</h4>
      <ol>
        <li>Se incluyó un onboarding con el fin de amenizar el primer acercamiento del usuario a la aplicación.</li>
        <li>Ahora para registrarse en la app ahora el usuario debe ingresar su rut algo a lo que ya se encuentra
          habituado.</li>
        <li>Además se le solicita una verificación en 2 pasos que incluye una confirmación por medio del número de
          celular.</li>
      </ol>
      <p><img src="https://i.imgur.com/CLmc5L9.png" alt=""></p>
      <h4 id="Navegación-por-la-app"><a class="anchor hidden-xs" href="#Navegación-por-la-app"
          title="Navegación-por-la-app"><span class="octicon octicon-link"></span></a>Navegación por la app</h4>
      <ol>
        <li>Se incluye un menú fijo en la parte inferior de la app, el cual permite acceder rápidamente a otra sección y
          a su vez indica en qué sección se encuentra actualmente.</li>
        <li>Se creó la sección presupuestos, la que permite a los usuarios crear planificaciones de lo que pueden y
          quieren gastar, ya sea semanal o mensualmente.</li>
        <li>Los gastos se muestran agrupados por temática.</li>
        <li>Al crear un nuevo ahorro se muestra el % de completitud de esta meta</li>
      </ol>
      <p><img src="https://i.imgur.com/UhPc5wO.png" alt=""></p>
      <p><a
          href="https://www.figma.com/proto/aGabSSEQ69RCTzH1Ek8xRrTj/Tus-Finanzas?node-id=0%3A1&amp;scaling=scale-down"
          target="_blank" rel="noopener">Puedes revisar el prototipo acá</a></p>
      <h3 id="Resultados-del-testeo-guerrilla"><a class="anchor hidden-xs" href="#Resultados-del-testeo-guerrilla"
          title="Resultados-del-testeo-guerrilla"><span class="octicon octicon-link"></span></a>Resultados del testeo
        guerrilla</h3>
      <p>Se testeó a 6 usuarios y el feedback recibido es el siguiente:</p>
      <ol>
        <li>No todos los iconos del menú inferior son los suficientemente descriptivos.</li>
        <li>En la barra superior se podría indicar en sección se encuentra el usuario</li>
        <li>Las flechas de últimos movimientos hacia arriba y abajo se entienden bien como ingreso y gasto.</li>
        <li>El total de ahorros presentado en un gráfico de tortas es muy confuso para los usuarios</li>
        <li>La barra de completitud fue bien entendida</li>
      </ol>
      <p><img src="https://i.imgur.com/XptbBRT.png" alt=""></p>
      <ol start="5">
        <li>Los gastos agrupados por temática les parecen interesantes a los usuarios pero no así la presentación en un
          gráfico de torta.</li>
        <li>No entienden presupuestos, o confunden con ahorros.</li>
        <li>El icono de gastos es el que menos se entiende.</li>
        <li>Se debe evaluar la factibilidad de mantener la sección presupuesto ya que quizá no sea útil para el usuario.
        </li>
      </ol>
      <p><img src="https://i.imgur.com/Cp7LoKT.png" alt=""></p>
      <h2 id="Los-aprendizajes-que-me-quedaron-del-primer-proyecto-son"><a class="anchor hidden-xs"
          href="#Los-aprendizajes-que-me-quedaron-del-primer-proyecto-son"
          title="Los-aprendizajes-que-me-quedaron-del-primer-proyecto-son"><span
            class="octicon octicon-link"></span></a>Los aprendizajes que me quedaron del primer proyecto son:</h2>
      <ul>
        <li>Documentar el proceso de investigación paso a paso, ya que de esta forma es mucho más fácil tener un trabajo
          lineal y una visión general durante el desarrollo.</li>
        <li>Planificar e ir actualizando la planificación según sea necesario, para evitar quedarse estancada al no
          lograr los plazos.</li>
        <li>Priorizar tareas y no hacer por hacer, pensando siempre en la relevancia y lo indispensable que pueden ser.
        </li>
      </ul>
    </div>
    <div class="ui-toc dropup unselectable hidden-print" style="display:none;">
      <div class="pull-right dropdown">
        <a id="tocLabel" class="ui-toc-label btn btn-default" data-toggle="dropdown" href="#" role="button"
          aria-haspopup="true" aria-expanded="false" title="Table of content">
          <i class="fa fa-bars"></i>
        </a>
        <ul id="ui-toc" class="ui-toc-dropdown dropdown-menu" aria-labelledby="tocLabel">
          <div class="toc">
            <ul class="nav">
              <li class=""><a href="#Aplicación-financiera-“Tus-Finanzas”"
                  title="Aplicación financiera “Tus Finanzas”">Aplicación financiera “Tus Finanzas”</a>
                <ul class="nav">
                  <li><a href="#Preámbulo" title="Preámbulo">Preámbulo</a></li>
                  <li><a href="#Antecedentes-previos" title="Antecedentes previos">Antecedentes previos</a>
                    <ul class="nav">
                      <li><a href="#El-desafío" title="El desafío">El desafío</a></li>
                    </ul>
                  </li>
                  <li><a href="#Objetivo-del-producto" title="Objetivo del producto">Objetivo del producto</a></li>
                  <li><a href="#Definición-del-producto" title="Definición del producto">Definición del producto</a>
                  </li>
                  <li><a href="#Recomendaciones-de-próximos-pasos"
                      title="Recomendaciones de próximos pasos">Recomendaciones de próximos pasos</a></li>
                  <li><a href="#Proceso-de-investigación" title="Proceso de investigación">Proceso de investigación</a>
                    <ul class="nav">
                      <li><a href="#Análisis-inicial-de-la-app" title="Análisis inicial de la app">Análisis inicial de
                          la app</a></li>
                      <li><a href="#Análisis-del-landing-page" title="Análisis del landing page">Análisis del landing
                          page</a></li>
                      <li><a href="#Análisis-de-la-data" title="Análisis de la data">Análisis de la data</a></li>
                      <li><a href="#Benchmark" title="Benchmark">Benchmark</a></li>
                      <li><a href="#User-persona" title="User persona">User persona</a></li>
                      <li><a href="#Observación-contextual" title="Observación contextual">Observación contextual</a>
                      </li>
                      <li><a href="#Testeo-MAZE" title="Testeo MAZE">Testeo MAZE</a></li>
                      <li><a href="#Encuestas" title="Encuestas">Encuestas</a></li>
                      <li><a href="#Proceso-de-Ideación" title="Proceso de Ideación">Proceso de Ideación</a></li>
                      <li><a href="#Definición-de-la-propuesta" title="Definición de la propuesta">Definición de la
                          propuesta</a></li>
                    </ul>
                  </li>
                  <li><a href="#Prototipo-de-alta-fidelidad" title="Prototipo de alta fidelidad">Prototipo de alta
                      fidelidad</a>
                    <ul class="nav">
                      <li><a href="#Resultados-del-testeo-guerrilla" title="Resultados del testeo guerrilla">Resultados
                          del testeo guerrilla</a></li>
                    </ul>
                  </li>
                  <li><a href="#Los-aprendizajes-que-me-quedaron-del-primer-proyecto-son"
                      title="Los aprendizajes que me quedaron del primer proyecto son:">Los aprendizajes que me quedaron
                      del primer proyecto son:</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="toc-menu"><a class="expand-toggle" href="#">Expand all</a><a class="back-to-top" href="#">Back to
              top</a><a class="go-to-bottom" href="#">Go to bottom</a></div>
        </ul>
      </div>
    </div>
    <div id="ui-toc-affix" class="ui-affix-toc ui-toc-dropdown unselectable hidden-print" data-spy="affix"
      style="top:17px;display:none;">
      <div class="toc">
        <ul class="nav">
          <li class=""><a href="#Aplicación-financiera-“Tus-Finanzas”"
              title="Aplicación financiera “Tus Finanzas”">Aplicación financiera “Tus Finanzas”</a>
            <ul class="nav">
              <li><a href="#Preámbulo" title="Preámbulo">Preámbulo</a></li>
              <li><a href="#Antecedentes-previos" title="Antecedentes previos">Antecedentes previos</a>
                <ul class="nav">
                  <li><a href="#El-desafío" title="El desafío">El desafío</a></li>
                </ul>
              </li>
              <li><a href="#Objetivo-del-producto" title="Objetivo del producto">Objetivo del producto</a></li>
              <li><a href="#Definición-del-producto" title="Definición del producto">Definición del producto</a></li>
              <li><a href="#Recomendaciones-de-próximos-pasos" title="Recomendaciones de próximos pasos">Recomendaciones
                  de próximos pasos</a></li>
              <li><a href="#Proceso-de-investigación" title="Proceso de investigación">Proceso de investigación</a>
                <ul class="nav">
                  <li><a href="#Análisis-inicial-de-la-app" title="Análisis inicial de la app">Análisis inicial de la
                      app</a></li>
                  <li><a href="#Análisis-del-landing-page" title="Análisis del landing page">Análisis del landing
                      page</a></li>
                  <li><a href="#Análisis-de-la-data" title="Análisis de la data">Análisis de la data</a></li>
                  <li><a href="#Benchmark" title="Benchmark">Benchmark</a></li>
                  <li><a href="#User-persona" title="User persona">User persona</a></li>
                  <li><a href="#Observación-contextual" title="Observación contextual">Observación contextual</a></li>
                  <li><a href="#Testeo-MAZE" title="Testeo MAZE">Testeo MAZE</a></li>
                  <li><a href="#Encuestas" title="Encuestas">Encuestas</a></li>
                  <li><a href="#Proceso-de-Ideación" title="Proceso de Ideación">Proceso de Ideación</a></li>
                  <li><a href="#Definición-de-la-propuesta" title="Definición de la propuesta">Definición de la
                      propuesta</a></li>
                </ul>
              </li>
              <li><a href="#Prototipo-de-alta-fidelidad" title="Prototipo de alta fidelidad">Prototipo de alta
                  fidelidad</a>
                <ul class="nav">
                  <li><a href="#Resultados-del-testeo-guerrilla" title="Resultados del testeo guerrilla">Resultados del
                      testeo guerrilla</a></li>
                </ul>
              </li>
              <li><a href="#Los-aprendizajes-que-me-quedaron-del-primer-proyecto-son"
                  title="Los aprendizajes que me quedaron del primer proyecto son:">Los aprendizajes que me quedaron del
                  primer proyecto son:</a></li>
            </ul>
          </li>
        </ul>
      </div>
  </section>

  `
}
