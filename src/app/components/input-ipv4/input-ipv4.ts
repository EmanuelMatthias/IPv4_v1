import { Component } from '@angular/core';
import { Ipv4Service } from '../../../services/ipv4/ipv4';

@Component({
  selector: 'app-input-ipv4',
  imports: [],
  templateUrl: './input-ipv4.html',
  styleUrl: './input-ipv4.scss'
})
export class InputIpv4 {

  ip: number[]
  cidr: number;

  constructor(private ipv4Service: Ipv4Service) {
    this.ip = this.ipv4Service.ipv4.get_IP_decimal();
    this.cidr = this.ipv4Service.ipv4.get_CIDR_int();
  }

  setOctet(index: number, event: Event) {
    const input = event.target as HTMLInputElement | null;
    const value = input ? input.value : 0;
    this.ipv4Service.set_octet(index, value);
    this.inputHandler(event);
  }
  setCIDR(event: Event) {
    const input = event.target as HTMLInputElement | null;
    const value = input ? input.value : 0;
    this.ipv4Service.set_cidr(value);
    this.inputHandler(event);
  }
  inputHandler(event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input && input.value.length >= input.maxLength) {
      const value = Number(input.value);
      const min = Number(input.min);
      const max = Number(input.max);
      if (value < min) input.value = input.min;
      if (value > max) input.value = input.max;
      
      let next = document.querySelector(`[tabindex="${input.tabIndex + 1}"]`) as HTMLInputElement;
      if (!next)
        next = document.querySelector(`[tabindex="1"]`) as HTMLInputElement;
      if (next) {
        next.focus();
        next.select?.();
      }
    }
  }
  focusHandler(event: Event) {
    const input = event.target as HTMLInputElement | null;
    input?.select();
  }
}
