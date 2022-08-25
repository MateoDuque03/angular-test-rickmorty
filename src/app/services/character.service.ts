import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  readonly URL_API = environment.URL_API;
  constructor(private http: HttpClient) { }

  /**
   * Función encargada de retornar el listado de personajes de manera Asincronica
   * @returns Retorna lista de personajes
   */
  getCharacters(): Observable<Character[]> {
    return this.http.get<any>(this.URL_API).pipe(map(data => {
      return this.mapDataToCharacters(data.results)
    }))
  }

  /**
   * Función encargada de transformar el listado de personajes
   * @param data Lista de personajes
   * @returns Retorna lista de personajes unicamente con las propiedades necesarias
   */
  private mapDataToCharacters(data: any[]): Character[] {
    return data.map(character => {
      const { name, image, species, status } = character
      return { name, image, species, status }
    })
  }
}
