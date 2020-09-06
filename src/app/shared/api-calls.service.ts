import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Filter } from '../models/filter.model';

@Injectable()
export class ApiCallsService {

  testURL = 'https://api.spacexdata.com/v3/launches?limit=100';


  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.testURL);
  }

  updateCards(filter: Filter) {
    var launch_Success: string;
    var land_Success: string;
    var year: string;
    if (filter.sucessLaunch || (filter.sucessLaunch == true) || (filter.sucessLaunch == false)) {
      launch_Success = `&launch_success=${filter.sucessLaunch}`;
    } else {
      launch_Success = "";
    }
    if (filter.sucessLanding || (filter.sucessLanding == true) || (filter.sucessLanding == false)) {
      land_Success = `&land_success=${filter.sucessLanding}`;
    } else {
      land_Success = "";
    }
    if (filter.year) {
      year = `&launch_year=${filter.year}`;
    } else {
      year = "";
    }
    console.log(this.testURL + launch_Success + land_Success + year);
    return this.http.get(this.testURL + launch_Success + land_Success + year);
  }

}
