import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../../services/shared-data.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  size!: number;
  array: number[][] = [];
  solution: number[][] = [];
  showAnimation: boolean = false;  // Control variable for the animation

  constructor(private sharedDataService: SharedDataService) {
    this.setSize(3);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  setSize(value: number) {
    this.size = value;
    this.array = Array.from({length: this.size}, () => new Array(this.size).fill(0));
    this.solution = Array.from({length: this.size}, () => new Array(this.size).fill(0));
  }

  updateArray(x: number, y: number) {
    this.array[x][y] = this.array[x][y] === 1 ? 0 : 1;
  }

  isChecked(iIndex: number, jIndex: number): boolean {
    return this.array[iIndex][jIndex] == 1;
  }

  async createGame() {
    this.showAnimation = true;
    await new Promise(resolve => setTimeout(resolve, 2000));  // Wait for 2 seconds
    this.sharedDataService.addToAllArrays(this.array, this.solution);
    this.resetGame();
    this.showAnimation = false;  // Hide the animation after the process
  }

  resetGame() {
    this.array = Array.from({length: this.size}, () => new Array(this.size).fill(0));
    this.solution = Array.from({length: this.size}, () => new Array(this.size).fill(0));
  }
}
