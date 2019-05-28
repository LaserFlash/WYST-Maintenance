import { Component, OnInit } from '@angular/core';

import { UsageInfo } from '../../../core/objects/usageInfo';
import { KnownBoatsService } from '../../../core/constants/known-boats/known-boats.service';


@Component({
  selector: 'app-view-usage',
  templateUrl: './view-usage.component.html',
  styleUrls: ['./view-usage.component.css']
})
export class ViewUsageComponent implements OnInit {

  boats;

  constructor(
    private BOATS: KnownBoatsService
  ) { }

  ngOnInit() {
    this.BOATS.boatInformation.subscribe(boats => {
      this.boats = boats;
    });
  }

}
