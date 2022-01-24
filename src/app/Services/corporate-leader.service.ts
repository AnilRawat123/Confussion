import { Injectable } from '@angular/core';
import { CorporateLeaders } from '../Shared/CorporateLeaders';
import { CorporateLeader } from '../Models/CorporateLeader';
@Injectable({
  providedIn: 'root'
})
export class CorporateLeaderService 
{
  CorporateLeaderslist:CorporateLeader[]=CorporateLeaders;
  constructor() { }

getCorporateLeaders():Promise<CorporateLeader[]>
{
  return Promise.resolve(this.CorporateLeaderslist);
}
getFeaturedCorporateLeader():Promise<CorporateLeader>
{
  return  Promise.resolve(this.CorporateLeaderslist.filter(g=>g.featured)[0]);
}


}
