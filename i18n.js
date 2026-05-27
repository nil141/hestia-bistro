/* Hestia Bistró — i18n (ES / CA)
   Motor + diccionario de traducciones para toda la web.
   - Uso: añade data-i18n="key" (textContent) o data-i18n-html="key" (innerHTML).
   - El idioma se guarda en localStorage y persiste entre páginas.
   - Para añadir un nuevo idioma: extiende TRANSLATIONS con otra clave (ej. en).
*/
(function(){
  'use strict';

  const STORAGE_KEY  = 'hestia-lang';
  const DEFAULT_LANG = 'es';
  const SUPPORTED    = ['es', 'ca'];

  const TRANSLATIONS = {

    // ─── ESPAÑOL ─────────────────────────────────────────
    es: {
      // Metadatos
      'meta.title.index'     : 'Hestia Bistró · Cocina de autor en l\'Anoia',
      'meta.desc.index'      : 'Hestia Bistró — bistró de cocina de autor en Vilanova del Camí. La excelencia de la alta cocina en formato de proximidad. Sin etiquetas. Sin frialdad.',
      'meta.title.faq'       : 'FAQ · Hestia Bistró',
      'meta.desc.faq'        : 'Preguntas frecuentes sobre reservas, horarios y dudas en Hestia Bistró, Vilanova del Camí.',
      'meta.title.carta'     : 'Carta · Hestia Bistró',
      'meta.desc.carta'      : 'Nuestra carta de temporada, carta de vinos y carta de bebidas en Hestia Bistró.',
      'meta.title.reservar'  : 'Reservar · Hestia Bistró',
      'meta.desc.reservar'   : 'Reserva tu mesa en Hestia Bistró online. Cocina de autor a 1h de Barcelona.',
      'meta.title.terminos'  : 'Términos y condiciones · Hestia Bistró',
      'meta.desc.terminos'   : 'Términos y condiciones de Hestia Bistró: reservas, cancelaciones, alergias y política de datos.',
      'meta.title.privacidad': 'Política de Privacidad · Hestia Bistró',
      'meta.desc.privacidad' : 'Política de Privacidad de Hestia Bistró conforme al Reglamento General de Protección de Datos (RGPD).',
      'meta.title.gracias'   : 'Gracias por tu reserva · Hestia Bistró',
      'meta.desc.gracias'    : 'Confirmación de reserva en Hestia Bistró — te esperamos pronto.',

      // Header
      'nav.aria'   : 'Primaria',
      'nav.reservar': 'Reservar',
      'nav.carta'  : 'Carta',
      'nav.faq'    : 'FAQ',
      'lang.aria'  : 'Idioma',

      // Hero
      'hero.h1'    : 'Hestia Bistró',

      // El Restaurante (index)
      'rest.title.1': 'EL',
      'rest.title.2': 'RESTAURANTE',
      'rest.p1'    : 'Situado en <strong>Vilanova del Camí</strong>, Hestia toma el nombre de la <strong>diosa griega que representa el hogar</strong>. No es una decoración: es el posicionamiento de un proyecto que busca traer la <strong>excelencia de la alta cocina</strong> a un formato de proximidad. Aquí convergen la técnica de un equipo formado en <strong>mesas con estrella</strong> y la calidez de un bistró que se vive como una casa — íntimo, cercano, sin protocolo frío. En este pequeño palacio gastronómico de la comarca de <strong>l\'Anoia</strong>, cada servicio es un homenaje al producto de temporada y al sabor honesto.',
      'rest.p2'    : 'Ofrecemos un espacio íntimo y acogedor diseñado para diferentes momentos: desde parejas que buscan una <strong>cena con propuesta</strong> lejos del ruido de Barcelona, hasta grupos de amigos que celebran alrededor de una <strong>mesa para compartir</strong>, o profesionales que encuentran en nuestras mesas la <strong>cercanía</strong> necesaria para sus encuentros, sin renunciar a una <strong>cocina elaborada</strong> que se atreve desde lo familiar.',
      'rest.btn'   : 'El restaurante',
      'rest.cap'   : 'Sala · Hestia Bistró',

      // Nuestra Propuesta (index)
      'prop.title.1': 'NUESTRA',
      'prop.title.2': 'PROPUESTA',
      'prop.eyebrow': 'Carta',
      'prop.text'  : 'Nuestra <strong>carta de temporada</strong> es un puente culinario entre la cocina del Mediterráneo y técnicas y sabores de todo el mundo integradas con cariño y sin renunciar a las bases tradicionales de la cocina, una expresión genuina de la identidad de Hestia Bistró, donde la calidad excepcional del producto de proximidad es siempre el punto de partida. A partir de ahí, nuestra visión gastronómica lo lleva a otro nivel mediante una técnica precisa y una sensibilidad contemporánea. El recorrido se articula en bocados donde el ingrediente reconocible se reinventa sin perder su esencia.',
      'prop.btn'   : 'Ver la carta',
      'prop.temporada': 'Carta de temporada',
      'prop.subhead': 'Para acompañar',
      'prop.subtext': 'Nuestras cartas de vinos y bebidas están concebidas para resaltar cada plato, complementando perfectamente la experiencia.',
      'prop.vinos' : 'Carta de vinos',
      'prop.bebidas': 'Carta de bebidas',

      // El Chef (index)
      'chef.eyebrow': 'El Chef',
      'chef.name.1': 'JOAN',
      'chef.name.2': 'FORTES',
      'chef.p1'    : 'Nací a los pies de la montaña de Montserrat, en el seno de una familia que me enseñó el valor del producto de proximidad y de la cocina hecha con tiempo. A los 18 años dejé mi zona de confort para emprender un viaje que me llevaría por cocinas legendarias en Catalunya y más allá. Tras conseguir experiencia en <strong>mesas con estrella Michelin</strong> y consolidar una visión propia, sentí que era el momento de un nuevo desafío.',
      'chef.p2'    : '<strong>Hestia</strong> es ese desafío. Es la culminación de una búsqueda constante de la excelencia, pero esta vez, con un ingrediente secreto que lo cambia todo: la cercanía. Trabajar con un equipo que entiende que la alta cocina no necesita protocolo frío es una de las experiencias más estimulantes de mi carrera. Juntos hemos creado un diálogo único entre la <strong>técnica precisa</strong> y los mejores productos de proximidad de <strong>l\'Anoia y Catalunya</strong>. Hestia no es solo un restaurante, es la emoción de cocinar para casa en un escenario íntimo.',

      // Igualada / Anoia (index)
      'terr.title.1': 'EL CORAZÓN',
      'terr.title.2': 'DE L\'ANOIA',
      'terr.text'  : 'En el corazón de la comarca de <strong>l\'Anoia</strong>, <strong>Vilanova del Camí</strong> y los municipios vecinos componen un territorio histórico marcado por su tradición textil, sus paisajes mediterráneos y su carácter abierto. A solo <strong>cuarenta minutos de Barcelona</strong>, la comarca ofrece una alternativa pausada donde el producto de proximidad y la cultura mediterránea conviven con una nueva generación de propuestas gastronómicas que están redefiniendo el territorio. Hestia toma su lugar en este escenario para devolverle algo a la comarca: una <strong>cocina de autor</strong> que no obliga a salir de casa, situando nuestra gastronomía en el marco más cercano y honesto de <strong>l\'Anoia</strong>.',
      'terr.btn'   : 'Ven a conocernos',

      // Footer (común)
      'foot.brand.tagline': 'Cocina de autor en l\'Anoia',
      'foot.donde'  : 'Dónde',
      'foot.cuando' : 'Cuándo',
      'foot.links'  : 'Links',
      'foot.h.jue'  : 'Jueves',
      'foot.h.visa' : 'Viernes a Sábado',
      'foot.h.dom'  : 'Domingo',
      'foot.h.cena' : 'Cena: 20:00 a 23:00',
      'foot.h.comida': 'Comida: 13:00 a 16:00',
      'foot.l.privacidad': 'Política de Privacidad',
      'foot.l.terminos'  : 'Términos y condiciones',
      'foot.l.disenado'  : 'Diseñado:',

      // Página CARTA
      'carta.title.1': 'NUESTRA',
      'carta.title.2': 'CARTA',
      'carta.intro' : 'En Hestia Bistró ofrecemos una <strong>carta de temporada</strong> acompañada de nuestras <strong>cartas de vinos y bebidas</strong>, pensadas para complementar la experiencia y resaltar cada plato. Selecciona la carta que deseas consultar.',
      'carta.cta'   : 'Ver PDF →',

      // Página RESERVAR
      'reservar.heading.title'    : 'Reserva tu mesa',
      'reservar.heading.subtitle' : 'Selecciona fecha, hora y número de comensales. Recibirás confirmación inmediata por email.',

      // Página GRACIAS (landing post-reserva CoverManager)
      'gracias.title'    : 'Gracias por tu reserva',
      'gracias.subtitle' : 'Hemos recibido tu reserva correctamente. Te enviaremos un correo de confirmación en breve. Te esperamos en Hestia Bistró.',
      'gracias.cta'      : 'Volver al inicio',

      // Página FAQ — preguntas + respuestas
      'faq.q1.1'    : '¿Cómo puedo',
      'faq.q1.2'    : 'realizar una reserva',
      'faq.q1.3'    : 'en Hestia Bistró?',
      'faq.a1'      : 'Para realizar una reserva puede hacerlo a través de nuestro <a href="reservar.html">apartado de reservas</a> siguiendo los pasos indicados. En caso de no haber disponibilidad en la fecha deseada, puede contactar con nosotros directamente y le ayudaremos a encontrar una alternativa.',

      'faq.q2.1'    : '¿Con cuánto tiempo',
      'faq.q2.2'    : 'de anticipación debo',
      'faq.q2.3'    : 'realizar una reserva?',
      'faq.a2'      : 'Puede realizar su reserva con un máximo de 90 días de anticipación, a través de nuestra <a href="reservar.html">página de reservas</a> o por correo electrónico a <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a>.',

      'faq.q3.1'    : '¿Cómo puedo',
      'faq.q3.2'    : 'realizar una reserva',
      'faq.q3.3'    : 'para un grupo?',
      'faq.a3'      : 'Si desea realizar una reserva para grupo, deberá ponerse en contacto con nosotros a través del siguiente correo electrónico: <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a>. Le facilitaremos toda la información necesaria y la disponibilidad del restaurante.',

      'faq.q4.1'    : 'Tengo dudas',
      'faq.q4.2'    : 'respecto a una',
      'faq.q4.3'    : 'reserva ya realizada.',
      'faq.a4'      : 'Para cualquier duda relacionada con su reserva, no dude en contactar con nosotros por correo a <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a> o por teléfono al <a href="tel:+34931436454">+34 931 43 64 54</a>.',

      'faq.q5.1'    : '¿Cuál es la carta que',
      'faq.q5.2'    : 'ofrecen?',
      'faq.a5.p1'   : 'Hestia Bistró ofrece una <strong>carta de temporada</strong> que presenta la cocina y la filosofía del bistró. Varía según la temporalidad y disponibilidad del producto.',
      'faq.a5.p2'   : 'Para poder personalizar su experiencia al máximo, le pedimos que al momento de realizar la reserva nos facilite información sobre alergias, intolerancias o incluso alimentos que no sean de su gusto.',

      'faq.q6.1'    : '¿Cuál es el horario',
      'faq.q6.2'    : 'de Hestia Bistró?',
      'faq.a6'      : 'Abrimos de <strong>jueves a domingo</strong>. Jueves solo cena (20:00–23:00). Viernes y sábado comida (13:00–16:00) y cena (20:00–23:00). Domingo solo comida (13:00–16:00). Cerrado lunes, martes y miércoles.',

      'faq.q7.1'    : '¿Dónde se encuentra',
      'faq.q7.2'    : 'Hestia Bistró?',
      'faq.a7'      : 'Estamos en <strong>Carrer del Pare Claret, 19</strong>, 08788 Vilanova del Camí — en pleno corazón de la comarca de l\'Anoia, a solo <strong>40 minutos de Barcelona</strong>.',

      // Página TÉRMINOS Y CONDICIONES
      'ter.1': '1. <strong>Reservas.</strong> La reserva se considera confirmada únicamente tras recibir el correo electrónico de confirmación por parte de Hestia Bistró. El restaurante se reserva el derecho a cancelar reservas no confirmadas adecuadamente.',
      'ter.2': '2. <strong>Confirmación.</strong> Al realizar la reserva, recibirá un correo electrónico con los datos de la misma. En caso de no recibirlo en las 24 horas siguientes, rogamos contactar con nosotros a través de <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a>.',
      'ter.3': '3. <strong>Modificaciones.</strong> Cualquier cambio en una reserva (número de comensales, fecha u hora) debe comunicarse con al menos 24 horas de antelación a través del correo <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a> o por teléfono al <a href="tel:+34931436454">+34 931 43 64 54</a>.',
      'ter.4': '4. <strong>Cancelaciones.</strong> Las cancelaciones deben realizarse con un mínimo de 24 horas de antelación. La no presentación sin aviso previo (<em>no-show</em>) podrá conllevar la imposibilidad de realizar futuras reservas.',
      'ter.5': '5. <strong>La carta.</strong> La carta y los platos ofrecidos están sujetos a cambios dependiendo de la disponibilidad estacional de la materia prima. Hestia Bistró no garantiza la disponibilidad de un plato específico en una fecha concreta.',
      'ter.6': '6. <strong>Alergias e intolerancias.</strong> Es responsabilidad del cliente comunicar al equipo cualquier alergia, intolerancia alimentaria o restricción dietética en el momento de la reserva, así como al llegar al restaurante.',
      'ter.7': '7. <strong>Reservas para grupos.</strong> Las reservas para grupos de 8 o más comensales requieren contacto directo con el restaurante a través de <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a> y podrán estar sujetas a condiciones específicas comunicadas en el momento de la reserva.',
      'ter.8': '8. <strong>Datos personales.</strong> Los datos facilitados al realizar una reserva serán tratados conforme a nuestra política de privacidad y al Reglamento General de Protección de Datos (RGPD), únicamente para la gestión de la reserva y la comunicación con el cliente.',

      // Página POLÍTICA DE PRIVACIDAD
      'pri.1': '1. <strong>Responsable del tratamiento.</strong> Los datos personales facilitados a través de este sitio web o por correo electrónico son tratados por Hestia Bistró, con domicilio en Carrer del Pare Claret, 19, 08788 Vilanova del Camí (Barcelona). Puede contactar con nosotros en <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a>.',
      'pri.2': '2. <strong>Datos que recopilamos.</strong> Únicamente recopilamos los datos necesarios para gestionar su reserva o atender su consulta: nombre, apellidos, correo electrónico, teléfono, fecha y hora de la reserva, número de comensales y cualquier información adicional que usted nos facilite (alergias, intolerancias, preferencias).',
      'pri.3': '3. <strong>Finalidad del tratamiento.</strong> Sus datos se utilizan exclusivamente para gestionar su reserva, comunicarnos con usted en relación a la misma (confirmaciones, recordatorios, cambios, cancelaciones) y atender sus consultas. No se utilizarán para fines comerciales sin su consentimiento expreso.',
      'pri.4': '4. <strong>Base legal.</strong> La base legal para el tratamiento de sus datos es la ejecución de la relación contractual derivada de la reserva (art. 6.1.b RGPD) y el consentimiento del usuario (art. 6.1.a RGPD) para el envío de comunicaciones.',
      'pri.5': '5. <strong>Conservación de los datos.</strong> Sus datos se conservarán durante el tiempo estrictamente necesario para cumplir con las finalidades indicadas y, posteriormente, durante los plazos legalmente exigidos para atender posibles responsabilidades.',
      'pri.6': '6. <strong>Destinatarios.</strong> Sus datos no serán cedidos a terceros, salvo obligación legal o cuando sea estrictamente necesario para la prestación del servicio (por ejemplo, plataformas de gestión de reservas).',
      'pri.7': '7. <strong>Derechos del usuario.</strong> Tiene derecho a acceder, rectificar, suprimir, limitar el tratamiento, oponerse al tratamiento y ejercer la portabilidad de sus datos. Para ejercerlos puede escribirnos a <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a> indicando su solicitud y adjuntando copia de su documento identificativo.',
      'pri.8': '8. <strong>Reclamaciones.</strong> Si considera que el tratamiento de sus datos no se ajusta a la normativa, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).',
      'pri.9': '9. <strong>Cambios en la política de privacidad.</strong> Hestia Bistró se reserva el derecho a modificar esta política de privacidad para adaptarla a novedades legislativas o jurisprudenciales. En tales casos, anunciaremos los cambios en este mismo apartado.',
    },

    // ─── CATALÀ ──────────────────────────────────────────
    ca: {
      // Metadades
      'meta.title.index'     : 'Hestia Bistró · Cuina d\'autor a l\'Anoia',
      'meta.desc.index'      : 'Hestia Bistró — bistró de cuina d\'autor a Vilanova del Camí. L\'excel·lència de l\'alta cuina en format de proximitat. Sense etiquetes. Sense fredor.',
      'meta.title.faq'       : 'FAQ · Hestia Bistró',
      'meta.desc.faq'        : 'Preguntes freqüents sobre reserves, horaris i dubtes a Hestia Bistró, Vilanova del Camí.',
      'meta.title.carta'     : 'Carta · Hestia Bistró',
      'meta.desc.carta'      : 'La nostra carta de temporada, carta de vins i carta de begudes a Hestia Bistró.',
      'meta.title.reservar'  : 'Reserva · Hestia Bistró',
      'meta.desc.reservar'   : 'Reserva la teva taula a Hestia Bistró online. Cuina d\'autor a 1h de Barcelona.',
      'meta.title.terminos'  : 'Termes i condicions · Hestia Bistró',
      'meta.desc.terminos'   : 'Termes i condicions de Hestia Bistró: reserves, cancel·lacions, al·lèrgies i política de dades.',
      'meta.title.privacidad': 'Política de Privacitat · Hestia Bistró',
      'meta.desc.privacidad' : 'Política de Privacitat de Hestia Bistró conforme al Reglament General de Protecció de Dades (RGPD).',
      'meta.title.gracias'   : 'Gràcies per la teva reserva · Hestia Bistró',
      'meta.desc.gracias'    : 'Confirmació de reserva a Hestia Bistró — t\'esperem aviat.',

      // Capçalera
      'nav.aria'   : 'Primària',
      'nav.reservar': 'Reservar',
      'nav.carta'  : 'Carta',
      'nav.faq'    : 'FAQ',
      'lang.aria'  : 'Idioma',

      // Hero
      'hero.h1'    : 'Hestia Bistró',

      // El Restaurant
      'rest.title.1': 'EL',
      'rest.title.2': 'RESTAURANT',
      'rest.p1'    : 'Situat a <strong>Vilanova del Camí</strong>, Hestia pren el nom de la <strong>deessa grega que representa la llar</strong>. No és una decoració: és el posicionament d\'un projecte que vol portar l\'<strong>excel·lència de l\'alta cuina</strong> a un format de proximitat. Aquí convergeixen la tècnica d\'un equip format en <strong>taules amb estrella</strong> i la calidesa d\'un bistró que es viu com una casa — íntim, proper, sense protocol fred. En aquest petit palau gastronòmic de la comarca de <strong>l\'Anoia</strong>, cada servei és un homenatge al producte de temporada i al sabor honest.',
      'rest.p2'    : 'Oferim un espai íntim i acollidor dissenyat per a diferents moments: des de parelles que busquen un <strong>sopar amb proposta</strong> lluny del soroll de Barcelona, fins a grups d\'amics que celebren al voltant d\'una <strong>taula per compartir</strong>, o professionals que troben a les nostres taules la <strong>proximitat</strong> necessària per a les seves trobades, sense renunciar a una <strong>cuina elaborada</strong> que s\'atreveix des d\'allò familiar.',
      'rest.btn'   : 'El restaurant',
      'rest.cap'   : 'Sala · Hestia Bistró',

      // La Nostra Proposta
      'prop.title.1': 'LA NOSTRA',
      'prop.title.2': 'PROPOSTA',
      'prop.eyebrow': 'Carta',
      'prop.text'  : 'La nostra <strong>carta de temporada</strong> és un pont culinari entre la cuina del Mediterrani i tècniques i sabors d\'arreu del món integrats amb estima i sense renunciar a les bases tradicionals de la cuina, una expressió genuïna de la identitat de Hestia Bistró, on la qualitat excepcional del producte de proximitat és sempre el punt de partida. A partir d\'aquí, la nostra visió gastronòmica el porta a un altre nivell mitjançant una tècnica precisa i una sensibilitat contemporània. El recorregut s\'articula en mossos on l\'ingredient reconeixible es reinventa sense perdre la seva essència.',
      'prop.btn'   : 'Veure la carta',
      'prop.temporada': 'Carta de temporada',
      'prop.subhead': 'Per acompanyar',
      'prop.subtext': 'Les nostres cartes de vins i begudes estan concebudes per a ressaltar cada plat, complementant perfectament l\'experiència.',
      'prop.vinos' : 'Carta de vins',
      'prop.bebidas': 'Carta de begudes',

      // El Xef
      'chef.eyebrow': 'El Xef',
      'chef.name.1': 'JOAN',
      'chef.name.2': 'FORTES',
      'chef.p1'    : 'Vaig néixer als peus de la muntanya de Montserrat, al si d\'una família que em va ensenyar el valor del producte de proximitat i de la cuina feta amb temps. Als 18 anys vaig deixar la meva zona de confort per emprendre un viatge que em va portar per cuines llegendàries a Catalunya i més enllà. Després d\'aconseguir experiència en <strong>taules amb estrella Michelin</strong> i consolidar una visió pròpia, vaig sentir que era el moment d\'un nou repte.',
      'chef.p2'    : '<strong>Hestia</strong> és aquest repte. És la culminació d\'una recerca constant de l\'excel·lència, però aquesta vegada, amb un ingredient secret que ho canvia tot: la proximitat. Treballar amb un equip que entén que l\'alta cuina no necessita protocol fred és una de les experiències més estimulants de la meva carrera. Junts hem creat un diàleg únic entre la <strong>tècnica precisa</strong> i els millors productes de proximitat de <strong>l\'Anoia i Catalunya</strong>. Hestia no és només un restaurant, és l\'emoció de cuinar per a casa en un escenari íntim.',

      // Igualada / Anoia
      'terr.title.1': 'EL COR',
      'terr.title.2': 'DE L\'ANOIA',
      'terr.text'  : 'Al cor de la comarca de <strong>l\'Anoia</strong>, <strong>Vilanova del Camí</strong> i els municipis veïns componen un territori històric marcat per la seva tradició tèxtil, els seus paisatges mediterranis i el seu caràcter obert. A només <strong>quaranta minuts de Barcelona</strong>, la comarca ofereix una alternativa pausada on el producte de proximitat i la cultura mediterrània conviuen amb una nova generació de propostes gastronòmiques que estan redefinint el territori. Hestia pren el seu lloc en aquest escenari per a tornar quelcom a la comarca: una <strong>cuina d\'autor</strong> que no obliga a sortir de casa, situant la nostra gastronomia en el marc més proper i honest de <strong>l\'Anoia</strong>.',
      'terr.btn'   : 'Vine a conèixer-nos',

      // Peu (footer)
      'foot.brand.tagline': 'Cuina d\'autor a l\'Anoia',
      'foot.donde'  : 'On',
      'foot.cuando' : 'Quan',
      'foot.links'  : 'Enllaços',
      'foot.h.jue'  : 'Dijous',
      'foot.h.visa' : 'Divendres a Dissabte',
      'foot.h.dom'  : 'Diumenge',
      'foot.h.cena' : 'Sopar: 20:00 a 23:00',
      'foot.h.comida': 'Dinar: 13:00 a 16:00',
      'foot.l.privacidad': 'Política de Privacitat',
      'foot.l.terminos'  : 'Termes i condicions',
      'foot.l.disenado'  : 'Dissenyat:',

      // Pàgina CARTA
      'carta.title.1': 'LA NOSTRA',
      'carta.title.2': 'CARTA',
      'carta.intro' : 'A Hestia Bistró oferim una <strong>carta de temporada</strong> acompanyada de les nostres <strong>cartes de vins i begudes</strong>, pensades per a complementar l\'experiència i ressaltar cada plat. Selecciona la carta que vulguis consultar.',
      'carta.cta'   : 'Veure PDF →',

      // Pàgina RESERVAR
      'reservar.heading.title'    : 'Reserva la teva taula',
      'reservar.heading.subtitle' : 'Selecciona data, hora i nombre de comensals. Rebràs confirmació immediata per correu.',

      // Pàgina GRÀCIES (landing post-reserva CoverManager)
      'gracias.title'    : 'Gràcies per la teva reserva',
      'gracias.subtitle' : 'Hem rebut la teva reserva correctament. T\'enviarem un correu de confirmació en breu. T\'esperem a Hestia Bistró.',
      'gracias.cta'      : 'Tornar a l\'inici',

      // Pàgina FAQ — preguntes + respostes
      'faq.q1.1'    : 'Com puc',
      'faq.q1.2'    : 'fer una reserva',
      'faq.q1.3'    : 'a Hestia Bistró?',
      'faq.a1'      : 'Per fer una reserva pots fer-ho a través del nostre <a href="reservar.html">apartat de reserves</a> seguint els passos indicats. En cas de no haver-hi disponibilitat a la data desitjada, pots contactar amb nosaltres directament i t\'ajudarem a trobar una alternativa.',

      'faq.q2.1'    : 'Amb quant temps',
      'faq.q2.2'    : 'd\'antelació he de',
      'faq.q2.3'    : 'fer una reserva?',
      'faq.a2'      : 'Pots fer la teva reserva amb un màxim de 90 dies d\'antelació, a través de la nostra <a href="reservar.html">pàgina de reserves</a> o per correu electrònic a <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a>.',

      'faq.q3.1'    : 'Com puc',
      'faq.q3.2'    : 'fer una reserva',
      'faq.q3.3'    : 'per a un grup?',
      'faq.a3'      : 'Si vols fer una reserva per a grup, hauràs de posar-te en contacte amb nosaltres a través del següent correu electrònic: <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a>. Et facilitarem tota la informació necessària i la disponibilitat del restaurant.',

      'faq.q4.1'    : 'Tinc dubtes',
      'faq.q4.2'    : 'respecte a una',
      'faq.q4.3'    : 'reserva ja feta.',
      'faq.a4'      : 'Per a qualsevol dubte relacionat amb la teva reserva, no dubtis a contactar amb nosaltres per correu a <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a> o per telèfon al <a href="tel:+34931436454">+34 931 43 64 54</a>.',

      'faq.q5.1'    : 'Quina és la carta que',
      'faq.q5.2'    : 'oferiu?',
      'faq.a5.p1'   : 'Hestia Bistró ofereix una <strong>carta de temporada</strong> que presenta la cuina i la filosofia del bistró. Varia segons la temporalitat i disponibilitat del producte.',
      'faq.a5.p2'   : 'Per a poder personalitzar la teva experiència al màxim, et demanem que en el moment de fer la reserva ens facilitis informació sobre al·lèrgies, intoleràncies o fins i tot aliments que no siguin del teu gust.',

      'faq.q6.1'    : 'Quin és l\'horari',
      'faq.q6.2'    : 'de Hestia Bistró?',
      'faq.a6'      : 'Obrim de <strong>dijous a diumenge</strong>. Dijous només sopar (20:00–23:00). Divendres i dissabte dinar (13:00–16:00) i sopar (20:00–23:00). Diumenge només dinar (13:00–16:00). Tancat dilluns, dimarts i dimecres.',

      'faq.q7.1'    : 'On es troba',
      'faq.q7.2'    : 'Hestia Bistró?',
      'faq.a7'      : 'Estem al <strong>Carrer del Pare Claret, 19</strong>, 08788 Vilanova del Camí — al bell mig de la comarca de l\'Anoia, a només <strong>40 minuts de Barcelona</strong>.',

      // Pàgina TERMES I CONDICIONS
      'ter.1': '1. <strong>Reserves.</strong> La reserva es considera confirmada únicament després de rebre el correu electrònic de confirmació per part de Hestia Bistró. El restaurant es reserva el dret a cancel·lar reserves no confirmades adequadament.',
      'ter.2': '2. <strong>Confirmació.</strong> En fer la reserva, rebràs un correu electrònic amb les dades de la mateixa. En cas de no rebre\'l en les 24 hores següents, et preguem que contactis amb nosaltres a través de <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a>.',
      'ter.3': '3. <strong>Modificacions.</strong> Qualsevol canvi en una reserva (nombre de comensals, data o hora) s\'ha de comunicar amb un mínim de 24 hores d\'antelació a través del correu <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a> o per telèfon al <a href="tel:+34931436454">+34 931 43 64 54</a>.',
      'ter.4': '4. <strong>Cancel·lacions.</strong> Les cancel·lacions s\'han de fer amb un mínim de 24 hores d\'antelació. La no presentació sense avís previ (<em>no-show</em>) podrà comportar la impossibilitat de fer futures reserves.',
      'ter.5': '5. <strong>La carta.</strong> La carta i els plats oferts estan subjectes a canvis depenent de la disponibilitat estacional de la matèria primera. Hestia Bistró no garanteix la disponibilitat d\'un plat específic en una data concreta.',
      'ter.6': '6. <strong>Al·lèrgies i intoleràncies.</strong> És responsabilitat del client comunicar a l\'equip qualsevol al·lèrgia, intolerància alimentària o restricció dietètica en el moment de la reserva, així com en arribar al restaurant.',
      'ter.7': '7. <strong>Reserves per a grups.</strong> Les reserves per a grups de 8 o més comensals requereixen contacte directe amb el restaurant a través de <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a> i podran estar subjectes a condicions específiques comunicades en el moment de la reserva.',
      'ter.8': '8. <strong>Dades personals.</strong> Les dades facilitades en fer una reserva seran tractades conforme a la nostra política de privacitat i al Reglament General de Protecció de Dades (RGPD), únicament per a la gestió de la reserva i la comunicació amb el client.',

      // Pàgina POLÍTICA DE PRIVACITAT
      'pri.1': '1. <strong>Responsable del tractament.</strong> Les dades personals facilitades a través d\'aquest lloc web o per correu electrònic són tractades per Hestia Bistró, amb domicili al Carrer del Pare Claret, 19, 08788 Vilanova del Camí (Barcelona). Pots contactar amb nosaltres a <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a>.',
      'pri.2': '2. <strong>Dades que recollim.</strong> Únicament recollim les dades necessàries per a gestionar la teva reserva o atendre la teva consulta: nom, cognoms, correu electrònic, telèfon, data i hora de la reserva, nombre de comensals i qualsevol informació addicional que ens facilitis (al·lèrgies, intoleràncies, preferències).',
      'pri.3': '3. <strong>Finalitat del tractament.</strong> Les teves dades s\'utilitzen exclusivament per a gestionar la teva reserva, comunicar-nos amb tu en relació amb la mateixa (confirmacions, recordatoris, canvis, cancel·lacions) i atendre les teves consultes. No s\'utilitzaran per a fins comercials sense el teu consentiment exprés.',
      'pri.4': '4. <strong>Base legal.</strong> La base legal per al tractament de les teves dades és l\'execució de la relació contractual derivada de la reserva (art. 6.1.b RGPD) i el consentiment de l\'usuari (art. 6.1.a RGPD) per a l\'enviament de comunicacions.',
      'pri.5': '5. <strong>Conservació de les dades.</strong> Les teves dades es conservaran durant el temps estrictament necessari per a complir amb les finalitats indicades i, posteriorment, durant els terminis legalment exigits per atendre possibles responsabilitats.',
      'pri.6': '6. <strong>Destinataris.</strong> Les teves dades no seran cedides a tercers, llevat d\'obligació legal o quan sigui estrictament necessari per a la prestació del servei (per exemple, plataformes de gestió de reserves).',
      'pri.7': '7. <strong>Drets de l\'usuari.</strong> Tens dret a accedir, rectificar, suprimir, limitar el tractament, oposar-te al tractament i exercir la portabilitat de les teves dades. Per a exercir-los pots escriure\'ns a <a href="mailto:hestiabistrorestaurant@gmail.com">hestiabistrorestaurant@gmail.com</a> indicant la teva sol·licitud i adjuntant còpia del teu document identificatiu.',
      'pri.8': '8. <strong>Reclamacions.</strong> Si consideres que el tractament de les teves dades no s\'ajusta a la normativa, tens dret a presentar una reclamació davant l\'Agència Espanyola de Protecció de Dades (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).',
      'pri.9': '9. <strong>Canvis en la política de privacitat.</strong> Hestia Bistró es reserva el dret a modificar aquesta política de privacitat per a adaptar-la a novetats legislatives o jurisprudencials. En aquests casos, anunciarem els canvis en aquest mateix apartat.',
    }
  };

  // ─── Motor ───────────────────────────────────────────
  function getLang(){
    const stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(stored) ? stored : DEFAULT_LANG;
  }

  function setLang(lang){
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
  }

  function apply(lang){
    const t = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

    // <html lang="...">
    document.documentElement.setAttribute('lang', lang);

    // textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // innerHTML (para texto con tags como <strong>, <a>, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // aria-label
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria-label');
      if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });

    // <title> y meta description (uno por página, IDs específicos)
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl){
      const key = titleEl.getAttribute('data-i18n');
      if (t[key] !== undefined) titleEl.textContent = t[key];
    }
    const descEl = document.querySelector('meta[name="description"][data-i18n-content]');
    if (descEl){
      const key = descEl.getAttribute('data-i18n-content');
      if (t[key] !== undefined) descEl.setAttribute('content', t[key]);
    }

    // Bloques visibles solo en un idioma específico (ej. iframes de CoverManager)
    // Uso: <div data-lang-only="es">…</div> o <div data-lang-only="ca">…</div>
    // display = '' devuelve al valor que dicte el CSS (block, flex, grid…)
    document.querySelectorAll('[data-lang-only]').forEach(el => {
      const only = el.getAttribute('data-lang-only');
      el.style.display = (only === lang) ? '' : 'none';
    });

    // Marca el botón activo
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  // Inicio
  document.addEventListener('DOMContentLoaded', () => {
    apply(getLang());
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang) setLang(lang);
      });
    });
  });

  // API global mínima por si alguna otra parte del JS quiere usarla
  window.HestiaI18n = { getLang, setLang };
})();
