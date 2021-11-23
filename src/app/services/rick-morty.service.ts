import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  getCharactersByName(name: string): Observable<any> {
    return this.http.get(
      'https://rickandmortyapi.com/api/character/?name=' + name
    );
  }

  getCharactersById(id: string): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }
}
