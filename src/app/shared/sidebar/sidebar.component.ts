import { Component } from '@angular/core';
import { GiftsService } from 'src/app/gifts/services/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent  {

 

  get historial(){
    return this.giftsService.historial;
  }

  constructor( private giftsService: GiftsService) { }
}
