import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IPv4 } from '../features/IPv4.class';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  ip_oktet_1 = '';

  private ipv4 = new IPv4(3232238092, 24);

  get octet_1() { return this.ipv4.get_IP_decimal()[0] }
  get octet_2() { return this.ipv4.get_IP_decimal()[1] }
  get octet_3() { return this.ipv4.get_IP_decimal()[2] }
  get octet_4() { return this.ipv4.get_IP_decimal()[3] }

  set octet_1(val: number) {
      this.ipv4.set_Ip_with_decimal(
        `${Math.max(0,Math.min(255,val))}.${this.octet_2}.${this.octet_3}.${this.octet_4}`
      );

  }
  set octet_2(val) { this.ipv4.set_Ip_with_decimal(`${this.octet_1}.${val}.${this.octet_3}.${this.octet_4}`); }
  set octet_3(val) { this.ipv4.set_Ip_with_decimal(`${this.octet_1}.${this.octet_2}.${val}.${this.octet_4}`); }
  set octet_4(val) { this.ipv4.set_Ip_with_decimal(`${this.octet_1}.${this.octet_2}.${this.octet_3}.${val}`); }

  update_IP() {
    console.log(this.octet_1)
  }

  get ip_decimal() {
    return this.ipv4.get_IP_decimal();
  }

  get cidr_int() {
    return this.ipv4.get_CIDR_int();
  }
}
