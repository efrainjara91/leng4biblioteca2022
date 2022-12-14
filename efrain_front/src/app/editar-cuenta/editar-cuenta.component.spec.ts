import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCuentaComponent } from './editar-cuenta.component';

describe('EditarAutorComponent', () => {
  let component: EditarCuentaComponent;
  let fixture: ComponentFixture<EditarCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
