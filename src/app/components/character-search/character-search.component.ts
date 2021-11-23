import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {

​public query: string;
public result: string = '';
@Input() labelButton: string = '';
// @Output() searchEvent = new EventEmitter();
// public characters;
public charactersSearch: any;
public charactersList: any;
public messageNoResults: string = '';
public charName: string = '';
public noName: string = '';

constructor(private rickmortyService: RickMortyService) {
  this.query = '';
}

ngOnInit() {}

// search() {
  //   this.result = 'Consulta realizada con query "' + this.query + '"';
  //   this.searchEvent.emit({ query: this.query, resultado: this.result });
  // }

  onSubmit(event: any) {
    console.log('formulario', event);
    if (event.valid) {
      this.rickmortyService.getCharactersByName(event.value.name).subscribe(
        (data) => {
          this.charactersSearch = data.results;
          this.messageNoResults = '';
        },
        (error) => {
          this.charactersSearch = [];
          this.messageNoResults =
            'Consulta errónea. No se encontraron resultados.';
        }
      );
    }
  }

  /**
   * Search by name by subscribing to RickyandMorty service
   * @param event
   */
  searchByName(event: any) {
    if (event.valid) {
        this.rickmortyService.getCharactersByName(event.model).subscribe(
          (data) => {
            this.charactersSearch = data.results;
            this.messageNoResults = '';
          },
          (error) => {
            this.charactersSearch = [];
            this.messageNoResults =
              'Consulta errónea. No se encontraron resultados.';
        });
    }
  }

  searchById(event: any) {
    console.log('formulario', event);
    if (event.valid) {
      this.rickmortyService.getCharactersById(event.value).subscribe(
        (data) => {
          this.charactersList = [data];
          this.messageNoResults = '';
        },
        (error) => {
          this.charactersSearch = [];
          this.messageNoResults =
            'Consulta errónea. No se encontraron resultados.';
        }
      );
    }
  }

}

