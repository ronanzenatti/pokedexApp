import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  public pokemon;

  constructor(private httpClient: HttpClient) { }

  public buscaPorNumero(numero: number) {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/' + numero);
  }
}
