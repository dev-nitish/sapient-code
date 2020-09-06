import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionTileComponent } from './mission-tile.component';

describe('MissionTileComponent', () => {
  let component: MissionTileComponent;
  let fixture: ComponentFixture<MissionTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
