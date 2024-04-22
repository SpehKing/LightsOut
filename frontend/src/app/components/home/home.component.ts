import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../../services/shared-data.service'
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allArrays!: number[][][];
  isModalOpen = false;

  isChecked(iIndex: number, jIndex: number, kIndeks: number): boolean {
    return this.allArrays[iIndex][jIndex][kIndeks] == 1;
  }

  constructor(private sharedDataService: SharedDataService) {
    this.loadGridArray();
  }

  loadGridArray(): void {
    this.allArrays = this.sharedDataService.getGridArray();
  }
}