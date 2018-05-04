import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBlueComponent } from './box-blue.component';

describe('BoxBlueComponent', () => {
  let component: BoxBlueComponent;
  let fixture: ComponentFixture<BoxBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
