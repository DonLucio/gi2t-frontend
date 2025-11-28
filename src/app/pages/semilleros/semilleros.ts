import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-semilleros',
  imports: [],
  templateUrl: './semilleros.html',
  styleUrl: './semilleros.sass',
})
export class Semilleros  implements OnInit {
  public semilleros: any[] = [
    { id: 1	, nombre:"Adelina Congo Caicedo", email:"acongoc@unipacifico.edu.co", picture: true, year: 2023 },
    { id: 2	, nombre:"Andres Felipe Gongora Pineda", email:"afgongorap@unipacifico.edu.co", picture: true, year: 2023 },
    { id: 3	, nombre:"Astrid Carolina Méndez Riascos", email:"acmendezr@unipacifico.edu.co", social:"https://www.linkedin.com/in/astrid-carolina-m%C3%A9ndez-riascos-0825a3237/", picture: true, year: 2023 },
    { id: 4	, nombre:"Betsy Daniela Vasquez Solis", email:"bvasquez@unipacifico.edu.co", year: 2023 },
    { id: 5	, nombre:"Brayan Alberto Micolta Ortiz", email:"bamicolta@unipacifico.edu.co", year: 2023 },
    { id: 6	, nombre:"Daniel Camilo Palacios Valencia", email:"dcpalacios@unipacifico.edu.co", social: "http://www.linkedin.com/in/daniel-camilo-palacios-valencia-ing", picture: true, year: 2023 },
    { id: 7	, nombre:"Elis Dayana Aramburo Castro", email:"earamburo@unipacifico.edu.co", social: "https://co.linkedin.com/in/eliscastro1998", picture: true, year: 2023 },
    { id: 8	, nombre:"Federico Velasco Zuñiga", email:"fevelascoz@unipacifico.edu.co", picture: true, year: 2023 },
    { id: 9	, nombre:"Gloria Yaneth Torres Miranda", email:"gytorres@unipacifico.edu.co", picture: true, year: 2023 },
    { id: 10	, nombre:"Hamyr David Valencia Peña", email:"hdavidvalencia@unipacifico.edu.co", social: "https://www.linkedin.com/in/hamyr-david-v-988139214/", picture: true, year: 2023 },
    { id: 11	, nombre:"Hooward Enrique Cuellar Torres", email:"hcuellartorres@unipacifico.edu.co", year: 2023 },
    { id: 12	, nombre:"James Alexis Garces Mina", email:"Jagarcesm@unipacifico.edu.co", year: 2023 },
    { id: 13	, nombre:"Jefferson Alexander Martinez Asprilla", email:"jamartineza@unipacifico.edu.co", year: 2023 },
    { id: 14	, nombre:"Jenny Viviana Rivas Rivas", email:"jvrivas@unipacifico.edu.co", year: 2023 },
    { id: 15	, nombre:"Jesus Dario Panameño Guevara", email:"jdariopanameno@unipacifico.edu.co", year: 2023 },
    { id: 16	, nombre:"Johan Gonzalo Riascos Fernández", email:"jgriascosf@unipacifico.edu.co", year: 2023 },
    { id: 17	, nombre:"Jose Ricardo Ramirez Varon", email:"jrramirez@unipacifico.edu.co", year: 2023 },
    { id: 18	, nombre:"Juan David Viafara Valencia", email:"jdviafara@unipacifico.edu.co", social: "https://www.linkedin.com/in/juan-david-v-v", picture: true, year: 2023 },
    { id: 19	, nombre:"Karen Yoselyn Ordoñez Riascos", email:"kyordonezr@unipacifico.edu.co", year: 2023 },
    { id: 20	, nombre:"Kebin Miguel Moreno Lara", email:"kmmoreno@unipacifico.edu.co", year: 2023 },
    { id: 21	, nombre:"Kevin Andrés Tamayo Riascos", email:"katamayor@unipacifico.edu.co", social: "https://www.linkedin.com/in/kevin-tamayo-aaa349249/", picture: true, year: 2023 },
    { id: 22	, nombre:"Kevin Steven Perlaza Montaño", email:"ksperlaza@unipacifico.edu.co", year: 2023 },
    { id: 23	, nombre:"Liceth Adriana Quintero Torres", email:"lquintero@unipacifico.edu.co", year: 2023 },
    { id: 24	, nombre:"Lina Vanessa Montaño Serna", email:"lvanessamontano@unipacifico.edu.co", year: 2023 },
    { id: 25	, nombre:"Lorfan Andres Riascos Renteria", email:"lariascosr@unipacifico.edu.co", year: 2023 },
    { id: 26	, nombre:"Luis Alfonso Mosquera Cardona", email:"lamosquera@unipacifico.edu.co", year: 2023 },
    { id: 27	, nombre:"Martin Fernando Ramírez Camacho", email:"mframirezc@unipacifico.edu.co", year: 2023 },
    { id: 28	, nombre:"Miguel Angel Giraldo Perez", email:"magiraldop@unipacifico.edu.co", year: 2023 },
    { id: 29	, nombre:"Priscila Mercado Chavarro", email:"prmercadoc@unipacifico.edu.co", year: 2023 },
    { id: 30	, nombre:"Steven Mauricio Escobar Aristizabal", email:"emescobara@unipacifico.edu.co", social:"https://www.linkedin.com/in/mauricio-escobar-1412471a5", picture: true, year: 2023 },
    { id: 31	, nombre:"Tobias Micolta Garcia", email:"tmicolta@unipacifico.edu.co", picture: true, year: 2023 },
    { id: 32	, nombre:"Yuri Sirley Garces Valencia ", email:"ysgarces@unipacifico.edu.co", year: 2023 },

    { id: 33, nombre: "Anthoni Dison Mosquea Torres", email: "amosquera@viva1a.com.co", social: false, picture:  true, year:  2024},
    { id: 34, nombre: "Bryan Asprilla Rodriguez", email: "basprillar@unipacifico.edu.co", social: false, picture:  true, year:  2024},
    { id: 35, nombre: "David Fernando Grueso Ocoro", email: "dfgrueso@unipacifico.edu.co", social: false, picture:  true, year:  2024},
    { id: 36, nombre: "Gonzalo Andrés Angulo Segura", email: "gaangulo@unipacifico.edu.co", social: false, picture:  true, year:  2024},
    { id: 37, nombre: "Jaime Alberto Yepes Girón", email: "jyepesgiron@unipacifico.edu.co", social: "www.linkedin.com/in/bettoyepes", picture:  true, year:  2024},
    { id: 38, nombre: "Jhon Fredy Espinosa Mancilla", email: "jfespinosa@unipacifico.edu.co", social: false, picture:  true, year:  2024},
    { id: 39, nombre: "John Elith Payán Mina", email: "jepayan@unipacifico.edu.co", social: false, picture:  true, year:  2024},
    { id: 40, nombre: "Jonathan Andres Arboleda Hurtado", email: "jaarboleda@unipacifico.edu.co", social: false, picture:  true, year:  2024},
    { id: 41, nombre: "Jossie Esteban Urbano Peña", email: "Jeurbanop@unipacifico.edu.co", social: false, picture:  true, year:  2024},
    { id: 42, nombre: "Juan Camilo Paz Castro", email: "jcpaz@unipacifico.edu.co", social: false, picture:  true, year:  2024},
    { id: 43, nombre: "Juan Junior Sinisterra Sinisterra", email: "jjuniorsinisterra@unipacifico.edu.co", social: "https://www.linkedin.com/in/junior-sinisterra-1282b62b3?trk=contact-info", picture:  true, year:  2024},
    { id: 44, nombre: "Laura Melissa Pandales Renteria", email: "lpandales@unipacifico.edu.co", social: "https://www.linkedin.com/in/laura-renteria-26497419a/", picture:  true, year:  2024},
    { id: 45, nombre: "Luis Eduardo Villalba Medina", email: "lvillalba@unipacifico.edu.co", social: "https://co.linkedin.com/in/luis-eduardo-villalba-medina-a4727318b", picture:  true, year:  2024},
    { id: 46, nombre: "Luisa Fernanda Sanchez Quiñonez", email: "lfernandasanchez@unipacifico.edu.co", social: false, picture:  true, year:  2024},
    { id: 47, nombre: "Noemi Riascos Alomia", email: "noriascosa@unipacifico.edu.co", social: false, picture:  true, year:  2024},
    { id: 48, nombre: "Carlos Mauricio Torres Enriquez", email: "cmtorres@unipacifico.edu.co", social: false, picture:  true, year:  2024},
    { id: 49, nombre: "Víctor Eduardo Peñaranda Murillo", email: "vpenaranda@unipacifico.edu.co", social: false, picture:  true, year:  2024},

    { id: 50, nombre: "Sandra Patricia Mina Valencia", email: "sminavalencia@unipacifico.edu.co", social: false, picture:  true, year:  2024},
    { id: 51, nombre: "Dayan Faizury Tejada Angulo", email: "dtejada@unipacifico.edu.co", social: false, picture:  true, year:  2024},
    { id: 52, nombre: "Juan Jose Noguera Sinisterra", email: "jnoguera@unipacifico.edu.co", social: false, picture:  true, year:  2024},



  ]

  highestYear!: number;
  showAll = false;
  filteredSemilleros: any[] = [];
  constructor(private renderer2: Renderer2, private titleService: Title) {

  }


  ngOnInit(): void {
    this.setPageTitle('GI2T: Semilleros');

      this.semilleros.sort((a, b) => {
          if (a.picture && !b.picture) return -1;
          if (!a.picture && b.picture) return 1;
          if (a.social && !b.social) return -1;
          if (!a.social && b.social) return 1;
          return a.nombre.localeCompare(b.nombre);
      });
      this.highestYear = Math.max(...this.semilleros.map(item => item.year));
      this.filteredSemilleros = this.semilleros.filter(item => item.year === this.highestYear);
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
      "itemListElement": this.semilleros.map((item, index) => ({
        "@type": "Person",
        "name": item.nombre,
        "email": item.email,
        "url": item.picture ? `assets/images/${item.id}.webp` : undefined,
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Universidad del Pacífico"
        },
        "sameAs": item.social ? [item.social] : undefined
      }))
    };

    script.text = JSON.stringify(jsonLd);
    this.renderer2.appendChild(document.head, script);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
    this.filteredSemilleros = this.showAll ? this.semilleros : this.semilleros.filter(item => item.year === this.highestYear);
  }
}
