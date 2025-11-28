import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semilleros } from './semilleros';

describe('Semilleros', () => {
  let component: Semilleros;
  let fixture: ComponentFixture<Semilleros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Semilleros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semilleros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
