import { Component, OnInit } from '@angular/core';
import { IPv4 } from '../../../features/IPv4.class';
import { CommonModule } from '@angular/common';
import { Ipv4Service } from '../../../services/ipv4/ipv4';

@Component({
  selector: 'app-ipv4-exercise',
  imports: [
    CommonModule,
  ],
  templateUrl: './ipv4-exercise.html',
  styleUrl: './ipv4-exercise.scss'
})
export class Ipv4Exercise implements OnInit {
  ipv4!: IPv4;

  constructor(private ipv4Service: Ipv4Service){
  }

  ngOnInit() {
    this.ipv4 = this.ipv4Service.ipv4_exercise;
  }

  newIPv4(){
    this.ipv4 = new IPv4(Math.floor(Math.random() * Math.pow(2, 32)), Math.floor(Math.random() * 26) + 4);
    this.ipv4Service.ipv4_exercise = this.ipv4;
  }
  
  setIPv4asCommon(){
    this.ipv4Service.set_ip_int(this.ipv4.get_IP_int());
    this.ipv4Service.set_cidr(this.ipv4.get_CIDR_int());
  }

  get ip_dec() {
    return this.ipv4.get_IP_decimal().join('.');
  }
  get cidr_int(){
    return this.ipv4.get_CIDR_int()
  }
}
