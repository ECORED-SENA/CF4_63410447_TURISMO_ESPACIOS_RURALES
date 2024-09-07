<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
  
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.py-5

        p.mb-4(data-aos="fade") El turismo rural ha emergido como una alternativa valiosa para el desarrollo económico y social en diversas regiones del mundo, ofreciendo a las comunidades rurales una oportunidad para diversificar sus fuentes de ingresos y preservar su patrimonio cultural y natural. Esta modalidad turística ha experimentado un crecimiento significativo en países de Norteamérica, América Latina y Europa, adaptándose a las particularidades de cada región.

        .row.justify-content-center.mb-4
          .col-lg-2.pe-lg-0(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/1.png")
          .col-lg-8.ps-lg-0
            .fondo-color-sistema-j.p-4.px-lg-5.align-content-center.h-100
              p.mb-0(data-aos="fade-down") En Colombia, el Eje Cafetero se ha consolidado como el principal referente del turismo rural, combinando la belleza de sus paisajes con la riqueza cultural de sus fincas tradicionales. Esta zona ha aprovechado su potencial turístico, desarrollando infraestructuras y servicios que permiten a los visitantes disfrutar de una experiencia auténtica en contacto con la naturaleza y la vida rural.
        
        .fondo-color-sistema-k.p-4.mb-4(data-aos="zoom-in-out")
          p El presente documento ofrece un análisis detallado del desarrollo del turismo rural en Colombia, con énfasis en el Departamento del Quindío, donde se han implementado políticas y normativas específicas para regular y promover esta actividad. A través de un recorrido por la evolución del turismo rural en el país, se destacan los logros alcanzados y los desafíos que aún enfrenta este sector clave para el desarrollo regional.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
