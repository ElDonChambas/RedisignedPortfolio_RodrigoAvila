import { Component, signal } from '@angular/core';
import { HeroBanner } from './components/01-hero-banner/hero-banner';
import { Servicios } from './components/02-servicios/servicios';
import { Trabajos } from './components/03-trabajos/trabajos';
import { Experiencia } from './components/04-experiencia/experiencia';
import { Habilidades } from './components/05-habilidades/habilidades';
import { Certificaciones} from './components/06-certificaciones/certificaciones';
import { Contacto } from './components/07-contacto/contacto';
import { Navbar } from './components/shared/navbar';
import { Footer } from './components/shared/footer';


@Component({
  selector: 'app-root',
  imports: [HeroBanner, Servicios, Trabajos, Experiencia, Habilidades, Certificaciones, Contacto, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio-rodrigo');
}
