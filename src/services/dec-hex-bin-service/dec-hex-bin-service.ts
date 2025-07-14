import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecHexBinService {

  private types = ["Dec", "Hex", "Bin"];
  private possibleIds = [5, 7, 11, 15, 19, 21].map(a => a.toString(3).padStart(3, '0'));
  private ids: number[] | null = null;
  private number: number | null = null;

  private time: number = 0;
  private timer: Date | null = null;
  private doUpdate = false;

  constructor() { }

  createNew() {
    this.generateTypes();
    this.generateNumber();

    this.timer = new Date();
  }

  private generateTypes() {
    const full_ids = this.possibleIds[Math.floor(Math.random() * this.possibleIds.length)].split('');
    this.ids = [Number(full_ids[0]), Number(full_ids[1])];
  }
  private generateNumber() {
    this.number = Math.floor(Math.random() * Math.pow(2, 8));
  }

  get_types() {
    if (this.ids === null || this.number === null)
      this.createNew();

    const [in_, out_] = this.ids!;
    return { in: this.types[in_], out: this.types[out_] };
  }
  get_number() {
    if (this.ids === null || this.number === null)
      this.createNew();

    const [in_, out_] = this.ids!;
    return {
      in: this.typeChange[in_](this.number!),
      out: this.typeChange[out_](this.number!),
    };
  }
  get_time() {
    return this.time;
  }

  toggleUpdate() {
    this.doUpdate = !this.doUpdate;
    if (this.doUpdate)
      this.timeUpdate()
  }

  private typeChange = [
    (int: number) => { return this.intToDecimal(int); },
    (int: number) => { return this.intToHexdecimal(int); },
    (int: number) => { return this.intToBinary(int); },
  ]
  private intToDecimal(int: number) {
    return int.toString();
  }
  private intToHexdecimal(int: number) {
    return int.toString(16).padStart(2, '0').toUpperCase();
  }
  private intToBinary(int: number) {
    return int.toString(2).padStart(8, '0');
  }

  private set_time() {
    if (this.timer === null)
      this.createNew();
    const currentTimer = new Date();

    this.time = this.timer!.getTime() - currentTimer.getTime();
  }

  private timeUpdate() {
    const that = this;
    function test() {
      if (that.doUpdate) {
        that.set_time();
        requestAnimationFrame(test)
      }

    }
  }
}