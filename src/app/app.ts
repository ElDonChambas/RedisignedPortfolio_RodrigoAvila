import { Component, signal } from '@angular/core';
import { HeroBanner } from './components/01-hero-banner/hero-banner';

@Component({
  selector: 'app-root',
  imports: [HeroBanner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio-rodrigo');
}
