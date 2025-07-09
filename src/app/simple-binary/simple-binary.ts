import { Component } from '@angular/core';
import { Ipv4Service } from '../../services/ipv4/ipv4';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-binary',
  imports: [CommonModule],
  templateUrl: './simple-binary.html',
  styleUrl: './simple-binary.scss'
})
export class SimpleBinary {

  constructor(private ipv4Service: Ipv4Service){}

  get ip_bin_splited(){return this.ipv4Service.ipv4.get_IP_binary_splited()}
  get mask_bin_splited(){return this.ipv4Service.ipv4.get_CIDR_binary_splited()}
  get network_bin_splited(){return this.ipv4Service.ipv4.get_Network_binary_splited()}
  get broadcast_bin_splited(){return this.ipv4Service.ipv4.get_Broadcast_binary_splited()}
  get firstaddress_bin_splited(){return this.ipv4Service.ipv4.get_FirstAddress_binary_splited()}
  get lastaddress_bin_splited(){return this.ipv4Service.ipv4.get_LastAddress_binary_splited()}

  get colspan(){
    return {needExtension:this.ipv4Service.ipv4.get_CIDR_int() % 4 !== 0,cell:Math.floor(this.ipv4Service.ipv4.get_CIDR_int() / 8)}
  }

  get ip_dec(){return this.ipv4Service.ipv4.get_IP_decimal()}
  get mask_dec(){return this.ipv4Service.ipv4.get_CIDR_decimal()}
  get network_dec(){return this.ipv4Service.ipv4.get_Network_decimal()}
  get broadcast_dec(){return this.ipv4Service.ipv4.get_Broadcast_decimal()}
  get firstAddress_dec(){return this.ipv4Service.ipv4.get_FirstAddress_decimal()}
  get lastAddress_dec(){return this.ipv4Service.ipv4.get_LastAddress_decimal()}

  get ip_hex(){return this.ipv4Service.ipv4.get_IP_hexadecimal()}
  get mask_hex(){return this.ipv4Service.ipv4.get_CIDR_hexadecimal()}
  get network_hex(){return this.ipv4Service.ipv4.get_Network_hexadecimal()}
  get broadcast_hex(){return this.ipv4Service.ipv4.get_Broadcast_hexadecimal()}
  get firstAddress_hex(){return this.ipv4Service.ipv4.get_FirstAddress_hexadecimal()}
  get lastAddress_hex(){return this.ipv4Service.ipv4.get_LastAddress_hexadecimal()}
}
