import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filho3ButtonCancelComponent } from './filho3-button-cancel.component';

describe('Filho3ButtonCancelComponent', () => {
  let component: Filho3ButtonCancelComponent;
  let fixture: ComponentFixture<Filho3ButtonCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Filho3ButtonCancelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Filho3ButtonCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
