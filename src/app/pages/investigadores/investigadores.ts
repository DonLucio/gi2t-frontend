import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-investigadores',
  imports: [],
  templateUrl: './investigadores.html',
  styleUrl: './investigadores.sass',
})
export class Investigadores implements OnInit {
    public users: any[] = [
      {
        'id': 1,
        'name': 'sandra patricia rivera guzmán',
        'email': 'sprivera@unipacifico.edu.co',
        'redes': [
          { 'name': 'ORCID', 'url': 'https://orcid.org/0000-0002-1077-7978' },
          { 'name': 'Linkedin', 'url': 'https://www.linkedin.com/in/sandra-rivera-a624285b/' },
          { 'name': 'CvLAC', 'url': 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001325710' },
          { 'name': 'Google Academic', 'url': 'https://scholar.google.es/citations?user=jdxXxUgAAAAJ&hl=es' },
        ],
        'produccion':
          {
            'publicaciones': [
              {
                'text': 'Explorando el panorama de uso y acceso a las TIC entre estudiantes de media vocacional',
                'url': 'https://gi2t.org/documents/DocumentoTrabajo.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Antonio Nariño',
                'url': 'https://gi2t.org/documents/boletines/BoletinAntonioNarino.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Francisco José de Caldas',
                'url': 'https://gi2t.org/documents/boletines/BoletinFranciscoJoseCaldas.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Técnica Industrial Gerardo Valencia Cano',
                'url': 'https://gi2t.org/documents/boletines/BoletinGerardoValenciaCano.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa José María Cabal',
                'url': 'https://gi2t.org/documents/boletines/BoletinJoseMariaCabal.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa José Ramón Bejarano',
                'url': 'https://gi2t.org/documents/boletines/BoletinJoseRamonBejarano.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Juan José Rondón',
                'url': 'https://gi2t.org/documents/boletines/BoletinJuanJoseRondon.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Escuela Normal Superior Juan Ladrilleros',
                'url': 'https://gi2t.org/documents/boletines/BoletinJuanLadrilleros.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa La Anunciación',
                'url': 'https://gi2t.org/documents/boletines/BoletinLaAnunciacion.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Las Américas',
                'url': 'https://gi2t.org/documents/boletines/BoletinLasAmericas.pdf'
              },

            ],
          }
        ,
        'experiencia': [
          {
            'cargo': 'Docente Universitario (Tiempo Completo)',
            'organizacion': 'Universidad del Pacífico',
            'ingreso': '2006',
            'egreso': 'actual',
            'ciudad': 'Buenaventura - Valle del Cauca',
          }
        ],
        'formacion': [
          {
            'titulo': 'Maestría en Ingeniería de Sistemas y Telemática',
            'institucion': 'Universidad ICESI',
            'fecha': 'Febrero 2012',
            'ciudad': 'Cali - Valle del Cauca'
          },
          {
            'titulo': 'Especialización en redes y comunicaciones',
            'institucion': 'UNIVERSIDAD ICESI',
            'fecha': 'Febrerode 2006',
            'ciudad': 'Cali - Valle del Cauca'
          },
          {
            'titulo': 'Ingeniería de sistemas y telemática',
            'institucion': 'UNIVERSIDAD SANTIAGO DE CALI',
            'fecha': 'Abril 2003',
            'ciudad': 'Cali - Valle del Cauca'
          },

        ]

      },
      {
        'id': 2,
        'name': 'yowanna karina caicedo guerrero',
        'email': 'ykcaicedo@unipacifico.edu.co',
        'redes': [
          { 'name': 'ORCID', 'url': 'https://orcid.org/0009-0005-6805-5782' },
          { 'name': 'Linkedin', 'url': 'https://www.linkedin.com/in/yowanna-guerrero-a37a9b65/' },
          { 'name': 'CvLAC', 'url': 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001617667' },
          { 'name': 'Google Academic', 'url': 'https://scholar.google.es/citations?user=CTk50rkAAAAJ&hl=es' },
        ],
        'produccion':
          {
            'publicaciones': [
              {
                'text': 'Explorando el panorama de uso y acceso a las TIC entre estudiantes de media vocacional',
                'url': 'https://gi2t.org/documents/DocumentoTrabajo.pdf'
              },

              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Liceo del Pacífico',
                'url': 'https://gi2t.org/documents/boletines/BoletinLiceoDelPacifico.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Pablo Emilio Carvajal',
                'url': 'https://gi2t.org/documents/boletines/BoletinPabloEmilioCarvajal.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Pascual de Andagoya',
                'url': 'https://gi2t.org/documents/boletines/BoletinPascualDeAndagoya.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa República de Venezuela',
                'url': 'https://gi2t.org/documents/boletines/BoletinRepublicaDeVenezuela.pdf'
              },
              {
                'text': ' Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa San Rafael',
                'url': 'https://gi2t.org/documents/boletines/BoletinSanRafael.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa San Vicente',
                'url': 'https://gi2t.org/documents/boletines/BoletinSanVicente.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Simón Bolívar',
                'url': 'https://gi2t.org/documents/boletines/BoletinSimonBolivar.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Teófilo Roberto Potes',
                'url': 'https://gi2t.org/documents/boletines/BoletinTeofiloRobertoPotes.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Termarit',
                'url': 'https://gi2t.org/documents/boletines/BoletinTermarit.pdf'
              },
            ],

            'software': [
              {
                'name': 'emocioapp',
                'derautor': 'Registro Derechos de Autor: 13-95-449',
                'url': 'emocioapp.palnegocio.co'
              },
              {
                'name': 'Mandanga',
                'derautor': 'Registro Derechos de Autor: 13-22-462'
              },
            ]
          }
        ,
        'experiencia': [
          {
            'cargo': 'Docente Universitaria',
            'organizacion': 'Universidad del Pacífico',
            'ingreso': 'Agosto 2020',
            'egreso': 'Actual',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },
          {
            'cargo': 'Directora de Programa',
            'organizacion': 'Universidad del Pacífico',
            'ingreso': 'Enero de 2006',
            'egreso': 'Agosto de 2020',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },
          {
            'cargo': 'Docente Universitaria',
            'organizacion': 'Universidad del Pacífico',
            'ingreso': 'Abril 2008',
            'egreso': 'Diciembre 2016',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },

          {
            'cargo': 'Secretaria Académica',
            'organizacion': 'Universidad del Pacífico',
            'ingreso': 'Enero de 2015',
            'egreso': 'Diciembre 2016',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },
          {
            'cargo': 'Docente Universitaria',
            'organizacion': 'Universidad Popular del Cesar',
            'ingreso': 'Mayo 2015',
            'egreso': '',
            'ciudad': ''
          },
          {
            'cargo': 'Docente Universitaria',
            'organizacion': 'Universidad Popular del Cesar',
            'ingreso': 'Enero 2020',
            'egreso': '',
            'ciudad': ''
          }

        ],
        'formacion': [
          {
            'titulo': 'Magister en Gestión de la Tecnología Educativa',
            'institucion': 'Universidad de Santander',
            'fecha': 'Julio 2017',
            'ciudad': 'Seccional Bucaramanga - Distancia'
          },
          {
            'titulo': 'Especialista en Administración de la Informática Educativa',
            'institucion': 'Universitaria de Santander',
            'fecha': 'Julio 2015',
            'ciudad': 'Seccional Bucaramanga - Distancia'
          },
          {
            'titulo': 'Especialista en Informática y Telemática',
            'institucion': 'Universidad Católica de Manizales',
            'fecha': 'Diciembre 2004',
            'ciudad': 'Manizales – Caldas'
          },


          {
            'titulo': 'Diplomado Docencia Universitaria con el Enfoque de Actuar en Contexto',
            'institucion': 'Fundación Universitaria Maria Cano',
            'fecha': '2003',
            'ciudad': 'Popayán – Cauca'
          },
          {
            'titulo': 'Ingeniero de Sistemas',
            'institucion': 'Javeriana – Cres Sur Pacifico',
            'fecha': 'Diciembre de 2009',
            'ciudad': 'Cali'
          },
          {
            'titulo': 'Diplomado en Docencia Universitaria',
            'institucion': 'Universidad del Pacifico',
            'fecha': 'Abril de 2009',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },


          {
            'titulo': 'Diplomado de Seguridad Informática',
            'institucion': 'Icesi',
            'fecha': 'Octubre de 2006',
            'ciudad': 'Cali'
          }

        ]

      },

      {
        'id': 3,
        'name': 'gonzalo andrés lucio lópez',
        'email': 'glucio@unipacifico.edu.co',
        'redes': [
          { 'name': 'ORCID', 'url': 'https://orcid.org/0000-0003-4265-4558' },
          { 'name': 'Linkedin', 'url': 'https://www.linkedin.com/in/glucio/' },
          { 'name': 'CvLAC', 'url': 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000231967' },
          { 'name': 'Google Academic', 'url': 'https://scholar.google.com/citations?user=5EVxP38AAAAJ&hl=es' },
        ],
        'produccion':
          {
            'publicaciones': [
              {
                'text': 'Explorando el panorama de uso y acceso a las TIC entre estudiantes de media vocacional',
                'url': 'https://gi2t.org/documents/DocumentoTrabajo.pdf'
              },
              {
                'text': 'Modelo para la evaluación de infraestructura TI en instituciones educativas',
                'url': 'https://atenaeditora.com.br/catalogo/ebook/modelo-para-la-evaluacion-de-infraestructura-ti-en-instituciones-educativas'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Antonio Nariño',
                'url': 'https://gi2t.org/documents/boletines/BoletinAntonioNarino.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Francisco José de Caldas',
                'url': 'https://gi2t.org/documents/boletines/BoletinFranciscoJoseCaldas.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Técnica Industrial Gerardo Valencia Cano',
                'url': 'https://gi2t.org/documents/boletines/BoletinGerardoValenciaCano.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa José María Cabal',
                'url': 'https://gi2t.org/documents/boletines/BoletinJoseMariaCabal.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa José Ramón Bejarano',
                'url': 'https://gi2t.org/documents/boletines/BoletinJoseRamonBejarano.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Juan José Rondón',
                'url': 'https://gi2t.org/documents/boletines/BoletinJuanJoseRondon.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Escuela Normal Superior Juan Ladrilleros',
                'url': 'https://gi2t.org/documents/boletines/BoletinJuanLadrilleros.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa La Anunciación',
                'url': 'https://gi2t.org/documents/boletines/BoletinLaAnunciacion.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Las Américas',
                'url': 'https://gi2t.org/documents/boletines/BoletinLasAmericas.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Liceo del Pacífico',
                'url': 'https://gi2t.org/documents/boletines/BoletinLiceoDelPacifico.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Pablo Emilio Carvajal',
                'url': 'https://gi2t.org/documents/boletines/BoletinPabloEmilioCarvajal.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Pascual de Andagoya',
                'url': 'https://gi2t.org/documents/boletines/BoletinPascualDeAndagoya.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa República de Venezuela',
                'url': 'https://gi2t.org/documents/boletines/BoletinRepublicaDeVenezuela.pdf'
              },
              {
                'text': ' Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa San Rafael',
                'url': 'https://gi2t.org/documents/boletines/BoletinSanRafael.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa San Vicente',
                'url': 'https://gi2t.org/documents/boletines/BoletinSanVicente.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Simón Bolívar',
                'url': 'https://gi2t.org/documents/boletines/BoletinSimonBolivar.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Teófilo Roberto Potes',
                'url': 'https://gi2t.org/documents/boletines/BoletinTeofiloRobertoPotes.pdf'
              },
              {
                'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Termarit',
                'url': 'https://gi2t.org/documents/boletines/BoletinTermarit.pdf'
              },
            ],

            'software': [
              {
                'name': 'emocioapp',
                'derautor': 'Registro Derechos de Autor: 13-95-449',
                'url': 'emocioapp.palnegocio.co'
              },
              {
                'name': 'Mandanga',
                'derautor': 'Registro Derechos de Autor: 13-22-462'
              },
            ]
          }
        ,
        'experiencia': [
          {
            'cargo': 'Docente Universitario (Tiempo Completo)',
            'organizacion': 'Universidad del Pacífico',
            'ingreso': '2006',
            'egreso': 'actual',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },
          {
            'cargo': 'Director de Programa',
            'organizacion': 'Universidad del Pacífico',
            'ingreso': '2006',
            'egreso': 'actual',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },
          {
            'cargo': 'Director Académico',
            'organizacion': 'Universidad del Pacífico',
            'ingreso': '2006',
            'egreso': 'actual',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },
          {
            'cargo': 'Docente Universitario (Tiempo Completo)',
            'organizacion': 'Universidad del Pacífico',
            'ingreso': 'Mayo 2004',
            'egreso': 'Diciembre 2004',
            'ciudad': 'Guapi - Cauca'
          },
          {
            'cargo': 'Docente Universitario (Hora Catédra)',
            'organizacion': 'Universidad del Valle',
            'ingreso': '2018',
            'egreso': 'actual',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },
          {
            'cargo': 'Docente. Diplomado en Docencia Universitaria',
            'organizacion': 'Universidad del Valle',
            'ingreso': 'Agosto 2023',
            'egreso': '',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },
          {
            'cargo': 'Docente Diplomado',
            'organizacion': 'Universidad EAN & Fundación Telefónica',
            'ingreso': 'Octubre 2019',
            'egreso': 'Noviembre 2019',
            'ciudad': 'Buenaventura - Valle del Cauca',
          },
          {
            'cargo': 'Docente Universitario (Catédra)',
            'organizacion': 'Universidad Cooperativa de Colombia',
            'ingreso': 'Enero 2011',
            'egreso': 'Diciembre 2011',
            'ciudad': 'Cali - Valle del Cauca'
          },
          {
            'cargo': 'Docente Universitario (Catédra)',
            'organizacion': 'Universidad Cooperativa de Colombia',
            'ingreso': 'Enero 2005',
            'egreso': 'Diciembre 2006',
            'ciudad': 'Cali - Valle del Cauca'
          },
          {
            'cargo': 'Docente Universitario (Catédra)',
            'organizacion': 'Universidad Cooperativa de Colombia',
            'ingreso': 'Enero 2005',
            'egreso': 'Junio 2006',
            'ciudad': 'Popayan - Cauca'
          },
          {
            'cargo': 'Docente Universitario (Tiempo Completo)',
            'organizacion': 'Universidad Cooperativa de Colombia',
            'ingreso': 'Enero 2002',
            'egreso': 'Mayo 2004',
            'ciudad': 'Popayan - Cauca'
          },
          {
            'cargo': 'Desarrolador Plataforma Digital para la Integración de los Servicios del Sector Turístico del Distrito (Contratista)',
            'organizacion': 'Univalle – Cámara de Comercio',
            'ingreso': 'Agosto 2019',
            'egreso': 'Noviembre 2019',
            'ciudad': 'Buenaventura – Valle del Cauca'
          },
          {
            'cargo': 'Analista, Diseñador y Desarrollador (Contratista)',
            'organizacion': 'Comité Paro Cívico',
            'ingreso': 'Mayo 2018',
            'egreso': 'Febrero 2019',
            'ciudad': 'Buenaventura – Valle del Cauca'
          },
          {
            'cargo': 'Director de Proyecto de Software',
            'organizacion': 'GCReingenieria',
            'ingreso': 'Septiembre 2012',
            'egreso': 'Septiembre 2013',
            'ciudad': 'Bogotá (Remoto)'
          },
          {
            'cargo': 'Emprendedor',
            'organizacion': 'CLibre I+D',
            'ingreso': 'Marzo 2010',
            'egreso': 'Octubre 2014',
            'ciudad': 'Buenaventura – Valle del Cauca'
          },
          {
            'cargo': 'Analista, Diseñador y Desarrollador (Contratista)',
            'organizacion': 'Alcaldía Distrital',
            'ingreso': 'Septiembre 2009',
            'egreso': 'Diciembre 2009',
            'ciudad': 'Buenaventura – Valle del Cauca'
          },
          {
            'cargo': 'Analista, Diseñador y Desarrollador - Sistema Académico en línea',
            'organizacion': 'Universidad del Pacifico',
            'ingreso': '2008',
            'egreso': '2010',
            'ciudad': 'Buenaventura – Valle del Cauca'
          },
        ],
        'formacion': [
          {
            'titulo': 'Maestría en Innovación Educativa',
            'institucion': 'Universidad ICESI',
            'fecha': '2023',
            'ciudad': 'Cali - Valle del Cauca'
          },
          {
            'titulo': 'Dirección de Sistemas de Información sobre Software Libre (Becario) - Online',
            'institucion': 'Universitat Oberta de Catalunya',
            'fecha': '2005',
            'ciudad': 'Barcelona - España'
          },
          {
            'titulo': 'Maestría en Administración de Empresas',
            'institucion': 'Fundación Universitaria Maria Cano',
            'fecha': '2004',
            'ciudad': 'Medellín – Antioquia'
          },
          {
            'titulo': 'Especialización en Alta Gerencia',
            'institucion': 'Fundación Universitaria Maria Cano',
            'fecha': '2003',
            'ciudad': 'Popayán – Cauca'
          },
          {
            'titulo': 'Ingeniero de Sistemas',
            'institucion': 'Universidad Cooperativa de Colombia',
            'fecha': '2001',
            'ciudad': 'Popayán – Cauca'
          },
          {
            'titulo': 'SEI-Certified PSP Developer',
            'institucion': 'Carnegie Mellon',
            'fecha': '2014'
          },
          {
            'titulo': 'Diplomado en Desarrollo de Proyectos de Ingeniería de Software Utilizando Herramientas Oracle',
            'institucion': 'Universidad Cooperativa de Colombia',
            'fecha': '2001',
            'ciudad': 'Popayán – Cauca'
          },
          {
            'titulo': 'Diplomado en Formación y Cualificación Docente',
            'institucion': 'Universidad del Pacifico',
            'fecha': '2014',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },
          {
            'titulo': 'Diplomado en Competencia para el Desarrollo de las Funciones Sustantivas en la Educación Superior',
            'institucion': 'Universidad del Pacifico',
            'fecha': '2015',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },
          {
            'titulo': 'Estrategias Didácticas para la Educación Mediada por TIC',
            'institucion': 'Ministerio de Educación Nacional y Univirtual - Universidad Tecnológica de Pereira',
            'fecha': '2012  ',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },
        ]

      },
      /*
      {
        'id': 4,
        'name': 'Claudia Ximena Pérez Aguilar',
        'email': 'claudia.ximena.perez@correounivalle.edu.co',
        'redes': [
        ],
        'produccion': {},
        'experiencia': [],
        'formacion': []
      },
      */
      {
        'id': 5,
        'name': 'ariel armando ruiz zuñiga',
        'email': 'arielarmandoruiz@gmail.com',
        'redes': [
          { 'name': 'ORCID', 'url': 'https://orcid.org/0000-0002-4855-5334' },
          { 'name': 'Linkedin', 'url': 'https://www.linkedin.com/in/ariel-armando-ruiz-z%C3%BA%C3%B1iga-4a52414b' },
          { 'name': 'CvLAC', 'url': 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000930750' },
          { 'name': 'Google Academic', 'url': 'https://scholar.google.es/citations?user=SGqxrWAAAAAJ&hl=es' },
        ],
        'produccion':
          {
            'publicaciones': [
              {
                'text': 'Estrategia pedagógica para el aprendizaje autónomo en la modalidad B-Learning de la institución universitaria Antonio José Camacho',
                'url': 'https://books.google.com.co/books/about/Estrategia_pedag%C3%B3gica_para_el_aprendiza.html?id=l5EsyQEACAAJ&redir_esc=y'
              },
              {
                'text': 'Entornos personales de aprendizaje en la modalidad b-learning para el aprender a aprender en la sociedad del conocimiento.',
                'url': 'http://revistas.ucpejv.edu.cu/index.php/rPProf/article/view/310/515'
              },
              {
                'text': 'iBossS: framework para la gestión individual del trabajo de un desarrollador de software basado en los principios y las prácticas de autogestión',
                'url': 'https://repository.icesi.edu.co/biblioteca_digital/bitstream/10906/70263/1/iBossS_framework_gesti%C3%B3n.pdf'
              },
            ],

            'software': [
              {
                'name': 'Sistema de Información Web para la Defensa Civil Colombiana',

              },
            ]
          }
        ,
        'experiencia': [
          {
            'cargo': 'Docente Investigador',
            'organizacion': 'Universidad Santiago de Cali',
            'ingreso': '2021',
            'egreso': 'actual',
            'ciudad': 'Cali - Valle del Cauca'
          },
          {
            'cargo': 'Docencia, Investigación y Desarrollo',
            'organizacion': 'Institución Universitaria Antonio José Camacho',
            'ingreso': '2010',
            'egreso': '2019',
            'ciudad': 'Cali - Valle del Cauca'
          },
          {
            'cargo': 'Director Departamento UNIAJC Virtual',
            'organizacion': 'Institución Universitaria Antonio José Camacho',
            'ingreso': '2015',
            'egreso': '2019',
            'ciudad': 'Cali - Valle del Cauca'
          },
          {
            'cargo': 'Docente',
            'organizacion': 'Universidad Libre De Colombia',
            'ingreso': '2011',
            'egreso': '2018',
            'ciudad': 'Cali - Valle del Cauca'
          },
          {
            'cargo': 'Docente Universitario (Tiempo Completo)',
            'organizacion': 'Universidad del Pacífico',
            'ingreso': '2003',
            'egreso': '2009',
            'ciudad': 'Buenaventura - Cauca'
          },
        ],
        'formacion': [
          {
            'titulo': 'Doctorado Universidad de Ciencias Pedagógicas',
            'institucion': 'Enrique José Varona',
            'fecha': '2018',
            'ciudad': 'La Habana - Cuba'
          },
          {
            'titulo': 'Maestría en Gestión Informática y Telecomunicaciones',
            'institucion': 'Universidad ICESI',
            'fecha': '2013',
            'ciudad': 'Cali - Valle del Cauca'
          },
          {
            'titulo': 'Especialización En Redes y Servicios Telemáticos',
            'institucion': 'Universidad del Cauca',
            'fecha': '2001',
            'ciudad': 'Popayán - Cauca'
          },
          {
            'titulo': 'Ingeniero de Sistemas',
            'institucion': 'Universidad Cooperativa de Colombia',
            'fecha': '2000',
            'ciudad': 'Popayán – Cauca'
          },
          {
            'titulo': 'Diplomado Auditoria de Sistemas',
            'institucion': 'Universidad Cooperativa de Colombia',
            'fecha': '2000'
          },
          {
            'titulo': 'Diplomado En Auditoria de Sistemas y Operativa',
            'institucion': 'Extensión Organizacion De Estados Americanos (Oea)',
            'fecha': '2007',
            'ciudad': 'Virtual'
          },
          {
            'titulo': 'Tutor Virtual',
            'institucion': 'Universidad del Pacifico',
            'fecha': '2007',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },
          {
            'titulo': 'Diplomado en Etnoeducación',
            'institucion': 'Universidad del Pacifico',
            'fecha': '2008',
            'ciudad': 'Buenaventura - Valle del Cauca'
          },
        ]

      }
    ]
    constructor(private renderer2: Renderer2, private titleService: Title){}
    ngOnInit(): void {
      this.setPageTitle('GI2T: Investigadores');
      this.addJsonLdSchema();
    }

    private setPageTitle(title: string) {
      this.titleService.setTitle(title);
    }

    private addJsonLdSchema() {
      const script = this.renderer2.createElement('script');
      script.type = 'application/ld+json';

      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": this.users.map((user, index) => ({
          "@type": "Person",
          "position": index + 1,
          "name": user.name,
          "email": user.email,
          "url": user.redes.find((r: any) => r.name === 'Linkedin')?.url,
          "affiliation": {
            "@type": "Organization",
            "name": "Universidad del Pacífico"
          },
          "sameAs": user.redes.map((r: any) => r.url),
          "worksFor": {
            "@type": "Organization",
            "name": "Universidad del Pacífico"
          },
          "jobTitle": user.experiencia[0]?.cargo,
          "alumniOf": user.formacion.map((f: any) => ({
            "@type": "EducationalOrganization",
            "name": f.institucion
          })),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
          },
          "publishingPrinciples": user.produccion?.publicaciones?.map((p: any) => ({
            "@type": "CreativeWork",
            "headline": p.text,
            "url": p.url
          }))
        }))
      };

      script.text = JSON.stringify(jsonLd);
      this.renderer2.appendChild(document.head, script);
    }
}
