import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomMateComponent } from './room-mate.component';

describe('RoomMateComponent', () => {
  let component: RoomMateComponent;
  let fixture: ComponentFixture<RoomMateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomMateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomMateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
