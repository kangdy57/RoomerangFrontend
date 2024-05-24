import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WohngemeinschaftComponent } from './wohngemeinschaft.component';

describe('WohngemeinschaftComponent', () => {
  let component: WohngemeinschaftComponent;
  let fixture: ComponentFixture<WohngemeinschaftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WohngemeinschaftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WohngemeinschaftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
