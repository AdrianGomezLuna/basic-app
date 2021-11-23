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
  public charId: string = '';

  constructor(private rickmortyService: RickMortyService) {
    this.query = '';
  }

  ngOnInit() {}


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

  /**
   * Search by ID by subscribing to RickyandMorty service
   * @param event
   */
  searchById(event: any) {
    console.log(event);
    if(event.valid){
      this.rickmortyService.getCharactersById(event.value).subscribe(
          (data) => {
            console.log(data);
            this.charactersSearch = [data];
            this.messageNoResults = '';
          },
          (error) => {
            this.charactersSearch = [];
            this.messageNoResults = 'Consulta errónea. No se encontraron resultados.';
          }
        );
    }


  }

}
