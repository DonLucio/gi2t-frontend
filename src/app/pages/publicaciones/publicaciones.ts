import { Component, OnInit, Renderer2, Inject, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-publicaciones',
  imports: [RouterLink],
  templateUrl: './publicaciones.html',
  styleUrl: './publicaciones.sass',
})
export class Publicaciones implements OnInit{

  public boletines =[
    {
      'edicion': 1,
      'fecha': 'Noviembre, 2023',
      'estado': 'open',
      'detalle': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
      'publicaciones':
      [
        {
          'id': 2,
          'volumen': 1,
          'url': 'https://doi.org/10.5281/zenodo.13830097',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Antonio Nariño',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830097'

        },
        {
          'id': 3,
          'volumen': 2,
          'url': 'https://doi.org/10.5281/zenodo.13831011',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Francisco José de Caldas',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13831011'
        },
        {
          'id': 4,
          'volumen': 3,
          'url': 'https://doi.org/10.5281/zenodo.13830173',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Técnica Industrial Gerardo Valencia Cano',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830173'
        },
        {
          'id': 5,
          'volumen': 4,
          'url': 'https://doi.org/10.5281/zenodo.13830227',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa José María Cabal',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830227'
        },
        {
          'id': 6,
          'volumen': 5,
          'url': 'https://doi.org/10.5281/zenodo.13830357',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa José Ramón Bejarano',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830357'
        },
        {
          'id': 7,
          'volumen': 6,
          'url': 'https://doi.org/10.5281/zenodo.13830414',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Juan José Rondón',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830414'
        },
        {
          'id': 8,
          'volumen': 7,
          'url': 'https://doi.org/10.5281/zenodo.13830504',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Escuela Normal Superior Juan Ladrilleros',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830504'
        },
        {
          'id': 9,
          'volumen': 8,
          'url': 'https://doi.org/10.5281/zenodo.13830544',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa La Anunciación',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830544'
        },
        {
          'id': 10,
          'volumen': 9,
          'url': 'https://doi.org/10.5281/zenodo.13830570',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Las Américas',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830570'
        },
        {
          'id': 11,
          'volumen': 10,
          'url': 'https://doi.org/10.5281/zenodo.13830592',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Liceo del Pacífico',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830592'
        },
        {
          'id': 12,
          'volumen': 11,
          'url': 'https://doi.org/10.5281/zenodo.13830643',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Pablo Emilio Carvajal',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830643'
        },
        {
          'id': 13,
          'volumen': 12,
          'url': 'https://doi.org/10.5281/zenodo.13830676',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Pascual de Andagoya',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830676'
        },
        {
          'id': 14,
          'volumen': 13,
          'url': 'https://doi.org/10.5281/zenodo.13830904',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa República de Venezuela',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830904'
        },
        {
          'id': 15,
          'volumen': 14,
          'url': 'https://doi.org/10.5281/zenodo.13830918',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa San Rafael',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830918'
        },
        {
          'id': 16,
          'volumen': 15,
          'url': 'https://doi.org/10.5281/zenodo.13830938',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa San Vicente',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830938'
        },
        {
          'id': 17,
          'volumen': 16,
          'url': 'https://doi.org/10.5281/zenodo.13830957',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Simón Bolívar',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830957'
        },
        {
          'id': 18,
          'volumen': 17,
          'url': 'https://doi.org/10.5281/zenodo.13830979',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Teofílo Roberto Potes',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.13830979'
        },
        {
          'id': 19,
          'volumen': 18,
          'url': 'https://doi.org/10.5281/zenodo.14186457',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Termarit',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': 'https://doi.org/10.5281/zenodo.14186457'
        },
      ]
    },
    {
      'edicion': 2,
      'fecha': 'Noviembre, 2024',
      'estado': 'open',
      'detalle': 'Esta publicación corresponde a la segunda edición del boletín, presentando los resultados detallados de un ejercicio de caracterización digital realizado durante el año 2024 en 20 Instituciones entre publicas y privadas del Distrito de Buenaventura.',
      'publicaciones':
      [
        {
          'id': 20,
          'volumen': 1,
          'url': 'https://doi.org/10.5281/zenodo.17470615',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Seminario San Buenaventura',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17470615'
        },
        {
          'id': 21,
          'volumen': 2,
          'url': 'https://doi.org/10.5281/zenodo.15667994',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Instituto Comercial Del Pacífico',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.15667994'
        },
        {
          'id': 22,
          'volumen': 3,
          'url': 'https://doi.org/10.5281/zenodo.17462055',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Liceo De Occidente',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17462055'
        },
        {
          'id': 23,
          'volumen': 4,
          'url': 'https://doi.org/10.5281/zenodo.17470523',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Instituto Miguel De Cervantes Saavedra',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17470523'
        },
        {
          'id': 24,
          'volumen': 5,
          'url': 'https://doi.org/10.5281/zenodo.17470577',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Colegio Naval José Prudencio Padilla',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17470577'
        },
        {
          'id': 25,
          'volumen': 6,
          'url': 'https://doi.org/10.5281/zenodo.17470577',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Teófilo Roberto Potes',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17470577'
        },
        {
          'id': 26,
          'volumen': 7,
          'url': 'https://doi.org/10.5281/zenodo.17470715',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Francisco José De Caldas',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17470715'
        },
        {
          'id': 27,
          'volumen': 8,
          'url': ' https://doi.org/10.5281/zenodo.17470814',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Diocesana Jesús Adolescente',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17470814'
        },
        {
          'id': 28,
          'volumen': 9,
          'url': 'https://doi.org/10.5281/zenodo.17470888',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa San Rafael',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17470888'
        },
        {
          'id': 29,
          'volumen': 10,
          'url': 'https://doi.org/10.5281/zenodo.17470936',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa José María Cabal',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17470936'
        },
        {
          'id': 30,
          'volumen': 11,
          'url': 'https://doi.org/10.5281/zenodo.17470985',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa José Ramón Bejarano',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17470985'
        },
        {
          'id': 31,
          'volumen': 12,
          'url': 'https://doi.org/10.5281/zenodo.17471042',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Juan José Rondón',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17471042'
        },
        {
          'id': 32,
          'volumen': 13,
          'url': 'https://doi.org/10.5281/zenodo.17471100',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa La Anunciación',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17471100'
        },
        {
          'id': 33,
          'volumen': 14,
          'url': 'https://doi.org/10.5281/zenodo.17480385',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Las Américas',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17480385'
        },
        {
          'id': 34,
          'volumen': 15,
          'url': 'https://doi.org/10.5281/zenodo.17480431',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Liceo Del Pacífico',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17480431'
        },
        {
          'id': 35,
          'volumen': 16,
          'url': 'https://doi.org/10.5281/zenodo.17606137',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Escuela Normal Superior Juan Ladrilleros',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17606137'
        },
        {
          'id': 36,
          'volumen': 17,
          'url': 'https://doi.org/10.5281/zenodo.17480498',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Pablo Emilio Carvajal',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17480498'
        },
        {
          'id': 37,
          'volumen': 18,
          'url': 'https://doi.org/10.5281/zenodo.17480556',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Pascual De Andagoya',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17480556'
        },
        {
          'id': 38,
          'volumen': 19,
          'url': 'https://doi.org/10.5281/zenodo.17480604',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa San Vicente',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17480604'
        },
        {
          'id': 39,
          'volumen': 20,
          'url': 'https://doi.org/10.5281/zenodo.17480653',
          'date': 'Boletín 2. Noviembre, 2024',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Técnico Industrial Gerardo Valencia Cano',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Esta edición ha sido diseñada con el compromiso de servir como puente entre la investigación y la acción, compartiendo de forma clara y accesible los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.17480653'
        },

      ]
    },
  ]

