import { PokemonsService } from './../servicos/pokemons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.page.html',
  styleUrls: ['./lista-pokemons.page.scss'],
})
export class ListaPokemonsPage implements OnInit {
  public urlImg = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

  public listaPokemons = [
    { numero: 1, nome: 'Bulbasaur', tipos: ['Grass', 'Poison'], img: '001.png' },
    { numero: 4, nome: 'Charmander', tipos: ['Fire'], img: '004.png' },
    { numero: 7, nome: 'Squirtle', tipos: ['Water'], img: '007.png' },
    { numero: 25, nome: 'Pikachu', tipos: ['Electric'], img: '025.png' },
    { numero: 10, nome: 'Caterpie', tipos: ['Bug'], img: '010.png' },
    { numero: 39, nome: 'Jigglypuff', tipos: ['Normal', 'Fairy'], img: '039.png' },
    { numero: 66, nome: 'Machop', tipos: ['Fighting'], img: '066.png' },
    { numero: 92, nome: 'Gastly', tipos: ['Ghost', 'Poison'], img: '092.png' },
    { numero: 95, nome: 'Onix', tipos: ['Rock', 'Ground'], img: '095.png' },
    { numero: 122, nome: 'Mr. Mime', tipos: ['Psychic', 'Fairy'], img: '122.png' },
    { numero: 149, nome: 'Dragonite', tipos: ['Dragon', 'Fly'], img: '149.png' },

  ];
  public listaFiltrada = [];

  constructor(private pService: PokemonsService) {
    this.inicializador();
  }

  public inicializador() {
    this.listaFiltrada = this.listaPokemons;
  }

  public buscaPokemon(evento) {
    this.inicializador();
    const busca: string = evento.target.value;

    if (busca && busca.trim() !== '') {
      this.listaFiltrada = this.listaFiltrada.filter(item => {
        return item.nome.toLowerCase().includes(busca.trim().toLowerCase());
      });
    }
  }

  public verPokemon(numero: number) {
    let pokemon;
    pokemon = this.pService.buscaPorNumero(numero).subscribe((data) => {
      pokemon = data;
    });
    console.log(pokemon);
  }

  ngOnInit() {
  }

}
