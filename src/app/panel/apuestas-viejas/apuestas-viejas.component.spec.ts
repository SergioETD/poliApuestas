import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuestasViejasComponent } from './apuestas-viejas.component';

describe('ApuestasViejasComponent', () => {
  let component: ApuestasViejasComponent;
  let fixture: ComponentFixture<ApuestasViejasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApuestasViejasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApuestasViejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
