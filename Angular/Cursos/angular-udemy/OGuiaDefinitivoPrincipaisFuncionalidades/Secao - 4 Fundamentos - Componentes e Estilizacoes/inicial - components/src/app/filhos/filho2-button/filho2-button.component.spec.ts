import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filho2ButtonComponent } from './filho2-button.component';

describe('Filho2ButtonComponent', () => {
  let component: Filho2ButtonComponent;
  let fixture: ComponentFixture<Filho2ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Filho2ButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Filho2ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
