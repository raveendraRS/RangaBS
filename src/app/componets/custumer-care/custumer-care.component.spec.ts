import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumerCareComponent } from './custumer-care.component';

describe('CustumerCareComponent', () => {
  let component: CustumerCareComponent;
  let fixture: ComponentFixture<CustumerCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumerCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustumerCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
