import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MozleyFooterComponent } from './mozley-footer.component';

describe('MozleyFooterComponent', () => {
  let component: MozleyFooterComponent;
  let fixture: ComponentFixture<MozleyFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MozleyFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MozleyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
