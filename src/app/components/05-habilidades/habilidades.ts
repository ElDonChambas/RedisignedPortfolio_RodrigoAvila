import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.html',
})
export class Habilidades {
  
  // Lista de habilidades fácil de modificar
  // "tipo" puede ser: 'texto', 'icono' o 'imagen'
  habilidades = [
    { nombre: 'Angular', tipo: 'texto', valor: 'A', color: 'text-red-500' },
    { nombre: 'Node.js', tipo: 'texto', valor: 'JS', color: 'text-green-500' },
    { nombre: 'TypeScript', tipo: 'texto', valor: 'TS', color: 'text-blue-400' },
    { nombre: 'SQL', tipo: 'icono', valor: 'sql', color: 'text-blue-300' },
    { nombre: 'Python', tipo: 'texto', valor: '>_', color: 'text-yellow-500' },
    { nombre: 'Liquid', tipo: 'icono', valor: 'liquid', color: 'text-cyan-400' },
    { nombre: 'HTML5', tipo: 'texto', valor: '5', color: 'text-orange-500' },
    { nombre: 'CSS3', tipo: 'texto', valor: '3', color: 'text-blue-500' },
    { nombre: 'Ps', tipo: 'icono', valor: 'ps', color: 'text-blue-300' },
    { nombre: 'Video', tipo: 'icono', valor: 'video', color: 'text-purple-500' },
    { nombre: 'Inglés Avanzado', tipo: 'icono', valor: 'globe', color: 'text-red-400' },
    
    // Ejemplo de cómo agregarías una imagen real en el futuro (descomentando esta línea):
    { nombre: 'Shopify', tipo: 'imagen', valor: 'shopify-logo.png', color: '' },
  ];
}