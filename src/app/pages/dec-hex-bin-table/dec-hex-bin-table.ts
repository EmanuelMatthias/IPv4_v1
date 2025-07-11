import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dec-hex-bin-table',
  imports: [
    CommonModule
  ],
  templateUrl: './dec-hex-bin-table.html',
  styleUrl: './dec-hex-bin-table.scss'
})
export class DecHexBinTable implements OnInit {

  innerMatrix: any;

  ngOnInit() {
    this.innerMatrix = Array(Math.pow(2, 4))
      .fill(0)
      .map((_,index)=>{
        return {
          index: index,
          multiHex: 16 * index,
          bin: index.toString(2).padStart(4,'0'), 
          simpleHex: index.toString(16).toUpperCase()
        };
      });
  }

  get table_matrix() {
    return this.innerMatrix;
  }
}
