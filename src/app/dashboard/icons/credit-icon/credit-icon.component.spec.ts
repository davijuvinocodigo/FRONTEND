import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditIconComponent } from './credit-icon.component';

describe('CreditIconComponent', () => {
  let component: CreditIconComponent;
  let fixture: ComponentFixture<CreditIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
