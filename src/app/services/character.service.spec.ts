import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Character } from '../models/character';

import { CharacterService } from './character.service';

describe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: CharacterService}]
    });
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call method getCharacters', () => {
    const dummyService: Character[] = [
      {name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', species: 'Human', status: 'alive'}, 
      {name: 'Morty Smith', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', species: 'Human', status: 'alive'}
    ];
    service.getCharacters().subscribe(data => {
      expect(data).not.toBe([]);
    })
  });
});
