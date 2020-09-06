import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mission-tile',
  templateUrl: './mission-tile.component.html',
  styleUrls: ['./mission-tile.component.css']
})
export class MissionTileComponent implements OnInit {

  @Input() payload;
  mission_name = 'Falcon';
  mission_id = [];
  launch_year = 2009;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.payload)
    if (!this.payload.links.mission_patch_small) {
      this.payload.links.mission_patch_small = '../../../assets/img-not-found.png';
    }
  }

}
