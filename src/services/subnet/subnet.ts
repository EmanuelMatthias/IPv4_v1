import { Injectable } from '@angular/core';
import { Subnet } from '../../features/subnet.class';
import { Ipv4Service } from '../ipv4/ipv4';
import { IPv4 } from '../../features/IPv4.class';

@Injectable({
  providedIn: 'root'
})
export class SubnetService {


  private subnet: Subnet;
  private cidrList: any

  constructor(private ip4vService: Ipv4Service) {
    this.subnet = new Subnet(this.ip4vService.ipv4);
  }

  get_net() {
    this.subnet.get_possible_range_of_subnetting_cidrs();
    // return this.subnet.base
    return null
  }

  set cidr(val: any) {

  }
}
