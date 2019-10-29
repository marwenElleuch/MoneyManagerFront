import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutChargesComponent } from './ajout-charges.component';

describe('AjoutChargesComponent', () => {
  let component: AjoutChargesComponent;
  let fixture: ComponentFixture<AjoutChargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutChargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
