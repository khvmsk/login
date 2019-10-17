import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceelementComponent } from './serviceelement.component';

describe('ServiceelementComponent', () => {
  let component: ServiceelementComponent;
  let fixture: ComponentFixture<ServiceelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
