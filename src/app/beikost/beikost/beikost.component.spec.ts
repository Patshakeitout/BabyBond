import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeikostComponent } from './beikost.component';

describe('BeikostComponent', () => {
  let component: BeikostComponent;
  let fixture: ComponentFixture<BeikostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeikostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeikostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
