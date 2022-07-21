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

  constructor(private http: HttpClient){
     this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse( localStorage.getItem('historial')!)
    // }
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []
  }

  buscarGifts( query: string){
    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift( query )
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial))      
    }
    
    console.log(this._historial)
    this.http.get<SearchGiftsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
    .subscribe((respuesta) => {
      console.log(respuesta.data)
      this.resultados = respuesta.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados))
    })
  }
}
