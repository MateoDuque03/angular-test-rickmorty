import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { CharacterService } from './services/character.service';

describe('AppComponent', () => {
  let services: Partial<CharacterService>;
  services = {
    getCharacters() {
      const todos = [{name: '', image: '', species: '', status: ''}]
      return of(todos)
    }
  }
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{ provide: CharacterService, useValue: services}]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as characterData undefined`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.characterData).toBeUndefined()
  });

  it(`should call component app-card`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-card')).not.toBe(null);
  });

  it('should call component header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).not.toBe(null);
  });
});
