import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should exists div container`, () => {
    const fixture = TestBed.createComponent(CardComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container')).not.toBe(null);
  });

  it(`should no exists div child-container`, () => {
    const fixture = TestBed.createComponent(CardComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled.querySelector('.container .child-container'))
    expect(compiled.querySelector('.container .child-container')).toBe(null);
  });
});
