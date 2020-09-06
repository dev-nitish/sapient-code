import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../models/filter.model'
import { ApiCallsService } from 'src/app/shared/api-calls.service';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent implements OnInit {

  filter: Filter = new Filter(null, null, null);

  @Output() filterEvent = new EventEmitter<Filter>();

  constructor(private svc: ApiCallsService) {
  }


  ngOnInit(): void {
  }

  getYear(year: number) {
    if (!this.filter.year) {
      this.filter.year = year;
    }
    else {
      if (this.filter.year == year) {
        this.filter.year = null;
      }
      else {
        this.filter.year = year;
      }
    }
    // console.log(this.filter);
    this.triggerFilterEvent();
  }

  getSucessLaunch(val: boolean) {
    if (this.filter.sucessLaunch == null) {
      this.filter.sucessLaunch = val;
    }
    else {
      if (this.filter.sucessLaunch == val) {
        this.filter.sucessLaunch = null;
      }
      else {
        this.filter.sucessLaunch = val;
      }
    }
    // console.log(this.filter);
    this.triggerFilterEvent();
  }

  getSucessLanding(val: boolean) {
    if (this.filter.sucessLanding == null) {
      this.filter.sucessLanding = val;
    }
    else {
      if (this.filter.sucessLanding == val) {
        this.filter.sucessLanding = null;
      }
      else {
        this.filter.sucessLanding = val;
      }
    }
    // console.log(this.filter);
    this.triggerFilterEvent();
  }

  triggerFilterEvent() {
    this.filterEvent.emit(this.filter);
  }

}
