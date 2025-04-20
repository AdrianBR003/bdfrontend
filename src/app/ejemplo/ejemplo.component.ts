import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejemplo',
  standalone: true,             
  imports: [CommonModule],    
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent {
  titulo = '¡Hola Tailwind con Angular 18!';
}
