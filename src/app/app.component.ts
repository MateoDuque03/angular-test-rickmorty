import { Component, OnInit } from '@angular/core';
import { Character } from './models/character';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-test-bank';
  characterData!: Character[];

  constructor(private service: CharacterService) {

  }

  ngOnInit(): void {
    this.service.getCharacters().subscribe(characters => {
      this.characterData = characters
      console.log(this.characterData)
    })
  }
}
