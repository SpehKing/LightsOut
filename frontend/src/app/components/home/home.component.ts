import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../../services/shared-data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  grids!: { state: number[][], solution: number[][] }[];

  isChecked(iIndex: number, jIndex: number, kIndex: number): boolean {
    return this.grids[iIndex].state[jIndex][kIndex] === 1;
  }

  constructor(private sharedDataService: SharedDataService) {
    this.loadGridArray();
  }

  loadGridArray(): void {
    this.grids = this.sharedDataService.getGridArray();
  }
}
