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
  public showDec = true;
  public showHex = false;
  public showBin = false;

  constructor(private ipv4Service: Ipv4Service) { }

  ngOnInit() {
    this.ipv4 = this.ipv4Service.ipv4_exercise;
  }

  newIPv4() {
    this.ipv4 = new IPv4(Math.floor(Math.random() * Math.pow(2, 32)), Math.floor(Math.random() * 26) + 4);
    this.ipv4Service.ipv4_exercise = this.ipv4;
    this.ipv4Service.ipv4_exerciseCIDRModus = Math.floor(Math.random() * 2);

    const inputs = document.querySelector('.accordion')?.querySelectorAll('input');
    if (!inputs)
      return;
    inputs.forEach(element => {
      element.value = '';
      element.classList.remove('okay');
    });
  }

  setIPv4asCommon() {
    this.ipv4Service.set_ip_int(this.ipv4.get_IP_int());
    this.ipv4Service.set_cidr(this.ipv4.get_CIDR_int());
  }

  get ip_dec() {
    return this.ipv4.get_IP_decimal().join('.');
  }
  get cidr_int() {
    return this.ipv4.get_CIDR_int()
  }
  get cidr_modus() {
    return this.ipv4Service.ipv4_exerciseCIDRModus;
  }
  get mask() {
    return {
      dec: this.ipv4.get_CIDR_decimal(),
      hex: this.ipv4.get_CIDR_hexadecimal(),
      bin: this.ipv4.get_CIDR_binary(),
    }
  }
  get ip() {
    return {
      dec: this.ipv4.get_IP_decimal(),
      hex: this.ipv4.get_IP_hexadecimal(),
      bin: this.ipv4.get_IP_binary(),
    }
  }
  get network() {
    return {
      dec: this.ipv4.get_Network_decimal(),
      hex: this.ipv4.get_Network_hexadecimal(),
      bin: this.ipv4.get_Network_binary(),
    }
  }
  get firstAddress() {
    return {
      dec: this.ipv4.get_FirstAddress_decimal(),
      hex: this.ipv4.get_FirstAddress_hexadecimal(),
      bin: this.ipv4.get_FirstAddress_binary(),
    }
  }
  get lastAddress() {
    return {
      dec: this.ipv4.get_LastAddress_decimal(),
      hex: this.ipv4.get_LastAddress_hexadecimal(),
      bin: this.ipv4.get_LastAddress_binary(),
    }
  }
  get broadcast() {
    return {
      dec: this.ipv4.get_Broadcast_decimal(),
      hex: this.ipv4.get_Broadcast_hexadecimal(),
      bin: this.ipv4.get_Broadcast_binary(),
    }
  }

  toggleDec() { this.showDec = !this.showDec; }
  toggleHex() { this.showHex = !this.showHex; }
  toggleBin() { this.showBin = !this.showBin; }

  inputHandler(event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (!input)
      return;

    if (input.value.toLowerCase() === input.getAttribute('data-value')?.toLowerCase())
      input.classList.add('okay');
    else
      input.classList.remove('okay');

  }
}
