import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private gridArray!: {
    state: number[][],
    solution: number[][]
  }[];

  constructor() {
    this.loadGridArray(); // This method initializes gridArray
  }

  getGridArray(): { state: number[][]; solution: number[][]; }[] {
    return this.gridArray;
  }

  addToAllArrays(state: number[][], solution: number[][]): void {
    this.gridArray.push({ state, solution });
    this.gridArray.sort((a, b) => a.state.length - b.state.length);
    this.saveGridArray();
    console.log(this.gridArray);
  }

  private saveGridArray(): void {
    localStorage.setItem('gridData', JSON.stringify(this.gridArray));
  }

  private loadGridArray(): void {
    const data = localStorage.getItem('gridData');
    if (data) {
      this.gridArray = JSON.parse(data);
    } else {
      this.gridArray = [
        {
          state: [[0, 1, 0], [0, 1, 0], [0, 1, 0]],
          solution: [[1, 0, 1], [1, 1, 1], [1, 0, 1]]
        },
        {
          state: [[0, 1, 0, 1, 0], [0, 1, 1, 1, 1], [1, 1, 0, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]],
          solution: [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 1], [1, 0, 0, 1, 0], [0, 0, 1, 0, 1]]
        }
      ];
      this.saveGridArray();
    }
  }
}
