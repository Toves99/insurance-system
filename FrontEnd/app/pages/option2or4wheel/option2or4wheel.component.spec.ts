import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Option2or4wheelComponent } from './option2or4wheel.component';

describe('Option2or4wheelComponent', () => {
  let component: Option2or4wheelComponent;
  let fixture: ComponentFixture<Option2or4wheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Option2or4wheelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Option2or4wheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
