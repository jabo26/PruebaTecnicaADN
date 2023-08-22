import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNominaComponent } from './list-nomina.component';

describe('ListNominaComponent', () => {
  let component: ListNominaComponent;
  let fixture: ComponentFixture<ListNominaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListNominaComponent]
    });
    fixture = TestBed.createComponent(ListNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
