import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalinkComponentComponent } from './datalink-component.component';

describe('DatalinkComponentComponent', () => {
  let component: DatalinkComponentComponent;
  let fixture: ComponentFixture<DatalinkComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatalinkComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalinkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
