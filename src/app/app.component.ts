import { Component } from '@angular/core';
import { EjemploComponent } from './ejemplo/ejemplo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EjemploComponent],
  template: `
    <h1 class="text-center text-3xl my-6">Mi App Angular 18 + Tailwind</h1>
    <app-ejemplo></app-ejemplo>
  `
})
export class AppComponent {}
