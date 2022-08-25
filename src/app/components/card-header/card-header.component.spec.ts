import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderComponent } from './card-header.component';

describe('CardHeaderComponent', () => {
  let component: CardHeaderComponent;
  let fixture: ComponentFixture<CardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should exists component mat-card-header`, () => {
    const fixture = TestBed.createComponent(CardHeaderComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-header')).not.toBe(null);
  });
});
