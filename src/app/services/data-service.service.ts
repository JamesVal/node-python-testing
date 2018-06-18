import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const testData : any = {"data":[{"pnt":0},{"pnt":55},{"pnt":30}]};

@Injectable()
export class DataServiceService {

  private pDataURL = 'api/pdata';

  getData(): Observable<any> {
    // Hard-coded test
    //return of(testData);
    return this.http.get<any>(this.pDataURL);
  }

  constructor(private http: HttpClient) { }

}
