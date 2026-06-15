import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonIcon } from '@ionic/angular/standalone';
import { HomePage, Tab1Page } from './home.page';

describe('Tab1Page', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
