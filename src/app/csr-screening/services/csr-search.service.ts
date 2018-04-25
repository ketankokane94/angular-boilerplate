import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {SearchResult} from '../model/search-result'

@Injectable()
export class CsrSearchService {

  webApiUrl: string = 'locolhost';

  constructor(private http:HttpClient) { }

  search(){
      return this.http.get<SearchResult[]>(this.webApiUrl);
    }
  

}
