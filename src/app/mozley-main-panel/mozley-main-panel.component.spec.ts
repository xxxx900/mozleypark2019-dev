import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MozleyMainPanelComponent } from './mozley-main-panel.component';

describe('MozleyMainPanelComponent', () => {
  let component: MozleyMainPanelComponent;
  let fixture: ComponentFixture<MozleyMainPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MozleyMainPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MozleyMainPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
