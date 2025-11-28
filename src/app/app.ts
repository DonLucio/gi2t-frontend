import { Component, signal, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

declare var gtag: Function;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App  implements OnInit {

  protected readonly title = signal('grupogi2t-21');
  constructor(private router: Router) {}
  public currentYear: number = new Date().getFullYear();
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Enviar el evento de vista de página a Google Analytics
        /*
        gtag('config', 'G-2GK67C15WS', {
          'page_path': event.urlAfterRedirects,
          'page_title': document.title,
        });*/
      }
    });
  }
}
