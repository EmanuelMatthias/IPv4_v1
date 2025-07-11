import { Component } from '@angular/core';
import { DecHexBinService } from '../../../services/dec-hex-bin-service/dec-hex-bin-service';

@Component({
  selector: 'app-dec-hex-bin-exercise',
  imports: [],
  templateUrl: './dec-hex-bin-exercise.html',
  styleUrl: './dec-hex-bin-exercise.scss'
})
export class DecHexBinExercise {

    constructor(private decHexBinService: DecHexBinService){
      this.decHexBinService.generateTypes();
      this.decHexBinService.generateNumber();
    }

    get types(){
      return this.decHexBinService.get_types();
    }
}
