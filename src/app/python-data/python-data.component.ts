import { Component, OnInit } from '@angular/core';

import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-python-data',
  templateUrl: './python-data.component.html',
  styleUrls: ['./python-data.component.css']
})

export class PythonDataComponent implements OnInit {

  pData: any;

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.dataServiceService.getData().subscribe((curData) => {
      if (curData) {
        this.pData = curData;
        console.log(this.pData);
      }
    });
  }

}
