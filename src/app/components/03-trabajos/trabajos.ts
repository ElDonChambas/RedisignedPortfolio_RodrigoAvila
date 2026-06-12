import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trabajos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trabajos.html',
  styleUrl: './trabajos.css',
})
export class Trabajos {
  categorias = ['Todos', 'Full-Stack', 'E-commerce', 'Aplicaciones', 'Backend'];
  categoriaActiva = 'Todos';

  proyectoSeleccionado: any = null;
  imagenActualIndex: number = 0;

  proyectos = [
    {
      titulo: 'Optimización E-commerce (Shopify)',
      empresa: 'Palomo 1953',
      descripcionCorta: 'Sistema de notificaciones para pre-órdenes y backorder.',
      descripcionLarga: 'Desarrollo e implementación de un sistema personalizado de notificaciones de "backorder" y pre-órdenes en la tienda de Shopify usando Liquid. La lógica permite mostrar tiempos de envío específicos basados en los límites de producción de fábrica y los niveles de inventario en tiempo real.',
      categoria: 'E-commerce',
      imagenes: ['/Palomo1953/foto1.jpg', 'Palomo1953/foto2.jpg', 'Palomo1953/foto3.jpg'],
      tecnologias: ['Shopify', 'Liquid', 'JavaScript']
    },
    {
      titulo: 'Huellitas Seguras',
      empresa: 'Producto Final (MVP)',
      descripcionCorta: 'Aplicación para recordatorios de citas y vacunas de mascotas.',
      descripcionLarga: 'Producto final enfocado directamente en la experiencia del usuario. Es una aplicación (MVP) diseñada para enviar recordatorios precisos y oportunos a los dueños de mascotas sobre calendarios de vacunación y próximas citas veterinarias.',
      categoria: 'Aplicaciones',
      imagenes: ['assets/proyecto-huellitas.jpg'],
      tecnologias: ['Angular', 'Node.js', 'SQL']
    },
    {
      titulo: 'Chatbot Multi-Tienda (Búsqueda Inteligente)',
      empresa: 'Mercado Salvadoreño',
      descripcionCorta: 'Motor de búsqueda con tolerancia a errores ortográficos.',
      descripcionLarga: 'Implementación de un chatbot con navegación por grafos y mecanismos de fallback local. Destaca la integración del algoritmo de distancia de Levenshtein en los módulos ChatFacade y SearchEngine para manejar eficientemente errores ortográficos y sinónimos de los usuarios.',
      categoria: 'Full-Stack',
      imagenes: ['assets/proyecto-chatbot.jpg'],
      tecnologias: ['Node.js', 'TypeScript', 'NLP']
    },
    {
      titulo: 'Módulos de Acceso Privado E-commerce',
      empresa: 'Proyectos Varios',
      descripcionCorta: 'Customización avanzada de vistas privadas en tiendas online.',
      descripcionLarga: 'Desarrollo de interfaces de usuario para portales de clientes, aplicando restricciones de acceso, gestión de sesiones y personalización profunda de la experiencia post-compra sin depender de aplicaciones de terceros.',
      categoria: 'E-commerce',
      imagenes: ['assets/proyecto-modulos.jpg'],
      tecnologias: ['Liquid', 'CSS3', 'HTML5']
    }
  ];

  filtrarCategoria(categoria: string) {
    this.categoriaActiva = categoria;
  }

  debeMostrarse(categoriaProyecto: string): boolean {
    return this.categoriaActiva === 'Todos' || this.categoriaActiva === categoriaProyecto;
  }

  abrirModal(proyecto: any) {
    this.proyectoSeleccionado = proyecto;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal(){
    this.proyectoSeleccionado = null;
    document.body.style.overflow = 'auto';
  }
  
  siguienteImagen() {
    if (this.proyectoSeleccionado) {
      this.imagenActualIndex = (this.imagenActualIndex + 1) % this.proyectoSeleccionado.imagenes.length;
    }
  }

  anteriorImagen() {
    if (this.proyectoSeleccionado) {
      this.imagenActualIndex = (this.imagenActualIndex - 1 + this.proyectoSeleccionado.imagenes.length) % this.proyectoSeleccionado.imagenes.length;
    }
  }
}
