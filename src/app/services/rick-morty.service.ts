import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  constructor(private http: HttpClient) {}

  /**
   * Returns list of all characters
   * @returns any[]
   */
  getCharacters(): Observable<any> {
    return this.http.get( environment.apiUrl );
  }

  /**
   * Returns a character searched by name
   * @param name
   * @returns any
   */
  getCharactersByName(name: string): Observable<any> {
    return this.http.get( environment.apiUrl + name );
  }

  /**
   * Returns a character searched by ID
   * @param id
   * @returns any
   */
  getCharactersById(id: string): Observable<any> {
    return this.http.get( environment.apiUrl + id );
  }
}
