import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gift, SearchGiftsResponse } from '../interfaces/gifts.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  private apiKey: string = 'mzq5EH8zMZsmSuyDIdGkKHgD8ixWKb77'
  private _historial: string[] = [];
 //cambiar any por su tipo correspondiente
  public resultados: Gift[] = [];

  get historial(){
    // this._historial = this._historial.splice(0,10)
    return [...this._historial]
  }

  constructor(private http: HttpClient){}

  buscarGifts( query: string){
    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift( query )
      this._historial = this._historial.splice(0,10)
    }
    console.log(this._historial)
    this.http.get<SearchGiftsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=mzq5EH8zMZsmSuyDIdGkKHgD8ixWKb77&q=${query}&limit=5`)
    .subscribe((respuesta) => {
      console.log(respuesta.data)
      this.resultados = respuesta.data;
      
    })
  }
}
