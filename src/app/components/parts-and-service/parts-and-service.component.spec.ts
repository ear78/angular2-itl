import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsAndServiceComponent } from './parts-and-service.component';

describe('PartsAndServiceComponent', () => {
  let component: PartsAndServiceComponent;
  let fixture: ComponentFixture<PartsAndServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsAndServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsAndServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
