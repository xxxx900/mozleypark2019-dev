import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MozleyHeaderComponent } from './mozley-header.component';

describe('MozleyHeaderComponent', () => {
  let component: MozleyHeaderComponent;
  let fixture: ComponentFixture<MozleyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MozleyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MozleyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
