import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarCategoriaComponent } from './alterar-categoria.component';

describe('AlterarCategoriaComponent', () => {
  let component: AlterarCategoriaComponent;
  let fixture: ComponentFixture<AlterarCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
