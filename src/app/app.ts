import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ipv4Service } from '../services/ipv4/ipv4';
import { InputIpv4 } from './input-ipv4/input-ipv4';
import { SimpleBinary } from './simple-binary/simple-binary';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    InputIpv4,
    SimpleBinary
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
