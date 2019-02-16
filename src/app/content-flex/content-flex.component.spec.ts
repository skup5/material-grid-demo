import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFlexComponent } from './content-flex.component';

describe('ContentFlexComponent', () => {
  let component: ContentFlexComponent;
  let fixture: ComponentFixture<ContentFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
