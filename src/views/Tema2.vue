<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 El turismo rural en Colombia
    
    .fondo-personalizado-1.bottom-2.f3
      .fondo-personalizado-1__contenido.pt-5
        .row.align-items-center.mb-4
          .col-lg-9
            .fondo-color-sistema-l.p-4.p-lg-5(data-aos="fade-right")
              p.mb-0 En Colombia, se considera que la población rural representa un 31 % del total, lo que equivale aproximadamente a 11.800.000 personas, al definir como rural a quienes no residen en cabeceras municipales. Sin embargo, al ampliar la definición de lo rural para incluir a aquellas poblaciones en cabeceras municipales con menos de 10.000 habitantes, se estima que la población rural asciende al 42 % del total, es decir, alrededor de 13 millones de personas. Este dato subraya la importancia del carácter rural del país, justificando la necesidad de políticas y planes que impulsen el turismo rural en todo el territorio nacional.
          .col-lg-3.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 295px;")
        
        p.mb-4(data-aos="fade-up") El turismo rural en Colombia ha evolucionado de ser una opción limitada a una vibrante y creciente alternativa que abarca diversas regiones del país, ofreciendo a los visitantes una experiencia auténtica y enriquecedora mientras impulsa el desarrollo económico y la preservación cultural de las comunidades locales.

        figure.mb-4(data-aos="zoom-in-up")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/SqlRrZ6Aj18?si=v8jmfLACguVHGzeZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. El turismo rural en Colombia

    p.mb-4(data-aos="fade-right") El Plan Nacional de Desarrollo 2022-2026 #[b “Colombia, Potencia Mundial de la Vida”] dedica un capítulo al sector turístico titulado #[b Turismo como motor del desarrollo económico y social] en el cual, después de una introducción y diagnóstico actualizados, se plantean los siguientes lineamientos estratégicos:

    .row.align-items-center(data-aos="flip-up")
      .col-lg-7
        .fondo-color-sistema-o.p-4.borde-12
          .row.align-items-end
            .col-lg-5
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/48.png",style="max-width: 270px;")
            .col-lg-7.mb-3
              h3.text-white.mb-4 Pódcast
              TarjetaAudio.tarjeta-p-3(
                texto="El suelo como sistema"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                tiempo
              )

      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/47.png",style="max-width: 505px;")
    
    .titulo-decorativo.mt-4(data-aos="fade")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Departamento del Quindío
    
    .fondo-personalizado-1.size-full.med.f2.mb-3
      .fondo-personalizado-1__contenido.pt-4
        p.mb-4(data-aos="fade-right") El departamento está ubicado en la vertiente occidental de la Cordillera Central de Colombia y se distingue por su impresionante paisaje y diversidad de sistemas naturales. Entre los ríos más destacados se encuentran el Quindío y La Vieja. Con una extensión de 1.845 km², el departamento alberga 12 municipios.

        p.fw-bold.mb-5(data-aos="fade-left") Los atractivos naturales y culturales son:

        .row.mb-3
          .col-lg-4.mb-4(data-aos="fade-up")
            .tarjeta-p-1.p-3
              figure.mb-4.borde-8
                img.mx-auto(src="@/assets/curso/temas/49.png")
              .cont-titulo.tit-2.mb-4.mb-lg-0
                h4.mb-0.text-center Valle del Cocora
              p.text-center.mb-5 Reconocido por su belleza escénica y sus palmas de cera, símbolo nacional.
          .col-lg-4.mb-4(data-aos="fade-down")
            .tarjeta-p-1.p-3
              figure.mb-4.borde-8
                img.mx-auto(src="@/assets/curso/temas/50.png")
              .cont-titulo.tit-2.mb-4.mb-lg-0
                h4.mb-0.text-center Parque Natural Nacional de los Nevados
              p.text-center.mb-5 Un área de influencia que ofrece paisajes montañosos, lagunas y cascadas.
          .col-lg-4.mb-4(data-aos="fade-up")
            .tarjeta-p-1.p-3
              figure.mb-4.borde-8
                img.mx-auto(src="@/assets/curso/temas/51.png")
              .cont-titulo.tit-2.mb-4.mb-lg-0
                h4.mb-0.text-center Valle de Maravelez
              p.text-center.mb-5 Conocido por sus lagunas y cascadas.
        
        p.fw-bold(data-aos="fade") Los parques y granjas como:

        SlyderF.slider-personalizado-2(columnas="col-lg-4 py-4",data-aos="flip-up")
          .tarjeta-p-4.p-4.sombra-p-1.mx-4.mx-lg-0
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/53.png")
            h5.mb-4.text-center Parque Nacional del Café
            p.mb-5.text-center Un parque temático que celebra la cultura del café en la región.
          .tarjeta-p-4.p-4.sombra-p-1
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/54.png")
            h5.mb-4.text-center Parque Nacional de la Cultura Agropecuaria - PANACA
            p.mb-5.text-center Un espacio dedicado a la agroindustria y la vida rural.
          .tarjeta-p-4.p-4.sombra-p-1
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/55.png")
            h5.mb-4.text-center Granja de Mamá Lulú
            p.mb-5.text-center Un lugar que ofrece experiencias educativas y de recreación para los visitantes.
          .tarjeta-p-4.p-4.sombra-p-1
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/56.png")
            h5.mb-4.text-center Centro Experimental de la Guadua
            p.mb-5.text-center Un centro de investigación y promoción de la guadua, un recurso natural importante en la región.
          .tarjeta-p-4.p-4.sombra-p-1
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/57.png")
            h5.mb-4.text-center Jardín Botánico y su mariposario
            p.mb-5.text-center Un espacio que combina la belleza de la flora local con la oportunidad de observar diversas especies de mariposas.
    
    p.mb-4(data-aos="fade-right") Este departamento se destaca por su riqueza natural y la variedad de actividades que ofrece, desde el ecoturismo hasta la exploración cultural. Los antecedentes del turismo rural en el departamento del Quindío:

    .fondo-personalizado-1.no-tam-full.f5.borde-15.overflow-hidden.mb-4(data-aos="flip-up")
      .fondo-personalizado-1__contenido.p-4
        PasosB.pasos-personalizado-1
          .row.justify-content-center.pb-4(titulo="1990")
            .col-lg-11
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/58.png",style="max-width: 85px;")
                .col
                  h4.mb-3.mb-lg-4 1990
                  p.mb-0 Crisis de los mercados internacionales que afecta a los cultivadores de café en el Eje Cafetero.
          .row.justify-content-center.pb-4(titulo="1991")
            .col-lg-11 
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/60.png",style="max-width: 85px;")
                .col
                  h4.mb-3.mb-lg-4 1991
                  p.mb-0 Propuesta del Fondo Mixto de Promoción Turística del Quindío para evaluar la viabilidad de convertir fincas cafeteras en alojamientos turísticos. 
          .row.justify-content-center.pb-4(titulo="1992")
            .col-lg-11 
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/61.png",style="max-width: 85px;")
                .col
                  h4.mb-3.mb-lg-4 1992
                  p.mb-0 Las primeras 315 personas se alojan en fincas cafeteras. Se firma un convenio de cooperación técnica entre España y Colombia, dando lugar al Plan Estratégico de Desarrollo Turístico Rural del Eje Cafetero. 
          .row.justify-content-center.pb-4(titulo="1994")
            .col-lg-11 
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/62.png",style="max-width: 85px;")
                .col
                  h4.mb-3.mb-lg-4 1994
                  p.mb-0 46 fincas registradas, con 7.916 personas hospedadas. El Fondo de Promoción Turística del Quindío contrata un estudio con la Universidad Externado de Colombia para capacitar a propietarios y empleados de fincas.
          .row.justify-content-center.pb-4(titulo="1995")
            .col-lg-11 
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/63.png",style="max-width: 85px;")
                .col
                  h4.mb-3.mb-lg-4 1995
                  p.mb-0 90 fincas registradas. Inauguración del Parque Nacional del Café, lo que incrementa la demanda de alojamientos rurales.
          .row.justify-content-center.pb-4(titulo="1996")
            .col-lg-11 
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/64.png",style="max-width: 85px;")
                .col
                  h4.mb-3.mb-lg-4 1996
                  p.mb-0 El Estudio de Competitividad Turística define al Eje Cafetero como el #[em Cluster] Cafetero. Se formula un Plan Estratégico de Turismo Rural con apoyo del Ministerio de Desarrollo Económico y el gobierno español.
          .row.justify-content-center.pb-4(titulo="1997")
            .col-lg-11 
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/65.png",style="max-width: 85px;")
                .col
                  h4.mb-3.mb-lg-4 1997
                  p.mb-0 El Ministerio de Desarrollo Económico contrata un estudio de competitividad para el #[em cluster] turístico del Eje Cafetero, que sirve de base para el Plan de Desarrollo Turístico de 1999.
          .row.justify-content-center.pb-4(titulo="1998")
            .col-lg-11 
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/66.png",style="max-width: 85px;")
                .col
                  h4.mb-3.mb-lg-4 1998
                  p.mb-0 Creación del Consejo Regional de Turismo del Eje Cafetero (CORRETUR). Inauguración del Parque Temático Agropecuario PANACA.
          .row.justify-content-center.pb-4(titulo="2004")
            .col-lg-11 
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/67.png",style="max-width: 85px;")
                .col
                  h4.mb-3.mb-lg-4 2004
                  p.mb-0 Según Luis Fernando Ramírez, secretario de Turismo y Cultura, ya había 600 fincas ofreciendo servicios de alojamiento rural en el Quindío.
          .row.justify-content-center.pb-4(titulo="2010")
            .col-lg-11 
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/68.png",style="max-width: 85px;")
                .col
                  h4.mb-3.mb-lg-4 2010
                  p.mb-0 El Eje Cafetero es declarado Patrimonio de la Humanidad por la UNESCO bajo el nombre de "Paisaje Cultural Cafetero de Colombia," lo que impulsa aún más el turismo rural en la región.
          .row.justify-content-center.pb-4(titulo="2019")
            .col-lg-11 
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/69.png",style="max-width: 85px;")
                .col
                  h4.mb-3.mb-lg-4 2019
                  p.mb-0 Inauguración de nuevos atractivos turísticos como el "Parque de la Cultura Agropecuaria" en Quimbaya, que complementa la oferta de turismo rural en la región.
          .row.justify-content-center.pb-4(titulo="2021")
            .col-lg-11 
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/70.png",style="max-width: 85px;")
                .col
                  h4.mb-3.mb-lg-4 2021
                  p.mb-0 El Ministerio de Comercio, Industria y Turismo lanza la campaña "Viaja por Colombia," enfocando esfuerzos en reactivar el turismo rural, con el Eje Cafetero como uno de los principales destinos.

    p.mb-4(data-aos="fade-left") Al tiempo que se desarrollaban y crecían los alojamientos turísticos rurales, en las capitales de los departamentos se fue dando el desarrollo de la industria hotelera de calidad. En la actualidad, la Secretaría de Turismo del departamento viene promoviendo y apoyando las empresas promotoras y prestadoras de servicios turísticos con asistencia técnica, capacitación y con la implementación del Club de Calidad “Haciendas del Café” que ofrecen servicios de alta calidad.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .fondo-color-sistema-j.p-4
          .row.align-items-center
            .col-lg-7
              p.mb-0 Los alojamientos rurales, parques temáticos, y las actividades turísticas, deportivas y recreativas (parapente, balsaje por ríos, #[em canopy], recorridos a caballo…), en auge en la región cafetera, demuestran la apuesta por el turismo rural en el departamento del Quindío.
            .col-lg-5.order-first.order-lg-last
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/71.png",style="max-width: 290px;")

    .titulo-decorativo.my-4(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Normativa
    
    .fondo-color-sistema-p.mb-4(data-aos="fade-left")
      .row
        .col-lg-5.pe-lg-0.align-content-center
          figure
            img.mx-auto(src="@/assets/curso/temas/72.png")
        .col-lg-7.ps-lg-0.align-content-center
          p.mb-0.p-4.ps-lg-0 La Asamblea Departamental del Quindío, en ejercicio de sus atribuciones constitucionales y legales, en especial las conferidas en el artículo 300, numerales 2, 3 y 9 de la Constitución Política, la Ley 2068 de 2020 (que modificó la Ley 300 de 1996 o Ley General de Turismo), la Norma Técnica Sectorial Hotelera de Categorización por Estrellas – NTSH 006, la Norma Técnica Sectorial Hotelera de Alojamiento Rural (Lodges) – NTSH 008, y demás normas concordantes, ordenó, mediante ordenanza 021 de 2005, la adopción de la política departamental de turismo, y mediante ordenanza 022 de 2005, la adopción del Plan Decenal Estratégico de Desarrollo Turístico del Quindío y la dictación de otras disposiciones, así como el proyecto de ordenanza de 2007, por medio del cual se adopta la normatividad para establecer los requisitos mínimos de instalaciones y servicios para el funcionamiento de los alojamientos rurales del Departamento del Quindío.
    
    AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
      .div(titulo="ARTÍCULO 1")
        .ps-md-5.ms-md-3
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Se adopta la “Normatividad para establecer requisitos mínimos de instalaciones y servicios para el funcionamiento de los alojamientos rurales del departamento del Quindío”.
            .col-lg-4
              figure
                img.mx-auto(src="@/assets/curso/temas/73.png",style="max-width: 210px;")
      .div(titulo="ARTÍCULO 2")
        .ps-md-5.ms-md-3
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 El Turismo Rural se define como el conjunto de actividades que valoran espacios agrarios, recursos naturales y paisajísticos, patrimonio cultural, viviendas y fincas rurales, tradiciones populares y productos locales, permitiendo al turista un contacto personalizado y una experiencia inmersiva en el entorno físico y humano de las zonas rurales, con el objetivo de lograr un desarrollo local sostenible.
            .col-lg-4
              figure
                img.mx-auto(src="@/assets/curso/temas/74.png",style="max-width: 210px;")
      .div(titulo="ARTÍCULO 3")
        .ps-md-5.ms-md-3
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Se consideran establecimientos de alojamiento rural aquellos localizados en zonas rurales definidas por los Planes de Ordenamiento Territorial de los municipios del departamento, así como en cascos urbanos de municipios con una población máxima de 10.000 habitantes.
            .col-lg-4
              figure
                img.mx-auto(src="@/assets/curso/temas/75.png",style="max-width: 210px;")
      .div(titulo="ARTÍCULO 4")
        .ps-md-5.ms-md-3
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Un establecimiento de alojamiento rural es aquel que presta servicios de alojamiento en unidades habitacionales privadas, ubicado en áreas rurales o pequeños núcleos urbanos. Debe ofrecer al menos servicios de alimentación (desayuno) y puede incluir pensión completa y otros servicios complementarios.
            .col-lg-4
              figure
                img.mx-auto(src="@/assets/curso/temas/76.png",style="max-width: 210px;")
    
    .titulo-decorativo.my-4(data-aos="fade")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 De las tipologías de alojamiento rural
    
    p.mb-4(data-aos="fade-right") El artículo 5 se consideran y definen las siguientes tipologías de alojamiento rural que son propias de la oferta del servicio de alojamiento en el departamento del Quindío:

    .fondo-personalizado-1.no-tam-full.f4.borde-20.overflow-hidden(data-aos="zoom-in-out")
      .fondo-personalizado-1__contenido.p-4
        SlyderA.slider-personalizado-1.pt-lg-4(tipo="b" data-aos="zoom-in-out")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4.mb-5 Hotel rural
              p.mb-0 Establecimientos en zonas rurales o poblaciones menores de 30.000 habitantes, alquilados por habitaciones, con baños, zonas comunes y servicio de comedor o restaurante.
            .col-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/77.png",style="max-width: 404px;")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4.mb-5 Finca - Hotel
              p.mb-0 Alojamiento turístico con áreas agropecuarias, similar a hoteles de ciudad, alquilados por habitaciones, con baños, zonas comunes y servicio de comedor o restaurante.
            .col-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/78.png",style="max-width: 404px;")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4.mb-5 Finca tradicional
              p.mb-0 Alojamiento en fincas tradicionales o arquitectura de colonización antioqueña, con áreas agropecuarias, alquiladas completas o por habitaciones (máximo 10 habitaciones o 40 personas), con servicio de comedor o cocina.
            .col-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/79.png",style="max-width: 404px;")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4.mb-5 Casa campestre
              p.mb-0 Alojamiento en parcelas rurales independientes o condominios rurales, alquiladas completas, con un máximo de 7 habitaciones o capacidad para 28 personas.
            .col-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/80.png",style="max-width: 404px;")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4.mb-5 Posada turística
              p.mb-0 Vivienda familiar en entornos rurales o urbanos, de arquitectura autóctona, con un máximo de 4 habitaciones para turistas, servicio de desayuno, comedor o facilidades de cocina.
            .col-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/81.png",style="max-width: 404px;")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4.mb-5 Albergue turístico
              p.mb-0 Alojamiento en entornos rurales o urbanos, con habitaciones de ocupación múltiple (separadas por género), máximo de 20 habitaciones (240 personas), baterías sanitarias separadas, y un espacio común.
            .col-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/82.png",style="max-width: 404px;")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
