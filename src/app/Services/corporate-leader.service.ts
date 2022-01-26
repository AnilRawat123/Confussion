import { Injectable } from '@angular/core';
import { CorporateLeaders } from '../Shared/CorporateLeaders';
import { CorporateLeader } from '../Models/CorporateLeader';
import {Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CorporateLeaderService {
  CorporateLeaderslist: CorporateLeader[] = CorporateLeaders;
  constructor() { }

  getCorporateLeaders(): Observable<CorporateLeader[]> {
    return of(this.CorporateLeaderslist).pipe(delay(200));
  }
  getFeaturedCorporateLeader(): Observable<CorporateLeader> {
    return of(this.CorporateLeaderslist.filter(g => g.featured)[0]).pipe(delay(2000));
  }


}
