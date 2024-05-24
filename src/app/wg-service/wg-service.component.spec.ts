import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgServiceComponent } from './wg-service.component';

describe('WgServiceComponent', () => {
  let component: WgServiceComponent;
  let fixture: ComponentFixture<WgServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WgServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WgServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
