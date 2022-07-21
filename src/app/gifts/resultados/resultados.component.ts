import { Component } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {
  
  get resultados(){
    return this.giftsService.resultados;
  }

  constructor(private giftsService: GiftsService) { }

  
}
