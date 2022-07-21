import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  
  constructor( private giftsService: GiftsService){
        
  }

  buscar(){
   
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){ return ;}

    this.giftsService.buscarGifts( valor )

    this.txtBuscar.nativeElement.value = '';

  }
}
