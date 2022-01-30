import { Injectable,Inject } from '@angular/core';
import { CorporateLeaders } from '../Shared/CorporateLeaders';
import { CorporateLeader } from '../Models/CorporateLeader';
import {Observable, of} from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class CorporateLeaderService {
  CorporateLeaderslist: CorporateLeader[] = CorporateLeaders;
  constructor(@Inject('BaseURL') private baseURL: string,private http:HttpClient,private processHTTPMsgService:ProcessHTTPMsgService) { }
  getCorporateLeaders(): Observable<CorporateLeader[]> {
    return this.http.get<CorporateLeader[]>(this.baseURL+'leadership').pipe(catchError(this.processHTTPMsgService.handleError));;
  }
  getFeaturedCorporateLeader(): Observable<CorporateLeader> {
    return  this.http.get<CorporateLeader[]>(this.baseURL+'leadership?featured=true').pipe(map(resp=>resp[0])).pipe(catchError(this.processHTTPMsgService.handleError));;
  }


}
