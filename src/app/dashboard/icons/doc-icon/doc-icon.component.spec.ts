import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocIconComponent } from './doc-icon.component';

describe('DocIconComponent', () => {
  let component: DocIconComponent;
  let fixture: ComponentFixture<DocIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
