import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullhomeComponent } from './fullhome.component';

describe('FullhomeComponent', () => {
  let component: FullhomeComponent;
  let fixture: ComponentFixture<FullhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
