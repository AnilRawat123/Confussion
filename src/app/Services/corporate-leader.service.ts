import { Injectable } from '@angular/core';
import { CorporateLeaders } from '../Shared/CorporateLeaders';
import { CorporateLeader } from '../Models/CorporateLeader';

@Injectable({
  providedIn: 'root'
})
export class CorporateLeaderService {
  CorporateLeaderslist: CorporateLeader[] = CorporateLeaders;
  constructor() { }

  getCorporateLeaders(): Promise<CorporateLeader[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.CorporateLeaderslist)
      }, 2000);

    });
  }
  getFeaturedCorporateLeader(): Promise<CorporateLeader> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.CorporateLeaderslist.filter(g => g.featured)[0])
      }, 2000);

    });
  }


}
