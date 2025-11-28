import { Component } from '@angular/core';
import { Lightbox, LightboxModule } from '@pierresh/ngx-lightbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, LightboxModule],
  templateUrl: './eventos.html',
  styleUrl: './eventos.sass',
})
export class Eventos {

  _albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(private _lightbox: Lightbox) {

    const idsFotos = ['11', '2', '4', '1', '5', '3', '6', '7', '8', '10'];

    idsFotos.forEach(id => {
      this._albums.push({
        src: `/assets/photos/apropiacion1/foto${id}.jpg`,
        caption: 'Presentación Resultados',
        thumb: `/assets/photos/apropiacion1/360foto${id}.jpg`
      });
    });
  }

  open(index: number): void {
    // Solución correcta para NG0100 en ngx-lightbox
    setTimeout(() => {
      this._lightbox.open(this._albums, index);
    });
  }

  close(): void {
    this._lightbox.close();
  }
}
