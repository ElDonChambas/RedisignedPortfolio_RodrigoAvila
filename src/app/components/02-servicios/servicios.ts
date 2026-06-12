import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  serviciosList = [
    {
      title: 'Desarrollo Web con Angular y TypeScript',
      subtitle: 'Desarrollo Frontend | Angular, preparación online, composición, habilidades',
      content: 'DETALLAR PROYECTOS',
      isOpen: false
    },
    {
      title: 'Arquitectura de Backend con Node.js & TypeScript',
      subtitle: 'Desarrollo Backend | Preparación y proceso de datos estructurados.',
      content: 'Explica cómo estructuras tus servidores, creas APIs robustas y manejas la lógica de negocio.',
      isOpen: false
    },
    {
      title: 'Integración de Bases de Datos & SQL',
      subtitle: 'Integración de esquemas, perfiles, orientadas a arquitectura de software.',
      content: 'Detalla tu experiencia en diseño de bases de datos relacionales, consultas optimizadas y gestión de datos.',
      isOpen: false
    },
    {
      title: 'Optimización & Personalización de E-commerce (Shopify/Liquid)',
      subtitle: 'Personalización avanzada, gestión de temas y mejora de rendimiento.',
      content: 'Menciona tu habilidad para modificar el código fuente de tiendas, integraciones y mejoras en la conversión de ventas.',
      isOpen: false
    }
  ];

  toggleService(index: number) {
    this.serviciosList[index].isOpen = !this.serviciosList[index].isOpen;
  }

}
