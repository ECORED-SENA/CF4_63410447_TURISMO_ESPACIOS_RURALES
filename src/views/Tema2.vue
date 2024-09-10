<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 2
      h1 El turismo rural en Colombia
    
    .fondo-personalizado-1.bottom-2.f3
      .fondo-personalizado-1__contenido.pt-5
        .row.align-items-center.mb-4
          .col-lg-9
            .fondo-color-sistema-l.p-4.p-lg-5
              p.mb-0 En Colombia, se considera que la población rural representa un 31% del total, lo que equivale aproximadamente a 11.800.000 personas, al definir como rural a quienes no residen en cabeceras municipales. Sin embargo, al ampliar la definición de lo rural para incluir a aquellas poblaciones en cabeceras municipales con menos de 10.000 habitantes, se estima que la población rural asciende al 42% del total, es decir, alrededor de 13 millones de personas. Este dato subraya la importancia del carácter rural del país, justificando la necesidad de políticas y planes que impulsen el turismo rural en todo el territorio nacional.
          .col-lg-3.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 295px;")
        
        p.mb-4 El turismo rural en Colombia ha evolucionado de ser una opción limitada a una vibrante y creciente alternativa que abarca diversas regiones del país, ofreciendo a los visitantes una experiencia auténtica y enriquecedora mientras impulsa el desarrollo económico y la preservación cultural de las comunidades locales.

        figure.mb-4(data-aos="zoom-in-up")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/SqlRrZ6Aj18?si=v8jmfLACguVHGzeZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. El turismo rural en Colombia

    p.mb-4 El Plan Nacional de Desarrollo 2022-2026 #[b “Colombia, Potencia Mundial de la Vida”] dedica un capítulo al sector turístico titulado #[b Turismo como motor del desarrollo económico y social] en el cual, después de una introducción y diagnóstico actualizados, se plantean los siguientes lineamientos estratégicos:

    .row.align-items-center
      .col-lg-7
        .fondo-color-sistema-o.p-4.borde-12
          .row.align-items-end
            .col-lg-5
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/48.png",style="max-width: 270px;")
            .col-lg-7.mb-3
              h3.text-white.mb-4 Podcast
              TarjetaAudio.tarjeta-p-3(
                texto="El suelo como sistema"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                tiempo
              )

      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/47.png",style="max-width: 505px;")
    
    .titulo-decorativo.mt-4
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Departamento del Quindío
    
    .fondo-personalizado-1.size-full.med.f2.mb-3
      .fondo-personalizado-1__contenido.pt-4
        p.mb-4 El departamento está ubicado en la vertiente occidental de la Cordillera Central de Colombia y se distingue por su impresionante paisaje y diversidad de sistemas naturales. Entre los ríos más destacados se encuentran el Quindío y La Vieja. Con una extensión de 1.845 km², el departamento alberga 12 municipios.

        p.fw-bold.mb-5 Los atractivos naturales y culturales son:

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
        
        p.fw-bold Los parques y granjas como:

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
    
    p.mb-4 Este departamento se destaca por su riqueza natural y la variedad de actividades que ofrece, desde el ecoturismo hasta la exploración cultural. Los antecedentes del turismo rural en el departamento del Quindío:

    .fondo-personalizado-1.no-tam-full.f5.borde-15.overflow-hidden
      .fondo-personalizado-1__contenido.p-4
        PasosB.pasos-personalizado-1
          .row.justify-content-center.pb-4(titulo="Lactosa")
            .col-lg-11
              .row
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/58.png",style="max-width: 85px;")
                .col
                  h4.mb-3.mb-lg-4 1990
                  p.mb-0 Crisis de los mercados internacionales que afecta a los cultivadores de café en el Eje Cafetero. 


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
