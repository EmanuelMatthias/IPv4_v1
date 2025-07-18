import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ipv4Service } from '../../../services/ipv4/ipv4';

@Component({
  selector: 'app-simple-binary',
  imports: [CommonModule],
  templateUrl: './simple-binary.html',
  styleUrl: './simple-binary.scss'
})
export class SimpleBinary {

  constructor(private ipv4Service: Ipv4Service) { }

  get ip_bin_splited() { return this.ipv4Service.ipv4.get_IP_binary_splited() }
  get mask_bin_splited() { return this.ipv4Service.ipv4.get_CIDR_binary_splited() }
  get network_bin_splited() { return this.ipv4Service.ipv4.get_Network_binary_splited() }
  get broadcast_bin_splited() { return this.ipv4Service.ipv4.get_Broadcast_binary_splited() }
  get firstaddress_bin_splited() { return this.ipv4Service.ipv4.get_FirstAddress_binary_splited() }
  get lastaddress_bin_splited() { return this.ipv4Service.ipv4.get_LastAddress_binary_splited() }

  get colspan() {
    return { needExtension: this.ipv4Service.ipv4.get_CIDR_int() % 4 !== 0, cell: Math.floor(this.ipv4Service.ipv4.get_CIDR_int() / 8) }
  }

  get ip_dec() { return this.ipv4Service.ipv4.get_IP_decimal() }
  get mask_dec() { return this.ipv4Service.ipv4.get_CIDR_decimal() }
  get network_dec() { return this.ipv4Service.ipv4.get_Network_decimal() }
  get broadcast_dec() { return this.ipv4Service.ipv4.get_Broadcast_decimal() }
  get firstAddress_dec() { return this.ipv4Service.ipv4.get_FirstAddress_decimal() }
  get lastAddress_dec() { return this.ipv4Service.ipv4.get_LastAddress_decimal() }

  get ip_hex() { return this.ipv4Service.ipv4.get_IP_hexadecimal() }
  get mask_hex() { return this.ipv4Service.ipv4.get_CIDR_hexadecimal() }
  get network_hex() { return this.ipv4Service.ipv4.get_Network_hexadecimal() }
  get broadcast_hex() { return this.ipv4Service.ipv4.get_Broadcast_hexadecimal() }
  get firstAddress_hex() { return this.ipv4Service.ipv4.get_FirstAddress_hexadecimal() }
  get lastAddress_hex() { return this.ipv4Service.ipv4.get_LastAddress_hexadecimal() }

  hoverHandler(type: string, pos: string, id: number, specPos: string | null = null) {
    // console.log(type, pos, id, specPos)

    const preList = document.querySelector('.simpleBinaryTable')?.querySelectorAll('pre');
    let index = id;
    let binIndex_a = { specPos: 'none', id: -1 };
    let binIndex_b = { specPos: 'none', id: -1 };
    let binIndex_c = { specPos: 'none', id: -1 };
    if (!preList || preList.length === 0)
      return;
    preList.forEach(element => {
      element.classList.remove('marked');
    });
    if (type === 'bin' && specPos === 'lan') {
      index = Math.floor(id / 2);
    }
    if (type === 'bin' && specPos === 'host') {
      const a = this.ipv4Service.ipv4.get_CIDR_int();
      const e = (a % 8 >= 4) ? 1 : 0;
      index = Math.floor((id + 2 * Math.floor(a / 8) + e) / 2);
    }

    const a = this.ipv4Service.ipv4.get_CIDR_int();
    if (a % 8 === 0) {
      if ((index + 1) * 8 <= a) {
        binIndex_a = { specPos: 'lan', id: index * 2 }
        binIndex_b = { specPos: 'lan', id: index * 2 + 1 }
      } else {
        binIndex_a = { specPos: 'host', id: (index - a / 8) * 2 }
        binIndex_b = { specPos: 'host', id: (index - a / 8) * 2 + 1 }
      }
    } else if (a % 4 === 0) {
      console.log(index, a)
      if ((index + 1) * 8 < a) {
        binIndex_a = { specPos: 'lan', id: index * 2 }
        binIndex_b = { specPos: 'lan', id: index * 2 + 1 }
      } else if ((index) * 8 + 4 <= a) {
        binIndex_a = { specPos: 'lan', id: index * 2 }
        binIndex_b = { specPos: 'host', id: 0 }
      } else {
        binIndex_a = { specPos: 'host', id: (index - a / 8) * 2 }
        binIndex_b = { specPos: 'host', id: (index - a / 8) * 2 + 1 }
      }
    } else {
      if ((index + 1) * 8 < a) {
        binIndex_a = { specPos: 'lan', id: index * 2 }
        binIndex_b = { specPos: 'lan', id: index * 2 + 1 }
      } else if ((index) * 8 < a && a < (index) * 8 + 4) {
        binIndex_a = { specPos: 'lan', id: index * 2 }
        binIndex_b = { specPos: 'host', id: 0 }
        binIndex_c = { specPos: 'host', id: 1 }
      } else if ((index) * 8 + 4 < a && a < (index + 1) * 8) {
        binIndex_a = { specPos: 'lan', id: index * 2 }
        binIndex_b = { specPos: 'lan', id: index * 2 + 1 }
        binIndex_c = { specPos: 'host', id: 0 }
      }else{
        binIndex_a = { specPos: 'host', id: (index - Math.round(a / 8)) * 2 +1}
        binIndex_b = { specPos: 'host', id: (index - Math.round(a / 8)) * 2 + 2 }
      }
    }

    const pack = document.querySelector('.simpleBinaryTable')?.querySelectorAll(
      `
      [type="bin"][pos="${pos}"][specPos="${binIndex_a.specPos}"][data-index="${binIndex_a.id}"],
      [type="bin"][pos="${pos}"][specPos="${binIndex_b.specPos}"][data-index="${binIndex_b.id}"],
      [type="bin"][pos="${pos}"][specPos="${binIndex_c.specPos}"][data-index="${binIndex_c.id}"],
      [type="dec"][pos="${pos}"][data-index="${index}"],
      [type="hex"][pos="${pos}"][data-index="${index}"]
      `
    );
    pack?.forEach(element => {
      element.classList.add('marked');
    });
  }
}
