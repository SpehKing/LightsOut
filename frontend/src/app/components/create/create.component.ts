import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  size!: number;
  array: number[][] = [];

  trackByFn(index: any, item: any) {
    return index;
  }


  constructor(private sharedDataService: SharedDataService) {
    this.setSize(3);
    console.log('Create loaded');
  }

  setSize(value: number) {
    this.size = value;
    this.array = Array.from({length: this.size}, () => new Array(this.size).fill(0));
  };

  updateArray(x: number, y: number) {
    this.array[x][y] = this.array[x][y] === 1 ? 0 : 1;
    console.log("x: " + x + " y: " + y);
    for (let i = 0; i < this.size; i++) {
      console.log(this.array[i]);
    }
  }

  isChecked(iIndex: number, jIndex: number): boolean {
    console.log("iIndex: " + iIndex + " jIndex: " + jIndex, this.array[iIndex][jIndex]);
    return this.array[iIndex][jIndex] == 1;
  }

  createGame() {
    this.sharedDataService.addToAllArrays(this.array);
    this.resetGame();
  }

  resetGame() {
    this.array = Array.from({length: this.size}, () => new Array(this.size).fill(0));
  }
  
}

