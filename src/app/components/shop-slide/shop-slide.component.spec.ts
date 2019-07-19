import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSlideComponent } from './shop-slide.component';

describe('ShopSlideComponent', () => {
  let component: ShopSlideComponent;
  let fixture: ComponentFixture<ShopSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
