<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Turismo rural',
      titulo: 'Cuestionario',
      introduccion:
        'Comprender  los conceptos clave y detalles específicos del turismo rural, su desarrollo en diversas regiones del mundo, y su implementación en Colombia.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué región de Colombia se destaca como pionera en el turismo rural?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Eje Cafetero.', esCorrecta: true },
            { id: 'b', texto: 'Valle del Cauca.', esCorrecta: false },
            { id: 'c', texto: 'Antioquia.', esCorrecta: false },
            { id: 'd', texto: 'La Guajira.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál fue el motivo principal para impulsar el turismo rural en el Quindío en los años 90?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diversificación de la economía agrícola.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crisis del café en los mercados internacionales.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Promoción cultural.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Aumento de la población rural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué país europeo se menciona como precursor del turismo rural?',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Italia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'España.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Reino Unido.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Francia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la tipología de alojamiento rural que combina actividades agropecuarias con servicios hoteleros?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hotel Rural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Finca-Hotel.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Casa Campestre.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Posada Turística.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué normativa regula el turismo rural en el Departamento del Quindío?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decreto Nacional de Turismo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley General de Turismo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Normatividad para Establecer Requisitos Mínimos de Instalaciones y Servicios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Plan Nacional de Desarrollo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es uno de los objetivos del turismo rural en áreas rurales?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar el contacto personalizado del turista con el entorno rural.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar la urbanización en zonas rurales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desarrollar grandes resorts en áreas rurales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fomentar la producción agrícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de alojamiento rural ofrece espacios al aire libre para carpas o casas rodantes?',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Posada turística.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Campamento de turismo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Albergue turístico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Finca-hotel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué región del mundo ha implementado programas de turismo rural para el mercado japonés?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estados Unidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Canadá.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Argentina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'México.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una de las estrategias de desarrollo para fortalecer el turismo rural?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Construcción de grandes hoteles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Preservación del patrimonio cultural y natural.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Expansión de la infraestructura urbana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminución de la actividad agrícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes actividades es parte de la oferta de turismo rural en el Quindío?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Paracaidismo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Balsaje por ríos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Escalada en roca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Buceo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
