export default {
  global: {
    componenteFormativo: 'El turismo rural en el mundo',
    descripcionCurso:
      'Este componente formativo ofrece una visión global del turismo rural en distintas regiones, como Norteamérica, América Latina y Europa, destacando su desarrollo en Colombia, especialmente en el Eje Cafetero. Incluye antecedentes históricos, normatividad vigente en el Departamento del Quindío, y estrategias para fomentar el turismo rural como herramienta para el desarrollo económico y social de las comunidades rurales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El turismo rural en el mundo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Norte América',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'América Latina',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Europa',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El turismo rural en Colombia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El turismo rural en el mundo',
      referencia:
        'CyC Viajar 🌎 | Documentales interesantes (2022). TURISMO RURAL POR EL MUNDO RTVE [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/playlist?list=PLW11BdQku_lePbKALxUiOCixOfIU05m5L',
    },
    {
      tema: 'Norte América',
      referencia:
        'RTVC (2024). Estados Unidos, Cesar: un destino de turismo rural que borra heridas del pasado.',
      tipo: 'Artículo',
      link:
        'https://www.radionacional.co/cultura/turismo/planes-de-turismo-rural-estados-unidos-cesar',
    },
    {
      tema: 'América Latina',
      referencia:
        'Ecoturimo (2021). El turismo rural comunitario, factor de desarrollo para la población latinoamericana.',
      tipo: 'Artículo',
      link:
        'https://www.ecoturismo.com/turismo-rural-comunitario-latinoamerica-#:~:text=El%20turismo%20rural%20o%20ecoturismo,culturales%20o%20actividades%20productivas%20tradicionales.',
    },
    {
      tema: 'Europa',
      referencia:
        'Uvrike (2016).Turismo rural en Europa - Sierras de Cádiz: un paraíso oculto. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HfzQQPySeOM',
    },
    {
      tema: 'El turismo rural en Colombia',
      referencia:
        'FNDCol (2016). 2. Quindío, el corazón de Colombia. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7b2IawXPtHk',
    },
  ],
  glosario: [
    {
      termino: 'Agroturismo',
      significado:
        'subtipo de turismo rural que ofrece a los turistas la oportunidad de participar en actividades agrícolas y experimentar la vida en el campo.',
    },
    {
      termino: '<em>Cluster</em> cafetero',
      significado:
        'concepto que agrupa a los departamentos del Eje Cafetero en un modelo de desarrollo turístico basado en su cultura cafetera y sus atractivos naturales.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'enfoque de desarrollo que busca satisfacer las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas, especialmente en contextos rurales.',
    },
    {
      termino: 'Eje cafetero',
      significado:
        'región de Colombia conformada por los departamentos de Caldas, Quindío y Risaralda, reconocida por su paisaje cultural cafetero y su liderazgo en el desarrollo del turismo rural.',
    },
    {
      termino: 'Finca-hotel',
      significado:
        'tipo de alojamiento rural que combina la explotación agropecuaria con servicios hoteleros, permitiendo al visitante participar en actividades agrícolas.',
    },
    {
      termino: 'Normatividad rural',
      significado:
        'conjunto de reglas y regulaciones específicas para el funcionamiento de alojamientos y servicios turísticos en áreas rurales, asegurando estándares de calidad y sostenibilidad.',
    },
    {
      termino: 'Patrimonio cultural',
      significado:
        'conjunto de bienes, tradiciones y prácticas culturales que se conservan y promueven en el turismo rural, contribuyendo a la identidad de las comunidades rurales.',
    },
    {
      termino: 'Plan estratégico de turismo',
      significado:
        'documento que define las estrategias y acciones necesarias para promover y desarrollar el turismo rural de manera organizada y sostenible en una región específica.',
    },
    {
      termino: 'Quindío',
      significado:
        'departamento del Eje Cafetero, destacado por su infraestructura y políticas enfocadas en el turismo rural, así como por ser un pionero en esta modalidad en Colombia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gobernación del Quindío. (s.f.). Plan Quindío: Destino del nuevo milenio. Armenia.',
      link: '',
    },
    {
      referencia:
        'Gobierno Nacional de Colombia. (2022). <em>Plan Nacional de Desarrollo 2022-2026</em>.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2003, febrero). Turismo para un Nuevo País. Plan Sectorial de Turismo 2003-2006. Bogotá.',
      link: '',
    },
    {
      referencia:
        'PROMER. (2002). Programa de Apoyo a la Microempresa Rural de América Latina y el Caribe. Newsletter Nº 1.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Julio Hernán Beltrán Peñuela',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