  public publicaciones = [
    {
      'id': 100,
      'url': 'https://atenaeditora.com.br/catalogo/ebook/modelo-para-la-evaluacion-de-infraestructura-ti-en-instituciones-educativas',
      'target': true,
      'date': 'Diciembre, 2024',

      'title': 'Modelo para la evaluación de infraestructura TI en instituciones educativas',
      'subtitle': 'Ebook - Isbn: 978-65-258-3026-1',
      'text': 'Una propuesta de modelo que retoma las mejores prácticas de sistemas robustos y reconocidos, adaptándolos al contexto educativo. El objetivo es proporcionar una herramienta que permita a las administraciones públicas y a las instituciones educativas tomar decisiones informadas y basadas en datos concretos, orientadas a mejorar el acceso y la calidad de las TIC en el ámbito educativo.',
      'doi': 'https://doi.org/10.22533/at.ed.261241212'
    },
    {
      'id': 101,
      'url': 'https://zenodo.org/records/12754339',
      'target': true,
      'date': 'Noviembre, 2023',
      'title': 'Explorando el panorama de uso y acceso a las TIC entre estudiantes de media vocacional. Un estudio en el Distrito de Buenaventura',
      'subtitle': 'Documento De Trabajo',
      'text': 'Documento de trabajo, centrado en el uso y acceso de las TIC (Tecnologías de la Información y la Comunicación) entre estudiantes de educación media vocacional en el distrito de Buenaventura, es fruto del esfuerzo conjunto del Grupo de Investigación e Innovación Tecnológica (GI2T). Este estudio se enfoca en caracterizar el acceso y uso de las TIC por parte de los estudiantes de instituciones educativas públicas urbanas de dicho distrito. Durante el último semestre de 2022, con la colaboración de estudiantes del semillero Uso Acceso y Apropiación (UA2) del programa de ingeniería de sistemas, se diseñaron y aplicaron instrumentos de recolección de datos, proporcionando una perspectiva detallada y basada en evidencias sobre la situación actual.',
      'doi': 'https://doi.org/10.5281/zenodo.12754339'
    },
  ]

  vistaDetalle: any = null;
  todosLosItems: any[] = [];

  private route = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private renderer2 = inject(Renderer2); // Necesario para manipular el DOM de forma segura
  private _document = inject(DOCUMENT);

