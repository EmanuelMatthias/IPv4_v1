import { AfterViewInit, Component } from '@angular/core';
import { InputIpv4 } from '../../components/input-ipv4/input-ipv4';
import { Ipv4Service } from '../../../services/ipv4/ipv4';
import { CommonModule } from '@angular/common';
import { SubnetService } from '../../../services/subnet/subnet';

@Component({
  selector: 'app-subnetting-overview',
  imports: [
    CommonModule,
    InputIpv4
  ],
  templateUrl: './subnetting-overview.html',
  styleUrl: './subnetting-overview.scss'
})
export class SubnettingOverview implements AfterViewInit {

  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;

  cidrList: {
    range: number[],
    value: number | null
  }[] =[
    { range: Array(4).fill(0).map((_, id) => 25 + id), value: 25 },
    { range: Array(3).fill(0).map((_, id) => 26 + id), value: 26 },
    { range: Array(2).fill(0).map((_, id) => 27 + id), value: 27 },
    ];


  constructor(
    private subnetService: SubnetService
  ) { }

  ngAfterViewInit() {
    this.renderCanvas();
  }


  get net() {
    this.subnetService.get_net()
    return null;
    // return this.subnetService.get_net().get_IP_decimal()
  }


  onSelectChange(event: Event, id: number) {
    // const select = event.target as HTMLSelectElement | null;
    // if (!select) return;
    // const newCidrList = [...this.cidrList];
    // console.log(id, select.value);
    // console.log(newCidrList);
    // if (select.value === 'null')
    //   newCidrList[id].value = null;
    // else
    //   newCidrList[id].value = Number(select.value);
    // console.log(newCidrList);
    // // this.cidrList = newCidrList;
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

    for (let y = 0; y <= 6; y++) {
      const a = Math.pow(2, y);
      console.log(this.canvas.width)
      const width = this.canvas.width / a;
      for (let x = 0; x < Math.pow(2, y); x++) {
        this.room(x * (width), y * 20, width - 1, 9, 'green');
      }
    }
  }

  room(x: number, y: number, w: number, h: number, color: string) {
    if (!this.canvas) return;
    if (!this.ctx) return;

    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }
}
