import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../../services/shared-data.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']  
})
export class PlayComponent {
  currentArray!: number[][];
  copyOfCurrentArray!: number[][];
  currentSolution!: number[][];
  gameId!: number;
  showSolution: boolean = false;  
  showVictoryModal: boolean = false;  
  constructor(private sharedDataService: SharedDataService, private route: ActivatedRoute) {}

  ngOnInit() {
    const gameIdParam = this.route.snapshot.paramMap.get('gameId');
    this.gameId = gameIdParam ? parseInt(gameIdParam, 10) : 0;
    this.loadGridArray();
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  isChecked(iIndex: number, jIndex: number): boolean {
    return this.copyOfCurrentArray[iIndex][jIndex] === 1;
  }

  updateArray(x: number, y: number): void {
    this.copyOfCurrentArray[x][y] ^= 1;
    this.toggleNeighbors(x, y);
    this.checkVictory();
  }

  toggleNeighbors(x: number, y: number): void {
    if (x > 0) this.copyOfCurrentArray[x - 1][y] ^= 1;
    if (x < this.copyOfCurrentArray.length - 1) this.copyOfCurrentArray[x + 1][y] ^= 1;
    if (y > 0) this.copyOfCurrentArray[x][y - 1] ^= 1;
    if (y < this.copyOfCurrentArray[x].length - 1) this.copyOfCurrentArray[x][y + 1] ^= 1;
  }

  checkVictory(): void {
    const isVictory = this.copyOfCurrentArray.every(row => row.every(cell => cell === 0));
    if (isVictory) {
      this.showVictoryModal = true;
      console.log('You won!');
    }
  }

  resetGame(): void {
    this.copyOfCurrentArray = this.currentArray.map(innerArray => innerArray.slice());
    this.showSolution = false;
    this.showVictoryModal = false;
  }

  toggleSolutionVisibility(): void {
    this.showSolution = !this.showSolution;
  }

  loadGridArray(): void {
    const gridData = this.sharedDataService.getGridArray();
    this.currentArray = gridData[this.gameId].state;
    this.currentSolution = gridData[this.gameId].solution;
    this.copyOfCurrentArray = this.currentArray.map(innerArray => innerArray.slice());
  }
}
