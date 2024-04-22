import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedDataService {
  private gridArray: number[][][] = [];

  getGridArray(): number[][][] {
    return this.gridArray;
  }

  addToAllArrays(gridArray: number[][]): void {
    this.gridArray.push(gridArray);
    console.log(this.gridArray);
  }
}
