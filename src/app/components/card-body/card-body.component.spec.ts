import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBodyComponent } from './card-body.component';

describe('CardBodyComponent', () => {
  let component: CardBodyComponent;
  let fixture: ComponentFixture<CardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should exists component mat-card-content`, () => {
    const fixture = TestBed.createComponent(CardBodyComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-content')).not.toBe(null);
  });

});
