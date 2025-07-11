import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecHexBinService {

  private types = ["Dec", "Hex", "Bin"];
  private possibleIds = [5, 7, 11, 15, 19, 21].map(a => a.toString(3).padStart(3, '0'));
  private ids: number[] = [];

  constructor(){
    this.generateTypes();
  }

  generateTypes() {
    const full_ids = this.possibleIds[Math.floor(Math.random() * this.possibleIds.length)].split('');
    this.ids = [Number(full_ids[0]), Number(full_ids[1])];
  }
  generateNumber(){
    return Math.floor(Math.random()*Math.pow(2,8));
  }

  get_types(){
    const [in_, out_] = this.ids;
    return { in: this.types[in_], out: this.types[out_] };
  }
}