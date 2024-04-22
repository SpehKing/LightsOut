import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../../services/shared-data.service'
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})
export class PlayComponent {
  allArrays!: number[][][];
  currentArray!: number[][];
  copyOfCurrentArray!: number[][];
  gameId!: number;

  constructor(private sharedDataService: SharedDataService, private route: ActivatedRoute) {
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  ngOnInit() {
    // Access the index from the route parameter
    const gameIdParam = this.route.snapshot.paramMap.get('gameId');
    this.gameId = gameIdParam ? parseInt(gameIdParam, 10) : 0; // Parse to number, default to null if not present

    this.loadGridArray();
  }

  isChecked(iIndex: number, jIndex: number): boolean {
    return this.copyOfCurrentArray[iIndex][jIndex] == 1; // Example condition
  }
  updateArray(x: number, y: number): void {
    this.copyOfCurrentArray[x][y] = this.copyOfCurrentArray[x][y] === 1 ? 0 : 1;
    if (x > 0) {
        this.copyOfCurrentArray[x - 1][y] = this.copyOfCurrentArray[x - 1][y] === 1 ? 0 : 1;
    }
    if (x < this.copyOfCurrentArray.length - 1) {
        this.copyOfCurrentArray[x + 1][y] = this.copyOfCurrentArray[x + 1][y] === 1 ? 0 : 1;
    }
    if (y > 0) {
        this.copyOfCurrentArray[x][y - 1] = this.copyOfCurrentArray[x][y - 1] === 1 ? 0 : 1;
    }
    if (y < this.copyOfCurrentArray[x].length - 1) {
        this.copyOfCurrentArray[x][y + 1] = this.copyOfCurrentArray[x][y + 1] === 1 ? 0 : 1;
    }
    console.log(`x: ${x} y: ${y}`);
    console.log(this.copyOfCurrentArray);
}


  resetGame() {
    this.copyOfCurrentArray = this.currentArray.map(innerArray => innerArray.slice());
  }

  solveGame() {
    console.log("Solving game...");
  }

  loadGridArray(): void {
    this.allArrays = this.sharedDataService.getGridArray();
    this.currentArray = this.allArrays[this.gameId];
    this.copyOfCurrentArray = this.currentArray.map(innerArray => innerArray.slice());
  }
  
}