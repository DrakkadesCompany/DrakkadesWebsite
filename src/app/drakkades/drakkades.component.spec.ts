import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrakkadesComponent } from './drakkades.component';

describe('DrakkadesComponent', () => {
  let component: DrakkadesComponent;
  let fixture: ComponentFixture<DrakkadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrakkadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrakkadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
