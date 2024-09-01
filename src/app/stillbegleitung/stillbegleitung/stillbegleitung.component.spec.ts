import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StillbegleitungComponent } from './stillbegleitung.component';

describe('StillbegleitungComponent', () => {
  let component: StillbegleitungComponent;
  let fixture: ComponentFixture<StillbegleitungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StillbegleitungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StillbegleitungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
