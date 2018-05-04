import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxRedComponent } from './box-red.component';

describe('BoxRedComponent', () => {
  let component: BoxRedComponent;
  let fixture: ComponentFixture<BoxRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
