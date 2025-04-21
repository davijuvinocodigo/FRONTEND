import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filho1ButtonComponent } from './filho1-button.component';

describe('Filho1ButtonComponent', () => {
  let component: Filho1ButtonComponent;
  let fixture: ComponentFixture<Filho1ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Filho1ButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Filho1ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
