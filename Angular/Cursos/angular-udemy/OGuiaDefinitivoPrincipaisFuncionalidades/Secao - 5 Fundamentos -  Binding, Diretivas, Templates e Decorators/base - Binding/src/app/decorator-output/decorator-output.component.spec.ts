import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorOutputComponent } from './decorator-output.component';

describe('DecoratorOutputComponent', () => {
  let component: DecoratorOutputComponent;
  let fixture: ComponentFixture<DecoratorOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecoratorOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoratorOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
