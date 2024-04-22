import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-framework',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './framework.component.html',
  styleUrl: './framework.component.css'
})
export class FrameworkComponent {

  
  constructor(private router: Router) {
  }

  get isCreateRoute() {
    return this.router.url === '/create';
}
}
