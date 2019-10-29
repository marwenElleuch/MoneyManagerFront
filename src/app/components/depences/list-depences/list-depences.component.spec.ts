import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepencesComponent } from './list-depences.component';

describe('ListDepencesComponent', () => {
  let component: ListDepencesComponent;
  let fixture: ComponentFixture<ListDepencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
