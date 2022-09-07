import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatergoryItemsComponent } from './catergory-items.component';

describe('CatergoryItemsComponent', () => {
  let component: CatergoryItemsComponent;
  let fixture: ComponentFixture<CatergoryItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatergoryItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatergoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
