import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocmpleteComponent } from './autocmplete.component';

describe('AutocmpleteComponent', () => {
  let component: AutocmpleteComponent;
  let fixture: ComponentFixture<AutocmpleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocmpleteComponent]
    });
    fixture = TestBed.createComponent(AutocmpleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
