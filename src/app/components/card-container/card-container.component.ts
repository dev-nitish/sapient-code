import { Component, OnInit } from '@angular/core';

import { ApiCallsService } from '../../shared/api-calls.service';
import { Filter } from 'src/app/models/filter.model';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  data;

  constructor(private svc: ApiCallsService) { }

  ngOnInit(): void {
    this.svc.getData().subscribe(res => {
      this.data = res;
    });
  }

  getUpdatedData(filter: Filter) {
    // console.log(filter);
    this.svc.updateCards(filter).subscribe(res => {
      this.data = res;
    });

  }

}
