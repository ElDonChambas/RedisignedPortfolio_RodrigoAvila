import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.html',
})
export class Experiencia {
  
  // 1. Trabajos Remunerados
  trabajosRemunerados = [
    {
      titulo: 'Especialista E-commerce (Shopify)',
      lugar: 'Palomo 1953',
      fecha: 'Feb 2025 - Actualidad',
      descripcion: 'Gestión integral de la tienda en Shopify. Encargado del desarrollo y personalización de la plataforma usando Liquid y CSS. Responsable de la logística de despachos diarios, coordinación directa con aliados logísticos (GLC), seguimiento de métricas de ventas y facturación mensual.',
      isOpen: false
    },
    {
      titulo: 'Agente de Servicio al Cliente',
      lugar: 'Foundever',
      fecha: 'Ene 2023 - Dic 2024',
      descripcion: 'Atención al cliente de primer nivel, resolución de problemas y manejo de métricas de calidad. Desarrollo de habilidades de comunicación efectiva y trabajo bajo presión.',
      isOpen: false
    }
  ];

  // 2. Otras Experiencias
  otrasExperiencias = [
    {
      titulo: 'Emprendimiento de Ventas',
      lugar: 'SeniorStar',
      fecha: 'Jul 2021 - Sep 2021',
      descripcion: 'Gestión de inventario, atención directa al cliente y estrategias de comercialización a pequeña escala para maximizar el margen de ganancia.',
      isOpen: false
    },
    {
      titulo: 'Facilitador Voluntario',
      lugar: 'Voluntariado',
      fecha: 'Jul 2021 - Sep 2021',
      descripcion: 'Acompañamiento en el desarrollo de habilidades, preparación de materiales y apoyo directo a comunidades para fomentar valores y competencias.',
      isOpen: false
    }
  ];

  // 3. Formación Académica
  formacionAcademica = [
    {
      titulo: 'Ingeniería en Desarrollo de Software',
      lugar: 'UFG',
      fecha: 'Ene 2023 - En curso',
      descripcion: 'Enfoque profundo en arquitectura de software, algoritmos y desarrollo frontend con Angular. Investigación activa en estándares de seguridad (CWE, CVE, MITRE) y principios de clean architecture.',
      isOpen: false
    },
    {
      titulo: 'Diplomado en Inglés, Computación y Valores',
      lugar: 'Centro ¡Supérate! ADOC',
      fecha: 'Ene 2020 - Dic 2022',
      descripcion: 'Programa intensivo de alto rendimiento enfocado en el dominio del idioma inglés, certificaciones tecnológicas y desarrollo de habilidades blandas.',
      isOpen: false
    },
    {
      titulo: 'Bachillerato General',
      lugar: 'Centro Escolar Fabio Castillo',
      fecha: 'Ene 2022 - Nov 2022',
      descripcion: 'Formación académica fundamental con excelencia destacada en áreas lógico-matemáticas.',
      isOpen: false
    }
  ];

  // Función genérica para abrir/cerrar cualquier tarjeta
  toggleItem(item: any) {
    item.isOpen = !item.isOpen;
  }
}