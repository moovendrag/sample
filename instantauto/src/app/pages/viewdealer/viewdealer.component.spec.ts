import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdealerComponent } from './viewdealer.component';

describe('ViewdealerComponent', () => {
  let component: ViewdealerComponent;
  let fixture: ComponentFixture<ViewdealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewdealerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
