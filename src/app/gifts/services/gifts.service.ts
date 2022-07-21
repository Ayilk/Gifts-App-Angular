import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  private apiKey: string = 'mzq5EH8zMZsmSuyDIdGkKHgD8ixWKb77'
  private _historial: string[] = [];

  get historial(){
    // this._historial = this._historial.splice(0,10)
    return [...this._historial]
  }

  buscarGifts( query: string){
    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift( query )

      this._historial = this._historial.splice(0,10)
    }
    console.log(this._historial)
    
  }
}
