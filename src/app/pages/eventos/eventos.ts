import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.html',
  styleUrl: './eventos.sass',
})
export class Eventos {

  // Array de fotos
  albums: Array<{src: string, thumb: string}> = [];

  // Variable para controlar el lightbox
  lightboxOpen = false;
  currentImageIndex = 0;

  constructor() {
    // Tus IDs de fotos
    const idsFotos = ['11', '2', '4', '1', '5', '3', '6', '7', '8', '10'];

    idsFotos.forEach(id => {
      this.albums.push({
        // Asegúrate de la ruta correcta con '/' al inicio
        src: `/assets/photos/apropiacion1/foto${id}.jpg`,
        thumb: `/assets/photos/apropiacion1/360foto${id}.jpg`
      });
    });
  }

  // Abrir el visor
  openLightbox(index: number): void {
    this.currentImageIndex = index;
    this.lightboxOpen = true;
    // Bloquear scroll del fondo
    document.body.style.overflow = 'hidden';
  }

  // Cerrar el visor
  closeLightbox(): void {
    this.lightboxOpen = false;
    // Reactivar scroll
    document.body.style.overflow = 'auto';
  }

  // Siguiente foto
  next(): void {
    if (this.currentImageIndex < this.albums.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0; // Loop al inicio
    }
  }

  // Foto anterior
  prev(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.albums.length - 1; // Loop al final
    }
  }
}
