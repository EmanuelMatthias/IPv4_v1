import { AfterViewInit, Component } from '@angular/core';
import { InputIpv4 } from '../../components/input-ipv4/input-ipv4';
import { Ipv4Service } from '../../../services/ipv4/ipv4';

@Component({
  selector: 'app-subnetting-overview',
  imports: [
    InputIpv4
  ],
  templateUrl: './subnetting-overview.html',
  styleUrl: './subnetting-overview.scss'
})
export class SubnettingOverview implements AfterViewInit {

  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;

  constructor(private ipv4Service: Ipv4Service) { }
  
  ngAfterViewInit() {
    this.renderCanvas();
  }

  renderCanvas() {
    this.canvas = document.getElementById('test') as HTMLCanvasElement;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) return;

    // ctx.beginPath();
    // ctx.moveTo(10,10);
    // ctx.lineTo(100,100);
    // ctx.stroke();

    // ctx.fillStyle = 'yellow';
    // ctx.fillRect(20,20,100,50);


    // ctx.font = '20px Arial';
    // ctx.fillStyle = 'black';
    // ctx.fillText('Hello',30,50)

    for (let y = 0; y <= 5; y++) {
      const a = Math.pow(2, y);
      const width=900/a;
      for (let x = 0; x < Math.pow(2, y); x++) {
        this.room(x*(width), y*20, width-1, 9,'green');
      }
      console.log(a)
    }
    console.log(this.ipv4Service.ipv4.get_range())
  }

  room(x: number, y: number, w: number, h: number,color:string) {
    if (!this.canvas) return;
    if (!this.ctx) return;

    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }
}
