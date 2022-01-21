import { Injectable } from '@angular/core';
import { CorporateLeaders } from '../Shared/CorporateLeaders';
import { CorporateLeader } from '../Models/CorporateLeader';
@Injectable({
  providedIn: 'root'
})
export class CorporateLeaderService {
  CorporateLeaderslist:CorporateLeader[]=CorporateLeaders;
  constructor() { }

getCorporateLeaders():CorporateLeader[]
{
  return this.CorporateLeaderslist;
}
getFeaturedCorporateLeader():CorporateLeader
{
  return this.CorporateLeaderslist.filter(g=>g.featured)[0];
}


}
