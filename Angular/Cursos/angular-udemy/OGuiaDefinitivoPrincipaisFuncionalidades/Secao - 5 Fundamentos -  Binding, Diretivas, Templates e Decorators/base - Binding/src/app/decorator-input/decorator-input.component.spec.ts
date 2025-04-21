import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorInputComponent } from './decorator-input.component';

describe('DecoratorInputComponent', () => {
  let component: DecoratorInputComponent;
  let fixture: ComponentFixture<DecoratorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecoratorInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoratorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
