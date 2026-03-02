import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPage {
  
  // Conecta el código con el contenedor de tarjetas
  @ViewChild('track') carouselTrack!: ElementRef;

  constructor() {}

  // Función que mueve el carrusel a la izquierda o derecha
  scrollCarousel(amount: number) {
    this.carouselTrack.nativeElement.scrollBy({
      left: amount,
      behavior: 'smooth'
    });
  }
}