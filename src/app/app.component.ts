import { Component, OnInit } from '@angular/core';
import { Character } from './models/character';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  characterData!: Character[];

  constructor(private service: CharacterService) {}

  /**
   * Metodo del ciclo de vida de Angular, encargado de realizar la suscripción al servicio
   */
  ngOnInit(): void {
    this.service.getCharacters().subscribe(characters => {
      this.characterData = characters
    })
  }
}
