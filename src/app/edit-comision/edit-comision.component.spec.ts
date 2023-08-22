import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComisionComponent } from './edit-comision.component';

describe('EditComisionComponent', () => {
  let component: EditComisionComponent;
  let fixture: ComponentFixture<EditComisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditComisionComponent]
    });
    fixture = TestBed.createComponent(EditComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
