import { Component, signal } from '@angular/core';
import { HeroBanner } from './components/01-hero-banner/hero-banner';
import { Servicios } from './components/02-servicios/servicios';


@Component({
  selector: 'app-root',
  imports: [HeroBanner, Servicios],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio-rodrigo');
}
