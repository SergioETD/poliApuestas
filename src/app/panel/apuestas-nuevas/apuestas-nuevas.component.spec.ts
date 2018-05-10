import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuestasNuevasComponent } from './apuestas-nuevas.component';

describe('ApuestasNuevasComponent', () => {
  let component: ApuestasNuevasComponent;
  let fixture: ComponentFixture<ApuestasNuevasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApuestasNuevasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApuestasNuevasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
