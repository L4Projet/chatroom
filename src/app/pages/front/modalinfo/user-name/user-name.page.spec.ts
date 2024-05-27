import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserNamePage } from './user-name.page';

describe('UserNamePage', () => {
  let component: UserNamePage;
  let fixture: ComponentFixture<UserNamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
