import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPrivacyPolicyComponent } from './data-privacy-policy.component';

describe('DataPrivacyPolicyComponent', () => {
  let component: DataPrivacyPolicyComponent;
  let fixture: ComponentFixture<DataPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataPrivacyPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
