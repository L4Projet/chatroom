import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangerpassPage } from './changerpass.page';

describe('ChangerpassPage', () => {
  let component: ChangerpassPage;
  let fixture: ComponentFixture<ChangerpassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
