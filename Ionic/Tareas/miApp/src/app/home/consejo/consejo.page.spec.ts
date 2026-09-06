import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsejoPage } from './consejo.page';

describe('ConsejoPage', () => {
  let component: ConsejoPage;
  let fixture: ComponentFixture<ConsejoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
