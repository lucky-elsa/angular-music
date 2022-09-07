import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayBarComponent } from './play-bar.component';

describe('PlayBarComponent', () => {
  let component: PlayBarComponent;
  let fixture: ComponentFixture<PlayBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
