import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JengaComponent } from './jenga.component';

describe('JengaComponent', () => {
  let component: JengaComponent;
  let fixture: ComponentFixture<JengaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JengaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JengaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
