import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsesoresComponent } from './list-asesores.component';

describe('ListAsesoresComponent', () => {
  let component: ListAsesoresComponent;
  let fixture: ComponentFixture<ListAsesoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAsesoresComponent]
    });
    fixture = TestBed.createComponent(ListAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
