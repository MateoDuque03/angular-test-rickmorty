import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageComponent } from './card-image.component';

describe('CardImageComponent', () => {
  let component: CardImageComponent;
  let fixture: ComponentFixture<CardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should exists div card-image`, () => {
    const fixture = TestBed.createComponent(CardImageComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-image')).not.toBe(null);
  });
});
