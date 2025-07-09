import { Injectable } from '@angular/core';

import { IPv4 } from '../../features/IPv4.class';

@Injectable({
  providedIn: 'root'
})
export class Ipv4Service {

  ipv4 = new IPv4(3232238092, 24);

  set_octet(index: number, value: string | number) {
    const octets = [...this.ipv4.get_IP_decimal()];
    octets[index] = Math.max(0, Math.min(255, Number(value) || 0));
    this.ipv4.set_Ip_with_decimal(octets.join('.'))
  }

  set_cidr(value: number|string) {
    this.ipv4.set_CIDR_with_int(value)
  }
}