  constructor(





  ) { }
  ngOnInit(): void {
    this.unificarDatos();

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.cargarModoDetalle(Number(id));
      } else {
        this.cargarModoLista();
      }
    });

    this.setPageTitle('GI2T: Publicaciones');
    this.addJsonLdSchema();
  }

  private addJsonLdSchema() {
    const script = this.renderer2.createElement('script');
    script.type = 'application/ld+json';

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": this.publicaciones.map((item, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": item.title,
        "description": item.text,
        "url": item.url,
        "datePublished": item.date,
        "headline": item.subtitle,
        "image": `assets/images/publicaciones/doc${item.id}.webp`
      }))
    };

    script.text = JSON.stringify(jsonLd);
    this.renderer2.appendChild(document.head, script);
  }

  private unificarDatos() {
    // Extraemos las publicaciones dentro de los boletines
    let pubsBoletines: any[] = [];
    this.boletines.forEach(b => {
      if (b.publicaciones) {
        pubsBoletines = [...pubsBoletines, ...b.publicaciones];
      }
    });
    // Unimos todo en un solo array
    this.todosLosItems = [...this.publicaciones, ...pubsBoletines];
  }

  private cargarModoLista() {
    this.vistaDetalle = null;
    this.setPageTitle('GI2T: Publicaciones');
    this.limpiarMetasAcademicas();
    this.addJsonLdList(); // Tu JSON original
  }

  private cargarModoDetalle(id: number) {
    // Buscamos el artículo por ID
    this.vistaDetalle = this.todosLosItems.find(item => item.id === id);

    if (this.vistaDetalle) {
      // Título
      this.setPageTitle(this.vistaDetalle.title);

      // --- AQUÍ OCURRE LA MAGIA PARA GOOGLE SCHOLAR ---
      // Limpiamos metas viejas y ponemos las nuevas
      this.limpiarMetasAcademicas();

      // 1. Definimos la lógica de la descripción fuera del array
      const tieneInfoExtra = this.vistaDetalle.volumen && this.vistaDetalle.subtitle;

      // Creamos la frase introductoria (usando interpolación `` para que sea más limpio que los + +)
      const introduccion = `La publicación de este boletín de ${this.vistaDetalle.subtitle} es un primer paso para acercar la ciencia a nuestra comunidad. `;

      // 2. Decidimos qué contenido usar
      const contenidoDescripcion = tieneInfoExtra
        ? introduccion + this.vistaDetalle.text
        : this.vistaDetalle.text;

      // 3. Insertamos las etiquetas
      this.metaService.addTags([
        { name: 'citation_title', content: this.vistaDetalle.title },
        { name: 'citation_author', content: 'Lucio López, G. A., CAICEDO GUERRERO, Y. K., & Rivera Guzmán, S. P.' },
        { name: 'citation_publication_date', content: this.vistaDetalle.date },
        { name: 'citation_pdf_url', content: this.vistaDetalle.url },
        { name: 'citation_doi', content: this.vistaDetalle.doi || '' },

        // Aquí usamos la variable ya calculada
        { name: 'description', content: contenidoDescripcion }
      ]);
      // JSON-LD específico para Artículo
      this.addJsonLdArticle(this.vistaDetalle);
    }
  }

  private setPageTitle(title: string) {
    this.titleService.setTitle(title);
  }

  private limpiarMetasAcademicas() {
    // Borra tags anteriores para no duplicar si navegas entre artículos
    this.metaService.removeTag("name='citation_title'");
    this.metaService.removeTag("name='citation_author'");
    this.metaService.removeTag("name='citation_publication_date'");
    this.metaService.removeTag("name='citation_pdf_url'");
    this.metaService.removeTag("name='citation_doi'");
    this.metaService.removeTag("name='description'");

    // Eliminar JSON-LD previo
    const oldScript = this._document.getElementById('json-ld-script');
    if (oldScript) {
      oldScript.remove();
    }
  }

  private addJsonLdList() {
    const script = this.renderer2.createElement('script');
    script.id = 'json-ld-script';
    script.type = 'application/ld+json';

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": this.publicaciones.map((item, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": item.title,
        "url": `https://gi2t.org/publicaciones/${item.id}` // Importante: URL interna
      }))
    };

    script.text = JSON.stringify(jsonLd);
    this.renderer2.appendChild(this._document.head, script);
  }

  private addJsonLdArticle(item: any) {
    const script = this.renderer2.createElement('script');
    script.id = 'json-ld-script';
    script.type = 'application/ld+json';

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle", // Tipo específico académico
      "headline": item.title,
      "description": item.text,
      "sameAs": item.url, // Enlace externo (DOI/PDF)
      "url": `https://gi2t.org/publicaciones/${item.id}`, // Enlace canónico interno
      "datePublished": item.date,
      "image": `assets/images/publicaciones/doc${item.id}.webp`
    };

    script.text = JSON.stringify(jsonLd);
    this.renderer2.appendChild(this._document.head, script);
  }
}
