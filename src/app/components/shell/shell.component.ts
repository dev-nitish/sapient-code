import { Component, OnInit, ViewChild } from '@angular/core';
import { CardContainerComponent } from '../card-container/card-container.component';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  @ViewChild('forFilters') cardContainer: CardContainerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilters($event) {
    this.cardContainer.getUpdatedData($event);
  }

}
