import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrageberatungComponent } from './trageberatung.component';

describe('TrageberatungComponent', () => {
  let component: TrageberatungComponent;
  let fixture: ComponentFixture<TrageberatungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrageberatungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrageberatungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
