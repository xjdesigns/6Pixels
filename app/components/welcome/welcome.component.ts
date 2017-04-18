import { Component, OnInit } from '@angular/core';
import { NoaaService } from '../../services/noaa-api.service';

@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  templateUrl: 'welcome.component.html',
  providers: [ NoaaService ]
})

export class WelcomeComponent implements OnInit {
  constructor(private noaa: NoaaService) {}

  ngOnInit() {
    // this.getData();
  }

  getData() {
    this.noaa
        .getData()
        .then(data => {
          console.warn('DATA', data);
        })
  }
}
