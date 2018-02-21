import {AutoCompleteService} from 'ionic2-auto-complete';
import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class ListedStocksService implements AutoCompleteService {
  labelAttribute = "name";

  constructor(private http:HttpClient) {

  }
  getResults(keyword:string) {
    return this.http.get("https://restcountries.eu/rest/v1/name/"+keyword)
      .map(
        result =>
        {
          return result;
          // return result.json()
          //   .filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()) )
        });
  }
}
