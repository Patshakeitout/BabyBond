import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreastfeedingKnowledgeComponent } from './breastfeeding-knowledge.component';

describe('BreastfeedingKnowledgeComponent', () => {
  let component: BreastfeedingKnowledgeComponent;
  let fixture: ComponentFixture<BreastfeedingKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreastfeedingKnowledgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreastfeedingKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
