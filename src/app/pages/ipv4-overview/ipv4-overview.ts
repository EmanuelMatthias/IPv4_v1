import { Component } from '@angular/core';
import { InputIpv4 } from '../../input-ipv4/input-ipv4';
import { SimpleBinary } from '../../simple-binary/simple-binary';

@Component({
  selector: 'app-ipv4-overview',
  imports: [
      InputIpv4,
      SimpleBinary
    ],
  templateUrl: './ipv4-overview.html',
  styleUrl: './ipv4-overview.scss'
})
export class Ipv4Overview {

}
