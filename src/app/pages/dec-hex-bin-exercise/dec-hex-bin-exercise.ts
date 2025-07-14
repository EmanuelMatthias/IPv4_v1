import { Component } from '@angular/core';
import { DecHexBinService } from '../../../services/dec-hex-bin-service/dec-hex-bin-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dec-hex-bin-exercise',
  imports: [CommonModule],
  templateUrl: './dec-hex-bin-exercise.html',
  styleUrl: './dec-hex-bin-exercise.scss'
})
export class DecHexBinExercise {

  private successClass: string = '';
  public showValue = false;

  constructor(private decHexBinService: DecHexBinService) { }

  get types() {
    return this.decHexBinService.get_types();
  }
  get number() {
    return this.decHexBinService.get_number();
  }

  get success_class() {
    return this.successClass;
  }

  newInstanz() {
    this.decHexBinService.createNew();
  }

  enterHandler(event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (!input)
      return;

    const val = input.value;
    if (val.toLowerCase() === this.number.out.toLowerCase()) {
      this.successClass = 'green';
      this.decHexBinService.createNew();
      input.value = '';
    }
    else {
      this.successClass = 'red';
    }

    setTimeout(() => {
      this.successClass = '';
    }, 500)
  }

  showMe() {
    this.showValue = true;

    setTimeout(() => {
      this.showValue = false;
    }, 2000)
  }
}
