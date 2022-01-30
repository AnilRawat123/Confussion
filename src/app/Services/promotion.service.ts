import { Injectable,Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { Promotion } from '../Models/Promotion';
import { Promotions } from '../Shared/promotions';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient, @Inject('BaseURL') private baseURL: string,private processHTTPMsgService:ProcessHTTPMsgService) { }

  getpromotions():Observable<Promotion[]>{
    return this.http.get<Promotion[]>(this.baseURL+'Promotions').pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getpromotion(id:string):Observable<Promotion>{
    return this.http.get<Promotion>(this.baseURL+'Promotions/'+id).pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedpromotion():Observable<Promotion>{
    return  this.http.get<Promotion[]>(this.baseURL+'Promotions?featured=true').pipe(map(Promotions=>Promotions[0])).pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
